import MainCom from '@components/mainPage/MainCom';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <MainCom/>
      <section>
        <div className="w-[1440px] h-[1024px] relative bg-white">
          <div className='w-[676px] h-[80%] ml-[200px] mt-[72px] absolute bg-[url("src/assets/main1.png")] bg-cover' />
          <div className="w-[300px] h-[300px] absolute ml-[400px] mt-[300px] bg-[white] bg-opacity-80">
            <div className='w-full h-[300px] text-[30px] flex justify-center items-center'>DRAG & DROP 으로 간편하게 어쩌고 저쩌고 블라블라</div>
          </div>
          <div className='w-[80%] h-[80%] ml-[950px] mt-[72px] absolute bg-[url("src/assets/ex_CON.png")] bg-center' />
          <Link to="/tpo">
            <button className="p-[10px] ml-[1270px] mt-[200px] absolute text-black text-[25px] border border-black">시작하기</button>
          </Link>
        </div>
      </section>
      <section>
        <div className="w-[1440px] h-[1024px] relative bg-white">
          <div className='w-[676px] h-[80%] ml-[200px] mt-[72px] absolute bg-[url("src/assets/main1.png")] bg-cover' />
          <div className="w-[300px] h-[300px] absolute ml-[400px] mt-[300px] bg-[white] bg-opacity-80">
            <div className='w-full h-[300px] text-[30px] flex justify-center items-center'>상황에 맞게 블라블라</div>
          </div>
          <div className='w-[80%] h-[80%] ml-[950px] mt-[72px] absolute bg-[url("src/assets/ex_TPO.png")] bg-center' />
          <Link to="/tpo">
            <button className="p-[10px] ml-[1270px] mt-[200px] absolute text-black text-[25px] border border-black">시작하기</button>
          </Link>
        </div>
      </section>
      <section>
        <div className="w-[1440px] h-[1024px] relative bg-white">
          <div className='w-[676px] h-[80%] ml-[200px] mt-[72px] absolute bg-[url("src/assets/main1.png")] bg-cover' />
          <div className="w-[300px] h-[300px] absolute ml-[400px] mt-[300px] bg-[white] bg-opacity-80">
            <div className='w-full h-[300px] text-[30px] flex justify-center items-center'>스타일이 고민이라면 블라블라</div>
          </div>
          <div className='w-[80%] h-[80%] ml-[950px] mt-[72px] absolute bg-[url("src/assets/ex_Style.png")] bg-center' />
          <Link to="/style">
            <button className="p-[10px] ml-[1450px] mt-[200px] absolute text-black text-[25px] border border-black">시작하기</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
