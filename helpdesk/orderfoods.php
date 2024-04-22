<?php
@include 'config.php';

if(isset($_POST['add_to_cart'])) {
   $product_name = $_POST['product_name'];
   $product_price = $_POST['product_price'];
   $product_picture = $_POST['product_picture'];
   $product_quantity = 1;
   // Adding a check for the existence of the product_description key
   $product_description = isset($_POST['product_description']) ? $_POST['product_description'] : ''; 

   $select_cart = mysqli_query($conn, "SELECT * FROM `cart` WHERE product_name = '$product_name'");
   if(mysqli_num_rows($select_cart) > 0){
      $message[] = 'Already added to the cart';
   } else {
      $insert_product = mysqli_query($conn, "INSERT INTO `cart`(product_name, product_price, product_picture, product_quantity) VALUES('$product_name', '$product_price', '$product_picture', '$product_quantity')");
      $message[] = 'Added to the cart';
   }
}

if(isset($_GET['action']) && $_GET['action'] == 'delete_cart'){
   mysqli_query($conn, "DELETE FROM `cart`");
   unset($_SESSION['order_details']);
}

function delete_cart() {
   unset($_SESSION['cart']);
}

if (isset($_GET['action']) && $_GET['action'] == 'order_again') {
   mysqli_query($conn, "DELETE FROM `cart`");
   $_SESSION['order_details'] = null;
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/footers.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/styles1.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <title>Document</title>
    <style>

.apparel-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
}

.product-box {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
    width: 250px;
}

.product-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.product-name {
    margin-top: 10px;
    font-size: 1.2em;
}

.product-description {
    margin-top: 5px;
    font-size: 0.9em;
}

.product-price {
    margin-top: 10px;
    font-size: 1.1em;
    font-weight: bold;
}

.add-to-cart-btn {
    margin-top: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
    background-color: #0056b3;
}

.button-cart {
    background-color: #007bff; /* Orange color */
    color: #fff; /* White text */
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-cart:hover {
    background-color: #0056b3; /* Darker shade of orange on hover */
}

#orderButton {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
}
      
          </style>
</head>
<body style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
    <header>
        <div class="container">
            <h1>Nice Hotel</h1>
          </div>
          <nav>
            <a href="homepage.html">Home</a>
            <a href="orderfoods.php">Order Foods</a>
            <a href="guestavails.php">Guest Service</a>
            <a href="abouts.html">About</a>
          </nav>
        </div>
      </header>

      <section class="apparel-section" id="orderfood">

<?php
$select_products = mysqli_query($conn, "SELECT * FROM `products`");
if(mysqli_num_rows($select_products) > 0){
    while($fetch_product = mysqli_fetch_assoc($select_products)){
?>

<form action="" method="post" class="product-form">
    <div class="product-box">
        <img src="picture/<?php echo $fetch_product['product_picture']; ?>" class="product-image">
        <h3 class="product-name"><?php echo $fetch_product['product_name']; ?></h3>
        <p class="product-description"><?php echo $fetch_product['product_description']; ?></p>
        <div class="product-price">₱<?php echo $fetch_product['product_price']; ?></div>
        <input type="hidden" name="product_name" value="<?php echo $fetch_product['product_name']; ?>">
        <input type="hidden" name="product_price" value="<?php echo $fetch_product['product_price']; ?>">
        <input type="hidden" name="product_picture" value="<?php echo $fetch_product['product_picture']; ?>">
        <input type="hidden" name="product_description" value="<?php echo $fetch_product['product_description']; ?>">
        <input type="submit" class="add-to-cart-btn" value="Add To Cart" name="add_to_cart">
    </div>
</form>

<?php
    };
};
?>

</section> 

<button id="orderButton" class="button-cart">Cart</button>


  <footer class="footer1">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Contact Us</h3>
          <p>Email: ReymielVsEstrada@gmail.com</p>
          <p>Phone: +ImissYouBalikKana</p>
          <p>Address: 123 Biringan City, Philippines</p>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="https://www.facebook.com/Reymiel14" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.facebook.com/louiegang09" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/marklexter.estrada.4" class="social-icon"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>

<!-- The order Modal -->
<div id="ModalOrder" class="modal">

  <!-- order Modal content -->
  <div class="modal-content">
    <span class="close close-order">&times;</span>
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Food Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Image</td>
          <td>Food Name</td>
          <td>Category</td>
          <td>Description</td>
          <td><input style="margin-bottom: 20px;" class="quantity-input" type="text" pattern="[0-9]*" inputmode="numeric" min="0" value="0"><br></td>
          <td>Price</td>
          <td><button class="add-to-guest">Remove</button></td>
        </tr>
      </tbody>
    </table>
    <button class="finalavail">Order</button>
  </div>
</div>


<script  src="js/orderservice.js"></script>
</body>
</html>
