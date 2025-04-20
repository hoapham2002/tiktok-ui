import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./Header.module.scss";

import Button from "~/components/Button";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and video" spellCheck={false} />
            <button className={cx("clear")}>
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
            <i className={`fa-solid fa-spinner ${cx("loading")}`}></i>

            <button className={cx("search-btn")}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button text>Upload</Button>
          <Button
            primary
            // className={cx("custom-login")}
            // rightIcon={<i class="fa-solid fa-right-to-bracket"></i>}
          >
            Log In
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
