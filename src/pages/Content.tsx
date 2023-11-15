import React from 'react';

const Content:React.FC = () => {
    //배경 이미지 정의
    const bgimg: React.CSSProperties = {
        backgroundImage: "url('src/assets/Rectangle.png')",
    };
    return (
        <>
            <div className="w-[full] h-[864px] bg-white">
                {/* 배경이미지 */}
                <div className="w-[full] h-[1021px] left-0 top-[-13px] bg-cover bg-no-repeat h-screen" style={bgimg} />
                {/* GET Trend 영역 */}
                <div className="absolute left-[300px] top-[450px] GetTrend text-right">
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
                {/* 드래그 앤 드롭 영역 */}
                <div className="absolute left-[400px] top-[100px] ">
                    <div className="w-[600px] h-[600px] left-[463px] top-[132px] absolute">
                        <div className="w-[600px] h-[600px] left-0 top-0  bg-zinc-100 rounded-[19px] border border-stone-300" />
                        <div className="left-[247px] top-[323px] absolute text-center text-black text-base font-semibold font-['Pretendard Variable']">Drag and Drop</div>
                    </div>
                    <div className="w-[532px] h-[532px] left-[497px] top-[167px] absolute">
                        <div className="w-[532px] h-[532px] left-0 top-0 absolute bg-purple-400 bg-opacity-10 rounded-[19px]" />
                        <div className="left-[169px] top-[310px] absolute text-center text-zinc-800 text-xs font-normal font-['Pretendard Variable'] leading-[14px]">
                            인플루언서의 사진을
                            <br />
                            넣으면 옷에 대한 정보를 찾아드립니다.
                        </div>
                    </div>
                    {/* 원모양 아이콘 */}
                    <div className="w-[72px] h-[72px] left-[727px] top-[373px] absolute">
                        <div className="w-[72px] h-[72px] left-0 top-0 absolute rounded-full border-2 border-purple-400" />
                    </div>
                </div>
                
            </div>
        </>
    );
};


export default Content;
