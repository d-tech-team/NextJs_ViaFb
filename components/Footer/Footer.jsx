import React from "react";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <Row className={`${styles.wrapper} mt-5`}>
      <Col md={12}>
        <img src={"/images/dmca.png"} width={"20%"} alt="" />
        <span>Copyright © ViaFB.VN</span>
      </Col>
    </Row>
  );
}
