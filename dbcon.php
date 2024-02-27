<?php

$conn = mysqli_connect('localhost', 'root', '', 'second_api_data');

if ($conn) {
    // echo 'db connection done';
} else {
    die(mysqli_error($conn));
}

?>