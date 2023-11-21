import MainCom from '@components/mainPage/MainCom';
import MainCom2 from '@components/mainPage/MainCom2';
import React from 'react';


const Home: React.FC = () => {
  
  return (
    <div className='flex flex-col gap-[50px] '>
      <MainCom/>
      <MainCom2/>
      <MainCom/>
      <MainCom2/>
    </div>
  );
};

export default Home;
