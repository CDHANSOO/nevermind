import MainCom from '@components/mainPage/MainCom';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <MainCom ment={'빠른 코디를 위한 시스템'} link={'/content'}/>
      <MainCom ment={'빠른 코디를 위한 시스템'} link={'/content'}/>
      <MainCom ment={'빠른 코디를 위한 시스템'} link={'/tpo'}/>
      <MainCom ment={'빠른 코디를 위한 시스템'} link={'/style'}/>
    </>
  );
};

export default Home;
