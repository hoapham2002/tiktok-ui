import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import styles from "./Header.module.scss";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import routesConfig from "~/config/routes";
import Button from "~/components/Button";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import { ActivityIcon, MessagesIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);
const currentUser = true;

const MENU_ITEMS = [
  {
    icon: <i className="fa-solid fa-earth-asia"></i>,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Vietnamese",
        },
      ],
    },
  },
  {
    icon: <i className="fa-solid fa-circle-question"></i>,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <i className="fa-solid fa-keyboard"></i>,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <i className="fa-solid fa-user"></i>,
      title: "View profile",
      to: "/@hoaa",
    },
    {
      icon: <i className="fa-solid fa-coins"></i>,
      title: "Get coins",
      to: "/coins",
    },
    {
      icon: <i className="fa-solid fa-gear"></i>,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <i className="fa-solid fa-right-from-bracket"></i>,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={routesConfig.home} className={cx("logo-link")}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon></UploadIcon>
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessagesIcon></MessagesIcon>
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Activity" placement="bottom">
                <button className={cx("action-btn")}>
                  <ActivityIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button
                primary
                // className={cx("custom-login")}
                // rightIcon={<i class="fa-solid fa-right-to-bracket"></i>}
              >
                Log In
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c16b61b71cceecfadcdfddfe8227a30b~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=1aa18b48&x-expires=1746097200&x-signature=BuOlTzFuA98cdpZBl3EmnQ1PlMk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                className={cx("user-avatar")}
                alt="Pham Xuan Hoa"
                fallback="	https://www.gravatar.com/avatar/52b143e7e69dd7cf4d…4ab6ac543e99938b3681406c308f27e.jpg?s=80&d=mp&r=g"
              ></Image>
            ) : (
              <>
                <button className={cx("more-btn")}>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
