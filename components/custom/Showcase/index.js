import Col from "../../layout/Column";
import Container from "../../layout/Container";
import Row from "../../layout/Row";

import styles from "./Showcase.module.scss";

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <div className={styles.showcase__images}>Image goes here</div>
      <div className={styles.showcase__content}>
        <Container>
          <Row>
            <Col md={1}>01/10</Col>
            <Col md={5}>
              <span className={styles.showcase__number}>1</span>
            </Col>
            <Col md={6}>Artist Name</Col>
          </Row>
          <Row>
            <Col md={1}>Controls</Col>
            <Col md={5}>Latest releases</Col>
            <Col md={6}>Call to action buttons</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Showcase;
