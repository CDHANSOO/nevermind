import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    const [backgroundColor, setBackgroundColor] = useState<string>('transparent');

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
        <div style={{
            backgroundColor: backgroundColor,
            transition: 'background-color 0.3s ease' // 여기에 transition 추가
        }}
            className="w-full h-[70px] fixed flex justify-items-center items-center px-8 realative z-[100]"
        >
            <div className="w-auto h-auto text-neutral-800 text-2xl font-extrabold grow basis-0">
                <Link to='/'>NEVERMIND</Link>
            </div>
            {/* 231113 정 : 간격 맘에 안들어서 나중에 바꿀 예정(evenly -> margin) */}
            <div className='grow-[2] flex justify-evenly basis-0 w-3/6 '>
                <div className="text-neutral-800 text-base font-normal ">
                    <Link to='/content'>콘텐츠 코디</Link></div>
                <div className="text-neutral-800 text-base font-normal ">
                    <Link to='/top'>TPO 추천</Link></div>
                <div className="text-neutral-800 text-base font-normal ">
                    <Link to='/style'>스타일</Link></div>
            </div>

            <div className="text-neutral-800 text-base font-normal grow text-end basis-0">
                <Link to='/mypage'>SIGN IN</Link></div>
        </div >
    )
}

export default NavigationBar