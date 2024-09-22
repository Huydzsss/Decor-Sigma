const express = require('express');
const mysql = require('mysql2'); 
const cors = require('cors');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001; 

app.use(express.json());
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

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
      return res.sendStatus(401);
  }

  jwt.verify(token, '24012005', (err, user) => {
      if (err) {
          return res.sendStatus(403);
      }
      req.user = user;
      next();
  });
};


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
  app.get('/techwiz/category', (req, res) => {
    const sql = 'SELECT * FROM category'; 
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching category:', err);
        res.status(500).send('Error fetching category');
        return;
      }
      res.json(results);
    });
  });
  
  app.get('/techwiz/product_categories', (req, res) => {
    const sql = `
      SELECT pc.id, c.category_name, p.product_name, p.picture, p.type, p.brand, p.description, p.price, pc.category_id
      FROM product_categories pc
      JOIN category c ON pc.category_id = c.id
      JOIN products p ON pc.products_id = p.id
    `;
  
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching product_categories:', err);
        res.status(500).json({ error: 'Error fetching product_categories', details: err });
        return;
      }
      console.log("Product Categories:", results); 
      res.json(results);
    });
  });

  
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

// Đăng ký người dùng
app.post('/techwiz/register', async (req, res) => {
  const { email, password, username } = req.body;

  const checkUserSql = 'SELECT * FROM user WHERE email = ?';
  connection.query(checkUserSql, [email], async (err, results) => {
      if (err) {
          console.error('Error checking user:', err);
          return res.status(500).send('Error checking user');
      }
      if (results.length > 0) {
          return res.status(409).send('User already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const sql = 'INSERT INTO user (email, password, username) VALUES (?, ?, ?)';
      connection.query(sql, [email, hashedPassword, username], (err) => {
          if (err) {
              console.error('Error registering user:', err);
              return res.status(500).send('Error registering user');
          }
          res.status(201).send('User registered successfully');
      });
  });
});

// Đăng nhập người dùng
app.post('/techwiz/user', async (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM user WHERE email = ?';
  connection.query(sql, [email], async (err, results) => {
      if (err) {
          console.error('Error retrieving user:', err);
          return res.status(500).send('Error retrieving user');
      }
      if (results.length === 0) {
          return res.status(401).send('Invalid credentials');
      }

      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).send('Invalid credentials');
      }

      const token = jwt.sign({ email: user.email, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
      
      res.json({
          message: 'Login successful',
          token,
      });
  });
});

// Cập nhật thông tin người dùng
app.put('/techwiz/user', authenticateJWT, async (req, res) => {
  const { username, currentPassword, newPassword, email } = req.body;

  const sql = 'SELECT * FROM user WHERE email = ?';
  connection.query(sql, [req.user.email], async (err, results) => {
      if (err) {
          console.error('Error retrieving user:', err);
          return res.status(500).send('Error retrieving user');
      }
      if (results.length === 0) {
          return res.status(404).send('User not found');
      }

      const user = results[0];
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
          return res.status(401).send('Invalid current password');
      }

      const updatedFields = {
          username,
          email,
      };

      if (newPassword) {
          updatedFields.password = await bcrypt.hash(newPassword, 10);
      }

      const updateSql = 'UPDATE user SET ? WHERE email = ?';
      connection.query(updateSql, [updatedFields, req.user.email], (err) => {
          if (err) {
              console.error('Error updating user:', err);
              return res.status(500).send('Error updating user');
          }
          res.send('User updated successfully');
      });
  });
});






  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
