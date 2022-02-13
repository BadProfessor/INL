<!DOCTYPE html>
<html lang="en">
<head>
  <title>Reservation results</title>
</head>

<body>

<p>You requested a reservation for <?php echo ($_POST)['nameres'] ?> with the following dates:</p>
  <p>From: <?php echo ($_POST['startres']); ?></p>
  <p>To: <?php echo ($_POST['endres']); ?></p>
  <p>We've received your request and will get back to you within 24 hours.</p>

</body>
</html>