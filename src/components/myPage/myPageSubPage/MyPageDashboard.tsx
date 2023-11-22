import React, { useContext } from 'react'
import { MyPageContext } from 'pages/MyPage';

const MyPageDashboard: React.FC = () => {
    const context = useContext(MyPageContext);
    return (
        <div style={{ padding: `0 ${context.chevronWidth}px` }}>
            <h2 className='text-2xl font-extrabold mb-4' >context.DibsH2TextString[1]</h2>
            <div className=''>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default MyPageDashboard