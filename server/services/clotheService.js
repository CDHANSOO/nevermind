const clotheModel = require('../models/clotheModel');

async function findStylesAndClothes(search) {
  const styles = await clotheModel.getStylesBySearch(search); // styles = result.rows

  if (styles.length > 0) {
    const styleUrlList = [];
    const clothesList = [];
    for(let i = 0 ; i < 3; i++ ){ //for문 조건식이 false가 되면 for문 stop
      const randomIndex = parseInt(Math.random() * styles.length);
      const selectedStyle = styles[randomIndex]; // STYLE_IDS, STYLE_URL가 담긴다.
      
      const clotheIds = selectedStyle[0].split(','); // 문자열을 배열로 변환하는 함수 split -> STYLE_IDS를 배열 형태로 변형
      
      const clothes = [];
      for (let itemId of clotheIds) {
        const clotheInfo = await clotheModel.getClotheById(itemId); // T_CLOTHE 테이블에서 작은 사이즈 정보들(코디에 대한 각각의 옷정보) 가져오기
        if (clotheInfo.length > 0) {
          clothes.push(clotheInfo[0]);
        }
      }
      clothesList.push(clothes);
      styleUrlList.push(selectedStyle[1])
    }
    return { clothes : clothesList, styleUrl: styleUrlList };
  } else {
    return null;
  }
}

module.exports = { findStylesAndClothes };
