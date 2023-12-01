import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SvgSmile from '@components/contentPage/SvgSmile';
import SvgSad from '@components/contentPage/SvgSad';
import SvgRollingEyes from '@components/contentPage/SvgRollingEyes';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

// import Product from '@components/contentPage/Product';

// clothes 배열 type 정의 객체형태일때, key값 정의해주는 느낌
interface clothes {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}

//fastApiResponse Type 정의 => 객체형태일때, key값 정의해주는 느낌
interface fastApiResponseType {
  styleUrl: string;
  clothes: clothes[];
}

interface ContentDetailProps {
  result: string; // YourResultType은 실제로 result가 가지는 타입에 따라 정의되어야 합니다.
}

const ContentDetail: React.FC<ContentDetailProps> = () => {
  const location = useLocation();
  // const file = location.state?.file;

  const { result } = location.state;

  const [currentIndex, setCurrentIndex] = useState(0);

  // const fileUrl = file ? URL.createObjectURL(file) : '';

  const bgimg: React.CSSProperties = {
    backgroundImage: 'url("src/assets/Rectangle.png")',
  };

  if (!result || !result.fastApiResponse || !result.fastApiResponse[0]) {
    // result, result.fastApiResponse 또는 result.fastApiResponse[0]이 정의되지 않았을 때의 처리
    console.error('결과가 정의되지 않았거나 비어 있습니다.');
    return null; // 또는 에러 처리에 맞게 반환할 JSX를 지정하세요.
  }

  const r3: fastApiResponseType[] = result.fastApiResponse; // r3 = result3 축약

  console.log('이거는 콘텐츠디테일 : ', result); // 서버에서 가져온 정보
  console.log('이거는 큰 이미지 url : ', result.fastApiResponse[0].styleUrl); // 큰 이미지 url
  console.log('이거는 작은 이미지 url : ', r3[0].clothes[0][1]); // 작은 이미지 url
  console.log('이거는 브랜드 이름 : ', r3[0].clothes[0][2]); // 브랜드 이름
  console.log('이거는 제품이름 : ', r3[0].clothes[0][3]); // 제품이름
  console.log('이거는 가격 : ', r3[0].clothes[0][4]); // 가격


  const handleNextClick = () => {
    // Increment the currentIndex to show the next image
    setCurrentIndex((prevIndex) => (prevIndex + 1) % r3.length);
  };


  return (
    <div className="w-full h-[calc(100vh)]">
      <div className="w-full h-full bg-cover bg-no-repeat" style={bgimg}>
        <div className="relative w-full h-[calc(100vh-70px)] top-[70px] flex items-center">
          <div className="w-full h-5/6 mx-40 flex ">
          <button>
            <SlArrowLeft color="yellow"/>
          </button>
            {r3.map((response, index: number) => (
              <div key={index} className={`w-1/3 h-full ${index === currentIndex ? 'block' : 'hidden'}`}>
                <div className="aspect-[3/4] w-full h-full rounded-xl bg-gray-400 overflow-hidden">
                  <img src={response.styleUrl} alt={`Uploaded ${index}`} className="w-full h-full object-cover mr-4 shrink-0 basis-24" />
                </div>
              </div>
            ))}
            <button>
              <SlArrowRight color='yellow' onClick={handleNextClick} />
            </button>
            <div className="h-full flex flex-col justify-between">
              <div className="ml-8">
                <div className="mt-12">
                  <p className="text-white text-3xl font-bold mb-3 ml-4">{r3[currentIndex] && r3[currentIndex].clothes[0] && r3[currentIndex].clothes[0][6]} 분위기를 찾으셨나요?</p>
                  <p className="text-white text-xl font-normal ml-4">추천코디 입니다!</p>
                </div>
                <div className="p-2 mt-14 flex flex-wrap">
                  {r3[currentIndex].clothes.map((clothing, index: number) => (
                    !clothing ? <></> : 
                    <div key={index} className="w-[150px] h-[180px] left-0 top-0  bg-zinc-100 rounded-xl ml-[14px]">
                      <div className="aspect-[2/4] rounded-xl overflow-hidden bg-gray-200 flex flex-col ">
                        <div className="grow-[3] shrink basis-0 w-full bg-gray-100 overflow-hidden ">
                          <img src={clothing[1]} alt="의류정보이미지" className='h-full w-full object-cover'/>
                        </div>
                        {/* <div className="h-3/5 w-full bg-gray-100 overflow-hidden ">
                          <img src={clothing[1]} alt="의류정보이미지" />
                        </div> */}
                        <div className="grow-[2] shrink basis-0 p-2 h-full flex flex-col justify-around text-left grow-1">
                          <div className="text-neutral-700 text-[14px] text-bold font-['Pretendard']">{clothing[2]}</div>
                          <div className="pl-px pr-[3px] pt-0.5 pb-px justify-start items-center inline-flex">
                            <div className="text-neutral-800 text-xs font-semibold font-['Pretendard'] mb-5">{clothing[3]}</div>
                          </div>
                          <div className="text-neutral-800 text-xs font-semibold font-['Pretendard'] mb-5">{clothing[4]}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-12">
                <h2 className="text-neutral-100 text-xl font-medium mb-4">이 결과가 맞나요?</h2>
                <div className="flex gap-x-7">
                  <SvgSmile />
                  <SvgSad />
                  <SvgRollingEyes />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentDetail;
