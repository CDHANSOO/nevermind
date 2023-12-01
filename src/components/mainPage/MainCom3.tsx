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
  const animationClass2 = inView ? 'animate-fadeIn2' : '';

  return (
    <div className={`relative w-full h-[clac(100vh-70px)] top-[70px] ${animationClass}`} ref={ref}>
      <div className="flex justify-center">
        <div className={`pl-[100px] w-[720px] h-[720px] bg-[white] flex flex-col justify-center item-center rounded-[10px] mr-[25px] ${animationClass}`}>
          <div className={`animate-box ${animationClass}`}>
            <span className="p-[10px] bg-[#9fedf7] text-[#4d9acf] rounded-[10px]">다양한 스타일 추천</span>
          </div>
          <h2 className='text-5xl font-extrabold mt-[20px]'>코디를 추천해주는<br />플랫폼이 필요하신가요?</h2>
          <p className={`mt-[10px] ${animationClass}`}>
            현재 계절에 어울리는 코디 , 셀럽들이 입은 코디 , 현재 유행하는 스타일 등 <br />
            다양한 스타일 정보를 제공합니다.
          </p>
          <Link to={link}>
            <div className={`w-[500px] h-[96px] flex items-center bg-[#fafafa] rounded-[10px] ${animationClass}`}>
              <div className={`text-3xl font-black ml-[10px] ${animationClass}`}>NEVERMIND</div>
              <div className={`ml-[20px] mt-[3px] bg-[#9fedf7] p-[8px] rounded-[10px] hover:scale-110 ${animationClass}`}>시작하기</div>
              <div className={`ml-[200px] ${animationClass}`}>
                <IoIosArrowForward />
              </div>
            </div>
          </Link>
        </div>
        <div className={`w-[720px] h-[720px] ml-[25px] ${animationClass2}`}>
          <img src={img} className={`w-full h-full rounded-[20px] ${animationClass2}`} />
        </div>
      </div>
    </div>
  );
};

export default MainCom;