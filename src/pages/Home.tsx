import MainCom from '@components/mainPage/MainCom';
import MainCom2 from '@components/mainPage/MainCom2';
import MainCom3 from '@components/mainPage/MainCom3';
import Video from '@components/mainPage/Video';
import React, { useEffect } from 'react';
import IMG1 from '@assets/contents.png'
import IMG2 from '@assets/tpo.png'
import IMG3 from '@assets/style.png'


const Home = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='flex flex-col gap-[50px] '>
      <Video/>
      <MainCom img={IMG1} link={'/content'}/>
      <MainCom2 img={IMG2} link={'/tpo'}/>
      <MainCom3 img={IMG3} link={'/style'}/>
    </div>
  );
};

export default Home;
