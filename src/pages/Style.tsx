import React from 'react'
import '../styles/Style.css'
import SimpleCarousel from '../components/stylePage/SimpleCarousel'
import DragCarousel from '../components/stylePage/DragCarousel'
import InfluencerCarousel from '../components/stylePage/InfluencerCarousel'

const Style: React.FC = () => {

    return (
        <div className='px-20'>
            <div>
                <div className='mt-8'>
                    <h2 className='text-2xl font-extrabold'>NEVERMIND</h2>
                    <p className='text-gray-600'>트렌드를 따라가는 것, 멋있는 일이지만 동시에 번거로운 일이죠.<br />
                        놀랍도록 간단하게 실시간 인기 있는 패션들을 살펴보세요</p>
                </div>
                <SimpleCarousel></SimpleCarousel>
            </div>
            <div className='mt-24'>
                <h2 className='text-2xl font-extrabold mb-4'>지금 핫한 바로 그 코디</h2>
                {/* <div className='pr-4 flex w-full overflow-auto'>
                    <div className='min-w-[25%] h-auto pr-3'>
                        <div className='aspect-[4/3] bg-gray-300 rounded-xl'></div>
                    </div>
                    <div className='min-w-[25%] h-full pr-3'>
                        <div className='aspect-[4/3] bg-gray-300 rounded-xl'></div>
                    </div>
                    <div className='min-w-[25%] h-full pr-3'>
                        <div className='aspect-[4/3] bg-gray-300 rounded-xl'></div>
                    </div>
                    <div className='min-w-[25%] h-full pr-3'>
                        <div className='aspect-[4/3] bg-gray-300 rounded-xl'></div>
                    </div>
                    <div className='min-w-[25%] h-full pr-3'>
                        <div className='aspect-[4/3] bg-gray-300 rounded-xl'></div>
                    </div>
                </div> */}
                <DragCarousel/>
            </div>
            <div className='mt-24 grid grid-cols-4 gap-x-4 style-banner'>
                <div className=' col-start-1 col-end-3'>
                    <div className='bg-gray-300 h-[500px]'></div>
                    <h2 className='text-2xl font-extrabold'>추운 겨울날엔 플리스</h2>
                </div>
                <div className=' col-start-3 col-end-5'>
                    <div className='bg-gray-300 h-[500px]'></div>
                    <h2 className='text-2xl font-extrabold'>크리스마스에 입기 좋은 바로 그 코디</h2>
                </div>
            </div>
            <div className='my-24'>
                <div>
                    <h2 className='text-2xl font-extrabold mb-4'>셀럽들의 코디</h2>
                    <div className='mb-3 w-fit'>
                        <ul className='inline-flex justify-start items-start gap-3'>
                            <li className='text-base font-bold'>
                                인플루언서
                            </li>
                            <li className='text-base font-bold'>
                                걸그룹
                            </li>
                            <li className='text-base font-bold'>
                                보이그룹
                            </li>
                            <li className='text-base font-bold'>
                                유명인
                            </li>
                            <li className='text-base font-bold'>
                                연예인
                            </li>
                        </ul>
                        <div className='w-full h-[2px] bg-gray-300'></div>
                    </div>
                </div>
                <InfluencerCarousel/>
                {/* <div className='pr-4 flex w-full overflow-auto'>
                    <div className='min-w-[25%] h-auto pr-3'>
                        <div className='aspect-[3/4] bg-gray-300 rounded-xl'></div>
                    </div>
                    <div className='min-w-[25%] h-full pr-3'>
                        <div className='aspect-[3/4] bg-gray-300 rounded-xl'></div>
                    </div>
                    <div className='min-w-[25%] h-full pr-3'>
                        <div className='aspect-[3/4] bg-gray-300 rounded-xl'></div>
                    </div>
                    <div className='min-w-[25%] h-full pr-3'>
                        <div className='aspect-[3/4] bg-gray-300 rounded-xl'></div>
                    </div>
                    <div className='min-w-[25%] h-full pr-3'>
                        <div className='aspect-[3/4] bg-gray-300 rounded-xl'></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Style