import React, { useState } from 'react';
import AmecozyCarousel from './stylePagecon/AmecozyCarousel';
import CityboyCarousel from './stylePagecon/CityboyCarousel';
import BlockcoreCarousel from './stylePagecon/BlockcoreCarousel';
import GofcoreCarousel from './stylePagecon/GofcoreCarousel';
import OldmoneyCarousel from './stylePagecon/OldmoneyCarousel';
import Y2kCarousel from './stylePagecon/Y2kCarousel';

interface InfluencerBannerStringProps {
  bannerText: string;
}

interface InfluencerBannerStringProps {
  bannerText: string;
}

const InfluencerBannerString: React.FC<InfluencerBannerStringProps> = ({ bannerText }) => {
  const [activeTab, setActiveTab] = useState<string>('y2k');

  const influencerTabs: string[] = ['y2k', '고프코어', '블록코어', '시티보이', '아메카지', '올드머니'];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
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
      {activeTab === '아메카지' && <AmecozyContent />}
      {activeTab === 'y2k' && <Y2kContent />}
      {activeTab === '시티보이' && <CityboyContent />}
      {activeTab === '블록코어' && <BlockcoreContent />}
      {activeTab === '고프코어' && <GofcoreContent />}
      {activeTab === '올드머니' && <OldmoneyContent />}
    </div>
  );
};
const AmecozyContent: React.FC = () => {
  return (
    <div>
      <div className='mb-4 font-bold'>
        미국의 의류를 수입하던 일본인들이 American Casual을 일본식으로 발음한 것에서 유래한 스타일이다. <br/> 꾸민 듯 안꾸민 듯한 느낌, 개성을 표현하기에 좋은 스타일이다. 워크웨어, 데님, 워커, 특유의 코튼,
        코듀로이 소재 , 멜빵바지 등이 특징이다.
      </div>
      <AmecozyCarousel />
    </div>
  );
};

const Y2kContent: React.FC = () => {
  return (
    <div>
      <div className='mb-4 font-bold'>
      Year 2 KILO, 말 그대로 2000년대를 의미하는 스타일이다. 2000년대에 유행했던 룩을 주로 Y2K라고 부른다.<br/> 자신만의 독특한 개성, 힙한 분위기를 연출하기에 좋은 스타일이다. 크롭티, 로우라이즈 팬츠,
      테니스 스커트, 쨍하고 비비드한 컬러, 강렬한 프린팅의 티셔츠 등이 대표적인 아이템이다.
      </div>
      <Y2kCarousel />
    </div>
  );
};
const CityboyContent: React.FC = () => {
  return (
    <div>
      <div className='mb-4 font-bold'>
      도시에서 생활하는 소년들이 입을법한 옷차림에서 유래한 스타일이다. <br />일본의 스타일리스트 아키오 하세가와가 뽀빠이라는 패션 잡지에 시티보이라는 단어를 언급하면서 유명해졌다. <br />캐주얼하고 편안한 느낌을
      표현하기 좋아한 스타일이다. 펑퍼짐하고 박시하면서도 미니멀한 스타일의 제품들을 톤온톤으로 코디하는 것이 대표적인 특징이다.
      </div>
      <CityboyCarousel />
    </div>
  );
};
const BlockcoreContent: React.FC = () => {
  return (
    <div>
      <div className='mb-4 font-bold'>
      영국에서 유니폼을 입고 다니는 남자라는 뜻의 Block이라는 단어에 Core라는 단어가 결합해 생겨난 스타일이다. <br />편안하면서도 넉넉한 핏의 유니폼 상의를 배치하는게 특징이고, 편안하면서도 레트로한
      분위기를 표현하기 좋은 스타일이다. 축구 유니폼, 농구 유니폼 등의 각종 유니폼 아이템들이 대표적인 아이템이다.
      </div>
      <BlockcoreCarousel />
    </div>
  );
};
const GofcoreContent: React.FC = () => {
  return (
    <div>
      <div className='mb-4 font-bold'>
      Good Ol’ Raisins and Peanuts, GORP는 하이킹할 때 가지고 다니며 먹는 견과류를 뜻한다. <br />그리고 GORP와 핵심을 뜻하는 core라는 단어가 만나 하이킹과 같은 아웃도어 웨어를 핵심으로 하는 의류를 뜻한다.
      <br />자연친화적이면서 세련된 느낌을 동시에 표현하기에 좋은 스타일이다. 살로몬, 아크테릭스 같은 브랜드의 아이템들이 대표적인 아이템이다.
      </div>
      <GofcoreCarousel />
    </div>
  );
};
const OldmoneyContent: React.FC = () => {
  return (
    <div>
      <div className='mb-4 font-bold'>
      OLD MONEY, 오래된 돈, 즉 상속받은 상류층 자녀들의 스타일에서 유래한 스타일이다. <br />고급스러우면서도 자연스러운 분위기를 연출하기에 좋은 스타일이다. 폴로셔츠, 수트, 클래식한 드레스, 트위드 자켓,
      고급스러운 소재의 아이템등이 대표적인 아이템이다.
      </div>
      <OldmoneyCarousel />
    </div>
  );
};

export default InfluencerBannerString;
