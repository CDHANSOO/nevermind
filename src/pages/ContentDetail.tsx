import React from 'react'

const ContentDetail: React.FC = () => {
    const bgimg: React.CSSProperties = {
        backgroundImage: "url(\"src/assets/Rectangle.png\")",
    };
    return (
        <div className='w-full h-[calc(100vh+70px)]'>
            <div className="w-full h-full bg-cover bg-no-repeat flex justify-center items-center" style={bgimg}>
                <div>
                    
                </div>
            </div>
        </div>
    )
};
export default ContentDetail