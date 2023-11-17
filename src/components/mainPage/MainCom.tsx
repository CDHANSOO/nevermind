import React from 'react';
import { Link } from 'react-router-dom';

const MainCom = () => {
  return (
    <>
      <section>
        <div className="w-[1440px] h-[1024px] relative bg-white">
          <div className='w-[676px] h-[80%] ml-[200px] mt-[72px] absolute bg-[url("src/assets/main1.png")] bg-cover' />
          <div className="w-[300px] h-[300px] absolute ml-[400px] mt-[300px] bg-[white] bg-opacity-80">
            <div className="w-full h-[300px] text-[30px] flex justify-center items-center">코디 어쩌고 저쩌고 블라블라</div>
          </div>
          <div className='w-[80%] h-[80%] ml-[950px] mt-[72px] absolute bg-[url("src/assets/main2.png")] bg-cover' />
          <Link to="/content">
            <button className="p-[10px] ml-[1300px] mt-[150px] absolute text-white text-[25px] border border-white">시작하기</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MainCom;
