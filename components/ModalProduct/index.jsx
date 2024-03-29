import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faInfoCircle,
  faMagic,
  faDollarSign,
  faPlusSquare,
  faWindowClose,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Modal.module.scss";


function ModalProduct(props, { product }) {
  const [price, setPrice] = React.useState(product?.price ?? 1000);
  const [total, setTotal] = React.useState(0);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-4">
        <div className={styles.product}>
          <p className="text-uppercase">
            <FontAwesomeIcon icon={faArchive} /> sản phẩm :{" "}
            <strong>
              {product?.title ||
                "CLONE NGOẠI DIE ADS | NAME RANDOM | CHUYÊN SPAM SEEDING"}
            </strong>
          </p>
          <p>
            <FontAwesomeIcon icon={faInfoCircle} /> Mô tả : <br></br>
            {product?.description || "Mô tả sản phẩm"}
          </p>
          <p>
            <FontAwesomeIcon icon={faMagic} /> Hiện còn : 1000{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faDollarSign} /> Đơn giá :{" "}
            <strong>10000</strong>
          </p>
          <p>
            <FontAwesomeIcon icon={faPlusSquare} /> Số lượng cần mua
          </p>
          <Form.Control
            className={styles.form_control}
            type="number"
            placeholder="Nhập số lượng"
            onChange={(e) => {
              setTotal(e.target.value * price);
            }}
            min={0}
          />
          <p className="mt-3">Tổng tiền : </p>
          <Form.Control
            className={`${styles.form_control} text-danger`}
            type="number"
            disabled
            placeholder="Tổng tiền"
            value={total}
          />
          <p className="mt-3">
            Chiết khấu : <strong>0%</strong>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            className={`${styles.button_close} border-danger bg-transparent text-danger`}
            onClick={props.onHide}
          >
            <FontAwesomeIcon icon={faWindowClose} /> Đóng
          </Button>
          <Button
            variant="primary"
            className={`${styles.button_buy} border-danger mr-2 bg-transparent text-primary`}
          >
            <FontAwesomeIcon icon={faCartPlus} /> Mua hàng
          </Button>
        </div>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalProduct;
