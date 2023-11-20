import React from 'react';

const UserInfoSection = () => {
  //사용자의 정보 표시
  return (
    <div className="user-info flex flex-col items-center m-5">
      <div className="user-name text-2xl font-bold flex m-5">ㅇㅇㅇ님</div>
      <div className="box w-24 h-24 bg-zinc-300 rounded-full flex p-5" />
    </div>
  );
};

export default UserInfoSection;
