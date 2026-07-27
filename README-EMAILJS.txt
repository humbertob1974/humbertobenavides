EMAILJS SETUP

1. Create or sign in to your EmailJS account.
2. Add an Email Service and copy its Service ID.
3. Create an email template. The form sends these variables:
   {{from_name}}, {{reply_to}}, {{phone}}, {{message}}, {{language}}, {{subject}}
4. Copy the Template ID and Public Key.
5. Open assets/js/emailjs-config.js and replace:
   YOUR_PUBLIC_KEY
   YOUR_SERVICE_ID
   YOUR_TEMPLATE_ID
6. In the EmailJS template, set Reply-To to {{reply_to}}.
7. Add humbertobenavides.com to your EmailJS allowed origins/domains.

The form validates required name/email/message fields and verifies email format before sending.
