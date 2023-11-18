import React from 'react'

const Product: React.FC = () => {
    return (
        <div className="w-[150px] h-[181px] relative">
            <div className="w-[150px] h-[181px] left-0 top-0 absolute bg-zinc-100 rounded-[10px]" />
            <div className="w-[150px] h-[181px] left-0 top-0 absolute flex-col justify-start items-start flex">
                <div className="w-[150px] h-[200px] relative">
                    <div className="w-[150px] h-[200px] left-0 top-0 absolute bg-zinc-100 rounded-[10px]" />
                    <div className="w-[189px] h-[136px] left-[-20px] top-[-23px] absolute bg-zinc-300" />
                </div>
                <div className="text-neutral-700 text-[8px] font-light font-['Pretendard']">캐주얼</div>
                <div className="pl-px pr-[3px] pt-0.5 pb-px justify-center items-center inline-flex">
                    <div className="text-neutral-800 text-xs font-semibold font-['Pretendard']">오아이오아이 시그니쳐 데님</div>
                </div>
                <div className="text-neutral-800 text-xs font-semibold font-['Pretendard']">89,100 원</div>
            </div>
        </div>
    )
}

export default Product