import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="nav">
        <h4>Навигация</h4>

        <aside className={styles.navigation}>
          <section className={styles["navigation-item"]}>
            <ul className={styles.list}>
              <li className={styles["list-item"]}>
                <Link href="/kitchen">Кухни</Link>
              </li>
              <li className={styles["list-item"]}>
                <Link href="/kitchen">Спальни</Link>
              </li>
              <li className={styles["list-item"]}>
                <Link href="/">Гостинные</Link>
              </li>
            </ul>
          </section>
          <section className={styles["navigation-item"]}>
            <ul className={styles.list}>
              <li className={styles["list-item"]}>
                <Link href="/kitchen">Прихожие</Link>
              </li>
              <li className={styles["list-item"]}>
                <Link href="/kitchen">Офисная мебель</Link>
              </li>
              <li className={styles["list-item"]}>
                <Link href="/">Детская</Link>
              </li>
            </ul>
          </section>
          <section className={styles["navigation-item"]}>
            <ul className={styles.list}>
              <li className={styles["list-item"]}>
                <Link href="/kitchen">Шкафы</Link>
              </li>
              <li className={styles["list-item"]}>
                <Link href="/kitchen">Матрасы</Link>
              </li>
              <li className={styles["list-item"]}>
                <Link href="/">Мягкая мебель</Link>
              </li>
            </ul>
          </section>
        </aside>
        <div className={styles.special}>
          <Link href="/sale">Акция</Link>
          <Link href="/news">Новинки</Link>
        </div>
      </div>
      <section className={styles.address}>
        <Link href="/">
          <a>
            <Image src="/logo.svg" width="60" height="50" alt="logo" />
          </a>
        </Link>
        <address>
          г. Анапа, Анапское шоссе,
          <br /> 30 Ж/К Черное море
        </address>
        <ul className={styles.social}>
          <li className={styles["social-link"]}>
            <Image
              src="/phone-black.svg"
              alt="phone icon"
              width="17"
              height="17"
            />
            <a href="tel:+89641234567" className={styles.contactNumber}>
              8(964)123-45-67
            </a>
          </li>
          <li className={styles["social-link"]}>
            <Image
              src="/inst.svg"
              alt="instagram icon"
              width="17"
              height="17"
            />
            <a href="#" className={styles.contactNumber}>
              INSTAGRAM
            </a>
          </li>
          <li className={styles["social-link"]}>
            <Image
              src="/mail.svg"
              width="17"
              height="17"
              alt="mail icon"
              className={styles["social-icon"]}
            />
            <a
              href="mailto:mebel_loft_anapa@mail.ru"
              className={styles.contactNumber}
            >
              mebel_loft_anapa@mail.ru
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
