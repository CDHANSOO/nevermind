// import LikedStyleSection from '@components/myPage/LikedStyleSection'
import MyPageCarousel from '@components/myPage/MyPageCarousel'
import MyPageTop from '@components/myPage/MyPageTop'
import React from 'react'


// 231121 : 정은우
// 나중에 이미지 데이터 받아서 연동할 것 일단은 레이아웃 구성을 위해 주석 처리
// interface  likedOufits{
//   codyImg:codyImgProps,

// }

const MyPage: React.FC = () => {
  const DibsH2TextString:string[]=[
    '내가 찜한 코디',
    '내가 찜한 옷'
  ]
  return (
    <div className='w-full h-auto relative top-[70px] bg-gray-200 flex justify-center'>
      <div className='w-3/5 bg-gray-300'>
        <MyPageTop />
        <div className='border-t-2'>
          {DibsH2TextString.map((string, index) => (
            <div className='mt-28' key={index}>
              <MyPageCarousel h2Text={DibsH2TextString} />
            </div>
          ))}
          {/* <LikedStyleSection /> */}
          <div className='mt-24'>
            <h2 className='text-2xl font-extrabold mb-4'>무슨 옷을 많이 입었을까?</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage