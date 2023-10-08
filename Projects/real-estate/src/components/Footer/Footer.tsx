import styles from "./Footer.module.css";
import Link from "next/link";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`background ${styles.background}`}>
        <div className={`center`}>
          <div className={`${styles.footer_items}`}>
            <div className={`${styles.top} footer_items`}>
              <ul className={`${styles.footer_item_ul} footer_item_ul`}>
                <h1>/logoo</h1>
              </ul>
              <ul className={`${styles.footer_item_ul} footer_item_ul`}>
                <ul className={`${styles.footer_item_ul_ul} footer_item_ul_ul`}>
                  <h4>ABOUT</h4>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                </ul>
                <ul className={`${styles.footer_item_ul_ul} footer_item_ul_ul`}>
                  <h4>ABOUT</h4>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                </ul>
              </ul>
              <ul className={`${styles.footer_item_ul} footer_item_ul`}>
                <ul className={`${styles.footer_item_ul_ul} footer_item_ul_ul`}>
                  <h4>ABOUT</h4>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                </ul>
                <ul className={`${styles.footer_item_ul_ul} footer_item_ul_ul`}>
                  <h4>ABOUT</h4>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                </ul>
              </ul>
              <ul className={`${styles.footer_item_ul} footer_item_ul`}>
                <ul className={`${styles.footer_item_ul_ul} footer_item_ul_ul`}>
                  <h4>ABOUT</h4>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                </ul>
                <ul className={`${styles.footer_item_ul_ul} footer_item_ul_ul`}>
                  <h4>ABOUT</h4>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span>link</span>
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* bottom links */}
      <div className={`background ${styles.background}`}>
        <div className={`center`}>
          <div className={`${styles.footer_items}`}>
            <div className={`${styles.bottom} footer_items`}>
              <div className={styles.left}>
                <span>Created by little_7o7... 2023</span>
              </div>
              <div className={styles.right}>
                <Link href={"/"}>
                  <AiOutlineInstagram size={"30px"} className={styles.icon} />
                </Link>
                <Link href={"/"}>
                  <BiLogoFacebook size={"30px"} className={styles.icon} />
                </Link>
                <Link href={"/"}>
                  <BiLogoTelegram size={"30px"} className={styles.icon} />
                </Link>
                <Link href={"/"}>
                  <AiFillGithub size={"30px"} className={styles.icon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
