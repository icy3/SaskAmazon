var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "student",
  database: "checkbox"
});



connection.query("SELECT 1 + 1 AS solution", function(error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});


const getAllTransactions = callback => {
  connection.query("SELECT * FROM boxey;", (err, data) => {
console.log("xxxxxxxxx", callback)
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const createTransactions = (item, callback) => {
  console.log("this is the item", item);
  connection.query(
    `INSERT INTO boxey (price, productName, imgUrls, category_id) VALUES ('${item.price}','${item.productName}','${item.imgUrls}','${item.category_id}');`,
    (err, data) => {
  
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    }
  );
};

const getProd = function(id, callback) {
  console.log("HEY THIS IS IT",id)
  connection.query(`select price from boxey where id = '${id}';`, (err, data) => {

    if (err) {
      console.log('database  errorZZ',err);
    } else {
      console.log("heyyyyyyyyy" ,data) 

      callback(null, data);
    }
  })
};

module.exports = {
  getAllTransactions,
  createTransactions,
  getProd
};
