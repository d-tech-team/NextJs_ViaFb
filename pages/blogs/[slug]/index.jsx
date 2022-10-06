import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Container, Card } from "react-bootstrap";
import PageTitle from "../../../components/Breadcumb";
import styles from "../../../styles/Blog.module.scss";

function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Tin tức</title>
      </Head>
      <PageTitle title="Lorem ipsum dolor sit!"></PageTitle>
      <Container>
        <Card className={`${styles.card} border-0 shadow-sm`}>
          <Card.Header className="bg-white">
            <p className="font-weight-normal">
              Tags:{" "}
              <strong>
                mua nick facebook, mua acc facebook, mua nick fb, via 902, via
                xmdt, via fb, via facebook, via viet, via phi, via indo, mua via
                xmdt, clone viet, via zin, Acc fb, Mua fb, mua via.
              </strong>
            </p>
          </Card.Header>
          <Card.Body>
            <p>
              TUT LÊN CAMP KHÔNG DIE PAGE HÊN XUI CHO ANH EM TEST THỬ 1: PAGE
              tạo hoặc mua về, anh em liên kết với 1 tài khoản intargram 2: Anh
              em lên camp đặt thêm vị trí quốc gia của VIA set camp. VD: Lên
              bằng via phi thì ghim thêm vị trí quốc gia philippin. Nếu dùng via
              việt thì cứ ném sang hoa kì , ném cùng biển đảo ý là được hoặc vào
              phần page đặt giới hạn chỉ hiện thị tại việt nam trong mực cài đặt
              ý . 3: Lên capm đừng đừng đăng ngay ngâm đó tầm 5 10p hãy đăng là
              đươc. Bấm xem lại và đăng nhé. Nguồn: Internet | Keywords: via
              902, via xmdt, via2fa, mua bm, via fb, via facebook, via viet, via
              phi, via indo, via co, clone us, clone viet, clone facebook, mua
              via xmdt, mua via phi, via ads, mua nick fb, mua acc facebook, mua
              nick facebook, via new zin, via, mua clone facebook, mua facebook,
              via zin, mua via 902, viafb, mua via, mua via facebook, mua fb,
              mua via fb, bán via fb, mua clone việt, bán via fakebook, phôi
              xmdt, via902, mua acc via facebook, mua tài khoản via facebook,
              clone xmdt, via việt xmdt, mua via face, bán via phi, bán via
              việt, via clone, mua acc via, mua via us, mua nick via, via
              facebook cổ, mua via ad face, mua via cổ fb, mua fb
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default BlogDetail;
