import React from 'react';

interface TpoButtonProps {
  category: string;
  onCategoryClick: (category: string) => void;
}

const TpoButton: React.FC<TpoButtonProps> = ({ category, onCategoryClick }) => {
  return (
    <button className="h-[30px] py-[5px] px-[20px] cursor-pointer text-[15px] text-white rounded-[13px] bg-[#8f12ff] hover:opacity-50" onClick={() => onCategoryClick(category)}>
      {category}
    </button>
  );
};

export default TpoButton;
