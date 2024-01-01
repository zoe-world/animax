// Animax 메인 컴포넌트

import { ThumList } from "./ThumList";
import { Promotion } from "./Promotion";
import { Today } from "./Today";
import { TopBanner } from "./TopBanner";
import { Vod } from "../modules/Vod";
import { Best } from "./Best";
import { useEffect, useRef, useState } from "react";
import { BestTag } from "./BestTag";
import MyModal from "../modules/MyModal";
import useModals from "../modules/useModals";
import { modals } from "../modules/Modals";

export function Main(props) {


  const [objInfo,setObjInfo] = useState({});
  console.log(objInfo)
  const getInfo = (x) => {
    setObjInfo(x);
  }

  const [isOpen, setOpen] = useState(false);
  const { openModal } = useModals();
  const handleClick = () => {
    openModal(modals.myModal, {
      onSubmit: () => {
        // console.log('비지니스 로직 처리...');
      }
    });
    setOpen(true);
  };


  return (
    <>
      {/* 2-1. TOP배너 박스 */}
      <TopBanner cat={"main"} />
      {/* 2-2. LIST배너 박스 */}
      <ThumList cat="list" />
      {/* 2-3. 컨텐츠영역 */}
      <section className="content_wrap">
        <h2 className="sr-only">컨텐츠 영역</h2>
        {/* 2.3.1 프로모션배너 박스 */}
        <Promotion cat={"sub"} />
        {/* 2.3.2 오늘의 업데이트 리스트 */}
        <Today cat="today" item={getInfo}/>
        {/* 2.3.2 인기 작품 리스트 */}
        <Best cat="best" item={getInfo}/>
        {/* 2.3.3 라이브 방송 */}
        <article className="live_wrap">
          <h3>LIVE ON AIR!</h3>
          <div className="list-ctl_box">
            <a href="#" title="라이브편성표 더보기" className="more_btn">
              라이브 편성표
            </a>
          </div>
          <div className="live_bx_wrap">
            <dl className="live_bx">
              <dt className="live_img_bx">
                <div className="live_video">
                  <img src="./images/banner/live_thum.jpg" alt="" />
                  {/* <video src="./images/banner/live_video.mp4" controls></video> */}
                  <div className="ctl_box">
                    <button className="play_btn">
                      <img src="./images/sound.png" alt="" />
                    </button>
                  </div>
                </div>
              </dt>
              <dd className="live_cont">
                <div className="text-group">
                  <span className="sm-logo">
                    <img src="./images/banner/live_logo.png" alt="" />
                  </span>
                  <h4 className="tit">
                    Lv.02 슬슬 보스가 나올 시간이므로
                    <em className="age_badge bd-all">ALL</em>
                    <em className="age_badge bd-7">7</em>
                    <em className="age_badge bd-12">12</em>
                    <em className="age_badge bd-15">15</em>
                    <em className="age_badge bd-19">19</em>
                  </h4>
                  <p className="txt">
                    FOS의 오프라인 이벤트에서 우연히 '야마다'를 발견한 아카네가
                    전 남친 (with 새로운 여친)과 조우했을 때 충동적으로 야마다를
                    자신의 남친이라고 소개하고 만다. 그것을 보상하기 위해 들어간
                    요리 주점에서 아카네는 잔뜩 취해 야마다의 집에서 신세를 지게
                    되고 추억이 담긴 목걸이를 잃어버리는 큰 실수를 저지른다.
                    아카네는 목걸이를 찾기 위해 FOS의 길드 룸에서 만난
                    야마다에게 연락한다. 하지만 야마다로부터
                  </p>
                  <span className="btn_wrap">
                    <a href="#" className="btn play_btn">
                      <span className="txt">지금 감상하기</span>
                    </a>
                    <a href="#" className="btn info_btn">
                      <span className="txt">작품 상세보기</span>
                    </a>
                  </span>
                </div>
                {/* <div className="time-group">
                  <div className="time_wrap">
                    <ul className="time_list">
                      <li className="on">
                        <a href="#" className="time_item">
                          <em className="time">18:00</em>
                          <p className="time_txt">
                            <span className="tit">리아데일의 대지에서</span>
                            <span className="info">제11화 소개와 마차와 메이드와 이사</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="time_item">
                          <em className="time">18:00</em>
                          <p className="time_txt">
                            <span className="tit">리아데일의 대지에서</span>
                            <span className="info">제11화 소개와 마차와 메이드와 이사</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="time_item">
                          <em className="time">18:00</em>
                          <p className="time_txt">
                            <span className="tit">리아데일의 대지에서</span>
                            <span className="info">제11화 소개와 마차와 메이드와 이사</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="time_item">
                          <em className="time">18:00</em>
                          <p className="time_txt">
                            <span className="tit">리아데일의 대지에서</span>
                            <span className="info">제11화 소개와 마차와 메이드와 이사</span>
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </dd>
            </dl>
          </div>
        </article>
        {/* 2.3.4 인기 태그 작품 */}
        <BestTag cat="tag" item={getInfo}/>
      </section>
      {/* 3. VOD 정보박스 */}
      <Vod item={objInfo} handleClick={handleClick}/>
    </>
  );
}
