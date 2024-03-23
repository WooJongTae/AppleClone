import React from "react";
import { BannerDataList } from "./BannerData";
import "./index.scss";

interface BannerData {
  img: string;
  name: string;
}

const Banner = () => {
  return (
    <>
      <div className="banner_container">
        <div>
          <p>
            <span>스토어.</span>종아하는 Apple 제품을 구입하는 가장 좋은 방법
          </p>
          <ul className="banner_flex">
            {BannerDataList.map((data: BannerData, i: number) => (
              <li key={i}>
                <img src={data.img} />
                <p>{data.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul></ul>
        </div>
      </div>
    </>
  );
};

export default Banner;
