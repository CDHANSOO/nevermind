import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineCancel } from 'react-icons/md';
import axios from 'axios';

//이메일 포멧
// const emailRegEx = /^A-Za-z0-9@A-Za-z0-9.[A-Za-z]{2,3}$/;

// 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
// const passwordRegex = /^(?=.[A-Za-z])(?=.\d)(?=.[@!%#?&])[A-Za-z\d@!%*#?&]{8,16}$/;

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [delId, setDelId] = useState<boolean>(false);
  const [viewPw, setViewPw] = useState<boolean>(false);
  
  const idRef = useRef<HTMLInputElement>(null)



    // 서버에 넘길때 
    const loginHandle = async () => {
      try {
        const response = await axios.post('http://localhost:3000/login', { //axios api로 post방식으로 노드랑 소통할 서버 url => http://localhost:3000/login
          email,password // 보내줄 값
        }, {
          headers: {
            'Content-Type': 'application/json', // json 형태로 보내주겠다. 
          },
        });
    
        const result = response.data;  // 응답받은 값이 response.data에 들어옴 그걸 변수 result에 저장함 그 후 로직은 front에서 짜야됨 밑에는 로직 예시
        console.log(result);
    
        if (result.result === true) {     
          console.log('있는 값');
        }
      } catch (error) {
        console.error('에러:', error);
        // Handle error here
      }
    };


  const viewPwhandle = () => {
    setViewPw(!viewPw);
  };

  const delIdhandle = () => {
    setEmail('');
    setDelId(false);
    if(!idRef.current) return;
    idRef.current.focus()
  };


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  
  console.log(email)
  console.log(password)



  return (
    <>
      <div className='h-screen w-screen bg-[url("/src/assets/loginImg.png")] bg-cover fixed'></div>
      <div className="flex justify-center items-center h-screen relative">
        <div className="min-w-[400px] min-h-[50%] border-2 rounded-[10px] bg-white">
          <h1 className="font-bold flex justify-center mt-8">NM</h1>
          <div className="flex justify-center ">
            <div className="m-3 text-[13px]">로그인</div>
            <div className="m-3 text-[13px]">
              <Link to="/signUp">회원가입</Link>
            </div>
          </div>
          <form action="" className="flex flex-col items-center ">
            {/* ID */}

            <div className="relative">
              <input type="text" placeholder="Email" value={email} ref={idRef} onChange={handleEmailChange} className="w-[230px] h-[32px] m-4 rounded-[5px] border p-[5px]" />
              {delId && (
                <span className="absolute top-[23px] right-[23px]" onClick={delIdhandle}>
                  <MdOutlineCancel />
                </span>
              )}
            </div>
            {/* Password */}
            <div className="relative">
              <input type={viewPw ? 'text' : 'password'} placeholder="Password" value={password} onChange={handlePasswordChange} className="w-[230px] h-[32px] rounded-[5px] border p-[5px]" />
              <span className="absolute top-[7px] right-[7px]" onClick={viewPwhandle}>
                {viewPw === false ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
            <div className="flex items-left justify-start mr-[140px] mt-2">
              <input type="checkbox" id="check" className="flex" />
              <label htmlFor="check" className="ml-2 text-[13px] ">
                ID 저장하기
              </label>
            </div>
            <button type="submit" onClick={loginHandle} className="w-[230px] h-[32px] bg-[#b980ff] rounded-[5px] text-white hover:scale-105 duration-100 mt-6 mb-1">
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
            <div className="w-[40px] h-[40px] rounded-full m-4 hover:scale-105 duration-100">
              <a href="">
                <img src="/img/naver.png" alt="" />
              </a>
            </div>

            <div className="w-[40px] h-[40px] rounded-full m-4 hover:scale-105 duration-100">
              <a href="">
                <img src="/img/google.webp" alt="" />
              </a>
            </div>
            <div className="w-[40px] h-[40px] rounded-full m-4 hover:scale-105 duration-100">
              <a href="">
                <img src="/img/kakao.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
