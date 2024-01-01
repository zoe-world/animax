import ReactModal from "react-modal";
import React, { useMemo, useRef, useState } from "react";
import { VideoListData } from "../data/video_list";
import { useSelector } from "react-redux";
import "../../css/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowDown,
  faArrowUp,
  faCircleXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const vData = VideoListData;

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.8)",
    zIndex: 9999,
    overflowY: "auto",
  },
  content: {
    overflow: "visible",
    backgroundColor: "transparent",
    border: "none",
    top: 0,
    left: 0,
    width: "100%",
    padding: 0,
  },
};

const MyModal = ({ children, isOpen, onClose, onSubmit }) => {
  const handleClickSubmit = () => {
    onSubmit();
  };
  const handleClickCancle = () => {
    onClose();
  };

  const handleMoreBtn = () => {
    console.log("test");
  };

  const itemInfo = useSelector((state) => state.item.value);
  const item = Object.values(itemInfo)[0];
  const itemRank = item.rank;
  const itemTit = item.tit;
  const itemDirector = item.director;
  const itemGenre = item.genre;
  const itemCompany = item.company;
  const itemEpiNum = item.epiNum;
  const itemAge = item.age;
  const itemDate = item.date;
  const itemEpiTit = item.epiTit;
  const itemVideoSrc = item.videoSrc;
  let itemDesc = item.desc;
  const itemNewEpi = item.newEpi;
  const itemLive = item.live;
  const itemLogoSrc = item.logoSrc;
  const itemThumSrc = item.thumSrc;

  /***************************** 
    줄거리 더보기
  *****************************/
  // 더보기 열고닫는 스위치
  const [isShowMore, setIsShowMore] = useState(false);

  // 공백제거
  let trimTxt = itemDesc.split("^").map((v) => {
    return (
      <>
        {v}
        <br />
      </>
    );
  });

  // 글자수 제한 선언
  const textLimit = useRef(10);
  // 조건에 따라 줄거리를 보여주는 함수
  const commenter = () => {
    // 원본에서 글자수 만큼 자른 짧은 버전
    let shortReview = trimTxt.slice(0, textLimit.current);
    if (trimTxt.length > textLimit.current) {
      if (isShowMore) {
        return trimTxt;
      }
      return shortReview;
    }
    return trimTxt;
    // 공백 넣기
  };

  // 리턴코드
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="modal"
      closeTimeoutMS={150}
      onClose={onClose}
      style={ModalStyle}
    >
      <div className="previewModal-player">
        <div className="logo_bx">
          <img src={itemLogoSrc} alt={itemInfo.tit} />
        </div>
        <div className="previewModal-info_bx">
          <div className="previewModal-info">
            <div className="rank_bx">
              <span className="rank">
                <em>{itemRank}</em>위
              </span>
            </div>
            <div className="thum_bx">
              <img src={itemThumSrc} alt="" />
            </div>
            <div className="txt_bx">
              <h3 className="tit">{vData.idx}</h3>
              <ul className="txt_list">
                <li>
                  <span className="tit">감독</span>
                  <em>{itemDirector}</em>
                </li>
                <li>
                  <span className="tit">장르</span>
                  <em>{itemGenre}</em>
                </li>
                <li>
                  <span className="tit">제작</span>
                  <em>{itemCompany}</em>
                </li>
                <li>
                  <span className="tit">화수</span>
                  <em>{itemEpiNum}</em>
                </li>
                <li>
                  <span className="tit">등급</span>
                  <em>{itemAge}</em>
                </li>
                <li>
                  <span className="tit">방송</span>
                  <em>{itemDate}</em>
                </li>
                <li>
                  <span className="tit">영상</span>
                  <ul className="vd_list">
                    <li>
                      <a
                        href={itemVideoSrc.openSrc}
                        target="_blank"
                        title="오프닝영상 바로보기"
                      >
                        Opening MV
                      </a>
                    </li>
                    <li>
                      <a
                        href={itemVideoSrc.endSrc}
                        target="_blank"
                        title="엔딩영상 바로보기"
                      >
                        Ending MV
                      </a>
                    </li>
                    {itemVideoSrc.promSrc !== "" ? (
                      <li>
                        <a
                          href={itemVideoSrc.openSrc}
                          target="_blank"
                          title="홍보영상 바로보기"
                        >
                          PV
                        </a>
                      </li>
                    ) : (
                      <li></li>
                    )}
                  </ul>
                </li>
                <li className="desc">
                  <span className="tit">줄거리</span>
                  <em className="txt">{commenter()}</em>
                  <button
                    onClick={() => setIsShowMore(!isShowMore)}
                    className="moreBtn"
                  >
                    {trimTxt.length > textLimit.current
                      ? itemDesc.length > textLimit.current &&
                        (isShowMore ? (
                          <>
                            접기 <FontAwesomeIcon icon={faArrowUp} />
                          </>
                        ) : (
                          <>
                            더보기 <FontAwesomeIcon icon={faArrowDown} />
                          </>
                        ))
                      : ""}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button className="previewModal-close" onClick={handleClickCancle}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <span className="sr-only">창닫기</span>
    </ReactModal>
  );
};

export default MyModal;
