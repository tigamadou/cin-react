# PHP Backend Setup for CIN Conference Registration

This guide shows you how to set up a simple PHP backend to handle registration form submissions and send emails via SMTP.

## 📁 Files Created

- `php-backend/register.php` - Main registration handler
- `php-backend/config.php` - Configuration template
- `php-backend/.htaccess` - Apache configuration
- `php-backend/test.php` - Test endpoint
- `php-backend/README.md` - Detailed documentation

## 🚀 Quick Setup

### 1. Upload Files
Upload the `php-backend/` folder to your web server (e.g., `public_html/api/` or `www/api/`)

### 2. Configure SMTP
Edit `php-backend/register.php` and update the configuration:

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

### 3. Set Permissions
```bash
chmod 666 php-backend/registrations.log
```

### 4. Update Frontend
Update your React app's `.env` file:

```env
VITE_REGISTRATION_ENDPOINT=https://yourdomain.com/api/register.php
```

## 📧 SMTP Configuration

### Gmail Setup
1. Enable 2-Factor Authentication
2. Generate an App Password
3. Use the App Password in configuration

```php
'smtp_host' => 'smtp.gmail.com',
'smtp_port' => 587,
'smtp_username' => 'your-email@gmail.com',
'smtp_password' => 'your-16-character-app-password',
```

### Other Providers
- **Outlook**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **Custom**: Use your server's SMTP settings

## 🧪 Testing

### 1. Test PHP Backend
Visit: `https://yourdomain.com/api/test.php`

### 2. Test Registration
Use the React form or test with curl:

```bash
curl -X POST https://yourdomain.com/api/register.php \
  -d "firstName=Test&lastName=User&email=test@example.com&phone=123456789&organization=Test Org&position=Developer&country=Benin"
```

### 3. Check Logs
View registration log: `php-backend/registrations.log`

## ✨ Features

- **Form Validation**: Server-side validation of all fields
- **Dual Emails**: 
  - Notification email to organizers
  - Confirmation email to registrants
- **HTML Templates**: Professional email design
- **Logging**: Registration tracking
- **CORS Support**: Works with React frontend
- **Error Handling**: Proper error responses

## 🔒 Security

- **Input Validation**: All form data is validated
- **Email Sanitization**: Email addresses are properly validated
- **CORS Headers**: Configured for cross-origin requests
- **File Protection**: Sensitive files are protected
- **Error Logging**: Errors are logged for debugging

## 📝 Email Templates

The system sends two types of emails:

### 1. Notification Email (to organizers)
- Professional HTML design
- Complete registration details
- CIN branding colors
- Registration timestamp

### 2. Confirmation Email (to registrant)
- Welcome message
- Registration summary
- Next steps information
- Contact details

## 🛠 Troubleshooting

### Common Issues

1. **Emails not sending**
   - Check SMTP credentials
   - Verify server allows outbound SMTP
   - Check spam folder

2. **CORS errors**
   - Ensure `.htaccess` is uploaded
   - Check server supports mod_headers

3. **Permission errors**
   - Set correct file permissions
   - Check log file is writable

### Debug Mode
Add this to `register.php` for debugging:

```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

## 📊 Monitoring

- **Registration Log**: `registrations.log`
- **Error Log**: `error.log` (if enabled)
- **Server Logs**: Check your hosting provider's logs

## 🚀 Deployment

### Shared Hosting
1. Upload files via FTP/cPanel
2. Set file permissions
3. Test with provided test endpoint

### VPS/Dedicated
1. Upload files to web directory
2. Configure Apache/Nginx
3. Set up SSL certificate
4. Configure firewall

### Cloud Hosting
1. Deploy via Git
2. Configure environment variables
3. Set up monitoring

## 📞 Support

If you encounter issues:
1. Check the error logs
2. Verify SMTP configuration
3. Test with the provided test endpoint
4. Check server requirements (PHP 7.4+)

The PHP backend is now ready to handle your registration form submissions!
