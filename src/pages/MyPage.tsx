import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import MyPageTop from '@components/myPage/MyPageTop';
import MyPageSubpage1 from '@components/myPage/myPageSubPage/MyPageSubpage1';
import MyPageSubpage2 from '@components/myPage/myPageSubPage/MyPageSubpage2';

// Context와 해당 Context의 타입을 정의합니다.
interface MyPageContextProps {
  DibsH2TextString: string[];
  chevronWidth: number;
}

const myPageProps: MyPageContextProps = {
  DibsH2TextString: ['내가 찜한 코디', '내가 찜한 옷'],
  chevronWidth: 50
};

export const MyPageContext = createContext<MyPageContextProps>(myPageProps);

const MyPage: React.FC = () => {
  return (
    <div className='w-full h-auto relative top-[70px] bg-gray-200 flex justify-center'>
      <MyPageTop />
      <div>
        <MyPageContext.Provider value={myPageProps}>
          <Routes>
            <Route path="subpage1" element={<MyPageSubpage1 />} />
            <Route path="subpage2" element={<MyPageSubpage2 />} />
            {/* 더 많은 라우트 추가 가능 */}
          </Routes>
        </MyPageContext.Provider>
      </div>
    </div>
  )
}

export default MyPage;
