<?php
include 'pages/func/functions.php';

$config = (object)array(
	'isDev' => true, // whether in 'development' or 'production' mode
	'isLocal' => true, // local or on server
	'isHttps' => false, // useful when on server
	'baseUrl' => '', // base url of project
	'lang' => 'fa',
	'dir' => 'rtl', // oneof(['rtl', 'ltr'])

	'buildPath' => (object)array( // public path of js/css/sprite files. useful in production
		'base' => 'build/', // name of build folder (usually 'build'. must be the same as 'output.path' in webpack config)
		'css' => 'style.css', // only used in production
		'js' => 'bundle.js',
		'sprite' => 'sprite.svg',
	),
	'hash' => 'sdfsdf', // hash for cache busting (preventing the browser to cache assets)
);

// set baseUrl in local/server
if($config->isLocal){
	$config->baseUrl = 'http://localhost/starters/starter-webpack-es6-sass-php/';
}else{
	$config->isHttps = (@$_SERVER['HTTPS'] == 'on' || @$_SERVER['SERVER_PORT'] == 443) ? true : false;
	$config->baseUrl = ($config->isHttps ? "https" : "http") . '://' . $_SERVER['HTTP_HOST'] . '/';
}

if($config->isDev){
	$config->buildPath->base = '../';
	$config->buildPath->js = $config->buildPath->base . $config->buildPath->js;
	$config->buildPath->sprite = $config->buildPath->base . $config->buildPath->sprite;
}else{
	$config->buildPath->base = $config->baseUrl . $config->buildPath->base;
	$config->buildPath->js = $config->buildPath->base . $config->buildPath->js;
	$config->buildPath->css = $config->buildPath->base . $config->buildPath->css;
	$config->buildPath->sprite = $config->buildPath->base . $config->buildPath->sprite;
}


if(isset($_GET['lng']) && !empty($_GET['lng'])){
	$lang = checkinput($_GET['lng']);
	$lang = explode("-", $lang);
	$lang = $lang[0];
	$lang = strtolower($lang);
	$config->lang = $lang;
}

switch ($config->lang) {
	case 'fa':
		$config->dir = 'rtl';
		break;
	case 'en':
		$config->dir = 'ltr';
		break;
}
?>