import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from 'atom/atom';
import { IoPersonSharp } from 'react-icons/io5';

const NavigationBar: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const [isLogin,setIsLogin] = useRecoilState(loginState);

    const handleLogout = () => {
      alert('로그아웃 완료')
      setIsLogin(false)

    }

  useEffect(() => {
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
  }, []);

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
          className="w-full h-[70px] fixed flex justify-items-center items-center px-8 z-[100]"
        >
          <div className="w-auto h-auto text-neutral-800 text-2xl font-extrabold grow basis-0">
            <Link to="/">NEVERMIND</Link>
          </div>
          {/* 231113 정 : 간격 맘에 안들어서 나중에 바꿀 예정(evenly -> margin) */}
          <div className="grow-[2] flex justify-evenly basis-0 w-3/6 ">
            <div className="text-neutral-800 text-base font-normal ">
              <Link to="/content">콘텐츠 코디</Link>
            </div>
            <div className="text-neutral-800 text-base font-normal ">
              <Link to="/tpo">TPO 추천</Link>
            </div>
            <div className="text-neutral-800 text-base font-normal ">
              <Link to="/style">스타일</Link>
            </div>
          </div>

          <div className="h-[30px] text-neutral-800 text-base font-normal grow basis-0 flex justify-end =">
            <button className="mt-[8px] mr-[15px]" onClick={handleLogout}>로그아웃</button>
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
          className="w-full h-[70px] fixed flex justify-items-center items-center px-8 z-[100]"
        >
          <div className="w-auto h-auto text-neutral-800 text-2xl font-extrabold grow basis-0">
            <Link to="/">NEVERMIND</Link>
          </div>
          {/* 231113 정 : 간격 맘에 안들어서 나중에 바꿀 예정(evenly -> margin) */}
          <div className="grow-[2] flex justify-evenly basis-0 w-3/6 ">
            <div className="text-neutral-800 text-base font-normal ">
              <Link to="/content">콘텐츠 코디</Link>
            </div>
            <div className="text-neutral-800 text-base font-normal ">
              <Link to="/tpo">TPO 추천</Link>
            </div>
            <div className="text-neutral-800 text-base font-normal ">
              <Link to="/style">스타일</Link>
            </div>
          </div>

          <div className="text-neutral-800 text-base font-normal grow text-end basis-0">
            <Link to="/sign">로그인</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
