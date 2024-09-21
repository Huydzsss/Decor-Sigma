const express = require('express');
const mysql = require('mysql2');  // Sử dụng mysql2
const cors = require('cors');
const app = express();
const port = 3001; 

app.use(cors());
app.use(express.static('public'));
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'techwiz' 
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/techwiz/products', (req, res) => {
  const sql = 'SELECT * FROM products'; 
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).send('Error fetching products');
      return;
    }
    res.json(results);
  });
});
app.get('/techwiz/products/:id', (req, res) => {
    const productId = req.params.id;
    const sql = 'SELECT * FROM products WHERE id = ?'; 
    connection.query(sql, [productId], (err, results) => {
      if (err) {
        console.error('Error fetching product:', err);
        res.status(500).send('Error fetching product');
        return;
      }
      if (results.length === 0) {
        return res.status(404).send('Product not found'); // Nếu không tìm thấy sản phẩm
      }
      res.json(results[0]); // Chỉ trả về sản phẩm đầu tiên
    });
  });
  app.get('/techwiz/categories', (req, res) => {
    const sql = 'SELECT * FROM categories'; 
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching categories:', err);
        res.status(500).send('Error fetching categories');
        return;
      }
      res.json(results);
    });
  });
  app.get('/techwiz/product_categories',(req,res) =>{
    const sql = 'SELECT * FROM product_categories'; 
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching product_categories:', err);
        res.status(500).send('Error fetching product_categories');
        return;
      }
      res.json(results);
    });
  })
  app.get('/techwiz/search', (req, res) => {
    const searchTerm = req.query.q;
    const sql = 'SELECT * FROM products WHERE product_name LIKE ?';
    connection.query(sql, [`%${searchTerm}%`], (err, results) => {
      if (err) {
        console.error('Error searching products:', err);
        res.status(500).send('Error searching products');
        return;
      }
      res.json(results);
    });
  });
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
