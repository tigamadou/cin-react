<?php
// Configuration file for CIN Conference Registration
// Copy this file to config.local.php and update with your settings

return [
    // SMTP Configuration
    'smtp' => [
        'host' => 'smtp.gmail.com',
        'port' => 587,
        'username' => 'your-email@gmail.com',
        'password' => 'your-app-password',
        'encryption' => 'tls', // 'tls' or 'ssl'
    ],
    
    // Email Configuration
    'email' => [
        'from_email' => 'conference@cin.bj',
        'from_name' => 'CIN Conference',
        'notification_email' => 'conference@cin.bj',
        'reply_to' => 'conference@cin.bj',
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
