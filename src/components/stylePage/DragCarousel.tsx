import React, { useState, useEffect, useCallback } from 'react';
import ItemsCarousel from 'react-items-carousel';

const DragCarousel: React.FC = () => {
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
        {/* 이 부분은 나중에 이미지 배열로 받아서 map으로 반복시키면 될 듯  */}
        <div className='flex w-full overflow-auto'>
          <div className='w-full h-auto'>
            <div className='aspect-[3/3] bg-gray-300 rounded-xl'></div>
          </div>
        </div>
        <div className='flex w-full overflow-auto'>
          <div className='w-full h-auto'>
            <div className='aspect-[3/3] bg-gray-300 rounded-xl'></div>
          </div>
        </div>
        <div className='flex w-full overflow-auto'>
          <div className='w-full h-auto'>
            <div className='aspect-[3/3] bg-gray-300 rounded-xl'></div>
          </div>
        </div>
        <div className='flex w-full overflow-auto'>
          <div className='w-full h-auto'>
            <div className='aspect-[3/3] bg-gray-300 rounded-xl'></div>
          </div>
        </div>
        <div className='flex w-full overflow-auto'>
          <div className='w-full h-auto'>
            <div className='aspect-[3/3] bg-gray-300 rounded-xl'></div>
          </div>
        </div>

      </ItemsCarousel>
    </div>
  );
};

export default DragCarousel;
