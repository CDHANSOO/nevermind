import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white">
      <div className='w-[676px] h-[80%] ml-[200px] mt-[72px] absolute bg-[url("src/assets/main1.png")] bg-cover' />
      <div className='w-[706px] h-[80%] ml-[950px] mt-[72px] absolute bg-[url("src/assets/main2.png")] bg-cover' />
      <Link to='/content'><button className="p-[10px] ml-[1270px] mt-[300px] absolute text-white text-[25px] border border-white">시작하기</button></Link>
    </div>
  );
};

export default Home;
