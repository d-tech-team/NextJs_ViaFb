import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Product from "../Product";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function ProductAndHistory({ products, histories }) {
  return (
    <Row>
      <Col xs={12} sm={12} lg={9}>
        <Row>
          {products.map((product, index) => (
            <Col xs={12} sm={12} md={6} lg={3} key={index}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Col>
      <Col xs={12} sm={12} lg={3}>
        {/* <Card className="border-0 shadow-sm rounded"> */}
        <VerticalTimeline layout={"1-column-left"}>
          {histories?.map((history, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#F3F0F8", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  #F3F0F8",
              }}
              iconStyle={{
                background: "rgb(69,27,155)",
                color: "#fff",
                width: "13px",
                height: "13px",
                left: "14px",
                borderSpacing: "20px",
                borderWidth: "1px",
              }}
            >
              <h6
                className="mb-0"
                style={{
                  fontSize: "12px",
                }}
              >
                <b>{history.username}</b> vừa mua <b>1</b> tài khoản{" "}
                <b>{history.product}</b> với giá <b>{history.price}</b> VND
              </h6>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        {/* </Card> */}
      </Col>
    </Row>
  );
}

export default ProductAndHistory;
