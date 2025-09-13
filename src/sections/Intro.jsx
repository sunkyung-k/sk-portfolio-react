import styles from "./Intro.module.scss";
import profile from "/images/profile_emoji.png";
import Section from "@/components/layout/Section";

function Intro() {
  return (
    <Section id="intro" className={styles.inner}>
      <div className={styles.imgBox}>
        <img src={profile} alt="프로필 사진" />
      </div>
      <div className={styles.txtBox}>
        <h2 className={styles.name}>SunKyung Kim</h2>
        <p className={styles.role}>Publisher</p>
        <div className={styles.desc}>
          <p>
            10년간 웹 퍼블리싱 구축부터 유지보수까지 책임감 있게 수행해온 퍼블리셔입니다.
          </p>
          <p>
            현재는 React와 JavaScript(ES6)를 학습하며, 컴포넌트 단위의 구조화된 개발
            방식에 집중하고 있습니다.
          </p>
          <p>
            배려하는 협업을 지향하며, 맡은 일은 책임감을 가지고 신뢰할 수 있는 결과로
            만듭니다.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Intro;
