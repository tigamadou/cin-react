# EmailJS Setup for Registration Form

This registration form can send emails using EmailJS. Follow these steps to set it up:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: Nouvelle inscription - Conférence CIN

Bonjour {{to_name}},

Vous avez reçu une nouvelle inscription pour la Conférence Internationale sur la Nutrition.

Détails de l'inscription:
- Nom: {{from_name}}
- Email: {{from_email}}
- Téléphone: {{phone}}
- Organisation: {{organization}}
- Poste: {{position}}
- Pays: {{country}}

Message:
{{message}}

Cordialement,
Système d'inscription CIN
```

4. Note down your **Template ID**

## 4. Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Configure Environment Variables

Create a `.env` file in your project root with:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Optional: API Endpoint (if you also want to save to database)
VITE_REGISTRATION_ENDPOINT=https://your-api.com/register
```

## 6. Test the Form

1. Restart your development server
2. Fill out the registration form
3. Submit it
4. Check your email for the notification

## Features

- ✅ Sends email notification to conference organizers
- ✅ Includes all registration details
- ✅ Works without backend server
- ✅ Free tier: 200 emails/month
- ✅ Also saves to API endpoint (if configured)

## Troubleshooting

- Make sure all environment variables are set correctly
- Check that your email service is properly configured
- Verify the template ID matches your EmailJS template
- Check browser console for any error messages
