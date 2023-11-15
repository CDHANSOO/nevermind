import React from 'react';

const Home = () => {
  return (
    <div>
      <div className='w-[529px] h-[792px] left-[30px] top-[72px] absolute bg-[url("src/assets/main1.png")]'></div>
      <div className='w-[475px] h-[532px] left-[575px] top-[72px] absolute bg-[url("src/assets/main2.png")]'></div>
      <div className='w-[435px] h-[652px] left-[1066px] top-[74px] absolute bg-[url("src/assets/main3.png")]'></div>
      <div className='w-[475px] h-[356px] left-[575px] top-[621px] absolute bg-[url("src/assets/main4.png")]'></div>
      <div className='w-[435px] h-[293px] left-[1066px] top-[748px] absolute bg-[url("src/assets/main5.png")]'></div>

      <div className="w-[50px] h-[50px] left-[1454px] top-[782px] absolute">
        <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-neutral-800 rounded-full" />
        <div className="left-[10px] top-[16px] absolute text-neutral-100 text-[15px] font-extralight font-['Pretendard']">Help</div>
      </div>

    </div>
  );
};

export default Home;
