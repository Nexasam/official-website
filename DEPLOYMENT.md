# Namecheap shared-hosting deployment

This application uses Laravel, Inertia, and React. Namecheap serves PHP but does
not provide Node or Composer in the shared-hosting terminal, so backend and
frontend dependencies must be prepared locally before uploading.

Select PHP 8.3 or newer for the domain in cPanel before deployment. Laravel 13
does not support PHP 8.2.

## Build locally

```bash
composer install --no-dev --optimize-autoloader
npm ci
npm run build
php artisan optimize
```

Set production values in a local `.env` file before packaging. At minimum:

```dotenv
APP_ENV=production
APP_DEBUG=false
APP_URL=https://nexasam.com
MAIL_MAILER=smtp
MAIL_HOST=mail.privateemail.com
MAIL_PORT=587
MAIL_USERNAME=info@nexasam.com
MAIL_PASSWORD=your-mailbox-password
MAIL_FROM_ADDRESS=info@nexasam.com
CONTACT_MAIL_TO=info@nexasam.com
```

## Upload

Upload the complete application, including `vendor/` and `public/build/`, outside
the public document root when possible:

```text
/home/USERNAME/nexasam/          Laravel application
/home/USERNAME/public_html/      Domain document root
```

The safest cPanel setup is to set the domain document root to:

```text
/home/USERNAME/nexasam/public
```

If the domain document root cannot be changed, copy the contents of `public/`
into `public_html/` and update `public_html/index.php` so its `vendor/autoload.php`,
`bootstrap/app.php`, and `storage` paths point to the Laravel application folder.

Ensure these directories are writable by PHP:

```text
bootstrap/cache
storage
storage/framework/cache
storage/framework/sessions
storage/framework/views
storage/logs
```

Typical shared-hosting permissions are `775` for these directories and `664` for
files. Never place `.env` inside the publicly accessible `public/` directory.

After uploading, run these through a local build before upload or through a
Composer-capable deployment environment:

```bash
php artisan optimize
```
