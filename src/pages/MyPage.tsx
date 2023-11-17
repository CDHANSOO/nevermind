import React from 'react';

const MyPage = () => {
    // 타입 정의
    interface ItemProps {
        date: string;
        category: string;
    }

    // 재사용 가능한 아이템 컴포넌트
    const Item: React.FC<ItemProps> = ({ date, category }) => (
        <div className="item w-36 h-44 relative flex-col justify-start items-start flex">
            <div className="rectangle  w-36 h-36 bg-zinc-300 rounded-xl " />
            <div className="label text-zinc-800 text-xs font-normal font-['Pretendard']">{category}</div>
            <div className="date text-neutral-400 text-xs font-normal font-['Pretendard']">{date}</div>
        </div>
    );
    // **나중에 수정 필요
    const items = [
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '스포츠', date: '2023.10.29' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '스포츠', date: '2023.10.29' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '스포츠', date: '2023.10.29' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '스포츠', date: '2023.10.29' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '스포츠', date: '2023.10.29' },
         { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '스포츠', date: '2023.10.29' },
    ];
    return (
        <>
            {/* 사용자 정보 섹션 */}
            <div className="user-info flex flex-col items-center m-5">
                <div className="user-name text-2xl font-bold flex ">ㅇㅇㅇ님</div>
                <div className="box w-24 h-24 bg-zinc-300 rounded-full flex m-5" />
            </div>
            <div className="Line2 w-full h-px border border-black"></div>
            {/* 찜한 코디 섹션 */}
            <div className="liked-clothes ">
                <div className="section-title text-2xl font-bold m-5">내가 찜한 코디</div>
                <div className="items overflow-x-auto whitespace-nowrap m-5">
                    <div className="app flex gap-4">
                        {items.map((item, index) => (
                            <Item key={index} category={item.category} date={item.date} />
                        ))}
                    </div>
                </div>
            </div>

            {/* 찜한 옷 섹션 */}
            <div className="liked-outfits">
                <div className="section-title text-2xl font-bold m-5">내가 찜한 옷</div>
                <div className="items overflow-x-auto m-5">
    <div className="app flex gap-4 min-w-max">
                        {items.map((item, index) => (
                            <Item key={index} category={item.category} date={item.date} />
                        ))}
                    </div>
                </div>
                <div className="Line2 w-full h-px border border-black"></div>
            </div>

            <div className="container flex flex-col items-center justify-center m-5">
                <div className="text-black text-2xl font-bold font-['Inter'] m-5">무슨 옷을 많이 입었을까?</div>
                <div className="text-black text-4xl font-normal font-['Pretendard'] m-5">아파치 이차트</div>
                <div className="Rectangle39 w-80 h-80 bg-zinc-300 rounded-x l" />
            </div>
        </>
    );
};

export default MyPage;
