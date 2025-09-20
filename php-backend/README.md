# PHP Backend for CIN Conference Registration

Simple PHP backend to handle registration form submissions and send emails via SMTP.

## Setup

1. **Upload files** to your web server
2. **Configure SMTP** in `register.php` or create `config.local.php`
3. **Set permissions** for log file: `chmod 666 registrations.log`

## Configuration

### Option 1: Direct Configuration
Edit `register.php` and update the `$config` array:

```php
$config = [
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    'smtp_username' => 'your-email@gmail.com',
    'smtp_password' => 'your-app-password',
    'from_email' => 'conference@cin.bj',
    'from_name' => 'CIN Conference',
    'notification_email' => 'conference@cin.bj'
];
```

### Option 2: Configuration File
1. Copy `config.php` to `config.local.php`
2. Update settings in `config.local.php`
3. Modify `register.php` to use the config file

## SMTP Providers

### Gmail
```php
'smtp_host' => 'smtp.gmail.com',
'smtp_port' => 587,
'smtp_username' => 'your-email@gmail.com',
'smtp_password' => 'your-app-password', // Use App Password
```

### Outlook/Hotmail
```php
'smtp_host' => 'smtp-mail.outlook.com',
'smtp_port' => 587,
'smtp_username' => 'your-email@outlook.com',
'smtp_password' => 'your-password',
```

## Features

- ✅ **Form validation**
- ✅ **SMTP email sending**
- ✅ **Dual emails** (notification + confirmation)
- ✅ **HTML email templates**
- ✅ **Registration logging**
- ✅ **CORS support**
- ✅ **Error handling**

## Frontend Integration

Update your React app's environment variables:

```env
VITE_REGISTRATION_ENDPOINT=https://yourdomain.com/api/register.php
```

## Testing

1. Upload files to your server
2. Test with a simple form submission
3. Check email delivery
4. Verify log file creation

## Security Notes

- Use App Passwords for Gmail
- Enable HTTPS for production
- Consider rate limiting
- Validate all inputs
- Use environment variables for sensitive data
