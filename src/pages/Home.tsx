import MainCom from '@components/mainPage/MainCom';
import MainCom2 from '@components/mainPage/MainCom2';
import MainCom from '@components/mainPage/MainCom';
import MainCom2 from '@components/mainPage/MainCom2';
import React from 'react';
import IMG1 from '@assets/contents.png'
import IMG2 from '@assets/tpo.png'
import IMG3 from '@assets/style.png'
import IMG4 from '@assets/style.png' //이건 이미지 고치기

const Home = () => {
  
  return (
    <div className='flex flex-col gap-[50px] '>
      <MainCom img={IMG1}/>
      <MainCom2 img={IMG2}/>
      <MainCom img={IMG3}/>
      <MainCom2 img={IMG4}/>
    </div>
  );
};

export default Home;
