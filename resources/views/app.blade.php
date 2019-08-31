<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="google-site-verification" content="3yRQDsk4zdjj8FLRbqL1erDrZeNPOLoTuBRaD8V3qao" />
    <title>#ThisIsForEveryone #SmartHeritage</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>

    <script src="{{ asset('js/app.js') }}"></script>
  </body>
</html>
