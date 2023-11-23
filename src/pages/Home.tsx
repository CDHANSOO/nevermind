import MainCom from '@components/mainPage/MainCom';
import MainCom2 from '@components/mainPage/MainCom2';
import Video from '@components/mainPage/Video';
import React from 'react';
import IMG1 from '@assets/contents.png'
import IMG2 from '@assets/tpo.png'
import IMG3 from '@assets/style.png'
import IMG4 from '@assets/style.png' //이건 이미지 고치기

const Home = () => {
  
  return (
    <div className='flex flex-col gap-[50px] '>
      <Video/>
      <MainCom img={IMG1} link={'/content'}/>
      <MainCom2 img={IMG2} link={'/tpo'}/>
      <MainCom img={IMG3} link={'/style'}/>
      <MainCom2 img={IMG4} link={'/style'}/>
    </div>
  );
};

export default Home;
