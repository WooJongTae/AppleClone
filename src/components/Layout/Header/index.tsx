import Apple from "@assets/apple.svg?react";
import Search from "@assets/search.svg?react";
import Bag from "@assets/bag.svg?react";
import { headerDataList } from "./headerData";
import "./index.scss";
import HeaderSwipper from "./HeaderSwipper";
import Banner from "../Banner";

const Header = () => {
  return (
    <>
      <div className="header_menu">
        <Apple fill="white" className="menu_btn" />
        {headerDataList.map((dataList) => (
          <input className="menu_btn" type="button" value={dataList} />
        ))}
        <Search className="menu_btn" fill="white" />
        <Bag className="menu_btn" fill="white" />
      </div>
      <div className="swipper_area">
        <HeaderSwipper />
      </div>
      <Banner />
    </>
  );
};

export default Header;
