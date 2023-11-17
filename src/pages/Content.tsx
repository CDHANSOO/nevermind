
import DragAndDrop from '@components/DragAndDrop';
import React from 'react';

const Content: React.FC = () => {
    // 배경 이미지 정의
    const bgimg: React.CSSProperties = {
        backgroundImage: "url(\"src/assets/Rectangle.png\")",
    };
   
    
    return (
        <div>
            {/* 배경이미지는 똑같고, 안에 컴포넌트만 달라지는 거니까, 
            이 부분은 배경이미지를 새로 불러오는 것 vs 컴포넌트를 새로 불러오는 것 중에 나은 쪽으로 골라서 하면 될 듯 */}
            <div className="w-[full] h-[calc(100vh+70px)] bg-white">
                {/* 배경이미지 */}
                <div className="w-[full] h-full bg-cover bg-no-repeat flex justify-center items-center" style={bgimg}>
                    {/* GET Trend 영역 */}
                    <div className=" GetTrend text-right mr-12">
                        <div className="text-neutral-100 text-9xl font-bold font-['Pretendard Variable'] leading-10 mb-[100px]">
                            GET
                            <br />
                        </div>
                        <div className="text-purple-400 text-9xl font-bold font-['Pretendard Variable'] leading-10 mb-[70px]">TREND</div>
                        {/* 부가설명 텍스트 */}
                        <div className="text-right text-zinc-300 text-2xl font-normal font-['Pretendard'] ">
                            최신 트렌드와 유행을 이끄는 <br />
                            인플루언서들의 패션을 클릭 한 번으로 손 쉽게.
                            <br />
                        </div>
                    </div>
                  <DragAndDrop/>
                </div>
            </div>
        </div>
    );
};

export default Content;