"use strict";

// для включения консоли задать localStorage.debug = "on"
if (typeof(localStorage) != "undefined" && localStorage.debug != "on")
{ console.log = console.info = console.warn = console.error = function(){}; }




$(function()
{
	var $window = $(window);
	var $body = $('body');


	/* независимые фрагменты кода - в раздельных самовызывающихся функциях. */




	(function OwlCarousel()
	{

		$('.owl-carousel.index-1').owlCarousel(
		{
			items: 1,
			center: true,
			loop: true,
			autoWidth: false,
			nav: true
		});


		$('.owl-carousel.index-2').owlCarousel(
		{
			items: 5,
			center: false,
			loop: true,
			autoWidth: false,
			nav: true,
			dots: false,
			stagePadding: 50 // размер стрелок
		});


		$('.owl-carousel.index-3').owlCarousel(
		{
			items: 1,
			center: true,
			loop: true,
			autoWidth: false,
			nav: false
		});


		$('.owl-carousel.b-photo__slider').owlCarousel(
		{
			items: 4,
			center: false,
			loop: true,
			autoWidth: false,
			margin: 20,
			nav: true,
			dots: false,
		});

	})();






	// 3d-кнопки
	(function RollingLinks()
	{

		var supports3DTransforms =  document.body.style['webkitPerspective'] !== undefined || 
		                            document.body.style['MozPerspective'] !== undefined;

		function linkify( selector ) {
		    if( supports3DTransforms ) {
		        
		        var nodes = document.querySelectorAll( selector );

		        for( var i = 0, len = nodes.length; i < len; i++ ) {
		            var node = nodes[i];

		            if( !node.className || !node.className.match( /roll/g ) ) {
		                node.className += ' roll';
		                node.innerHTML = '<span data-title="'+ node.text +'">' + node.innerHTML + '</span>';
		            }
		        };
		    }
		}

		linkify( '.b-button' );
				
	})();






	// Календарь
	(function Datepicker()
	{
		if (typeof($.ui) == "undefined") { console.warn("Календарь требует jQueryUI"); return; }
		if (typeof($.datepicker) == "undefined") { console.warn("Отсутствует $.datepicker"); return; }

		var $datepicker = $('.js-datepicker');
		var $open = $('.js-datepicker-open');

		if ($datepicker.length)
		{
			$.datepicker.regional['ru'] =
			{
				closeText: 'Закрыть',
				prevText: '&#x3c;Пред',
				nextText: 'След&#x3e;',
				currentText: 'Сегодня',
				monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
				'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
				monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
				'Июл','Авг','Сен','Окт','Ноя','Дек'],
				dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
				dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
				dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
				dateFormat: 'dd.mm.yy',
				firstDay: 1,
				isRTL: false
			}; 

			$.datepicker.setDefaults($.datepicker.regional["ru"]);

			$datepicker.datepicker();

			$open.click(function(event)
			{
				event.preventDefault();
				$(this).siblings('.js-datepicker').datepicker("show");
			});
		}

		
	})();










	// Раскрывашка
	(function Expander()
	{
		$('[data-toggle]').click(function(event)
		{
			var	ANIM_DURATION = 300,
				$this = $(this),
				targetSelector = $this.attr("data-toggle"),
				$target = $(targetSelector);

			event.preventDefault();

			$this.toggleClass('_open');
			$target.slideToggle(ANIM_DURATION);
		});

	})();












	// Меню
	(function HeaderMenuPopup()
	{
		var
			PADDING = 24 * 2,
			isSizeSet = false,
			$mainItems = $('.b-h__menu-list').children(),
			$3dItems = $('.b-h__link-group-list').children();

		$('.b-h__menu-button').click(function(event)
		{
			$('.b-h__menu-popup-wrapper, .b-h__nav').toggleClass('_open');

			if (!isSizeSet)
			{
				$mainItems.each(function(index, element)
				{
					$3dItems.eq(index).width($(element).width() - PADDING);
				});
			}
		});

	})();







});



