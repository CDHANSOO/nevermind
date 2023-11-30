import React from 'react'



const Product: React.FC = () => {
    return (
        <div className="w-[150px] h-[180px] left-0 top-0  bg-zinc-100 rounded-xl" >
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-300">
                <div className='h-3/5 w-full bg-gray-100'>
                    <img className='overflow-hidden '/>
                </div>
                <div className='p-2 '>
                    <div className="text-neutral-700 text-[8px] font-light font-['Pretendard']">캐주얼</div>
                    <div className="pl-px pr-[3px] pt-0.5 pb-px justify-center items-center inline-flex">
                        <div className="text-neutral-800 text-xs font-semibold font-['Pretendard']">오아이오아이 시그니쳐 데님</div>
                    </div>
                    <div className="text-neutral-800 text-xs font-semibold font-['Pretendard']">89,100 원</div>
                </div>
            </div>
        </div>
    )
}

export default Product