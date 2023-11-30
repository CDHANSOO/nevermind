import React, { useEffect, useState } from 'react';

const Video = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const originalText = '당신의 트렌드 NEVERMIND.';
    let index = 0;

    const intervalId = setInterval(() => {
      if (index <= originalText.length) {
        setText(originalText.slice(0, index));
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 120); // 글자가 나오는 간격(ms)을 조절

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <video src="https://nevermind.s3.ap-northeast-2.amazonaws.com/pexels-ron-lach-8308005+(2160p).mp4" autoPlay muted loop className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-4">
        <div className="bg-white-800 bg-opacity-50 backdrop-filter text-white text-6xl font-black py-2 px-4 rounded-md">{text}</div>
      </div>
    </div>
  );
};

export default Video;