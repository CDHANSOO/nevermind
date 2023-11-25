// MainCom.js
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { useInView } from 'react-intersection-observer';
import '../../animationcss/mainCom.css';

interface Props {
  img: string
  link: string
}

const MainCom = ({ img, link }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationClass = inView ? 'animate-fadeIn' : '';

  return (
    <div className={`relative w-full h-[clac(100vh-70px)] top-[70px] ${animationClass}`} ref={ref}>
      <div className="flex justify-center">
        <div className={`pl-[100px] w-[720px] h-[720px] bg-[white] flex flex-col justify-center item-center rounded-[10px] mr-[25px] ${animationClass}`}>
          <div className={`animate-box ${animationClass}`}>
            <span className="p-[10px] bg-[#edeafd] text-[#7453ea] rounded-[10px]">STYLE 추천 플랫폼</span>
          </div>
          <h2 className='text-5xl font-extrabold mt-[20px]'>코디를 추천해주는<br />플랫폼이 필요하신가요?</h2>
          <p className={`mt-[10px] ${animationClass}`}>
            간단한 사진 및 텍스트를 통해서, 효율적인 코디를 추천받아보세요. <br />
            만족하는 차별화된 코디추천 서비스를 제공합니다.
          </p>
          <Link to={link}>
            <div className={`w-[500px] h-[96px] flex items-center bg-[#fafafa] rounded-[10px] ${animationClass}`}>
              <div className={`text-3xl font-black ml-[10px] ${animationClass}`}>NEVERMIND</div>
              <div className={`ml-[20px] mt-[3px] bg-[#edeafd] p-[8px] rounded-[10px] hover:scale-110 ${animationClass}`}>시작하기</div>
              <div className={`ml-[200px] ${animationClass}`}>
                <IoIosArrowForward />
              </div>
            </div>
          </Link>
        </div>
        <div className={`w-[720px] h-[720px] ml-[25px] ${animationClass}`}>
          <img src={img} className={`w-full h-full rounded-[20px] ${animationClass}`} />
        </div>
      </div>
    </div>
  );
};

export default MainCom;