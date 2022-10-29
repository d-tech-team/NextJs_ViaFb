import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { MENU_ROUTE } from "../../router/menu";
import styles from "./index.module.scss";
import Image from "next/image";
import { connect } from "react-redux";

function ProfileMenu({ profile, user }) {
  return (
    <div className={styles.profile_box}>
      <div className={styles.top_icon}>
        <Image
          src="/images/icon/dollarpurple.png"
          width={100}
          height={100}
          alt=""
        />
      </div>
      <h5 className={styles.username}>
        User: <span>{user?.username}</span>
      </h5>
      <p className={styles.money}>
        Đã nạp: <span>{user?.money}</span> <span>VND</span>
      </p>
      <Link href={MENU_ROUTE.deposit}>
        <a className={styles.add_more}>
          Nạp thêm tiền <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.default.user,
  };
};

export default connect(mapStateToProps)(ProfileMenu);
