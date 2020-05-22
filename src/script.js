$(document).ready(function () {
	$('.main__slider').slick({
		infinite: true,
		// autoplay: true,
		// autoplaySpeed: 4000,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		vertical: true,
		verticalSwiping: true,
		// dotsClass: $(this).toggleClass('rotate-90'),
	});
});

$(document).ready(function () {
	$('.news-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		prevArrow:
			'<span class="slide-arrow prev-arrow"><i class="fas fa-angle-left logos__icon"></i></span>',
		nextArrow:
			'<span class="slide-arrow next-arrow"><i class="fas fa-angle-right logos__icon"></i></span>',
	});
});

//  ----------------------------------------------------------------------------------------- smoothe scroll

$('.navigation__linkname').on('click', function (e) {
	e.preventDefault();
	$('html, body').animate(
		{
			scrollTop: $($(this).attr('href')).offset().top,
		},
		500,
		'linear'
	);
});

// ---------------------------------------------------------------------------------------------google maps

let map = new google.maps.Map(document.getElementById('map'), {
	center: { lat: 55.600039, lng: 13.0489 },
	zoom: 16,
	styles: [
		{
			elementType: 'geometry',
			stylers: [
				{
					color: '#f5f5f5',
				},
			],
		},
		{
			elementType: 'labels.icon',
			stylers: [
				{
					visibility: 'off',
				},
			],
		},
		{
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#616161',
				},
			],
		},
		{
			elementType: 'labels.text.stroke',
			stylers: [
				{
					color: '#f5f5f5',
				},
			],
		},
		{
			featureType: 'administrative.land_parcel',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#bdbdbd',
				},
			],
		},
		{
			featureType: 'poi',
			elementType: 'geometry',
			stylers: [
				{
					color: '#eeeeee',
				},
			],
		},
		{
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#757575',
				},
			],
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [
				{
					color: '#e5e5e5',
				},
			],
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.icon',
			stylers: [
				{
					color: '#696969',
				},
				{
					visibility: 'on',
				},
				{
					weight: 1,
				},
			],
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#9e9e9e',
				},
			],
		},
		{
			featureType: 'poi.school',
			elementType: 'labels.icon',
			stylers: [
				{
					visibility: 'on',
				},
			],
		},
		{
			featureType: 'poi.sports_complex',
			elementType: 'labels.icon',
			stylers: [
				{
					color: '#526469',
				},
				{
					visibility: 'on',
				},
			],
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [
				{
					color: '#ffffff',
				},
			],
		},
		{
			featureType: 'road.arterial',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#757575',
				},
			],
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [
				{
					color: '#dadada',
				},
			],
		},
		{
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#616161',
				},
			],
		},
		{
			featureType: 'road.local',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#9e9e9e',
				},
			],
		},
		{
			featureType: 'transit.line',
			elementType: 'geometry',
			stylers: [
				{
					color: '#e5e5e5',
				},
			],
		},
		{
			featureType: 'transit.station',
			elementType: 'geometry',
			stylers: [
				{
					color: '#eeeeee',
				},
			],
		},
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [
				{
					color: '#c9c9c9',
				},
			],
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#9e9e9e',
				},
			],
		},
	],
});

let icon = {
	url: './img/mapmarker.svg',
};
let marker = new google.maps.Marker({
	position: { lat: 55.60212, lng: 13.04848 },
	map: map,
	icon: icon,
});

// -----------------------------------------------------------------------------------emailvalidation

$(form).ready(function () {
	$("form[name='form']").validate({
		rules: {
			name: 'required',
			email: {
				required: true,
				email: true,
			},
		},
		messages: {
			name: 'Please enter your name',
			email: 'Please enter a valid email address',
		},

		submitHandler: function (form) {
			$(form).ready(function () {
				$('#btn-submit').click(function () {
					return 'Thank you, we will contact you!';
				});
				$('#btn-submit').click(function (event) {
					$('.contact__right').html(event.result);
				});
			});
		},
	});
});
