import React from 'react'
// import { ReactComponent as Smile } from "../assets/face-smile-solid.svg";

const ContentDetail: React.FC = () => {
    const bgimg: React.CSSProperties = {
        backgroundImage: "url(\"src/assets/Rectangle.png\")",
    };
    return (
        <div className='w-full h-[calc(100vh)]'>
            <div className="w-full h-full bg-cover bg-no-repeat" style={bgimg}>
                <div className='relative w-full h-[calc(100vh-70px)] top-[70px] flex items-center'>
                    <div className=''></div>
                    <div className='w-full h-5/6 mx-40 flex '>
                        <div className='w-1/2 h-full aspect-[3/4] pr-14'>
                            <div className='w-full h-full rounded-xl bg-gray-400'></div>
                        </div>
                        <div className='h-full flex flex-col justify-between'>
                            <div>
                                <div className='mt-12'>
                                    <h2 className='text-white text-4xl font-bold mb-1'>ㅇㅇㅇ 을 찾으셨나요?</h2>
                                    <p className='text-white text-xl font-normal'>고객이 업로드한 파일 이름</p>
                                </div>
                                <div className='mt-14'>
                                    <div className='w-[150px] h-auto aspect-[5/6] bg-gray-300 rounded-xl'></div>
                                </div>
                            </div>
                            <div>
                                {/* <Smile /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ContentDetail