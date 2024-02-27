<?php

require '../connection/dbcon.php';
function getCustomeList()
{
    global $conn;

    $query = 'select * from customers';
    $result = mysqli_query($conn, $query);

    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            $res = mysqli_fetch_all($result, MYSQLI_ASSOC);

            $data = [
                'status' => 200,
                'message' => 'Customer list fetched successfully',
                'data' => $res
            ];
            header('HTTP/1.0 200 OK');

            return json_encode($data);

        } else {
            $data = [
                'status' => 404,
                'message' => ' No customer not found',
            ];
            header('HTTP/1.0 404 No customer not found');
            return json_encode($data);
        }

    } else {
        $data = [
            'status' => 500,
            'message' => 'Internal server error',
        ];
        header('HTTP/1.0 500 Internal server error');
        return json_encode($data);
    }


}

?>