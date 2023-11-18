import React from 'react';
import { useLocation } from 'react-router-dom';
import SvgSmile from '@components/contentPage/SvgSmile';
import SvgSad from '@components/contentPage/SvgSad';
import SvgRollingEyes from '@components/contentPage/SvgRollingEyes';
import Product from '@components/contentPage/Product';

interface LocationState {
    file: File;
}

const ContentDetail: React.FC = () => {
    const location = useLocation<LocationState>();
    const file = location.state?.file;
    const fileUrl = file ? URL.createObjectURL(file) : '';

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
                            <div className='w-full h-full rounded-xl bg-gray-400'>
                                {file && <img src={fileUrl} alt="Uploaded" className='w-full h-full' />}
                            </div>

                        </div>
                        <div className='h-full flex flex-col justify-between'>
                            <div>
                                <div className='mt-12'>
                                    <h2 className='text-white text-4xl font-bold mb-3'>ㅇㅇㅇ 을 찾으셨나요?</h2>
                                    <p className='text-white text-xl font-normal'>고객이 업로드한 파일 이름</p>
                                </div>
                                <div className='mt-14'>
                                    <Product/>
                                    {/* <div className='w-[150px] h-auto aspect-[5/6] bg-gray-300 rounded-xl'></div> */}
                                </div>
                            </div>
                            <div>
                                <h2 className='text-neutral-100 text-xl font-medium mb-4'>이 결과가 맞나요?</h2>
                                <div className='flex gap-x-7'>
                                    <SvgSmile />
                                    <SvgSad />
                                    <SvgRollingEyes />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ContentDetail