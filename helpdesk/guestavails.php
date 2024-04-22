<?php
@include 'config.php';
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

    <section class="orderfood" id="orderfood">

        <h2>Avail Services</h2>

        <div class="category-dropdown">
            <label for="food">Category</label>
            <select name="food" id="food">
                <option value="food1">option1</option>
                <option value="food2">option2</option>
                <option value="food3">option3</option>
                <option value="food4">option4</option>
            </select>
            <input class="catergoryBtn" type="submit" value="Submit">
        </div>

        <table>
          <thead>
            <tr>
                <th>Service ID</th>
                <th>Date</th>
                <th>Service</th>
                <th>Service Fee</th>
                <th>Service Description</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
          <?php

          $sql = "SELECT * FROM services";
          $result = $conn->query($sql);

          if (!$result) {
              die("Invalid Query: " . $conn->error);
          }

          while($row = $result->fetch_assoc()) {

            echo " <tr>
            <td>" . $row["service_id"] . "</td>
            <td>" . $row["service_date"] . "</td>
            <td>" . $row["service_type"] . "</td>
            <td>" . $row["service_price"] . "</td>
            <td>" . $row["service_description"] . "</td>
            <td><button class='add-to-order'>Avail</button></td>

          </tr>";

          }
              ?>

          </tbody>
        </table>
    <button id="orderButton" class="order-button">Cart</button>
    <br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br>
  </section>


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
          <th>Service Type</th>
          <th>Date</th>
          <th>Description</th>
          <th>Service Fee</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Laundry</td>
          <td>date</td>
          <td>Description</td>
          <td>Service Fee</td>
          <td><button class="add-to-guest">Remove</button></td>
        </tr>
      </tbody>
    </table>
    <button class="finalavail">Check Avail</button>
  </div>
</div>
<script  src="js/orderservice.js"></script>
</body>
</html>