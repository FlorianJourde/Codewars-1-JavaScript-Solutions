<?php

// Reversed Strings
function solution($str) {
    return strrev($str);
}

// How good are you really?
function betterThanAverage($classPoints, $yourPoints) {
    $average = array_sum($classPoints)/count($classPoints);
    if ($average < $yourPoints) {
        return true;
    }

    return false;
}

function betterThanAverage($classPoints, $yourPoints) {
    return array_sum($classPoints) / count($classPoints) < $yourPoints;
}

function betterThanAverage($classPoints, $yourPoints) {
    return array_sum($classPoints)/sizeof($classPoints) < $yourPoints ? true : false;
}

//Remove exclamation marks
function remove_exclamation_marks($string) {
    return str_replace('!', '', $string);
}

// Sum Mixed Array
function sum_mix($a) {
    return array_sum($a);
}

// Simple multiplication
function simpleMultiplication($number) {
    if ($number % 2 === 0) {
        return $number * 8;
    } else {
        return $number * 9;
    }
}

function simpleMultiplication($number) {
    return ($number % 2 == 0) ? $number * 8 : $number * 9;
}

// Convert a Number to a String!
function numberToString($num) {
    return strval($num);
}

// Convert a String to a Number!
function stringToNumber($str) {
    return intval($str);
}

//   draw me a chessboard
function chessBoard($rows, $columns) {
    $board = array();
    $boards = array();

    for ($i = 0; $i < $rows; $i++) {
        $board = array();
        
        for ($j = 0; $j < $columns; $j++) {
        if ($i % 2 === 0) {
            if ($j % 2 === 0) {
            $board[] = "O";      
            } else {
            $board[] = "X";
            }
        } else {
            if ($j % 2 === 0) {
            $board[] = "X";      
            } else {
            $board[] = "O";
            }
        }
        }
        $boards[] = $board;
    }

    return $boards;
}

function chessBoard($rows, $columns) {
    $board = [];
    for ($row = 0; $row < $rows; $row++) {
      for ($column = 0; $column < $columns; $column++) {
        $board[$row][$column] = ($row + $column) % 2 ? "X" : "O";
      }
    }
    
    return $board;
}


//   Expressions Matter
function expressionMatter($a, $b, $c) {
    $value = array();

    $value[] = $a * ($b + $c);
    $value[] = $a * $b * $c;
    $value[] = $a + $b * $c;
    $value[] = $a * $b + $c;
    $value[] = $a + $b + $c;
    $value[] = ($a + $b) * $c;


    rsort($value);
    return $value[0];
}

  function expressionMatter($a, $b, $c) {
    return max([
        $a+$b+$c,
        ($a+$b)*$c,
        $a*($b+$c),
        $a+$b*$c,
        $a*$b+$c,
        $a*$b*$c
    ]);
}

function expressionMatter($a, $b, $c)
{
    return max($a + $b + $c, $a * $b * $c, $a * ($b + $c), ($a + $b) * $c);
}

// Removing Elements
function removeEveryOther($array) {
    return array_filter($array, function($i) {
        return !($i % 2);
    }, ARRAY_FILTER_USE_KEY);
}

array(2) {
    [0]=>
    string(5) "hello"
    [2]=>
    string(3) "buy"
}

function removeEveryOther($array) {
    $newarray = array();
    
    for ($i = 0; $i < count($array) ; $i+=2) {
        if ($i % 2 === 0) {
            $newarray[] = $array[$i];
        }
    }
    
    return $newarray;
}

array(2) {
    [0]=>
    string(5) "hello"
    [1]=>
    string(3) "buy"
}

function removeEveryOther($array) {
    $count = count($array);  
    for($i=1;$i<=$count;$i=$i+2){
       unset($array[$i]);
    }
    return $array;
}

// String repeat
function repeatStr($n, $str) {
    $arr = array();
    
    for ($i = 0; $i < $n; $i++) {
        $arr[] = $str;
    }
    
    return implode("", $arr);
}

function repeatStr($n, $str) {
    return str_repeat($str, $n);
}

// Sort and Star
function twoSort($s) {
    $result = 0;
    $str_result = '';
    $answer = array();
    
    for ($i = 0; $i < count($s); $i++) {
        if (ord(substr($s[$i], 0, 1)) < $result || $result == 0) {
            $str_result = $s[$i];
            $result = ord(substr($s[$i], 0, 1));
        }
    }
    
    for ($i = 0; $i < strlen($str_result); $i++) {
        $answer[] = $str_result[$i];
    }
    
    return implode("***", $answer);
}

function twoSort($s) {
    asort($s);
    return implode('***', str_split(array_shift($s)));
}

// Total amount of points
function points(array $games): int {
    $score = 0;
      
    for ($i = 0; $i < count($games); $i++) {
        if (intval($games[$i][0], 10) > intval($games[$i][2], 10)) {
            $score += 3;
        } else if (intval($games[$i][0], 10) == intval($games[$i][2], 10)) {
            $score += 1;
        }
    }
    
    return $score;
}

function points(array $games): int {
    $score = 0;
    
    foreach($games as $game) {
        $gameScore = explode(':', $game);
      
        if ($gameScore[0] > $gameScore[1]) {
            $score += 3;
        }
      
        if ($gameScore[0] === $gameScore[1]) {
            $score += 1;
        }
    } 
    
    return $score;
}

// Sentence Smash
function smash(array $words): string {
    return implode(" ", $words);
}

// Rock Paper Scissors!
function rpc ($p1, $p2) {
    if ($p1 === 'rock') {
        if ($p2 === 'rock') {
            return 'Draw!';
        } else if ($p2 === 'scissors') {
            return 'Player 1 won!';
        } else if ($p2 === 'paper') {
            return 'Player 2 won!';
        }
    } else if ($p1 === 'scissors') {
        if ($p2 === 'rock') {
            return 'Player 2 won!';
        } else if ($p2 === 'scissors') {
            return 'Draw!';
        } else if ($p2 === 'paper') {
            return 'Player 1 won!';
        }
    } else if ($p1 === 'paper') {
        if ($p2 === 'rock') {
            return 'Player 1 won!';
        } else if ($p2 === 'scissors') {
            return 'Player 2 won!';
        } else if ($p2 === 'paper') {
            return 'Draw!';
        }
    }
}

function rpc ($p1, $p2) {
    if ($p1 === $p2) {
        return 'Draw!';
    }
    if ($p1 === 'rock' && $p2 === 'scissors' ||
        $p1 === 'scissors' && $p2 === 'paper' ||
        $p1 === 'paper' && $p2 === 'rock') {
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
}

// Beginner Series #2 Clock
function past($h, $m, $s) {
    return (3600000 * $h) + (60000 * $m) + (1000 * $s);
}

function past($h, $m, $s) {
    return (($h * 60 * 60) + $m * 60 + $s) * 1000;
}

// Beginner - Lost Without a Map
function maps($x) {
    $result = array();
  
    for ($i = 0; $i < count($x); $i++) {
        $result[] = $x[$i] * 2;
    }
  
    return $result;
}

function maps($x) {
    return array_map(function($el) {
        return $el * 2;
    }, $x);
}


// You Can't Code Under Pressure #1
function doubleInteger($i) {
    return $i * 2;
}

// Count the Monkeys!
function monkeyCount($n) {
    $result = array();
  
    for ($i = 0; $i < $n; $i++) {
        $result[] = $i + 1;
    }
  
    return $result;
}

function monkeyCount($n) {
    return range(1, $n);
}

function monkeyCount($n) {
    $monkeys = [];

    for($i=1; $i<=$n;$i++)
    {
        array_push($monkeys, $i);
    }
    
    return $monkeys;
}

// Abbreviate a Two Word Name
function abbrevName($name) {
    $arr = explode(" ", $name);
    $result = [];
  
    for ($i = 0; $i < count($arr); $i++) {
        $result[] = strtoupper(substr($arr[$i], 0, 1));
    }
  
    return implode(".", $result);
}

function abbrevName(string $name): string {
    $divide = explode(' ', $name);
    return strtoupper("{$divide[0][0]}.{$divide[1][0]}");
}

function abbrevName( string $name ) : string {
    return implode( ".", array_map(function( $n ) { if ( ! empty( $n )) return $n[0]; }, explode(" ", strtoupper( $name ) ) ) );
}

// Find the stray number
function stray($arr) {
    $unique = array_count_values($arr);
  
    foreach($unique as $key => $value) {
        if ($value === 1) {
            return $key;
        }
    }
}

function stray(array $arr) {
    return array_search(1, array_count_values($arr));
}

function stray($arr) {
    sort($arr);
    return $arr['0'] ==  $arr['1'] ? end($arr) : $arr['0'];
}

// Correct the mistakes of the character recognition software
function correct($string) {
    $string = str_replace('0', 'O', $string);
    $string = str_replace('1', 'I', $string);
    $string = str_replace('5', 'S', $string);
    return $string;
}

function correct($string) {
    return str_replace(["5", "0", "1"], ["S", "O", "I"], $string);
}

// The Feast of Many Beasts
function feast($beast, $dish){
    return substr($beast, 0, 1) === substr($dish, 0, 1) && substr($beast, -1, 1) === substr($dish, -1, 1);
}

function feast($beast, $dish) {
    return (($beast[0] === $dish[0]) && ($beast[strlen($beast) - 1] === $dish[strlen($dish) - 1]));
}

// Twice as old
function twice_as_old($dad_years_old, $son_years_old) {
    $count_more = $dad_years_old;
    $count_less = $dad_years_old;
    
    for ($i = 0; $i < $dad_years_old; $i++) {
        if ($count_more === 2 * $son_years_old) {
            return $count_more - $dad_years_old;
        } else if ($count_less === 2 * $son_years_old) {
            return $dad_years_old - $count_less;
        } else if ($son_years_old === 0) {
            return $dad_years_old;
        } else {
            $count_more = $count_more + 1;
            $count_less = $count_less - 1;
        }
    }
}

function twice_as_old($dad_years_old, $son_years_old) {
    return abs($dad_years_old - $son_years_old * 2);
}

// Simple letter removal
function solve(string $s, int $k) : string {
    foreach (range("a", "z") as $l) {
        if ($s === "" || !$k) {
            break;
        }
        $s = preg_replace("/$l/", "", $s, $k, $count);
        $k -= $count;
    }
    return $s;
  }


// Unfinished Loop - Bug Fixing #1
function createArray($number){
    $new_array = array();
    
    for($count = 1; $count <= $number; $count++) {
        $new_array[] = $count;
    }
    
    return $new_array;
}

function createArray($number) {
    return range(1, $number);
}

// L1: Set Alarm
function setAlarm(bool $employed, bool $vacation): bool {
    return $employed && !$vacation;
}

// Find Maximum and Minimum Values of a List
function maximum($array) {
    return max($array);
}
function minimum($array) {
    return min($array);
}

// Student's Final Grade
function finalGrade($exam, $projects) {
    if ($exam > 90 || $projects > 10) {
        return 100;
    } else if ($exam > 75 && $projects >= 5) {
        return 90;
    } else if ($exam > 50 && $projects >= 2) {
        return 75;
    } else {
        return 0;
    }
}

function finalGrade($exam, $projects) {
    if($exam > 90 || $projects > 10) return 100;
    if($exam > 75 && $projects > 4) return 90;
    if($exam > 50 && $projects > 1) return 75;
    return 0;   
}

// Is this my tail?
function equivalent($body, $char) {
    return substr($body, -1, 1) === $char;
}

// Count of positives / sum of negatives
function countPositivesSumNegatives($input) {
    $count = 0;
    $sum_neg = 0;
  
    if ($input == []) {
      return [];
    }
  
    for ($i = 0; $i < count($input); $i++) {
         if ($input[$i] > 0) {
           $count ++;
         } else {
           $sum_neg += $input[$i];
         }
    }
  
    return array($count, $sum_neg);
}

function countPositivesSumNegatives($input) {
    if (empty($input)) {
      return [];
    }
    
    $pos = $neg = 0;
    foreach ($input as $value) {
      if ($value > 0) {
        $pos += 1;
      } else {
        $neg += $value;
      }
    }
    
    return [$pos, $neg];
}

// String Scramble
function scramble($str,$arr){
    $result = array_combine($arr, str_split($str, 1));
    ksort($result);
    return implode('', $result);
}

function scramble($str,$arr){
    $a = array_combine($arr,str_split($str));
    ksort($a);
    return implode('', $a);
}

// Will there be enough space?
function enough($cap, $on, $wait) {
    if ($cap < $on + $wait) {
        return ($on + $wait) - $cap;
    } else {
        return 0;
    }
}

function enough($cap, $on, $wait) {
    return max(0, $wait - $cap + $on);
}

// Count Odd Numbers below n
function oddCount($n) {
    return floor($n/2);
}

function oddCount($n) {
    return ($n - 1) / 2;
}

// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord($bool){
    return $bool ? "Yes" : "No";
}

// Dollars and Cents
function format_money(float $amount): string {
    return "$" . number_format((float)$amount, 2, '.', '');
}

function format_money(float $amount): string {
    return sprintf('$%.2f', $amount);
}

// Find numbers which are divisible by given number
function divisibleBy($numbers, $divisor) {
    $result = [];
  
    for ($i = 0; $i < count($numbers); $i++) {
        if ($numbers[$i] % $divisor === 0) {
            $result[] = $numbers[$i];
        }
    }
    
    return $result;
}

function divisibleBy($numbers, $divisor) {
    $total = [];
    foreach ($numbers as $number) {
      if ($number % $divisor == 0) {
        $total[] = $number;
      }
    }
    return $total;     
}

// Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
function remove(string $s): string {
    $count = 0;
    while (substr($s, -1) == '!') {
        ++$count;
        $s = substr($s, 0, -1);
    }
    return str_replace('!', '', $s) . str_repeat('!', $count);
}

function remove(string $s): string {
    return preg_replace("/!(?!!*$)/", "", $s);
}

// I love you, a little , a lot, passionately ... not at all
function how_much_i_love_you(int $nb_petals): string {
    $statements = Array('I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all');
    
    while($nb_petals > 6) {
        $nb_petals -= 6;
    }
    
    return $statements[$nb_petals - 1];
}
