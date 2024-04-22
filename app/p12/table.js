const pool = require("../../databasepool");


class p12Table {
  static getP12() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM Dans_tul`,
        [],
        (error, response) => {
          if (error) {
            reject(error);
          } else if (response.rows.length === 0) {
            reject(new Error("No p12 were found"));
          } else {
            resolve(response.rows);
          }
        }
      );
    });
  }
}

module.exports = p12Table;