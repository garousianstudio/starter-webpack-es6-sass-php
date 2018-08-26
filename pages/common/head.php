<?php if(!$config->isDev): ?>
	<link rel="stylesheet" href="<?=$config->buildPath->css?>?<?=$config->hash?>">
<?php endif; ?>

<script>
	var LANG = '<?=$config->lang?>';
</script>
