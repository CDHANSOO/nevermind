const afterUploadImage = (req, res) => {
  // 업로드한 이미지의 정보를 프론트로 다시 보내주는 함수
  if (req.file) {
    console.log(req.file);
    res.json({ message: '파일이 성공적으로 업로드되었습니다.', url: req.file.location });
  } else {
    res.status(400).send('파일이 업로드되지 않았습니다.');
  }
};

module.exports = {
  afterUploadImage,
};
