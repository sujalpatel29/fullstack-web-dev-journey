<!DOCTYPE html>
<html>
<head>
  <title>Simple PHP Calculator</title>
</head>
<body>

<h2>PHP Calculator Using Switch Case</h2>
<form method="post">
  Number 1: <input type="number" name="num1" required><br><br>
  Number 2: <input type="number" name="num2" required><br><br>
  Operation:
  <select name="operator">
    <option value="+">Addition (+)</option>
    <option value="-">Subtraction (-)</option>
    <option value="*">Multiplication (*)</option>
    <option value="/">Division (/)</option>
  </select><br><br>
  <input type="submit" name="calculate" value="Calculate">
</form>

<?php
if (isset($_POST['calculate'])) {
  $num1 = $_POST['num1'];
  $num2 = $_POST['num2'];
  $op = $_POST['operator'];

  switch ($op) {
    case '+':
      $result = $num1 + $num2;
      echo "Result: $result";
      break;
    case '-':
      $result = $num1 - $num2;
      echo "Result: $result";
      break;
    case '*':
      $result = $num1 * $num2;
      echo "Result: $result";
      break;
    case '/':
      if ($num2 != 0) {
        $result = $num1 / $num2;
        echo "Result: $result";
      } else {
        echo "Error: Division by zero";
      }
      break;
    default:
      echo "Invalid operator";
  }
}
?>

</body>
</html>
