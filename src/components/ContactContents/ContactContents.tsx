import styles from "./ContactContents.module.css";
import { useEffect } from "react";

export default function ContactContents() {

const user = "hamatech03" as const;
const domain = "gmail.com" as const;
const email = `${user}@${domain}`;

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
            <h4 className="text-center">お問い合わせは以下の連絡先にお願い致します。</h4>
            <p className="text-center">{email}</p>
        </div>
    </>
  )
}
