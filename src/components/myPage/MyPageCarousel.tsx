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


interface MyPageCarouselProps {
  h2Text: string;
}

// 231122 정은우: 받아오는 이미지 객체의 타입을 정의하는 곳. 그러나 제대로 받아와지지 않아서 주석 처리함. 
// interface ImageModules {
//   [key: string]: string;
// }
const MyPageCarousel: React.FC<MyPageCarouselProps> = ({ h2Text }) => {
  // 231122 정은우: 이미지가 받아와지지 않아서, 일단 주석 
  // 동적으로 이미지를 가져오는 함수
  // const importAll = (
  //   importFunction: Record<
  //     string,
  //     { default: string; } | (() => Promise<{ default: string; }>)
  //   >
  // ) => {
  //   const images: ImageModules = {};
  //   for (const path in importFunction) {
  //     const importResult = importFunction[path];
  //     if (typeof importResult === 'function') {
  //       // importResult가 함수인 경우 (프로미스를 반환하는 함수로 처리)
  //       importResult().then(module => {
  //         images[path.replace('./', '')] = module.default;
  //       });
  //     } else {
  //       // importResult가 함수가 아닌 경우 (모듈 객체로 처리)
  //       images[path.replace('./', '')] = importResult.default;
  //     }
  //   }
  //   return images;
  // };

  // const images = importAll(import.meta.glob('../assets/*.{png,jpeg,svg}', { eager: true }));
  // // 객체를 배열로 변환
  // const imagesArray = Object.values(images);
  // // 사용 예시
  // console.log(imagesArray);

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
  console.log(h2Text)

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <h2 className='text-2xl font-extrabold mb-4'>{h2Text}</h2>
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
              <div className='w-full aspect-square bg-gray-300 rounded-xl relative overflow-hidden'>
                <img src={image} alt={`Slide ${index}`} className='absolute h-fit object-contain' />
              </div>
            </div>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default MyPageCarousel;
