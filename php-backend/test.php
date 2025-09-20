<?php
// Simple test file to verify PHP backend is working
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = [
        'success' => true,
        'message' => 'PHP backend is working!',
        'received_data' => $_POST,
        'timestamp' => date('Y-m-d H:i:s')
    ];
    
    echo json_encode($data);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Please use POST method',
        'method' => $_SERVER['REQUEST_METHOD']
    ]);
}
?>
