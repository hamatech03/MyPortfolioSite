import { Row, Col } from "react-bootstrap"
import SkillCard from "../components/SkillCard/SkillCard"
import SikakuCard from "../components/SikakuCard/SikakuCard"



export default function SkillsPage() {
  return (
    <>
    <h1 className="animate__animated animate__bounceInLeft animate__fast">Skills</h1>

    <Row xs={2} sm={2} md={3} lg={4} className="g-5">
      <Col><SkillCard title="HTML & CSS" level={1} status="学習中" /></Col>
      <Col><SkillCard title="JavaScript & TypeScript" level={1} status="学習中" /></Col>
      <Col><SkillCard title="React" level={1} status="学習中" /></Col>
      <Col><SkillCard title="Python" level={1} status="学習中" /></Col>
    </Row>

    <h1 className="animate__animated animate__bounceInLeft animate__fast">保有資格</h1>
    <Row xs={2} sm={2} md={3} lg={4} className="g-5">
      <Col><SikakuCard title="QC検定(品質管理検定)3級" /></Col>
      <Col><SikakuCard title="第一種衛生管理者" /></Col>
    </Row>



    </>
  )
}
