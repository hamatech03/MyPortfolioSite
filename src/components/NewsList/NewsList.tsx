import { ListGroup } from "react-bootstrap";

export default function NewsList() {
  return (
    <ListGroup className="border border-2 w-75 mx-auto" as="ul">
      <ListGroup.Item className="border border-2" as="li" variant="light" active>
        NEWS
      </ListGroup.Item>
      <ListGroup.Item className="border border-2" as="li">2026/01/25 -----当サイト公開開始</ListGroup.Item>

    </ListGroup>
  );
}
