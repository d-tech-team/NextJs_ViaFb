import Image from "next/image";
import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import ModalProduct from "../ModalProduct";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Product({ product }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card className={styles.product}>
      <Card.Header className={`${styles.title} bg-primary-2`}>
        {product.title}
      </Card.Header>
      <Card.Body>
        <Card.Title className={styles.price}>{product.price} VND</Card.Title>
        <Card.Text as="div">
          <p className={styles.available}>
            Hiện còn : <span className="text-success">{product.max_amount}</span>
          </p>
          <ListGroup variant="flush" className={styles.list_property}>
            <ListGroup.Item className={styles.property}>
              <span className={styles.left}>
                <Image
                  src="/images/icon/country.svg"
                  width={17}
                  height={17}
                  alt=""
                />
                <span className={styles.name}>Quốc gia</span>
              </span>
              <span className={styles.right}>
                <Image
                  src="/images/icon/vn.png"
                  width={17}
                  height={17}
                  objectFit={"contain"}
                  alt=""
                />
                <br></br>
                <span className={styles.name}>{product.city}</span>
              </span>
            </ListGroup.Item>
            <ListGroup.Item className={styles.property}>
              <span className={styles.left}>
                <Image
                  src="/images/icon/year.svg"
                  width={17}
                  height={17}
                  alt=""
                />
                <span className={styles.name}>Ngày lập</span>
              </span>
              <span className={styles.right}>{product.publish}</span>
            </ListGroup.Item>
            <ListGroup.Item className={styles.property}>
              <span className={styles.left}>
                <Image
                  src="/images/icon/tichxanh.svg"
                  width={17}
                  height={17}
                  alt=""
                />
                <span className={styles.name}>2FA</span>
              </span>
              <span className={styles.right}>{product["2FA"]}</span>
            </ListGroup.Item>
            <ListGroup.Item className={styles.property}>
              <span className={styles.left}>
                <Image
                  src="/images/icon/friend.svg"
                  width={17}
                  height={17}
                  alt=""
                />
                <span className={styles.name}>Bạn bè</span>
              </span>
              <span className={styles.right}>{product.friend}</span>
            </ListGroup.Item>
            <ListGroup.Item className={styles.property}>
              <span className={styles.left}>
                <Image
                  src="/images/icon/change.svg"
                  width={17}
                  height={17}
                  alt=""
                />
                <span className={styles.name}>Change</span>
              </span>
              <span className={styles.right}>{product.changeable}</span>
            </ListGroup.Item>
            <ListGroup.Item className={styles.property}>
              <span className={styles.left}>
                <Image
                  src="/images/icon/gender.svg"
                  width={17}
                  height={17}
                  alt=""
                />
                <span className={styles.name}>Giới tính</span>
              </span>
              <span className={styles.right}>{product.gender}</span>
            </ListGroup.Item>
          </ListGroup>
        </Card.Text>
        <div className="text-center">
          <Button
            className={styles.btn_order}
            // variant="success"
            onClick={() => setModalShow(true)}
          >
            <FontAwesomeIcon icon={faCartPlus} className={styles.icon_cart} />{" "}
            Mua Hàng
          </Button>
          <ModalProduct
            product={product}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
