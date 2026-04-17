<?php

$nextline = "<br>";
$prime = [];

for ($i = 2; $i <= 100; $i++) {
    $isPrime = true;

    for ($j = $i-1; $j >= 2; $j--) {
        if ($i % $j == 0 ) {
            $isPrime = false;
            break;
        }
    }
    if ($isPrime) {
        $prime[] = $i;
    }
}

echo array_sum($prime);

?>