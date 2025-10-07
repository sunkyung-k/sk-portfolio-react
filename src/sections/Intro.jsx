import profile from "/images/profile_emoji.png";
import { RiNotionFill } from "react-icons/ri";
import Section from "@/components/layout/Section";
import { IntroGroup } from "@/data/IntroData";
import styles from "./Intro.module.scss";

function Intro() {
  return (
    <Section id="intro" className={styles.inner}>
      <div className={styles.imgBox}>
        <img src={profile} alt="프로필 사진" />
      </div>
      <div className={styles.txtBox}>
        <h2 className={styles.name}>SunKyung Kim</h2>
        <p className={styles.role}>프론트엔드를 배우며 성장하는 퍼블리셔</p>
        <div className={styles.desc}>
          <p>10년간 웹 퍼블리싱 구축부터 유지보수까지 책임감 있게 수행해왔습니다.</p>
          <p>
            현재는 React와 JavaScript(ES6)를 학습하며, 컴포넌트 단위의 구조화된 개발
            방식에 집중하고 있습니다.
          </p>
          <p>함께 고민하고 조율하며, 배려 있는 협업을 지향합니다.</p>
        </div>

        <ul className={styles.list}>
          {IntroGroup.map((item) => (
            <li key={item.id}>
              <a href={item.url} target="_blank">
                <RiNotionFill size={20} />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Intro;
