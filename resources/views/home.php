<!doctype html>
<html lang="<?php app()->getLocale();?>">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="<?= csrf_token();?>">
    <?php $baseUrl = str_replace((isset($_SERVER['HTTPS']) ? 'https' : 'http').'://'.$_SERVER['HTTP_HOST'], '', url('/'));?>
    <meta name="data-baseurl" content="<?= $baseUrl ?>" />

    <title>Kirei</title>

    <link href="<?= asset('css/app.css') ?>" type="text/css" rel="stylesheet" />
</head>
<body>
  <div id="app">
  </div>
  <script src="<?= asset('js/app.js')?>"></script>
</body>
</html>
