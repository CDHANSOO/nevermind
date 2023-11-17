import React from 'react';

export interface ItemProps {
  date: string;
  category: string;
}

const Item: React.FC<ItemProps> = ({ date, category }) => (
  <div className="item w-48 h-56 flex flex-col justify-start items-start">
    <div className="rectangle  w-36 h-36 bg-zinc-300 rounded-xl " />
    <div className="label text-zinc-800 text-xs font-normal font-Pretendard">{category}</div>
<div className="date text-neutral-400 text-xs font-normal font-Pretendard">{date}</div>

  </div>
);

export default Item;