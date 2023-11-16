import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white">
      <div className='w-[676px] h-[80%] ml-[200px] mt-[72px] absolute bg-[url("src/assets/main1.png")] bg-cover' />
      <div className='w-[706px] h-[80%] ml-[950px] mt-[72px] absolute bg-[url("src/assets/main2.png")] bg-cover' />
      <div className="p-[14px] ml-[1270px] mt-[300px] absolute text-white text-[25px] border border-white">시작하기</div>
    </div>
  );
};

export default Home;
