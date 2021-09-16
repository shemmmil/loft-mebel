import Link from "next/link";
import Image from "next/image";
import carIcon from "./car.svg";
import styles from "./DesktopHeader.module.css";

export const DesktopHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          <li className={styles["navigation-item"]}>
            <Link href="/">Главная</Link>
          </li>
          <li className={styles["navigation-item"]}>
            <Link href="/about">О нас</Link>
          </li>
          <li className={styles["navigation-item"]}>
            <Link href="/contact">Контакты</Link>
          </li>
        </ul>
      </nav>
      <aside className={styles.contact}>
        <Image src="/phone.svg" alt="phone icon" width="17" height="17" />
        <a href="tel:+89641234567" className={styles.contactNumber}>
          8(964)123-45-67
        </a>
        <Image src={carIcon} alt="car icon" />
        <p className={styles.delivery}>Доставка</p>
      </aside>
    </header>
  );
};
