const clotheModel = require('../models/clotheModel');

async function findStylesAndClothes(search) {
  // styles => search를 해온 값
  const styles = await clotheModel.getStylesBySearch(search);
  if (styles.length > 0) {
    const styleUrlList = [];
    const clothesList = [];
    for (let i = 0; i < 3; i++) {
      //for문 조건식이 false가 되면 for문 stop
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
      styleUrlList.push(selectedStyle[1]);
    }
    return { clothes: clothesList, styleUrl: styleUrlList };
  } else {
    return null;
  }
}

async function findStylesAndClothesById(id) {
  const styles = await clotheModel.getStylesById(id);
  console.log('받아온 인자값', styles);

  try {
    if (styles.length > 0) {
      const styleUrlList = [];
      const clothesList = [];

      const clotheIds = styles[0][0].split(',');
      console.log('쪼개진 id들', clotheIds);

      const clothes = [];
      for (let itemId of clotheIds) {
        const clotheInfo = await clotheModel.getClotheById(itemId);
        console.log('clotheInfo for itemId', itemId, ':', clotheInfo); // 로그 추가
        if (clotheInfo.length > 0) {
          clothes.push(clotheInfo[0]); // 각 옷 정보 추가
        }
      }
      clothesList.push(clothes);
      styleUrlList.push(styles[0][1]);

      console.log('clothesList는 ', clothesList);
      return { clothes: clothesList, styleUrl: styleUrlList };
    }
  } catch (error) {
    console.error('findStylesAndClothesById 함수 실행 중 오류 발생:', error);
  }
}

module.exports = { findStylesAndClothes, findStylesAndClothesById };
