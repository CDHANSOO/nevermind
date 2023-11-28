const axios = require('axios');
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

      // FastAPI 서버로부터의 응답을 프론트엔드로 전달
      res.json({ message: '파일이 성공적으로 업로드되었습니다.', url: req.file.location, fastApiResponse: response.data });
      console.log('Fastapi 전송 데이터', response.data);
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
