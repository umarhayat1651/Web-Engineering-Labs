<?php
$myList = [1, 1, 2, 2, 3, 4, 5, 5];

$result = array_values(array_unique($myList));

echo implode(", ", $result);
?>