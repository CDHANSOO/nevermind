import React from 'react';
import { Link } from 'react-router-dom';

const MainCom = ({ment, link}) => {
  return (
    <>
      <div className="flex justify-center mr-[700px]">
        <div className="w-[1440px] h-[1024px] relative bg-white">
          <div className="w-[676px] h-[80%] mt-[72px] absolute" />
          <div className="w-[300px] h-[300px] absolute ml-[200px] mt-[300px] bg-[white] bg-opacity-80">
            <div className="w-full h-[300px] text-[30px] flex justify-center items-center">{ment}</div>
            <Link to={link}>
              <button className="text-black text-[25px] border border-black">시작하기</button>
            </Link>
          </div>
          <div className='w-[80%] h-[80%] ml-[750px] mt-[72px] absolute bg-[url("src/assets/main2.png")] bg-center bg-cover rounded-[50px]' />
        </div>
      </div>
    </>
  );
};

export default MainCom;
