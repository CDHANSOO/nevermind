import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from 'atom/atom';
import { IoPersonSharp } from 'react-icons/io5';
import { darkModeState } from '../states/darkModeState';

const NavigationBar: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  const handleLogout = () => {
    alert('로그아웃 완료');
    setIsLogin(false);
  };
  // 231123 정은우
  // darkmode 추가 코드
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const location = useLocation(); // 현재 경로를 가져옴
  
  useEffect(() => {
    // 경로에 따라 다크 모드 상태 설정
    if (location.pathname === '/content' || location.pathname === '/tpo' || location.pathname ==='/contentdetail') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    const handleScroll = () => {
      // 스크롤 위치에 따라 배경색 설정
      const newBackgroundColor = window.scrollY > 0 ? 'white' : 'transparent';
      setBackgroundColor(newBackgroundColor);
    };
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, setDarkMode]);
  console.log(darkMode);

  // 231123: 정은우
  // 'dark-mode' : 'light-mode'
  const linkClass = (path: string) => (location.pathname === path ? 'font-bold' : 'text-base');
  const modeToggle = darkMode ? 'text-slate-100' : 'text-neutral-800';
  // const modeToggle = darkMode ? 'text-slate-100' : 'text-neutral-800';
  return (
    // 231116 정은우
    // 각 페이지별로 전역저장소에 저장된 mode변수 값을 바꾸게 하고 해당 값에 따라, dark/white 모드 변경되도록 수정해야할 듯
    <>
      {isLogin ? ( // 로그인
        <div
          style={{
            backgroundColor: backgroundColor,
            transition: 'background-color 0.3s ease', // 여기에 transition 추가
          }}
          className={`w-full h-[70px] fixed flex justify-items-center items-center px-8 z-[100] ${modeToggle}`}
        >
          <div className="w-auto h-auto text-2xl font-extrabold grow basis-0">
            <Link to="/">NEVERMIND</Link>
          </div>
          {/* 231113 정 : 간격 맘에 안들어서 나중에 바꿀 예정(evenly -> margin) */}
          <div className={`grow-[2] flex justify-evenly basis-0 w-3/6 `}>
            <div className={linkClass('/content')}>
              <Link to="/content">콘텐츠 코디</Link>
            </div>
            <div className={linkClass('/tpo')}>
              <Link to="/tpo">TPO 추천</Link>
            </div>
            <div className={linkClass('/style')}>
              <Link to="/style">스타일</Link>
            </div>
          </div>

          <div className="h-[30px] text-base font-normal grow basis-0 flex justify-end ">
            <button className="mt-[8px] mr-[15px]" onClick={handleLogout}>
              로그아웃
            </button>
            <div className="mt-[3px]">
              <IoPersonSharp size="30" />
            </div>
          </div>
        </div>
      ) : (
        //로그아웃 완료
        <div
          style={{
            backgroundColor: backgroundColor,
            transition: 'background-color 0.3s ease', // 여기에 transition 추가
          }}
          className={`w-full h-[70px] fixed flex justify-items-center items-center px-8 z-[100] ${modeToggle}`}
        >
          <div className="w-auto h-auto text-2xl font-extrabold grow basis-0">
            <Link to="/">NEVERMIND</Link>
          </div>
          {/* 231113 정 : 간격 맘에 안들어서 나중에 바꿀 예정(evenly -> margin) */}
          <div className="grow-[2] flex justify-evenly basis-0 w-3/6 ">
            <div className={linkClass('/content')}>
              <Link to="/content">콘텐츠 코디</Link>
            </div>
            <div className={linkClass('/tpo')}>
              <Link to="/tpo">TPO 추천</Link>
            </div>
            <div className={linkClass('/style')}>
              <Link to="/style">스타일</Link>
            </div>
          </div>

          <div className=" text-base font-normal grow text-end basis-0">
            <Link to="/sign">로그인</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;