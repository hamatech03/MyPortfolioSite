import styles from "./SikakuCard.module.css";
import { useEffect } from "react";
import { Card } from "react-bootstrap";


export default function SikakuCard  ({ title }:{title: string} ) {
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
      { threshold: 0.2 }
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
      text="white">
        
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
    </div>
  );
};

