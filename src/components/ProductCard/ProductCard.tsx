import styles from "./ProductCard.module.css";
import { useEffect } from "react";

import { Card } from "react-bootstrap";

type ProductCardProps = {
  title: string;
  status: string;
  img: string;
  link01: string;
  link02: string;
};

export default function ProductCard({title, status, img, link01, link02 }:ProductCardProps) {
    useEffect(() => {
    const targets = document.querySelectorAll(`.${styles.fadeHidden}`);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeShow);
          }
        });
      },
      { threshold: 0.5 }
    );

    targets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  // useEffectここまで
  
  return (
    <div className={styles.fadeHidden}>
      <Card
      className="border border-2 shadow-lg"
      border="dark"
      bg="secondary"
      text="white"
      >

      <Card.Img variant="top" src={img} className={styles.cardImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{status}</Card.Text>

        <Card.Link href={link01} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white text-decoration-none">▶ アプリを開く</Card.Link>

        <Card.Link href={link02} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white text-decoration-none">github(code)</Card.Link>

      </Card.Body>

    </Card>
    </div>
  )
}
