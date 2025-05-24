import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/9c43441d2e20f8693394e9bd1497aa2c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=2b1dc1f1&x-expires=1748167200&x-signature=TJHxKBHvzTwT4lccdvLY%2FXksUbw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
          alt=""
        />
        <div>
          <Button className={cx("follow-btn")} primary>
            Follow
          </Button>
        </div>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>hoaphamxuan</strong>
          <i className={cx("fa-solid fa-circle-check", "check")}></i>
        </p>
        <p className={cx("name")}>Hòa Phạm</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>10.2M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>10.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
