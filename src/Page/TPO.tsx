import React, { useState, useEffect } from "react";
import "../App.css";

const TPO = () => {
  const [input, setInput] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    // 자동으로 슬라이드 변경을 위한 타이머 설정
    const intervalId = setInterval(() => {
      // 여기서 1은 각 슬라이드의 인덱스
      // 231113 정은우 테스트
      setCurrentSlide((currentSlide + 1) % 5);
    }, 3000); // 3초마다 슬라이드 변경

    // 컴포넌트가 언마운트되면 타이머를 정리
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="h-screen w-full flex items-center justify-center flex-row">
      <div className="flex justify-around flex-col w-1/3 items-center">
        <div className="flex flex-col">
          <div className="flex flex-col"> 에 맞는 옷</div>
          <div className="slider-container ">
            <div
              className={`slider-item ${
                currentSlide === 0 ? "visible" : ""
              } font`}
            >
              상황
            </div>
            <div
              className={`slider-item ${
                currentSlide === 1 ? "visible" : ""
              } font`}
            >
              장소
            </div>
            <div
              className={`slider-item ${
                currentSlide === 2 ? "visible" : ""
              } font`}
            >
              시간
            </div>
            <div
              className={`slider-item ${
                currentSlide === 3 ? "visible" : ""
              } font`}
            >
              온도
            </div>
            <div
              className={`slider-item ${
                currentSlide === 4 ? "visible" : ""
              } font`}
            >
              날씨
            </div>
          </div>
        </div>
        <div className="">
          <input
            type="text"
            id="tpoinput"
            value={input}
            onChange={handleInput}
          />
        </div>
        <div className="flex ... ">
          <div className="w-20 h-[30px] left-[550px] top-[565px]  bg-zinc-300 rounded-xl" />
          <div className="w-20 h-[30px] left-[639px] top-[565px]  bg-zinc-300 rounded-xl" />
          <div className="w-20 h-[30px] left-[728px] top-[565px]  bg-zinc-300 rounded-xl" />
          <div className="w-20 h-[30px] left-[817px] top-[565px]  bg-zinc-300 rounded-xl" />
          <div className="w-20 h-[30px] left-[906px] top-[565px] bg-zinc-300 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default TPO;
