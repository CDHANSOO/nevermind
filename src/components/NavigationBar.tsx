import React from 'react'
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    return (
        <div className="w-full h-[70px] fixed flex justify-items-center items-center px-8 z-20 left-[0] top-[0]">
            <div className="w-auto h-auto text-neutral-800 text-2xl font-extrabold grow basis-0">
                <Link to='/'>NEVERMIND</Link>
            </div>
            {/* 231113 정 : 간격 맘에 안들어서 나중에 바꿀 예정(evenly -> margin) */}
            <div className='grow-[2] flex justify-evenly basis-0 w-3/6 '>
                <div className="text-neutral-800 text-base font-normal ">
                    <Link to='/content'>콘텐츠 코디</Link></div>
                <div className="text-neutral-800 text-base font-normal ">
                    <Link to='/tpo'>TPO 추천</Link></div>
                <div className="text-neutral-800 text-base font-normal ">
                    <Link to='/style'>스타일</Link></div>
            </div>

            <div className="text-neutral-800 text-base font-normal grow text-end basis-0">
                <Link to='/sign'>SIGN IN</Link>
            </div>
        </div >
    )
}

export default NavigationBar