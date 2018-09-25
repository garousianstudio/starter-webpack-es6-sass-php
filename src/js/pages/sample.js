import $ from 'jquery';

const init = () => {
	if(!$page.hasClass('page-sample')) return;

	console.log('in sample page');

	const $btn = $('#btn');
	// try changing console message, HMR should be working fine! :)
	$btn.on('click', () => console.log('btn clicked'));

	if(module.hot){
		module.hot.dispose(() => $btn.off('click')); // remove events that are stateful to prevent multi);
	}
}

$(() => init());