const db = require('../utile/db'); // Import your database utility\

exports.Orderproduct = async (req, res) => {
  try {
    const { customerId, products } = req.body;

    // Insert customer details into the 'customer' table if customerId is not provided
    let customerIdFromDB = customerId;
    if (!customerId) {
      const { user_names, sub_total, total_dollar, total_kh, total_dis, pay_by, status } = req.body;
      const sqlCustomer = "INSERT INTO customer (user_names,sub_total,total_dollar,total_kh,total_dis,pay_by,status) VALUES (?,?,?,?,?,?,?)";
      const customerValues = [user_names, sub_total, total_dollar, total_kh, total_dis, pay_by, status];
      const [customerResult] = await db.promise().query(sqlCustomer, customerValues);
      customerIdFromDB = customerResult.insertId;
    }

    // Calculate total and insert orders
    for (const product of products) {
      const { product_id, qty, price, discount, total } = product;

      // Insert order details into the 'order' table
      const sqlOrder = "INSERT INTO `order` (customer_id,product_id,qty,price,discount,total) VALUES (?, ?, ?, ?, ?,?)";
      const orderValues = [customerIdFromDB, product_id, qty, price, discount, total];
      await db.promise().query(sqlOrder, orderValues);
    }

    // Respond with success message
    res.status(201).json({ message: 'Order created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while creating the order' });
  }
};


//// Get show product by sale
exports.Show_product_by_userlogin = (req, res) => {
  const username = req.params.id;  // Assuming you're passing the username in the URL
  const query = `
    SELECT pro.names as pro_names,ord.qty,ord.price,ord.discount,ord.total,ord.created_at
    FROM \`order\` as ord 
    INNER JOIN customer as cus ON ord.customer_id = cus.id 
    INNER JOIN product as pro ON ord.product_id = pro.id
    WHERE cus.user_names = ?
  `;

  db.query(query, [username], (err, result) => {
    if (err) {
      console.error("Database error:", err);  // Log the error to the console
      return res.status(500).send(`Error fetching product: ${err.message}`);  // Send the full error message to the client
    }
    res.json(result);
  });
};
