import React, { useState, useEffect, useCallback } from 'react';
import ItemsCarousel from 'react-items-carousel';
import StyleInfluencerImage01 from '@/assets/style/cody/KakaoTalk_20231115_144323229.jpg'
import StyleInfluencerImage02 from '@/assets/style/cody/KakaoTalk_20231115_144323229_01.jpg'
import StyleInfluencerImage03 from '@/assets/style/cody/KakaoTalk_20231115_144323229_02.jpg'
import StyleInfluencerImage04 from '@/assets/style/cody/KakaoTalk_20231115_144323229_03.jpg'
import StyleInfluencerImage05 from '@/assets/style/cody/KakaoTalk_20231115_144323229_04.jpg'
import StyleInfluencerImage06 from '@/assets/style/cody/KakaoTalk_20231115_144323229_05.jpg'
import StyleInfluencerImage07 from '@/assets/style/cody/KakaoTalk_20231115_144323229_06.jpg'
import StyleInfluencerImage08 from '@/assets/style/cody/KakaoTalk_20231115_144323229_07.jpg'
import StyleInfluencerImage09 from '@/assets/style/cody/KakaoTalk_20231115_144323229_08.jpg'

const InfluencerCarousel: React.FC = () => {
    const images: string[] = [
        StyleInfluencerImage01,
        StyleInfluencerImage02,
        StyleInfluencerImage03,
        StyleInfluencerImage04,
        StyleInfluencerImage05,
        StyleInfluencerImage06,
        StyleInfluencerImage07,
        StyleInfluencerImage08,
        StyleInfluencerImage09,
    ];

    const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
    const chevronWidth: number = 0;

    const [numOfCards, setNumOfCards] = useState<number>(4);
    const [gutter, setGutter] = useState<number>(28);

    // 디바운싱을 위한 함수 타입 정의 및 `any` 타입 사용 제거
    const debounce = (func: () => void, wait: number): (() => void) => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        return function executedFunction() {
            const later = () => {
                clearTimeout(timeout!);
                func();
            };
            clearTimeout(timeout!);
            timeout = setTimeout(later, wait);
        };
    };

    const resize = useCallback(debounce(() => {
        const width = window.innerWidth;
        if (width < 300) {
            setNumOfCards(1);
            setGutter(0);
        } else if (width < 500) {
            setNumOfCards(2);
        } else if (width < 768) {
            setGutter(14);
        } else if (width < 1024) {
            setNumOfCards(2);
        } else if (width < 1300) {
            setNumOfCards(3);
        } else {
            setNumOfCards(4);
        }
    }, 250), []);

    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [resize]);

    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={numOfCards}
                gutter={gutter}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {images.map((image, index) => (
                    <div className='flex w-full overflow-auto '>
                        <div className='w-full h-auto rounded-xl'>
                            <div className='aspect-[3/4] bg-gray-300 rounded-xl relative overflow-hidden'>
                                <img src={image} alt={`Slide ${index}`} className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                ))}
            </ItemsCarousel>
        </div>
    );
};

export default InfluencerCarousel;
