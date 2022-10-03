import Image from 'next/image';
import styles from '../styles/Image.module.css';

export default function OwnImage({ path, alt }) {
  return (
    <div className={styles.imageContainer}>
        <Image src={path} layout="fill" alt={alt} className={styles.image} />
    </div>
  )
}
