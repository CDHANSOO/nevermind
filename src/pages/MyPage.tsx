import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UserInfoSection from '@components/myPage/UserInfoSection';
import LikedClothesSection from '@components/myPage/LikedClothesSection';
import LikedStyleSection from '@components/myPage/LikedStyleSection';
import ClothingChart from '@components/myPage/ClothingChart';

const MyPage: React.FC = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 5,
    };

    const likedOutfits = [
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
        // 여기에 추가적인 데이터를 포함합니다.
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
