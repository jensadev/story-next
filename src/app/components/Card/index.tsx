import Image from 'next/image';
import styles from './card.module.css';

// fix this https://smolcss.dev/#smol-card-component

interface CardProps {
  imgUrl?: string;
  imgTitle?: string;
  imgWidth?: number,
  imgHeight?: number,
  imgPos?: string,
  title: String;
  excerpt: String;
  likes: number;
  handleClick: () => void;
}

export const Card: React.FC<CardProps> = (
  { imgUrl,
    imgTitle,
    imgWidth,
    imgHeight,
    title,
    excerpt,
    likes,
    handleClick }) => {
  return (
    <div onClick={handleClick} className={styles.card}>
      <Image
        src={imgUrl}
        alt={imgTitle}
        width={imgWidth}
        height={imgHeight} />
      <h1>{title}</h1>
      <p>{excerpt}</p>
      <p>{likes}</p>
    </div>
  )
}

