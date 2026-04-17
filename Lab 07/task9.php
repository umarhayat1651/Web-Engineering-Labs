<?php
$nextline = "<br>";
function sumOfDigits($number) {
    $sum = 0;
    
    while ($number > 0) {

        $digit = $number % 10;
        
        $sum += $digit;
        
        $number = (int)($number / 10);
    }
    
    return $sum;
}

$inputNumber = 12345;
$result = sumOfDigits($inputNumber);

echo "The input number is:" . $inputNumber . $nextline;
echo "The summation of its digits is: ". $result;
?>