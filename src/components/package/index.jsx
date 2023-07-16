import Link from "next/link";
import styles from "./package.module.scss";

const Package = ({ title, price }) => {
  console.log(title);
  return (
    <div className={styles.single_pkg}>
      <div className={styles.single_pkg_header}>
        <h4>{title}</h4>
        <p>
          Great for new start ups and businesses new to SEO! A solid first step
          towards conversions.
        </p>
        <h3>
          ${price}
          <span>/mo</span>
        </h3>
        <button>Get Started</button>
      </div>
      <div className={styles.single_pkg_body}>
        <h5>Keyword Research</h5>
        <ul className={styles.single_pkg_list}>
          <li className={styles.single_pkg_list_item}>15 Keywords</li>
        </ul>
        <h5>Content</h5>
        <ul className={styles.single_pkg_list}>
          <li className={styles.single_pkg_list_item}>
            2 Articles (400 words)
          </li>
          <li className={styles.single_pkg_list_item}>2 Blogs (500 words)</li>
        </ul>
        <h5>Link Building</h5>
        <ul className={styles.single_pkg_list}>
          <li className={styles.single_pkg_list_item}>10 Submissions</li>
          <li className={styles.single_pkg_list_item}>10 Classifieds</li>
          <li className={styles.single_pkg_list_item}>
            10 Community Participation
          </li>
          <li className={styles.single_pkg_list_item}>10 Business Profiles</li>
        </ul>
        <h5>Website</h5>
        <ul className={styles.single_pkg_list}>
          <li className={styles.single_pkg_list_item}>Meta Tags Creation</li>
          <li className={styles.single_pkg_list_item}>
            Web Content Optimization
          </li>
          <li className={styles.single_pkg_list_item}>Keyword Optimization</li>
          <li className={styles.single_pkg_list_item}>
            Anchor Text Optimization
          </li>
        </ul>
      </div>
      <div className={styles.single_pkg_footer}>
        <Link href="tel:#" className={styles.phone}>
          <img src="/images/old-phone.png" alt="phone" /> 1-213-477-7023
        </Link>
        <Link href="#" className={styles.chat}>
          LIVE CHAT
        </Link>
      </div>
    </div>
  );
};

export default Package;
