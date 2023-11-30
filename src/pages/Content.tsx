import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentBackgoundImg from '@assets/Rectangle.png';
import axios from 'axios';
import Loading2 from '@components/Loading2';

const Content: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  console.log(result)
  

  // 배경 이미지 정의
  const bgimg: React.CSSProperties = {
    backgroundImage: `url(${ContentBackgoundImg})`,
  };
  // 드래그 앤 드롭 이벤트 처리
  const handleDragEnter = (e: React.DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('file-dragging');
  };
  // 드래그 앤 드롭 영역을 떠났을 때의 처리 함수
  const handleDragLeave = (e: React.DragEvent<HTMLFormElement>) => {
    e.currentTarget.classList.remove('file-dragging');
  };
  // 드래그 이벤트에 대한 기본 동작을 막기 위한 처리 함수
  const handleDragOver = (e: React.DragEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  // 파일이 드랍되었을때의 처리 함수
  const handleDrop = async (e: React.DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const droppedFiles = e.dataTransfer.files;
    
    if (droppedFiles.length > 0) {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', droppedFiles[0]);


      // 파일을 백엔드로 보내기
      try {
        const response = await axios.post('http://localhost:3000/content', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const result = response.data

        console.log('서버에서 넘겨준 데이터:',result.fastApiResponse); // 이건 서버에서 받아온 5개

        setResult(result);

        setLoading(false);
        navigate('/contentdetail', { state: { result } });
        
      } catch (error) {
        console.error('파일 업로드 오류 :', error);
      } finally {
        // 로딩 상태 완료
      }
    }
    e.currentTarget.classList.remove('file-dragging');
  };
  // 231117 정 : 받은 파일을 ContentDetail에서 보여주기(임시)
  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = event.target.files?.[0];
  //   if (selectedFile) {
  //     setFile(selectedFile); // File 객체 직접 전달
  //     navigate('/contentdetail', { state: { file: selectedFile } });
  //     console.log(file);
  //   }
  // };
  return (
    <div className='relatvie'>
      {
        loading && <Loading2/>
      }
      <div className="w-full h-[100vh] bg-white">
        {/* 배경이미지 */}
        <div className="relative w-full h-full bg-cover bg-no-repeat" style={bgimg}>
          {/* GET Trend 영역 */}
          <div className="absolute w-full h-[calc(100vh-70px)] top-[70px] flex justify-center items-center">
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
            {/* 드래그 앤 드롭 영역 */}
            <div className=" w-[600px] h-[600px]">
              <div className="w-[600px] h-[600px] left-0 top-0  bg-zinc-100 rounded-[19px] border border-stone-300 p-8">
                <div className="w-full h-full">
                  <div className="w-full h-full bg-purple-400 bg-opacity-10 rounded-[19px] flex flex-col justify-center items-center">
                    {/* 드래그 앤 드롭을 위한 폼 */}
                    <form
                      className="w-full h-full bg-purple-400 bg-opacity-10 rounded-[19px] flex flex-col justify-center items-center"
                      id="clothForm"
                      onDragEnter={handleDragEnter}
                      onDragLeave={handleDragLeave}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <label className="block" htmlFor="clothPhotoInput">
                        <span className="sr-only">사진 선택</span>
                        <input type="file" className="hidden " id="clothPhotoInput" accept="image/*" ref={inputRef} />
                      </label>

                      <div className="w-[72px] h-[72px] mb-3">
                        <div className="w-[72px] h-[72px] rounded-full border-2 border-purple-400" />
                      </div>
                      <div className="text-center text-black text-base font-semibold font-['Pretendard Variable']">Drag and Drop</div>
                      <div className="text-center text-zinc-800 text-xs font-normal font-['Pretendard Variable'] leading-[14px]">
                        인플루언서의 사진을
                        <br />
                        넣으면 옷에 대한 정보를 찾아드립니다.
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
