<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configuration
$config = [
    'smtp_host' => 'mail.vehosty.com',
    'smtp_port' => 465,
    'smtp_username' => 'cin@magestive.com',
    'smtp_password' => '9Vdor4I4Q&',
    'from_email' => 'cin@magestive.com',
    'from_name' => 'CIN Conference',
    'notification_email' => 'cin@magestive.com'
];

// Function to send email using PHPMailer
function sendEmail($to, $subject, $body, $isHTML = true) {
    global $config;
    
    // Simple mail() function fallback
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: " . ($isHTML ? "text/html" : "text/plain") . "; charset=UTF-8\r\n";
    $headers .= "From: " . $config['from_name'] . " <" . $config['from_email'] . ">\r\n";
    $headers .= "Reply-To: " . $config['from_email'] . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    
    return mail($to, $subject, $body, $headers);
}

// Function to send email using SMTP (requires PHPMailer)
function sendEmailSMTP($to, $subject, $body, $isHTML = true) {
    global $config;
    
    // Check if PHPMailer is available
    if (file_exists('PHPMailer/PHPMailer.php')) {
        require_once 'PHPMailer/PHPMailer.php';
        require_once 'PHPMailer/SMTP.php';
        require_once 'PHPMailer/Exception.php';
        
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = $config['smtp_host'];
            $mail->SMTPAuth = true;
            $mail->Username = $config['smtp_username'];
            $mail->Password = $config['smtp_password'];
            $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = $config['smtp_port'];
            $mail->CharSet = 'UTF-8';
            
            // Test SMTP connection first
            $mail->SMTPDebug = 0; // Disable debug output for production
            $mail->Timeout = 30; // Set timeout to 30 seconds
            
            // Test connection without sending email
            if (!$mail->smtpConnect()) {
                error_log("SMTP connection test failed: " . $mail->ErrorInfo);
                return false;
            }
            
            // Close the test connection
            $mail->smtpClose();
            
            // Now proceed with actual email sending
            $mail->setFrom($config['from_email'], $config['from_name']);
            $mail->addAddress($to);
            
            // Content
            $mail->isHTML($isHTML);
            $mail->Subject = $subject;
            $mail->Body = $body;
            
            // Send the email
            $mail->send();
            return true;
            
        } catch (Exception $e) {
            error_log("Email sending failed: " . $mail->ErrorInfo);
            return false;
        }
    } else {
        // Fallback to simple mail()
        return sendEmail($to, $subject, $body, $isHTML);
    }
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$firstName = trim($_POST['firstName'] ?? '');
$lastName = trim($_POST['lastName'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$organization = trim($_POST['organization'] ?? '');
$position = trim($_POST['position'] ?? '');
$country = trim($_POST['country'] ?? '');
$eventType = trim($_POST['eventType'] ?? '');
$dietaryRequirements = trim($_POST['dietaryRequirements'] ?? '');
$specialRequests = trim($_POST['specialRequests'] ?? '');

// Validation
$errors = [];

if (empty($firstName)) $errors[] = 'Prénom requis';
if (empty($lastName)) $errors[] = 'Nom requis';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Email valide requis';
if (empty($phone)) $errors[] = 'Téléphone requis';
if (empty($organization)) $errors[] = 'Organisation requise';
if (empty($position)) $errors[] = 'Poste requis';
if (empty($country)) $errors[] = 'Pays requis';
if (empty($eventType)) $errors[] = 'Type d\'événement requis';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Prepare email content
$registrationDate = date('d/m/Y à H:i');
$fullName = $firstName . ' ' . $lastName;

// Notification email to organizers
$notificationSubject = 'Nouvelle inscription - Conférence CIN';
$notificationBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { padding: 20px; text-align: center; border-bottom: 2px solid #e5e7eb; }
        .content { padding: 20px; }
        .field { margin-bottom: 15px; }
        .field strong { color: #374151; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Nouvelle inscription - Conférence CIN</h2>
            <p>Conférence Internationale sur la Nutrition</p>
        </div>
        <div class='content'>
            <p>Vous avez reçu une nouvelle inscription pour la Conférence Internationale sur la Nutrition.</p>
            
            <h3>Détails de l'inscription :</h3>
            <div class='field'><strong>Nom complet :</strong> {$fullName}</div>
            <div class='field'><strong>Email :</strong> {$email}</div>
            <div class='field'><strong>Téléphone :</strong> {$phone}</div>
            <div class='field'><strong>Organisation :</strong> {$organization}</div>
            <div class='field'><strong>Poste :</strong> {$position}</div>
            <div class='field'><strong>Pays :</strong> {$country}</div>
            <div class='field'><strong>Type d'événement :</strong> {$eventType}</div>
            <div class='field'><strong>Date d'inscription :</strong> {$registrationDate}</div>
";

if (!empty($dietaryRequirements)) {
    $notificationBody .= "<div class='field'><strong>Exigences alimentaires :</strong> {$dietaryRequirements}</div>";
}

if (!empty($specialRequests)) {
    $notificationBody .= "<div class='field'><strong>Demandes spéciales :</strong> {$specialRequests}</div>";
}

$notificationBody .= "
        </div>
        <div class='footer'>
            <p>Cordialement,<br>Système d'inscription CIN</p>
        </div>
    </div>
</body>
</html>
";

// Confirmation email to registrant
$confirmationSubject = 'Confirmation d\'inscription - Conférence CIN';
$confirmationBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { padding: 20px; text-align: center; border-bottom: 2px solid #e5e7eb; }
        .content { padding: 20px; }
        .field { margin-bottom: 15px; }
        .field strong { color: #374151; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
        .cta { padding: 15px; text-align: center; border: 1px solid #d1d5db; margin: 20px 0; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Confirmation d'inscription</h2>
            <p>Conférence Internationale sur la Nutrition</p>
        </div>
        <div class='content'>
            <p>Bonjour {$firstName},</p>
            
            <p>Votre inscription à la Conférence Internationale sur la Nutrition a été reçue avec succès.</p>
            
            <h3>Détails de votre inscription :</h3>
            <div class='field'><strong>Nom complet :</strong> {$fullName}</div>
            <div class='field'><strong>Email :</strong> {$email}</div>
            <div class='field'><strong>Organisation :</strong> {$organization}</div>
            <div class='field'><strong>Pays :</strong> {$country}</div>
            <div class='field'><strong>Type d'événement :</strong> {$eventType}</div>
            <div class='field'><strong>Date d'inscription :</strong> {$registrationDate}</div>
            
            <div class='cta'>
                <strong>Prochaines étapes :</strong><br>
                Nous vous contacterons bientôt avec plus d'informations sur l'événement.
            </div>
        </div>
        <div class='footer'>
            <p>Cordialement,<br>Équipe CIN</p>
        </div>
    </div>
</body>
</html>
";

// Send emails
$notificationSent = sendEmailSMTP($config['notification_email'], $notificationSubject, $notificationBody);
$confirmationSent = sendEmailSMTP($email, $confirmationSubject, $confirmationBody);

if ($notificationSent && $confirmationSent) {
    // Log registration (optional)
    $logEntry = date('Y-m-d H:i:s') . " - Registration: {$fullName} ({$email}) from {$organization} - Event: {$eventType}\n";
    file_put_contents('registrations.log', $logEntry, FILE_APPEND | LOCK_EX);
    
    echo json_encode([
        'success' => true, 
        'message' => 'Inscription réussie et emails envoyés'
    ]);
} else {
    echo json_encode([
        'success' => false, 
        'message' => 'Inscription enregistrée mais erreur lors de l\'envoi des emails'
    ]);
}
?>
