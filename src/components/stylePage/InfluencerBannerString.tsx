import React from 'react'


interface InfluencerBannerStringProps {
    bannerText: string;
}

const InfluencerBannerString: React.FC<InfluencerBannerStringProps> = ({ bannerText }) => {
    const InfluencerBannerString: string[] = [
        '인플루언서',
        '걸그룹',
        '보이그룹',
        '유명인',
        '연예인'
    ];
    return (
        <div>
            <h2 className='text-2xl font-extrabold mb-4'>{bannerText}</h2>
            <div className='mb-3 w-fit'>
                <ul className='inline-flex justify-start items-start gap-3'>
                    {InfluencerBannerString.map((string, index) => (
                        <li className='text-base font-bold' key={index}>
                            {string}
                        </li>
                    ))}

                </ul>
                <div className='w-full h-[2px] bg-gray-300'></div>
            </div>
        </div>
    )
}

export default InfluencerBannerString