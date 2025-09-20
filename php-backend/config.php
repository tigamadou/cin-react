<?php
// Configuration file for CIN Conference Registration
// Copy this file to config.local.php and update with your settings

return [
    // SMTP Configuration
    'smtp' => [
        'host' => 'mail.vehosty.com',
        'port' => 465,
        'username' => 'cin@magestive.com',
        'password' => '9Vdor4I4Q&',
        'encryption' => 'tls', // 'tls' or 'ssl'
    ],
    
    // Email Configuration
    'email' => [
        'from_email' => 'noreply@cin.bj',
        'from_name' => 'CIN Conference',
        'notification_email' => 'noreply@cin.bj',
        'reply_to' => 'noreply@cin.bj',
    ],
    
    // Security
    'security' => [
        'allowed_origins' => ['*'], // Add your domain(s) here
        'rate_limit' => 10, // Max registrations per IP per hour
        'enable_captcha' => false,
    ],
    
    // Database (optional)
    'database' => [
        'enabled' => false,
        'host' => 'localhost',
        'dbname' => 'cin_conference',
        'username' => 'root',
        'password' => '',
    ],
    
    // Logging
    'logging' => [
        'enabled' => true,
        'log_file' => 'registrations.log',
        'log_level' => 'info', // 'debug', 'info', 'warning', 'error'
    ]
];
?>
