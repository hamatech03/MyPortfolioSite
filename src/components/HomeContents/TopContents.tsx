import styles from "./TopContents.module.css";
import NewsList from "../NewsList/NewsList";
import { useEffect } from "react";

import { Image } from "react-bootstrap";

import { IMAGES } from "../../const";

export default function TopContents() {
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
    <>
    <div className={styles.fadeHidden}>
      <Image src={IMAGES.TOPIMG} fluid
      className="d-block mx-auto mb-5 shadow-lg" style={{width:"800px", height:"auto"}} />
      <NewsList />
    </div>
    </>
)
}
