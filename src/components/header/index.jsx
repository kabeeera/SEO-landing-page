import Image from "next/image";
import styles from "./header.module.scss";
import { poppins, montserrat } from "@/utils/fonts";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container position-relative">
      <header className={styles.header_wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              fill
              alt="Logo"
              className="img-fluid"
            />
          </Link>
        </div>
        <div className={styles.header_right}>
          <div className={styles.phone}>
            <Image
              width={16.5}
              height={16.5}
              src="/images/telephone.png"
              alt="phone"
            />
            <span className={montserrat.className}>+123 456 7890</span>
          </div>
          <div className={styles.consultation}>
            <div className={styles.consultation_img}>
              <Image
                width={38}
                height={38}
                src="/images/avatar.png"
                alt="avatar"
              />
            </div>

            <div
              className={`${styles.consultation_content} ${montserrat.className}`}
            >
              <small>INITIAL CONSULTATION</small>
              <h5>
                CONTACT: <span>JESSICA</span>
              </h5>
            </div>
            <button className={styles.header_CTA}>
              REQUEST A QUOTE{" "}
              <Image
                width={21}
                height={21}
                src="/images/shuttle.png"
                alt="shuttle"
              />
            </button>
          </div>
        </div>

        <div className={styles.mobile_menu_icon}>
          <button
            className={styles.hamburger_icon}
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div className={styles.mobile_menu}>
                <div className={styles.phone}>
                  <Image
                    width={16.5}
                    height={16.5}
                    src="/images/telephone.png"
                    alt="phone"
                  />
                  <span className={montserrat.className}>+123 456 7890</span>
                </div>
                <div className={styles.consultation}>
                  <div className={styles.consultation_img}>
                    <Image
                      width={38}
                      height={38}
                      src="/images/avatar.png"
                      alt="avatar"
                    />
                  </div>

                  <div
                    className={`${styles.consultation_content} ${montserrat.className}`}
                  >
                    <small>INITIAL CONSULTATION</small>
                    <h5>
                      CONTACT: <span>JESSICA</span>
                    </h5>
                  </div>
                </div>{" "}
                <button className={styles.header_CTA}>
                  REQUEST A QUOTE{" "}
                  <Image
                    width={21}
                    height={21}
                    src="/images/shuttle.png"
                    alt="shuttle"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
