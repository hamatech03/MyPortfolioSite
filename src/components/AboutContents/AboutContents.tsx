import styles from "./AboutContents.module.css";

import { useEffect } from "react";

import { IMAGES } from "../../const";



export default function AboutContents() {

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
      { threshold: 0.1, rootMargin:"0px 0px -80px 0px" }
    );

    targets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
  }, []);
  
  // useEffectここまで

  return (
    <>
    {/* profile */}

    <div className={`${styles.aboutRowLeft} ${styles.fadeHidden}`}>
        <div>
          <h5>濱﨑 一朗</h5>
1994年5月11日生まれ。広島県出身。現在（2026年時点）は京都在住。<br />
手に職をつけたくなり、2025年よりプログラミング学習を開始。<br />
PC業務の効率化・自動化への関心から、最初の言語としてPythonを選択。<br />
その後、Reactを中心としたフロントエンド技術の学習にも取り組む。<br />
現在はITの基礎知識を体系的に身につけるため、基本情報技術者試験の資格取得を目指して学習中。<br />
(画像は生成AI)<br />
<a href="https://github.com/hamatech03" target="_blank" rel="noopener noreferrer">
github</a>
        </div>
        <img src={IMAGES.ME} style={{ width: "300px", height: "auto"}} className="shadow-lg"/>
    </div>



  <div>
    <h3 className={`${styles.fadeHidden} text-center`} style={{marginTop:"100px",marginBottom:"100px"}}>趣味&好きなもの</h3>
  </div>




    <div className={`${styles.aboutRowRight} ${styles.fadeHidden}`}>
        <img src={IMAGES.OSAKE} style={{ width: "300px", height: "auto"}} className="shadow-lg"/>
        <div>
          <h5>お酒</h5>
          ハイボールが一番好きです。<br />
          ハイボールはバーボンウィスキーで割るのが一番好きです。<br />
          お気に入りはジムビームとメーカーズマーク。<br />
          (お酒のあては海鮮が好きです。)
        </div>
    </div>


        {/* 趣味2 */}

    <div className={`${styles.aboutRowLeft} ${styles.fadeHidden}`} style={{marginTop:"30px"}}>
        <div>
          <h5>居酒屋巡り</h5>
          月に1~2回ほど立ち飲み屋に行くのにハマってます。<br />
          友人や職場の人を誘ったり、一人飲みもよくします。<br />
          (画像はお気に入りエリアの折鶴会館付近)
        </div>
        <img src={IMAGES.MEGURI} style={{ width: "300px", height: "auto"}} className="shadow-lg"/>
    </div>

{/* 趣味3 */}
    <div className={`${styles.aboutRowRight} ${styles.fadeHidden}`} style={{marginTop:"30px"}}>
        <img src={IMAGES.MUSIC} style={{ width: "300px", height: "auto"}} className="shadow-lg"/>
        <div>
          <h5>音楽</h5>
          浅く広くいろんな音楽が好きですが、テクノ等の電子音楽を聴くことが多いです。<br />
          (好きなジャンル house, techno, drum and bass, dubstep, jungle, juke/footwork, etc...) <br />
          (画像は大阪某所であったクラブイベントの様子)
        </div>
    </div>
        
{/* 趣味4 */}

    <div className={`${styles.aboutRowLeft} ${styles.fadeHidden}`} style={{marginTop:"30px"}}>
        <div>
          <h5>DJ</h5>
大学生の頃に始めた趣味で、実は人生で一番長く続けている趣味です。<br />
クラブでも数は少ないですがプレイ経験あります。<br />
コロナ禍以降は表立った活動はしなくなったものの現在も趣味で続けています。<br />
(画像は大学生の頃に買った私の所持機材。今も現役)
        </div>
        <img src={IMAGES.DJ} style={{ width: "300px", height: "auto"}} className="shadow-lg"/>
    </div>

{/* 趣味5 */}
    <div className={`${styles.aboutRowRight} ${styles.fadeHidden}`} style={{marginTop:"30px"}}>
        <img src={IMAGES.DTM} style={{ width: "300px", height: "auto"}} className="shadow-lg"/>

        <div>
          <h5>作曲(DTM)</h5>
創作意欲が沸いた時にたまにする程度なので趣味といえるかは少し微妙かも...<br />
作曲は難しいですが、完成が見えてくると楽しくなってきます。<br />
(画像は使用しているDAWソフト)<br />
<br />
制作した楽曲やDJmixはこちら⇒

<a href="https://soundcloud.com/c10lwmu39zjn" target="_blank" rel="noopener noreferrer">
soundcloud</a>

        </div>
    </div>

{/* 趣味6 */}

    <div className={`${styles.aboutRowLeft} ${styles.fadeHidden}`} style={{marginTop:"30px"}}>
      <div>
          <h5>アニメ鑑賞&映画鑑賞 </h5>
アニメはコメディタッチの作品を中心に見ることが多いです。<br />
映画は洋画を観ることが多く、人の少ないレイトショーで観るのが好きです。<br />
(画像は友人と高槻市で飲んだ帰りに撮ったマンホール)
      </div>
        <img src={IMAGES.MOVIE} style={{ width: "300px", height: "auto"}} className="shadow-lg"/>
    </div>

    
    </>
  )
}
