// Animax 오늘의 업데이트 리스트 컴포넌트

import { SwiperVodList } from "../plugin/SwiperVodList";
import { VideoListData } from "../data/video_list";

// 배너데이터
export function Best({ cat, item, onOverIsActFn }) {
  // cat = 카테고리명

  // 랭킹 정렬 함수
  const selData = VideoListData;
  let rank = selData.sort(function (a, b) {
    return a.rank - b.rank;
  });
  rank = rank.slice(0, 10);
  
  const getItem = (x) => {
    item(x);
  };

  return (
    <>
      <article className="list_v2_wrap rank">
        <h3>
          인기 작품
          <span className="tab_btn">
            <button type="button" className="on">
              월별
            </button>
            <button type="button">분기별</button>
          </span>
        </h3>
        {/* 1. 스와이퍼 컴포넌트 */}
        <SwiperVodList 
          cat={cat} rank={rank} item={getItem} onOverIsActFn={onOverIsActFn} />
      </article>
    </>
  );
}
