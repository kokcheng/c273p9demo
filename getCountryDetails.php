<?php

include "dbFunctions.php";

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $country = array();
    $query = "SELECT * FROM statistics where id = $id";
    $result = mysqli_query($link, $query);

    $row = mysqli_fetch_assoc($result);
    if (!empty($row)) {
        $stat = $row;
        echo json_encode($stat);
    }
    else{
        $response["result"] = "Invalid ID";
        echo json_encode($response);
    }
    mysqli_close($link);

   
}
?>
