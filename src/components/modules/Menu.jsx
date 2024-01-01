// Animax 메뉴 컴포넌트
import { menu } from "../data/gnb"; 
import { Link } from "react-router-dom";

export function Menu(props) {
    // props.cat - 메뉴 분류명

    // 선택데이터
    const selMenu = menu[props.cat];
  return (
    <>
      {selMenu.map((v, i) => (
        <li key={i}>
          <Link to={v.link}>{v.txt}</Link>
        </li>
      ))}
    </>
  );
}
