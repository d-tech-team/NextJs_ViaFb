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
import { buyProduct } from "../../pages/api/listRouteApi";
import axios from "axios";
import Swal from "sweetalert2";
import { getProfile } from "../../redux/features/userSlice";
import { connect, useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function ModalProduct({ product, show, onHide, user }) {
  const [price, setPrice] = React.useState(product?.price ?? 1000);
  const [total, setTotal] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [maxAmountError, setMaxAmountError] = React.useState("");
  const dispatch = useDispatch();

  const token = cookies.get("token");

  const handleChangeAmount = (e) => {
    let value = e.target.value;
    if (value <= product.max_amount) {
      setAmount(value);
      setTotal(value * price);
      setMaxAmountError(null);
    } else {
      setMaxAmountError("Giới hạn mua là " + product.max_amount);
    }
  };

  const handleBuy = async () => {
    try {
      if (amount <= 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Số lượng phải lớn hơn 0",
        });
        return;
      }

      if (!user) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Bạn cần đăng nhập để mua hàng",
        });
        return;
      }

      const response = await axios.post(
        buyProduct(product.id),
        { amount: parseInt(amount) },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Thành công",
          text: 'Bạn đã mua thành công "' + product.title + '"',
        });
        dispatch(getProfile());
        onHide();
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Thất bại",
        text: error?.response?.data?.message,
      });
    }
  };

  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // style={{
      //   zIndex: 1000,
      // }}
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
            <FontAwesomeIcon icon={faMagic} /> Hiện còn : {product.max_amount}
          </p>
          <p>
            <FontAwesomeIcon icon={faDollarSign} /> Đơn giá :{" "}
            <strong>{product.price}</strong>
          </p>
          <p>
            <FontAwesomeIcon icon={faPlusSquare} /> Số lượng cần mua
          </p>
          <Form.Control
            className={styles.form_control}
            type="number"
            placeholder="Nhập số lượng"
            onInput={(e) => {
              handleChangeAmount(e);
            }}
            value={amount}
            min={1}
          />
          {maxAmountError && (
            <p className="mt-2 text-danger">{maxAmountError}</p>
          )}
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
            onClick={onHide}
          >
            <FontAwesomeIcon icon={faWindowClose} /> Đóng
          </Button>
          <Button
            variant="primary"
            className={`${styles.button_buy} border-danger mr-2 bg-transparent text-primary`}
            onClick={handleBuy}
          >
            <FontAwesomeIcon icon={faCartPlus} /> Mua hàng
          </Button>
        </div>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(ModalProduct);
