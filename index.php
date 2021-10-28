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

