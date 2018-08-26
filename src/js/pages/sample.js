import $ from 'jquery';

function init() {
	if(!$page.hasClass('page-sample')) return;

	console.log('sample page');
}

$(() => init());