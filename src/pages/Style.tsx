import React from 'react'
import '../styles/Style.css'
import SimpleCarousel from '../components/stylePage/SimpleCarousel'
import DragCarousel from '../components/stylePage/DragCarousel'
import InfluencerCarousel from '../components/stylePage/InfluencerCarousel'
import CodyFleece from '@/assets/style/cody/플리스-cody.jpg'
import CodyCristmas from '@/assets/style/cody/크리스마스-cody.jpg'
import InfluencerBannerString from '@components/stylePage/InfluencerBannerString'


const Style: React.FC = () => {

    return (
        <div className='absolute w-full h-[calc(100vh-70px)] top-[70px] px-20'>
            <div className='relative'>
                <div>
                    <div className='mt-8'>
                        <h2 className='text-2xl font-extrabold'>NEVERMIND</h2>
                        <p className='text-gray-600'>트렌드를 따라가는 것, 멋있는 일이지만 동시에 번거로운 일이죠.<br />
                            놀랍도록 간단하게 실시간 인기 있는 패션들을 살펴보세요</p>
                    </div>
                    <SimpleCarousel/>
                </div>
                <div className='mt-24'>
                    <h2 className='text-2xl font-extrabold mb-4'>지금 핫한 바로 그 코디</h2>
                    <DragCarousel />
                </div>
                <div className='mt-24 grid grid-cols-4 gap-x-4 style-banner'>
                    <div className=' col-start-1 col-end-3'>
                        <div className='bg-gray-300 h-[500px] overflow-hidden relative'>
                            <img src={CodyFleece} className='w-full h-full object-cover ' />
                        </div>
                        <h2 className='text-2xl font-extrabold'>추운 겨울날엔 플리스</h2>
                    </div>
                    <div className=' col-start-3 col-end-5'>
                        <div className='bg-gray-300 h-[500px] overflow-hidden'>
                            <img src={CodyCristmas} className='w-full h-full object-cover' />
                        </div>
                        <h2 className='text-2xl font-extrabold'>크리스마스에 입기 좋은 바로 그 코디</h2>
                    </div>
                </div>
                <div className='my-24'>
                    <InfluencerBannerString bannerText='셀럽들의 코디'/>
                    <InfluencerCarousel />
                </div>
            </div>

        </div>
    )
}

export default Style;
