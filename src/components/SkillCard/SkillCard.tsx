import styles from "./SkillCard.module.css";

import { Card } from "react-bootstrap";
import { useEffect } from "react";

type SkillCardProps = {
  title: string;
  level: number;
  status: string;
};

const Stars = ({ level }: {level: number}) => {
  return (
    <div>
      {"★".repeat(level)}{"☆".repeat(5 - level)}
    </div>
  );
};

export default function SkillCard  ({ title, level, status }: SkillCardProps) {
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
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Subtitle className="mb-2 text-warning">
          <Stars level={level} />
        </Card.Subtitle>

        <Card.Text>{status}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};


