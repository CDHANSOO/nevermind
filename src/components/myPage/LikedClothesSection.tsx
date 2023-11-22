import React from 'react';
import Slider, { Settings } from 'react-slick';
import Item from '@components/myPage/MyPageCategory';

interface LikedSectionProps {
  likedOutfits: { category: string; date: string }[];
  settings: Settings;
}
//사용자가 찜한 코디
const LikedClothesSection: React.FC<LikedSectionProps> = ({ likedOutfits, settings }) => {
  return (
    <div className="liked-clothes ">
      <div className="section-title text-2xl font-bold p-5">내가 찜한 코디</div>
      <div className="items overflow-x-auto p-5 mx-4">
        <Slider {...settings}>
          {likedOutfits.map((item, index) => (
            <Item key={index} category={item.category} date={item.date} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LikedClothesSection;