import React from 'react';

export interface MyPageCategoryProps {
  date: string;
  category: string;
}

const MyPageCategory: React.FC<MyPageCategoryProps> = ({ date, category }) => (
  <div className="item w-full flex flex-col justify-start items-start">
    <div className="rectangle  w-36 h-36 bg-zinc-300 rounded-xl " />
    <div className="label text-zinc-800 text-xs font-normal font-Pretendard">{category}</div>
    <div className="date text-neutral-400 text-xs font-normal font-Pretendard">{date}</div>
  </div>
);

export default MyPageCategory;
