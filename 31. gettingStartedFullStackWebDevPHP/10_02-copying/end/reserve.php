<!doctype html>
<html lang="en">

<head>
  <?php include 'includes/head.php'; ?>
</head>

<body>
  <header id="intro">
    <div id="reservations">
      <?php include 'includes/reservation-form.php'; ?>
    </div>

    <nav id="nav">
      <?php include 'includes/navbar.php'; ?>
    </nav>
  </header>

  <?php 
    include 'php/dbconnect.php';
  ?>

  <main id="wrapper">
    <div class="scene">
      <article class="content">
        <p>You requested a reservation for <?php echo ($_POST)['nameres'] ?> with the following dates:</p>
        <p>From: <?php echo ($_POST['startres']); ?></p>
        <p>To: <?php echo ($_POST['endres']); ?></p>
        <p>We've received your request and will get back to you within 24 hours.</p>
      </article>
    </div>
  </main>

  <footer class="scene">
    <?php include 'includes/footer.php'; ?>
  </footer>

  <script src="js/script.js"></script>
  <script src="js/today.js"></script>

</body>
</html>
