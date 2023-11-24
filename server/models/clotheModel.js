const dbConnector = require('../config/dbConnector');

async function getStylesBySearch(search) {
  const connection = await dbConnector.dbConnect();
  try {
    const query = 'SELECT STYLE_IDS, STYLE_URL FROM T_STYLE WHERE STYLE_CMT LIKE :search OR STYLE_TAG LIKE :search';
    const result = await connection.execute(query, { search: '%' + search + '%' }, [search, search]);
    return result.rows;
  } finally {
    await connection.close();
  }
}

async function getClotheById(item) {
  const connection = await dbConnector.dbConnect();
  try {
    const query = 'SELECT * FROM T_CLOTHE WHERE CLOTHE_ID = :item';
    const result = await connection.execute(query, [item]);
    return result.rows;
  } finally {
    await connection.close();
  }
}

module.exports = { getStylesBySearch, getClotheById };
