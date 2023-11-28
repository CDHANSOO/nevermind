const axios = require('axios');
const { getStylesById, getClotheById } = require('../models/clotheModel');
const afterUploadImage = async (req, res) => {
  if (req.file) {
    console.log('req.file 정보 :', req.file);

    try {
      // FastAPI 서버의 URL
      const fastApiUrl = 'http://127.0.0.1:5000/recommendation/image';

      // FastAPI 서버로 요청을 보냅니다. 이 예시에서는 이미지의 URL을 JSON 형태로 보냅니다.
      const response = await axios.post(fastApiUrl, {
        url: req.file.location, // S3에 업로드된 이미지의 URL
        k: 5, // 필요한 경우 변경 가능
      });
      // 파일 이름 추출
      const filename = response.data;

      const styleId = filename.map(data => {
        return data[0].split('.')[0];
      }); // 확장자 제거하고 id 정보만 추출
      console.log('확장자 제거하고 추출한 id', styleId);
      // DB에서 코디 정보 가져오기
      // 딥러닝 5가지 결과에 대한 코디 정보들 가져오기
      const clothesInfoPromises = styleId.map(id => getStylesById(id));
      const stylesInfo = await Promise.all(clothesInfoPromises);

      console.log('stylesInfo 정보들', stylesInfo);

      // styleInfo 배열을 처리하여 각 스타일의 의류 정보를 가져오는 함수
      async function getStylesAndClothes(stylesInfo) {
        const results = [];

        for (const style of stylesInfo) {
          clotheList = [];
          console.log('처리중인 style:', style);
          const styleData = style[0];
          const styleIds = styleData[0].split(','); // 스타일 ID들을 배열로 분리
          console.log('쪼개진 id 배열', styleIds);
          const styleUrl = styleData[1];

          // 각 스타일 ID에 대해 findStylesAndClothesById 호출
          for (const id of styleIds) {
            const clothesData = await getClotheById(id);
            if (clothesData) {
              // 결과에 스타일 URL과 옷 정보 추가
              clotheList.push(clothesData[0]);
            }
          }
          results.push({ styleUrl, clothes: clotheList });
        }

        return results;
      }

      // styleInfo 배열에서 각 스타일의 의류 정보 가져오기
      const stylesAndClothes = await getStylesAndClothes(stylesInfo);

      // FastAPI 서버로부터의 응답을 프론트엔드로 전달
      res.json({ message: '파일이 성공적으로 업로드되었습니다.', url: req.file.location, fastApiResponse: stylesAndClothes });
      console.log('Fastapi 전송 데이터', response.data);
      console.log('딥러닝 모델 결과 의류 정보들', stylesAndClothes);
    } catch (error) {
      console.error('FastAPI 서버 요청 중 오류 발생:', error);
      res.status(500).send('서버에서 오류가 발생했습니다.');
    }
  } else {
    res.status(400).send('파일이 업로드되지 않았습니다.');
  }
};

module.exports = {
  afterUploadImage,
};
