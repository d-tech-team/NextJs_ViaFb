import Image from "next/image";
import styles from "../styles/Home.module.scss";
export default function Home() {
	return (
		<>
			<div className={styles.page_title}>
				<h1 className={styles.title}>
					<Image src="/images/icon.svg" width={30} height={30} alt="" />
					VIAFB.VN - VIA FACEBOOK UY TÍN, CHẤT LƯỢNG
					<Image src="/images/icon.svg" width={30} height={30} alt="" />
				</h1>
				<h3 className={styles.subtitle}>
					GIAO DỊCH HOÀN TOÀN TỰ ĐỘNG 24/7 - NẠP TIỀN THANH TOÁN 5s BẤT KỂ NGÀY
					ĐÊM
				</h3>
				<h3 className={styles.subtitle}>
					<Image src="/images/icon2.svg" width={15} height={12} alt="" />
					SUPPORT DEPOSIT USDTRC20 - Inbox Admin: <a href="./">Click Here</a>
					<Image src="/images/icon2.svg" width={15} height={12} alt="" />
				</h3>
			</div>
		</>
	);
}
