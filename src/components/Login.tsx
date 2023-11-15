import React from 'react';
import { Link } from 'react-router-dom';

//이메일 포멧
// const emailRegEx = /^A-Za-z0-9@A-Za-z0-9.[A-Za-z]{2,3}$/;

// 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
// const passwordRegex = /^(?=.[A-Za-z])(?=.\d)(?=.[@!%#?&])[A-Za-z\d@!%*#?&]{8,16}$/;

const Login = () => {
  return (
    <>
      <div className='h-screen w-screen bg-[url("/src/assets/loginImg.png")] bg-cover fixed'></div>
      <div className="flex justify-center items-center h-screen relative">
        <div className="w-[450px] h-[480px] border-2 rounded-[10px] bg-white">
          <h1 className="font-bold flex justify-center mt-8">NM</h1>
          <div className="flex justify-center ">
            <div className="m-3 text-[13px]">로그인</div>
            <div className="m-3 text-[13px]">
              <Link to="/signUp">회원가입</Link>
            </div>
          </div>
          <form action="" className="flex flex-col items-center ">
            {/* ID */}
            <input type="text" placeholder="ID" className="w-[230px] h-[32px] m-4 rounded-[5px] border" />

            {/* Password */}
            <input type="password" name="" placeholder="Password" className="w-[230px] h-[32px] rounded-[5px] border" />

            <div className="flex items-left justify-start mr-[140px] mt-2">
              <input type="checkbox" id="check" className="flex" />
              <label htmlFor="check" className="ml-2 text-[13px] ">
                ID 저장하기
              </label>
            </div>
            <button type="submit" className="w-[230px] h-[32px] bg-[#b980ff] rounded-[5px] text-white hover:scale-105 duration-100 mt-6 mb-1">
              로그인
            </button>
          </form>
          <div className="flex justify-center mt-3">
            <span className="m-2 text-[13px] hover:text-sky-600">아이디 찾기</span>
            <span className="m-2 text-[13px] hover:text-sky-600">비밀번호 찾기</span>
          </div>
          <div className="flex justify-center">
            <p className="text-[#949494] text-[13px] mt-6">간편로그인</p>
          </div>
          <div className="flex justify-center">
            <a href="">
              <div className="w-[40px] h-[40px] rounded-full m-4 hover:scale-105 duration-100">
                <img src="/img/naver.png" alt="" />
              </div>
            </a>
            <a href="">
              <div className="w-[40px] h-[40px] rounded-full m-4 hover:scale-105 duration-100">
                <img src="/img/google.webp" alt="" />
              </div>
            </a>
            <a href="">
              <div className="w-[40px] h-[40px] rounded-full m-4 hover:scale-105 duration-100">
                <img src="/img/kakao.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
