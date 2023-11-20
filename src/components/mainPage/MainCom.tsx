import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const MainCom = () => {
  return (
    <>
      <div className='mt-[100px] flex justify-center'>
        <div className='pl-[20px] w-[720px] h-[720px] bg-[white] border-black border-[1px] flex flex-col justify-center item-center rounded-[10px] mr-[25px]'>
          <div className=''>
            <span className='p-[10px] bg-[#edeafd] text-[#7453ea] rounded-[10px]'>
              STYLE 추천 플랫폼
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mt-[20px]'>코디를 추천해주는<br />플랫폼이 필요하신가요?</h2>
          <p className='mt-[10px]'>간단한 사진 및 텍스트를 통해서, 효율적인 코디를 추천받아보세요. <br /> 만족하는 차별화된 코디추천 서비스를 제공합니다.</p>
          <Link to={'/content'} >
            <div className='w-[500px] h-[96px] flex items-center bg-[#fafafa] rounded-[10px]'>
                <div className='text-3xl font-black ml-[10px]'>NEVERMIND</div>
                <div className='ml-[20px] mt-[3px] bg-[#edeafd] p-[8px] rounded-[10px] hover:scale-110'>시작하기</div>
                <div className='ml-[200px] '>
                  <IoIosArrowForward/>
                </div>
            </div>
          </Link>
        </div>
        <div className='w-[720px] h-[720px] bg-[url("/src/assets/loginImg.png")] bg-cover rounded-[10px] ml-[25px]'></div>
      </div>
    </>
  );
};

export default MainCom;
