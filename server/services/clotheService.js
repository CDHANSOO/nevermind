const clotheModel = require('../models/clotheModel');

async function findStylesAndClothes(search) {
  const styles = await clotheModel.getStylesBySearch(search);
  if (styles.length > 0) {
    const randomIndex = parseInt(Math.random() * styles.length);
    const selectedStyle = styles[randomIndex];
    const clotheIds = selectedStyle[0].split(',');
    const clothes = [];

    for (let itemId of clotheIds) {
      const clotheInfo = await clotheModel.getClotheById(itemId);
      if (clotheInfo.length > 0) {
        clothes.push(clotheInfo[0]);
      }
    }

    return { clothes, styleUrl: selectedStyle[1] };
  } else {
    return null;
  }
}

module.exports = { findStylesAndClothes };
