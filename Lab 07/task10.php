<?php

$locations = [
    "Pakistan", "England", "India", "America", "Dubai", 
    "Saudi Arabia", "Mexico", "Turkey", "Holland", 
    "Karachi", "Peshawar", "Lahore"
];


echo "<h3>Original List (Comma Separated):</h3>";
$total = count($locations);
foreach ($locations as $key => $val) {
    echo $val;

    if ($key < $total - 1) {
        echo ", ";
    }
}

sort($locations);

echo "<h3>Sorted List (Unordered List):</h3>";
echo "<ul>";
foreach ($locations as $val) {
    echo "<li>" . $val . "</li>";
}
echo "</ul>";

$locations[] = "Quetta";
$locations[] = "Faisalabad";
$locations[] = "Multan";

sort($locations);

echo "<h3>Final Sorted List (with New Cities):</h3>";
echo "<ul>";
foreach ($locations as $val) {
    echo "<li>" . $val . "</li>";
}
echo "</ul>";
?>