import React, { useRef } from 'react';

const DragAndDrop: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
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
    const handleDrop = (e: React.DragEvent<HTMLFormElement>) => {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;

        if (droppedFiles.length > 0) {
            const file = droppedFiles[0];
            handleFileChange(file);
        }
        // 드래그 영역 스타일 초기화
        e.currentTarget.classList.remove('file-dragging');
    };
    // 선택된 파일 처리 함수
    const handleFileChange = (file: File) => {
        // 파일 처리 로직을 추가해야함
        console.log('Selected file:', file);}
  return (
    <div>  {/* 드래그 앤 드롭 영역 */}
    <div className=" w-[600px] h-[600px]">
        <div className="w-[600px] h-[600px] left-0 top-0  bg-zinc-100 rounded-[19px] border border-stone-300 p-8">
            <div className="w-full h-full">
                <div className="w-full h-full bg-purple-400 bg-opacity-10 rounded-[19px] flex flex-col justify-center items-center">
                    {/* 드래그 앤 드롭을 위한 폼 */}
                    <form className="w-full h-full bg-purple-400 bg-opacity-10 rounded-[19px] flex flex-col justify-center items-center" id="clothForm" onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}>
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
    </div></div>
  )
}

export default DragAndDrop;
