import React from 'react';

const ClothingChart: React.FC = () => (
  //사용자들의 자주 찾는 스타일 표시하는 차트
  <div className="container flex flex-col items-center m-5">
    <div className="text-2xl font-bold m-5">무슨 옷을 많이 입었을까?</div>
    <div className="flex flex-row justify-center items-center">
      <div className="Rectangle39 w-80 h-80 bg-zinc-300 rounded-xl" />
      <div className="text-4xl font-normal m-5 w-80 h-80 bg-zinc-300 rounded-xl">아파치 이차트</div>
    </div>
  </div>
);

export default ClothingChart;
