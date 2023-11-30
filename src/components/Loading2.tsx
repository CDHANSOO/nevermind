import React from 'react'

// 이거는 콘텐츠 로딩
const Loading2 = () => {
  return (
    <div className='absolute t-0 l-0 w-full h-full flex flex-col justify-center items-center z-[500]'
      style={{backgroundImage:`url('/src/assets/Rectangle.png')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}
    >
      <img src="https://blog.kakaocdn.net/dn/AN3iM/btqIZl8eVLk/bDOPNYsG0uveWF6eh3JRI1/img.gif" alt="" />
      <span className='flex justify-center text-[16px] text-white'>Loading...</span>
    </div>
  )
}
export default Loading2;