import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nick, setNick] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [agreement, setAgreement] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const nickRef = useRef<HTMLInputElement>(null);
  const birthRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  // const genderRef = useRef<HTMLInputElement>(null);
  const agreementRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleNickChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNick(e.target.value);
  };

  const handleBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreement(e.target.checked);
  };

  
  const duflChk = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user', {
        email,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = response.data;
      console.log(result);
  
      if (result.result === true) {
        console.log('있는 값');
      }
    } catch (error) {
      console.error('에러:', error);
      // Handle error here
    }
  };



  // 이 함수를 추가하여 폼 제출을 처리합니다.
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); // e.preventDefault()을 호출하면 브라우저가 폼을 제출하려고 할 때 일어나는 새로고침 등의 기본 동작이 막히게 됨
    if (!email || !name || !nick || !birth || !password || !passwordCheck || !gender || !agreement) {
      // 필수 필드가 모두 채워지지 않은 경우 처리
      alert('모든 필수 항목을 입력하세요.');
      if (!email) {
        emailRef.current?.focus();
        return;
      }
      if (!name) {
        nameRef.current?.focus();
        return;
      }
      if (!nick) {
        nickRef.current?.focus();
        return;
      }
      if (!birth) {
        birthRef.current?.focus();
        return;
      }
      if (!password) {
        passwordRef.current?.focus();
        return;
      }
      if (!passwordCheck) {
        passwordCheckRef.current?.focus();
        return;
      }
      return;
    } else if (password != passwordCheck) {
      alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요!');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/join',
        {
          email,
          name,
          nick,
          birth,
          password,
          passwordCheck,
          gender,
          agreement,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        alert('가입이 완료되었습니다!');
        navigate('/');
      } else {
        alert('가입에 실패했습니다. 나중에 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('에러:', error);
      alert('오류가 발생했습니다. 나중에 다시 시도해주세요.');
    }
  };

  return (
    <>
      <div className='h-screen w-screen bg-[url("/src/assets/loginImg.png")] bg-cover fixed z-0'></div>
      <div className="flex justify-center items-center h-screen relative z-10">
        <div className="w-[500px] max-h-[auto] mt-[60px] border-2 border-white rounded-[10px] flex flex-col items-center bg-white bg-opacity-90">
          <div className="">
            <div className="flex justify-left text-[20px] text-[black] font-[1000] ml-4 mt-8">회원 가입을 위해</div>
            <div className="flex justify-left text-[20px] text-[black] font-[1000] ml-4 mb-4">정보를 입력해주세요.</div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 이메일 작성 부분 */}
            <div className="ml-10 mr-8">이메일</div>
            <input
              type="email"
              value={email}
              ref={emailRef}
              onChange={handleEmailChange}
              className="w-[250px] ml-8 mb-5 border-b-2 focus:outline-none focus:border-[#b980ff]"
              placeholder="   E-mail"
            />
            <input type="button" value="중복확인" onClick={duflChk} className="w-[80px] h-[30px] rounded-[3px] mr-8 bg-[#b980ff] text-white hover:bg-violet-400" />

            {/* 이름 작성 부분 */}
            <div className="ml-10 mr-8">이름</div>
            <input type="text" value={name} ref={nameRef} onChange={handleNameChange} className="w-[250px] ml-8 mr-8 mb-5 border-b-2 focus:outline-none focus:border-[#b980ff]" placeholder="   Name" />

            {/* 닉네임 작성 부분 */}
            <div className="ml-10 mr-8">닉네임</div>
            <input type="text" value={nick} ref={nickRef} onChange={handleNickChange} className="w-[250px] ml-8 mr-8 mb-5 border-b-2 focus:outline-none focus:border-[#b980ff]" placeholder="   Nick" />

            {/* 생년월일 작성 부분 */}
            <div className="ml-10 mr-8">생년월일</div>
            <input
              type="date"
              value={birth}
              ref={birthRef}
              onChange={handleBirthChange}
              className="w-[250px] ml-8 mr-8 mb-5 border-b-2 focus:outline-none focus:border-[#b980ff]"
              placeholder="Birth"
            />

            {/* 비밀번호 작성 부분 */}
            <div className="ml-10 mr-8">비밀번호</div>
            <input
              type="password"
              value={password}
              ref={passwordRef}
              onChange={handlePasswordChange}
              className="w-[250px] ml-8 mb-5 border-b-2 focus:outline-none focus:border-[#b980ff]"
              placeholder="   Password"
            />

            {/* 비밀번호 확인 작성 부분 */}
            <div className="ml-10 mr-8">비밀번호 확인</div>
            <input
              type="password"
              value={passwordCheck}
              ref={passwordCheckRef}
              onChange={handlePasswordCheckChange}
              className="w-[250px] ml-8 mr-8 mb-1 border-b-2 focus:outline-none focus:border-[#b980ff]"
              placeholder="   Password-check"
            />
            {password && passwordCheck && (
              <div className={`ml-8 mr-8 text-[red] text-[14px] ${password === passwordCheck ? 'text-green-500' : 'text-red-500'}`}>
                {password === passwordCheck ? '※비밀번호가 일치합니다.' : '※비밀번호가 일치하지 않습니다.'}
              </div>
            )}
            {/* 성별 작성 부분 */}
            <div className="ml-8 mr-8 mb-1 mt-5">* 성별</div>
            <div className="ml-8 mr-8">
              <input type="radio" name="gender" className="m-1" value="남성" onChange={handleGenderChange} checked={gender === '남성'} />
              <label htmlFor="men">남성</label>
              <input type="radio" name="gender" className="m-1 ml-3" value="여성" onChange={handleGenderChange} checked={gender === '여성'} />
              <label htmlFor="men">여성</label>
            </div>

            {/* 약관동의 작성 부분 */}
            <div className="m-7">
              <input type="checkbox" className="mr-2" checked={agreement} ref={agreementRef} onChange={handleAgreementChange} />
              <span>
                이용약관 개인정보 수집 및 이용, 마케팅 활용 선택에 <br />
                모두 동의합니다.
              </span>
            </div>
            {/* 가입부분 */}
            <div className="flex justify-center">
              <button type="submit" className="w-[230px] h-[32px] bg-[#b980ff] rounded-[5px] text-white hover:scale-105 duration-100 mb-8">
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
