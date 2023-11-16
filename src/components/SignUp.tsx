import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [agreement, setAgreement] = useState<boolean>(false);

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
    const handleSubmit = async (e :React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault(); // e.preventDefault()을 호출하면 브라우저가 폼을 제출하려고 할 때 일어나는 새로고침 등의 기본 동작이 막히게 됨
      if (!email || !name || !birth || !password || !passwordCheck || !gender || !agreement) {
        // 필수 필드가 모두 채워지지 않은 경우 처리
        alert('모든 필수 항목을 입력하세요.');
        return;
      }
      try {
        // 서버로 POST 요청 수행
        const response = await fetch('YOUR_SERVER_ENDPOINT', { //YOUR_SERVER_ENDPOINT에 서버로 POST 요청을 보냅니다. 이 부분은 실제 서버의 엔드포인트 주소로 대체되어야 합니다.
          method: 'POST', // 서버에 데이터를 보내는 형식
          headers: {
            'Content-Type': 'application/json', //HTTP 요청 헤더를 설정합니다. 여기서는 'Content-Type'을 'application/json'으로 설정하여 요청이 JSON 형식의 데이터를 포함한다고 서버에 알려줍니다.
          },
          body: JSON.stringify({  // JSON.stringify를 사용하여 객체를 문자열로 변환한 데이터가 포함됩니다. 이 데이터에는 사용자가 입력한 이메일, 이름, 생년월일, 비밀번호, 비밀번호 확인, 성별, 약관 동의 여부가 포함됩니다.
            email,
            name,
            birth,
            password,
            passwordCheck,
            gender,
            agreement,
          }),
        });
    
        // 요청이 성공했는지 확인 (상태 코드 200-299)
        if (response.ok) {
          // 성공적으로 처리한 경우, 예를 들어 사용자를 성공 페이지로 리디렉션할 수 있습니다.
          alert('가입이 완료되었습니다!');
          // 선택적으로 사용자를 리디렉션하거나 기타 작업을 수행할 수 있습니다.
        } else {
          // 에러 처리, 예를 들어 사용자에게 오류 메시지를 표시할 수 있습니다.
          alert('가입에 실패했습니다. 나중에 다시 시도해주세요.');
        }
      } catch (error) {
        // 네트워크 오류 또는 기타 예외 처리
        console.error('에러:', error);
        alert('오류가 발생했습니다. 나중에 다시 시도해주세요.');
      }
    
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
        <div className="w-[500px] max-h-[auto] mt-[60px] border-2 border-white rounded-[10px] flex flex-col items-center bg-white bg-opacity-90">
          <div className="">
            <div className="flex justify-left text-[20px] text-[black] font-[1000] ml-4 mt-8">회원 가입을 위해</div>
            <div className="flex justify-left text-[20px] text-[black] font-[1000] ml-4 mb-4">정보를 입력해주세요.</div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 이메일 작성 부분 */}
            <div className="ml-8 mr-8">* 이메일</div>
            <input type="email" value={email} onChange={handleEmailChange} className="w-[250px] ml-8 mb-5 border-b-2 focus:outline-none focus:border-[#b980ff]" placeholder="   E-mail" />
            <button className="w-[80px] h-[30px] rounded-[3px] mr-8 bg-[#b980ff] text-white hover:bg-violet-400">중복확인</button>

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
                {password === passwordCheck ? '※비밀번호가 일치합니다.' : '※비밀번호가 일치하지 않습니다.'}
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
