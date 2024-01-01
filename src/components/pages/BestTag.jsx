// Animax 오늘의 업데이트 리스트 컴포넌트

import { SwiperVodList } from "../plugin/SwiperVodList";
import { VideoListData } from "../data/video_list";

// 배너데이터
export function BestTag({ cat, item }) {
  // cat = 카테고리명

  // 키워드 필터링 함수
  const selData = VideoListData;
  let tag = selData.filter(v=>v.hashtag.includes('#이세계'));
  tag = tag.sort(function(a,b){return a.idx - b.idx})

  // 마우스오버 함수
  const getItem = (x) => {
    item(x);
  };

  return (
    <>
    <article className="list_v2_wrap tag">
          <h3>
            인기 태그 작품
            <span className="tab_btn">
              <button type="button" className="on">
                #이능력
              </button>
              <button type="button">#액션/배틀</button>
              <button type="button">#일상물</button>
              <button type="button">#아이돌</button>
              <button type="button">#이세계</button>
              <button type="button">#요괴/오컬트</button>
            </span>
          </h3>
          <SwiperVodList cat={cat} item={getItem} tag={tag}/>
        </article>
    </>
  );
}
