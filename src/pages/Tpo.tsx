import React, { useState, useEffect, FC } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface TpoProps {
  onSearch: (input: string) => void;
}

const Tpo: FC<TpoProps> = ({ onSearch }) => {
  const [input, setInput] = useState<string>('');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const navigate = useNavigate();

  // 검색어를 서버로 전송하는 함수
  const submitSearch = async () => {
    if (input.trim() !== '') {
      console.log('검색어:', input);
      try {
        const response = await axios.post('http://localhost:3000/tpo', { search: input });
        console.log('요청 응답 : ', response.data);
        navigate('/Detail', { state: { data: response.data } });
        onSearch(input);
      } catch (error) {
        console.error('요청 오류 : ', error);
      }
      setInput('');
    }
  };

  // Enter 키 핸들러
  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitSearch();
    }
  };

  useEffect(() => {
    // 자동으로 슬라이드 변경을 위한 타이머 설정
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 5);
    }, 3000); // 3초마다 슬라이드 변경

    // 컴포넌트가 언마운트되면 타이머를 정리
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const sliderItems: string[] = ['상황', '장소', '시간', '온도', '날씨'];

  const backimg: React.CSSProperties = {
    backgroundImage: "url('src/assets/img/unsplash_HpEDSZukJqk.png')",
    backgroundSize: 'cover',
  };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-row" style={backimg}>
      <div className="flex justify-around flex-col w-1/3 items-center">
        <div className="flex flex-col">
          <div className="">
            {/* map 함수를 사용하여 반복 렌더링 */}
            {/* 이 부분 어떻게 고쳤는지 코드 받기 */}
            {sliderItems.map((item, index) => (
              <div
                key={index}
                className={`slider-item ${currentSlide === index ? 'visible' : ''} font flex h-6/7`}
                style={{
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontWeight: 'bold',
                  fontSize: '30px',
                  color: 'rgb(129, 227, 227)',
                  opacity: currentSlide === index ? 1 : 0,
                  transition: 'opacity 1s ease',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {item}
              </div>
            ))}
            <div className="flex flex-col mt-8" style={{ color: 'white', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>
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
            <button
              className="w-20 h-[30px] rounded-xl flex items-center justify-center transition duration-300 ease-in-out transform hover:opacity-50"
              style={{
                cursor: 'pointer',
                fontSize: '12px',
                background: 'linear-gradient(to bottom, #dcdcdc, #a9a9a9)',
                border: 'none',
                color: 'white',
                borderRadius: '8px',
                padding: '5px 10px',
              }}
              onClick={() => (window.location.href = '/')}
            >
              #Random
            </button>
            <button
              className="w-20 h-[30px] rounded-xl flex items-center justify-center transition duration-300 ease-in-out transform hover:opacity-50"
              style={{
                cursor: 'pointer',
                fontSize: '12px',
                background: 'linear-gradient(to bottom, #dcdcdc, #a9a9a9)',
                border: 'none',
                color: 'white',
                borderRadius: '8px',
                padding: '5px 10px',
              }}
              onClick={() => (window.location.href = '/')}
            >
              #Random
            </button>
            <button
              className=" w-20 h-[30px] rounded-xl flex items-center justify-center transition duration-300 ease-in-out transform hover:opacity-50"
              style={{
                cursor: 'pointer',
                fontSize: '12px',
                background: 'linear-gradient(to bottom, #dcdcdc, #a9a9a9)',
                border: 'none',
                color: 'white',
                borderRadius: '8px',
                padding: '5px 10px',
              }}
              onClick={() => (window.location.href = '/')}
            >
              #Random
            </button>
            <button
              className=" w-20 h-[30px] rounded-xl flex items-center justify-center transition duration-300 ease-in-out transform hover:opacity-50"
              style={{
                cursor: 'pointer',
                fontSize: '12px',
                background: 'linear-gradient(to bottom, #dcdcdc, #a9a9a9)',
                border: 'none',
                color: 'white',
                borderRadius: '8px',
                padding: '5px 10px',
              }}
              onClick={() => (window.location.href = '/')}
            >
              #Random
            </button>
            <button
              className=" w-20 h-[30px] rounded-xl flex items-center justify-center transition duration-300 ease-in-out transform hover:opacity-50"
              style={{
                cursor: 'pointer',
                fontSize: '12px',
                background: 'linear-gradient(to bottom, #dcdcdc, #a9a9a9)',
                border: 'none',
                color: 'white',
                borderRadius: '8px',
                padding: '5px 10px',
              }}
              onClick={() => (window.location.href = '/')}
            >
              #Random
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tpo;
