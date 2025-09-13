import { MdClear } from "react-icons/md";
import { gnbMenu } from "../../data/HeaderData";
import styles from "./Gnb.module.scss";

function Gnb({ open, closeMenu }) {
  return (
    <>
      <aside className={`${styles.aside} ${open ? styles.open : ""}`}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={closeMenu}
          aria-label="사이드 내비게이션 닫기"
        >
          <MdClear size={30} />
        </button>

        <ul>
          {gnbMenu?.map((item, idx) => (
            <li>
              <a href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {open && <div className={styles.overlay} onClick={closeMenu}></div>}
    </>
  );
}

export default Gnb;
