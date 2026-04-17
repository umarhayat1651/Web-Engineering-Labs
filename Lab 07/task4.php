<?php
$nextline = "<br>";

for ($i = 1; $i <= 6; $i++) {
    
    for ($j = 1; $j <= $i; $j++) {
        echo $j;
    }
    echo $nextline; 
}

for ($i = 5; $i >= 1; $i--) {
    for ($j = 1; $j <= $i; $j++) {
        echo $j;
    }
    echo $nextline;
}
?>