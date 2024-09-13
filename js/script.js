document.addEventListener('DOMContentLoaded', function(){
	const swiper = new Swiper('.swiper', {
		loop: true,
	
		// If we need pagination
		pagination: {
		el: '.swiper-pagination',
		clickable: true
		}
	});

	document.querySelector('.burger').addEventListener('click', function(){
		document.querySelector('.burger-menu').classList.add('burger-active');
	});

	document.querySelector('.burger-cross').addEventListener('click', function(){
		document.querySelector('.burger-menu').classList.remove('burger-active');
	})
});
	