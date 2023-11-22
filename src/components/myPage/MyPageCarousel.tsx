import React, { useState, useEffect, useCallback } from 'react';
import ItemsCarousel from 'react-items-carousel';

interface MyPageCarouselProps {
  h2Text: string;
}
interface ImageModules {
  [key: string]: {
    default: string;
  };
}
const MyPageCarousel: React.FC<MyPageCarouselProps> = ({ h2Text }) => {

  // 동적으로 이미지를 가져오는 함수
  const importAll = (importFunction: Record<string, () => Promise<{ default: string }>>) => {
    const images: ImageModules = {};
    for (const path in importFunction) {
      importFunction[path]().then(module => {
        images[path.replace('./', '')] = module.default;
      });
    }
    return images;
  };

  // Vite의 import.meta.glob 함수를 사용하여 '/assets' 디렉토리의 모든 이미지를 가져옵니다.
  const images = importAll(import.meta.glob('../assets/*.{png,jpeg,svg}', { eager: true }));

  // 사용 예시
  console.log(images);


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
