<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="description" content="Nexasam Technologies builds web applications, mobile apps, SaaS products, AI integrations, and digital solutions for startups and enterprises.">
    <meta name="theme-color" content="#0042ff">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    @viteReactRefresh
    @vite(['src/main.jsx'])
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
