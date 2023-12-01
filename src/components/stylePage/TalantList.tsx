import React, { useState } from 'react';
import GirlgroupCarousel from './stylePagecon/GirlgroupCarousel'
import BoygroupCarousel from './stylePagecon/BoygroupCarousel';
import EntertainerCarousel from './stylePagecon/EntertainerCarousel';

interface InfluencerBannerStringProps {
  bannerText: string;
}

interface InfluencerBannerStringProps {
  bannerText: string;
}

const TalantList: React.FC<InfluencerBannerStringProps> = ({ bannerText }) => {
  const [activeTab, setActiveTab] = useState<string>('걸그룹');

  const influencerTabs: string[] = ['걸그룹', '보이그룹', '연예인'];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // 여기에서 각 탭에 따른 추가적인 로직을 수행할 수 있습니다.
  };

  return (
    <div>
      <h2 className="text-2xl font-extrabold mb-4">{bannerText}</h2>
      <div className="mb-3 w-fit">
        <ul className="inline-flex justify-start items-start gap-3">
          {influencerTabs.map((tab, index) => (
            <li className={`text-base ${activeTab === tab ? 'text-[#673ab7] font-bold' : 'text-[gray]'}`} key={index} onClick={() => handleTabClick(tab)} style={{ cursor: 'pointer' }}>
              {tab}
            </li>
          ))}
        </ul>
        <div className="w-full h-[2px] bg-gray-300"></div>
      </div>
      {activeTab === '걸그룹' && <GirlContent />}
      {activeTab === '보이그룹' && <BoyContent />}
      {activeTab === '연예인' && <EntertaineryContent />}
    </div>
  );
};
const GirlContent: React.FC = () => {
  return (
    <div>
      <GirlgroupCarousel />
    </div>
  );
};

const BoyContent: React.FC = () => {
  return (
    <div>
      <BoygroupCarousel />
    </div>
  );
};
const EntertaineryContent: React.FC = () => {
  return (
    <div>
      <EntertainerCarousel />
    </div>
  );
};

export default TalantList;
