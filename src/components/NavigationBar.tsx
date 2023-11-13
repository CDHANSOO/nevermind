import React from 'react'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="w-full h-[70px] relative fixed flex justify-items-center items-center px-8">
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

            <div className="text-neutral-800 text-base font-normal grow text-end basis-0">SIGN IN</div>
        </div >
    )
}

export default NavigationBar