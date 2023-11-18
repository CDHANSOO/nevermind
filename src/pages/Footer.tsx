import React from 'react'

const Footer: React.FC = () => {
    return (
        // 231118 정
        // 페이지 하단에 고정은 되는데.. 스크롤이 있는 페이지의 경우 중간에 고정되는 문제가 있음. 수정예정
        <div>
            <div className='absolute bottom-0 w-full flex items-end justify-center bg-transparent'>
                <p>Copyright 2023. 코딩한수 inc. all rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer