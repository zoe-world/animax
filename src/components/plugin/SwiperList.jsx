// 스와이퍼 플러그인 컴포넌트
import React, { useRef, useState } from "react";
import $ from 'jquery';

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// 배너리스트 스와이프 css
import "./css/swiper_list.css";

// 배너리스트 데이터
import { swBanData } from "../data/swiper_list";

export function SwiperList({cat}) {
  // 배너리스트 데이터 가공
  const selData = swBanData[cat];

  // 스와이퍼
  const [swiper, setSwiper] = useState();
  const [mainImgIndex, setMainImgIndex] = useState(0);

  SwiperCore.use([Navigation,Pagination,Autoplay]);

  const navPrev = useRef();
  const navNext = useRef();
  const page = useRef();

  const swiperParams = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    navigation: { prevEl: navPrev.current, nextEl: navNext.current },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass:"paging_btn",
      bulletActiveClass: "on",
      renderCustom: function (index, className, total) {
          return '<li class="' + className + '"><span>' + [index] + '</span><span>'+[total]+'</span></li>';
      },
    },
    onBeforeInit:(swiper) => {
      swiper.params.navigation.prevEl = navPrev.current;
      swiper.params.navigation.nextEl = navNext.current;
      swiper.params.pagination.el = page.current;
      swiper.activeIndex = mainImgIndex;
      swiper.navigation.update();
    },
    onSwiper: setSwiper,
    onSlideChange: (e) => setMainImgIndex(e.activeIndex),
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 3,
    breakpoints: {
      0:{
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      // when window width is >= 480px
      468: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    },
  };
  let tog = 0;
  $('.stop_btn').on('click',function(e){
    e.preventDefault();
    if(tog == 0){
      e.preventDefault(); 
      swiper.autoplay.stop();
      $(this).removeClass('stop_btn').addClass('play_btn')
      .attr('aria-label','재생');
      $(this).find('img').attr('src','./images/play.png');
      tog = 1;
    }
    else {
      e.preventDefault(); 
      swiper.autoplay.start();
      $(this).removeClass('play_btn').addClass('stop_btn')
      .attr('aria-label','멈춤');
      $(this).find('img').attr('src','./images/stop.png');
      tog = 0;
    }
  });

  


  // 리턴코드 ////////////////////////////////////
  return (
    <>
      <div className="arrow_box">
        <a href="#" className="arrow_btn prev_btn" ref={navPrev}>
          <span className="sr-only">이전 슬라이드 보기</span>
        </a>
        <a href="#" className="arrow_btn next_btn" ref={navNext}>
          <span className="sr-only">다음 슬라이드 보기</span>
        </a>
      </div>

      <Swiper {...swiperParams} ref={setSwiper} className="list">
          {selData.map((v, i) => (
            <SwiperSlide key={i} className="list_item">
              <a href="#" className="items">
                <div className="txt_bx">
                  <span className="tag">{v.tag}</span>
                  <span className="tit">{v.tit.split('^')[0]}<br/>{v.tit.split('^')[1]}</span>
                </div>
                <div className="img_bx">
                  <img src={v.src} alt="" />
                </div>
              </a>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="paging_wrap">
        <ol className="paging_list swiper-pagination"></ol>
        <div className="ctl_box">
          <a href="#" className="ctl_btn stop_btn" aria-label="멈춤">
            <img src="./images/stop.png" alt="" /> 
          </a>
        </div>
      </div>
    </>
  );
} /////////// SwiperList 컴포넌트 /////
