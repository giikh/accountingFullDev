const pool = require("../../databasepool");
// const moment = require("moment");

class p5Table {
  static getP5() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM yerunhii_journal`,
        [],
        (error, response) => {
          if (error) {
            reject(error);
          } else if (response.rows.length === 0) {
            reject(new Error("No p5 were found"));
          } else {
            resolve(response.rows);
          }
        }
      );
    });
  }
}

module.exports = TasksTable;