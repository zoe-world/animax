// Animax VOD 정보 컴포넌트
import { memo, useContext, useEffect, useRef, useState } from "react";
import { VideoListData } from "../data/video_list";

import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { itemOut, itemOver } from "../../redux/reducers/item";

export function Vod({ item, handleClick }) {
  const selData = VideoListData;
  // redux
  const dispatch = useDispatch();

  // 마우스 위치
  const vodBox = useRef();
  const ele = item.ele;
  const eleW = item.eleW;
  const mouseLeft = item.left;
  const mouseTop = item.top;

  $(vodBox.current).css({
    opacity: 0,
  });
  const showEle = (e) => {
    e.preventDefault();
    $(vodBox.current).addClass("on");
  };
  setTimeout(() => {
    if ($(vodBox.current).hasClass("on")) {
      $(vodBox.current).css({
        opacity: 1,
        top: mouseTop + 25 + "px",
        left: mouseLeft + "px",
        width: eleW + "px",
        transition: "opacity .3s linear .2s",
      });
    }
  }, 50);
  const hideEle = () => {
    $(vodBox.current).removeClass("on");
    $(vodBox.current).attr("style", "");
    $(vodBox.current).css({
      opacity: 0,
    });
  };

  useEffect(() => {
    $(ele).on("mouseenter", showEle);
    $(vodBox.current).on("mouseleave scroll", hideEle);
  }); ////////// useEffect /////////////

  const itemInfo = useSelector((state)=> state.item.value);
  const itemThumSrc = Object.values(itemInfo)[0].thumSrc;


  return (
    <>
      {/* 1. vod 정보창 */}
      <section
        id="vod_area"
        className="vod_area"
        ref={vodBox}
        onClick={handleClick}
        onMouseOver={()=>dispatch(itemOver({
          itemInfo: item.itemInfo,
        }))}
      >
        <div className="info_bx">
          <a href="#" title="동영상 재생" className="link_play link_ico">
            <span className="tootip">재생하기</span>
          </a>
          <a href="#" title="정보 더보기" className="link_info link_ico">
            <span className="tootip">상세보기</span>
          </a>
          <a href="#" title="찜하기" className="link_zzim link_ico">
            <span className="tootip">찜하기</span>
          </a>
          <a href="#" className="img_bx">
            {}
            <div className="img_group">
              <div className="bg"></div>
              <img src={itemThumSrc} alt="" />
            </div>
            <h4>
              <span className="tit">{item.tit}</span>
              <span className="txt">{item.txt}</span>
            </h4>
          </a>
        </div>
      </section>
    </>
  );
}
