import React from 'react'

const MyPageTop: React.FC = () => {
    return (
        <div className='flex flex-col items-center mt-32 mb-28'>
            <div className='rounded-full w-32 aspect-square bg-gray-400'></div>
            <div className='text-center mt-3'>
                <h2 className='text-center text-black text-2xl font-bold'>OOO님</h2>
                <p className='text-center text-neutral-400 text-xs font-normal mt-2'>2020.11.11</p>
            </div>
        </div>
    )
}

export default MyPageTop