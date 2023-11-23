import React, { useState, FC } from 'react';
import axios from 'axios'

// interface Product {
//   name: string;
//   storeName: string;
//   price: string;
// }

interface DetailProps {
  userInput: string;
  setUserInput: (input: string) => void;
}

interface ServerResponse {
  clotheInfo: Array<string[]>;
  styleInfo: string;
}

const Detail: FC<DetailProps> = ({ userInput, setUserInput }) => {
  const [search, setSearch] = useState<string>('');
  const [responseData, setResponseData] = useState<ServerResponse | null>(null);

  // 검색어를 서버로 전송하는 함수
  const handleSearch = async () => {
    if (search.trim() !== '') {
      console.log('검색어:', search);

      try {
        const response = await axios.post<ServerResponse>('http://localhost:3000/tpo', { search: search });
        const result = response.data
        console.log('요청 응답 : ',result);

        setResponseData(result); // 상태를 업데이트

      } catch (error) {
        console.error('요청 오류 : ', error);
      }
      setSearch('');
      setUserInput(search);
    }
  };


  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // const products: Product[] = [
  //   { name: '블링 핫 재킷', storeName: '상점 이름', price: '17,900 원' },
  //   { name: '블링 핫 재킷', storeName: '상점 이름', price: '17,900 원' },
  //   { name: '블링 핫 재킷', storeName: '상점 이름', price: '17,900 원' },
  //   { name: '새로운 상품', storeName: '새로운 상점', price: '19,900 원' },
  //   { name: '추가 상품', storeName: '추가 상점', price: '15,900 원' },
  //   { name: '더 많은 상품', storeName: '다른 상점', price: '21,500 원' },
  // ];

  return (
    <div className="h-screen w-full bg-white">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col">
          <div className="flex justify-center mb-3">
            <div className="w-[14.88px] h-[15px] bg-yellow-400 rounded-full" />
            <div className="w-[14.88px] h-[15px] ml-1 bg-amber-200 rounded-full" />
            <div className="w-[14.88px] h-[15px] ml-1 bg-yellow-100 rounded-full" />
          </div>
          <div className="flex justify-center relative w-full">
            <img className="w-[430px] max-w-[496px] max-h-[746px] rounded-xl" src={responseData?.styleInfo || 'https://via.placeholder.com/496x746'} alt="placeholder" />
          </div>
        </div>
        <div className="flex items-left flex-col md:ml-10 mt-6 md:mt-0">
          <div className="mb-1 text-center md:text-left">
            <div className="text-2xl font-extrabold font-['Pretendard']"> {userInput}</div>
            <div className="text-2xl font-normal font-['Pretendard']">에 대한 코디 추천은 다음과 같습니다.</div>
          </div>
          <div className="mt-2 mb-10 w-full md:w-[348px]">
            <div className="relative h-10">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyPress={e => handleKeyPress(e)}
                className="w-full h-full bg-zinc-100 rounded-[29px] border border-stone-300 pl-4 text-base font-extralight font-['Inter']"
                placeholder="다시 검색하기"
              />
            </div>
          </div>
          <div className="w-full md:w-[347px] max-h-[400px] overflow-auto">
            {responseData?.clotheInfo?.map((clothe, index) => (
              <div key={index} className="flex justify-start w-full h-32 rounded-xl border border-zinc-300 p-4 mb-2">
                <div className="flex items-center">
                  <div className="w-24 h-24 bg-zinc-300 rounded-xl mr-4">
                    <img src={clothe[1]} alt={clothe[2]} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="text-left">
                    <div className="text-black text-xl font-bold font-Pretendard">{clothe[2]}</div>
                    <div className="text-black text-base font-normal font-Pretendard">{clothe[3]}</div>
                    <div className="text-black text-base font-bold font-Pretendard">{clothe[4]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
