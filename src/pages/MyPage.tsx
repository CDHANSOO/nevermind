import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UserInfoSection from '@components/myPage/UserInfoSection';
import LikedClothesSection from '@components/myPage/LikedClothesSection';
import LikedStyleSection from '@components/myPage/LikedStyleSection';
import ClothingChart from '@components/myPage/ClothingChart';

const MyPage: React.FC = () => {
    //슬라이드 설정
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 5,
    };

    const likedOutfits = [
        //임시적
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
        { category: '댄디·캐주얼', date: '2023.10.28' },
      
    ];

    return (
        <>
         <div className="m-20">
            <UserInfoSection />
            <LikedClothesSection likedOutfits={likedOutfits} settings={settings} />
            <LikedStyleSection likedOutfits={likedOutfits} settings={settings} />
            <ClothingChart />
            </div>
        </>
    );
};

export default MyPage;
