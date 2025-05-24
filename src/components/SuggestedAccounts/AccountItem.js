import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import AccountPreview from "./AccountPreview/AccountPreview";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./SuggestedAccounts.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        offset={[-20, 0]}
        delay={[800, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/9c43441d2e20f8693394e9bd1497aa2c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=2b1dc1f1&x-expires=1748167200&x-signature=TJHxKBHvzTwT4lccdvLY%2FXksUbw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>hoaphamxuan</strong>
              <i className={cx("fa-solid fa-circle-check", "check")}></i>
            </p>
            <p className={cx("name")}>Hòa Phạm</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
