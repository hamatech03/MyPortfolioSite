import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";

import { IMAGES } from "../const"
import { ROUTES } from "../const";


export default function MyProductsPage() {
  return (
    <>
    <h1 className="animate__animated animate__bounceInLeft animate__fast">MyProducts</h1>

    <Row xs={1} sm={2} md={3} lg={3} className="g-5 justify-content-center mx-auto">
        <Col><ProductCard title="music-player" status="自作曲を実装したシンプルな音楽プレーヤー" img={IMAGES.MUSICPLAYER} 
        link01="https://react-audio-player-xi.vercel.app/"
        link02="https://github.com/hamatech03/react-audio-player" /></Col>
        
        <Col><ProductCard title="react-study-sandbox" status="学習用に作った実験環境" img={IMAGES.SANDBOX} 
        link01="https://react-study-sandbox.vercel.app/"
        link02="https://github.com/hamatech03/React-study-sandbox" /></Col>
    </Row>

    <Row xs={1} sm={2} md={3} lg={3} className="g-5 justify-content-center mx-auto mt-1">
        <Col><ProductCard title="当サイト" status="私が初めてReactで作成したプロジェクト" img={IMAGES.MYPORTFOLIO} 
        link01={ROUTES.TOP}
        link02="https://github.com/hamatech03/MyPortfolioSite"/></Col>
        {/* ↓は空の要素。product追加時に消すこと */}
        <Col><span></span></Col>
    </Row>


    </>
  )
}
