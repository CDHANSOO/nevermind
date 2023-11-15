import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [gender, setGender] = useState('');
  const [agreement, setAgreement] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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

    // 이 함수를 추가하여 폼 제출을 처리합니다.
    const handleSubmit = (e :React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
  };

  console.log('이메일:', email);
  console.log('이름:', name);
  console.log('생년월일:', birth);
  console.log('비밀번호:', password);
  console.log('비밀번호 확인:', passwordCheck);
  console.log('성별:', gender);
  console.log('약관 동의:', agreement);

  return (
    <>
      <div className='h-screen w-screen bg-[url("/src/assets/loginImg.png")] bg-cover fixed z-0'></div>
      <div className="flex justify-center items-center h-screen relative z-10">
        <div className="w-[450px] h-auto border-2 border-white rounded-[10px] flex flex-col items-center bg-white bg-opacity-90">
          <div className="">
            <div className="flex justify-left text-[20px] text-[black] font-[1000] ml-4 mt-8">회원 가입을 위해</div>
            <div className="flex justify-left text-[20px] text-[black] font-[1000] ml-4 mb-4">정보를 입력해주세요.</div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 이메일 작성 부분 */}
            <div className="ml-8 mr-8">* 이메일</div>
            <input type="email" value={email} onChange={handleEmailChange} className="w-[250px] ml-8 mb-5 border-b-2 focus:outline-none focus:border-[#b980ff]" placeholder="   E-mail" />
            <button className="w-[80px] h-[30px] rounded-[3px] mr-8 bg-[#b980ff] text-white hover:scale-103">중복확인</button>

            {/* 이름 작성 부분 */}
            <div className="ml-8 mr-8">* 이름</div>
            <input type="text" value={name} onChange={handleNameChange} className="w-[250px] ml-8 mr-8 mb-5 border-b-2 focus:outline-none focus:border-[#b980ff]" placeholder="   Name" />

            {/* 생년월일 작성 부분 */}
            <div className="ml-8 mr-8">* 생년월일</div>
            <input type="date" value={birth} onChange={handleBirthChange} className="w-[250px] ml-8 mr-8 mb-5 border-b-2 focus:outline-none focus:border-[#b980ff]" placeholder="Birth" />

            {/* 비밀번호 작성 부분 */}
            <div className="ml-8 mr-8">* 비밀번호</div>
            <input type="password" value={password} onChange={handlePasswordChange} className="w-[250px] ml-8 mb-5 border-b-2 focus:outline-none focus:border-[#b980ff]" placeholder="   Password" />

            {/* 비밀번호 확인 작성 부분 */}
            <div className="ml-8 mr-8">* 비밀번호 확인</div>
            <input
              type="password"
              value={passwordCheck}
              onChange={handlePasswordCheckChange}
              className="w-[250px] ml-8 mr-8 mb-1 border-b-2 focus:outline-none focus:border-[#b980ff]"
              placeholder="   Password-check"
            />
            {password && passwordCheck && (
              <div className={`ml-8 mr-8 text-[red] text-[14px] ${password === passwordCheck ? 'text-green-500' : 'text-red-500'}`}>
                {password === passwordCheck ? '※비밀 번호가 일치합니다.' : '※비밀 번호가 일치하지 않습니다.'}
              </div>
            )}
            {/* 성별 작성 부분 */}
            <div className="ml-8 mr-8 mb-1 mt-5">* 성별</div>
            <div className="ml-8 mr-8">
              <input type="radio" name="gender" className="m-1" value="남성" onChange={handleGenderChange} checked={gender === '남성'}/>
              <label htmlFor="men">남성</label>
              <input type="radio" name="gender" className="m-1 ml-3" value="여성" onChange={handleGenderChange} checked={gender === '여성'}/>
              <label htmlFor="men">여성</label>
            </div>

            {/* 약관동의 작성 부분 */}
            <div className="m-7">
              <input type="checkbox" className="mr-2" checked={agreement} onChange={handleAgreementChange}/>
              <span>이용약관 개인정보 수집 및 이용, 마케팅 활용 선택에 <br />모두 동의합니다.</span>
            </div>
            {/* 가입부분 */}
            <div className="flex justify-center">
              <button type="submit" className="w-[230px] h-[32px] bg-[#b980ff] rounded-[5px] text-white hover:scale-105 duration-100 mb-8">가입하기</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
