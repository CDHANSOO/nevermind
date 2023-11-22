import React, { useState, useRef } from 'react';
import StyleTopBannerImg01 from '@/assets/style/topBanner/dylann-hendricks-73uFwwV9tkY-unsplash.jpg'
import StyleTopBannerImg02 from '@/assets/style/topBanner/laura-thonne-NU2hM0mMfRM-unsplash.jpg'
import StyleTopBannerImg03 from '@/assets/style/topBanner/levi-stute-aXLdlvbJxY0-unsplash.jpg'
import StyleTopBannerImg04 from '@/assets/style/topBanner/yifei-wong-o7hMokGlGVg-unsplash.jpg'

const SimpleCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images: string[] = [
    StyleTopBannerImg02,
    StyleTopBannerImg01,
    StyleTopBannerImg03,
    StyleTopBannerImg04,
  ];

  const handleNext: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrev: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  // dragcarausel 구현
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.clientX);
    e.currentTarget.style.cursor = 'grabbing';
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.clientX === 0) return; // 마우스가 화면 밖으로 나갔을 경우 무시
    const translate = currentTranslate + e.clientX - startX;
    e.currentTarget.style.transform = `translateX(${translate}px)`;
  };

  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.cursor = 'grab';
    // 드래그 종료 후 상태 업데이트 및 애니메이션 처리 로직
  };


  return (
    // 231116 정
    // 화면 배율을 90% 이하로 줄였을 때, 우측 공간이 남는 문제 발생. 추후 수정 예정
    <div className='style-slider relative flex overflow-hidden z-10'>
       <div 
      ref={carouselRef} 
      onMouseDown={handleDragStart} 
      onMouseMove={handleDragMove} 
      onMouseUp={handleDragEnd} 
      onMouseLeave={handleDragEnd}
      style={{ display: 'flex', cursor: 'grab', overflow: 'hidden' }}
    >

      <div className='flex transition-transform w-full' style={{ transform: `translateX(-${currentIndex * 100}%)` , minWidth: '100%' } }>
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 h-[500px] bg-gray-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img src={image} alt={`Slide ${index}`} className='w-full h-full object-cover' />
          </div>
        ))}
      </div>
      <button
        className='absolute top-1/2 left-2 transform -translate-y-1/2 px-2 py-1 border border-gray-300'
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className='absolute top-1/2 right-2 transform -translate-y-1/2 px-2 py-1 border border-gray-300'
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
    </div>
  );
};

export default SimpleCarousel;