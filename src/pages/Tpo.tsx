import React, { useState, useEffect, FC } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TpoButton from '@components/TpoButton';

interface TpoProps {
  onSearch: (input: string) => void;
}

const Tpo: FC<TpoProps> = ({ onSearch }) => {
  const [input, setInput] = useState<string>('');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderItems: string[] = ['상황', '장소', '시간', '온도', '날씨'];
  const navigate = useNavigate();

  const handleKeyEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (input.trim() !== '') {
        console.log('검색어:', input);

        // 백엔드로 검색 요청을 보내는 부분
        try {
          const response = await axios.post('http://localhost:3000/tpo', { search: input });
          console.log('백엔드 응답:', response.data);
          // 필요한 경우, 여기에서 response.data를 처리하세요.
          setInput('');
          // Detail 페이지로 네비게이션
          navigate('/detail', { state: { searchInput: input, searchData: response.data } });
          onSearch(input);
        } catch (error) {
          console.error('검색 요청 오류:', error);
        }
      }
    }
  };

  useEffect(() => {
    // 자동으로 슬라이드 변경을 위한 타이머 설정
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 5);
    }, 2500); // 2초마다 슬라이드 변경

    // 컴포넌트가 언마운트되면 타이머를 정리
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const backimg: React.CSSProperties = {
    backgroundImage: "url('/assets/unsplash_HpEDSZukJqk.png')",
    backgroundSize: 'cover',
  };

  const handleCategoryClick = (category: string) => {
    // 카테고리 클릭 시 여기에서 필요한 처리를 수행하고, 필요하면 화면에 보여줌
    console.log('선택된 카테고리:', category);

    // 선택된 카테고리를 Detail 컴포넌트로 전달
    navigate('/detail', { state: { searchInput: category } }); // detail page로 이동하면서 searchInput에다가 category를 넣어서 보낸다
    onSearch(category);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-row" style={backimg}>
      <div className="flex justify-around flex-col w-1/3 items-center">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex relative">
              {/* map 함수를 사용하여 반복 렌더링 */}
              {sliderItems.map((item, index) => (
                <div
                  key={index}
                  className={`slider-item ${currentSlide === index ? 'visible' : ''} font flex`}
                  style={{
                    width: '100px',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    color: 'rgb(184, 128, 255)',
                    opacity: currentSlide === index ? 1 : 0,
                    transition: 'opacity 1s ease',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col mt-8 ml-[65px]" style={{ color: 'white', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>
              에 맞는 옷
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[420px] mt-4 space-x-4">
          <input
            className="placeholder:italic
                        placeholder:text-slate-400
                        border border-slate-300
                        block bg-white
                        w-full
                        rounded-full py-2 pl-9 pr-3 shadow-sm
                        focus:outline-none
                        focus:border-gray-500
                        focus:ring-gray-500 
                        focus:ring-1 sm:text-sm
                        font-sans"
            placeholder="추천받고 싶은 코디 검색"
            type="text"
            name="search"
            id="tpoinput"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={handleKeyEnter}
          />
        </div>
        <div className="flex space-x-1 mt-2">
          <div className="flex space-x-1 mt-1">
            <TpoButton category="여성" onCategoryClick={category => handleCategoryClick(category)} />
            <TpoButton category="남성" onCategoryClick={category => handleCategoryClick(category)} />
            <TpoButton category="캐주얼" onCategoryClick={category => handleCategoryClick(category)} />
            <TpoButton category="비즈니스" onCategoryClick={category => handleCategoryClick(category)} />
            <TpoButton category="데이트" onCategoryClick={category => handleCategoryClick(category)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tpo;
