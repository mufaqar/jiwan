import OwnImage from '../components/OwnImage'
import { useState } from "react";
import Team1 from '../public/images/team1.png';


export default function Team({ team }) {
    
    const [teamShow, setTeamShow] = useState(null);
    const handleTeam=(id)=>{
        if(teamShow === id){
            return setTeamShow(null)
        }
        setTeamShow(id)
    }
    return (
        <>
            <section className="px-4 py-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 md:grid-cols-3">
                        {
                            team.map((team, index) => (
                                <div key={index} className="relative group" onClick={()=>handleTeam(index)}>
                                    <figure className="relative w-full">
                                        <OwnImage path={team?.featuredImage?.node?.mediaItemUrl} alt={team.name}></OwnImage>
                                    </figure>
                                    <div className={`absolute inset-0 h-full p-5 text-white bg-black ${ teamShow === index ? 'block' : 'hidden' } `}>
                                        <h2 className="md:text-sm text-[10px]">{team?.team?.name}</h2>
                                        <p className="md:text-sm text-[10px]">{team.team?.designation}</p>
                                        <p className="md:text-sm mt-3 text-[10px]">{team.team?.content}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
