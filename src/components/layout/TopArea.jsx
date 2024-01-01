// Animax 상단영역 공통 컴포넌트

import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../modules/Menu";

export const TopArea = memo(({chgPageFn})=>{
    const [isScrollTop, setIsScrollTop] = useState(0);

    const checkTop = () => {
        // console.log(window.scrollY);
      if (window.scrollY >= 70) {
        setIsScrollTop(1);
      }
      else{
        setIsScrollTop(0);
      }
    };
    
    useEffect(() => {
      window.addEventListener("scroll", checkTop);
      return () => {
        window.removeEventListener("scroll", checkTop);
      };
    });

    return(
        <>
            {/* 1. 상단영역 */}
            <header className={"top_area"+(isScrollTop?" fixed":"")}>
                {/* 1-1.로고박스 */}
                <h1 className="logo">
                    <Link to="/main">
                        <img src="./images/logo.png" alt="Animax" />
                    </Link>
                </h1>
                {/* 1-2.GNB박스 */}
                <nav className="gnb_box">
                    <ul>
                        <Menu cat="gnb"/>
                    </ul>
                </nav>
                {/* 1-3.UTIL박스 */}
                <div className="util_box">
                    <ul>
                        <li className="search">
                            <a href="#"><span className="sr-only">검색</span></a>
                        </li>
                        <Menu cat="util"/>
                    </ul>
                </div>
            </header>
        </>
    );
})////// TopArea 컴포넌트 ////