import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7322974625531428866~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=da08a0eb&x-expires=1744866000&x-signature=ibr7Sr8vsjYkiTX%2Bc1yfRUicFUQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
        alt=""
      ></img>
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <i className={`fa-solid fa-circle-check ${cx('check')}`}></i>
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
