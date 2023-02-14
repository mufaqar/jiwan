import { gql } from "@apollo/client";
import CaseStudy from "../components/case-study";
import { client } from "../lib/client";

export default function Case_Studies({ casestudy }) {

  return (
    <main>
      <section className="min-h-screen px-4 py-10 md:px-0">
        <div className="container mx-auto mb-10 ">
          <h3 className="text-sm">CASE STUDY</h3>
        </div>
        <CaseStudy casestudy={casestudy}/>
      </section>
    </main>
  );
}

export async function getServerSideProps(context) {
  const GET_CASESTUDY = gql`
    query CaseStudies {
      caseStudies {
        nodes {
          title
          slug
          excerpt
          content
          seo {
            fullHead
            title
          }
          caseStudy {
            name
            stats {
              amountAndPersontage
              fieldGroupName
              info
            }
          }
        }
      }
    }
  `;
  const responce = await client.query({
    query: GET_CASESTUDY,
  });
  return {
    props: {
      casestudy: responce?.data?.caseStudies?.nodes,
    },
  };
}
