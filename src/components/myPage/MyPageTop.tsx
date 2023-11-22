import React from 'react'

import { Link, useLocation } from 'react-router-dom'

const MyPageTop: React.FC = () => {
    const location = useLocation();

    // 현재 경로와 링크의 경로를 비교하여 클래스를 조건부로 적용
    const linkClass = (path: string) =>
        location.pathname === path ? 'font-bold' : 'text-base'
            

    return (
        <div className='w-3/5 bg-gray-300'>
            <div className='flex flex-col items-center mt-32 mb-28'>
                <div className='rounded-full w-32 aspect-square bg-gray-400'></div>
                <div className='text-center mt-3'>
                    <h2 className='text-center text-black text-2xl font-bold'>OOO님</h2>
                    <p className='text-center text-neutral-400 text-xs font-normal mt-2'>2020.11.11</p>
                </div>
            </div>
            <ul className='flex'>
                <li className='mr-3'>
                    <Link to='/mypage/myheart' className={linkClass('/mypage/myheart')}>나의 찜</Link>
                </li>
                <li>
                    <Link to='/mypage/dashboard' className={linkClass('/mypage/dashboard')}>성향 분석</Link>
                </li>
            </ul>
            <div className='border-t-2 border-slate-400'>
            </div>
        </div >
    )
}

export default MyPageTop