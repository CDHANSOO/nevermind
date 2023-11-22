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

// 231122 정은우
// 캐러셀 자체를 컴포넌트화 한 다음에 props로 보내는 이미지 배열만 바꾸어서 재사용성을 늘리는 방안도 좋을 듯.
// 그러나 지금 당장은 구현을 위해 잠깐 보류 
const DragCarousel: React.FC = () => {
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
          <div className='flex w-full overflow-auto ' key={index}>
            <div className='w-full h-auto rounded-xl'>
              <div className='w-full aspect-[4/3] bg-gray-300 rounded-xl relative overflow-hidden'>
                <img src={image} alt={`Slide ${index}`} className='absolute h-fit object-contain' />
              </div>
            </div>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default DragCarousel;
