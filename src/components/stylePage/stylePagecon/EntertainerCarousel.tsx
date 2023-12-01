import React, { useState, useEffect, useCallback } from 'react';
import ItemsCarousel from 'react-items-carousel';
import entertainer1 from '@assets/style/cody/entertainer/2cheonga.jpg'
import entertainer2 from '@assets/style/cody/entertainer/2donghwi.jpg'
import entertainer3 from '@assets/style/cody/entertainer/hoyeon.jpg'
import entertainer4 from '@assets/style/cody/entertainer/pky.jpg'
import entertainer5 from '@assets/style/cody/entertainer/rjy.jpg'



const EntertainerCarousel: React.FC = () => {
    const images: string[] = [
      entertainer1,
      entertainer2,
      entertainer3,
      entertainer4,
      entertainer5,
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

export default EntertainerCarousel;
