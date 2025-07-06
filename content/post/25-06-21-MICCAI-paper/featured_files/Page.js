var break_point_desktop = 1024;
var break_point_tablet_landscape = 850;
var break_point_tablet_portrait = 770;
var break_point_phone = 600;

$(document).ready(function() {

	$(window).resize(function() {
		if (window_width() > break_point_tablet_portrait) {
			$('header nav > ul > li').each(function() {
				$('> div.header-menu', this).css('top', $(this).offset().top + $(this).innerHeight() - 1 + 'px');
			});
		}
		else {
			$('header nav > ul > li').each(function() {
				$('> div.header-menu', this).css('top', '');
			});
		}
		if (window_width() <= break_point_phone) {
			if ($('#top-nav-block form.site-search').length > 0) {
				$('header nav').prepend($('#top-nav-block form.site-search'));
			}
		}
		else {
			if ($('header nav form.site-search').length > 0) {
				$('div#fontSize').before($('header nav form.site-search'));
			}
		}
    }).resize();

	$('div.menu-button').click(function(e) {
		$(this).siblings('nav').slideToggle(500, function() {
			$(this).toggleClass('mobile-only', $(this).is(':visible')).css('display', '');
		});
	});

	$('header nav > ul > li > a > i').click(function(e) {
		e.preventDefault();
		if (window_width() <= break_point_tablet_portrait) {
			$(this).parent().siblings('div.header-menu').slideToggle(500, function() {
				$(this).toggleClass('mobile-only', $(this).is(':visible')).css('display', '');
			});
		}
	});

    $('.centre-page-sidebar-nav li').each(function() {
        if ($(this).children('ul').length > 0) {
            children = $(this).children('ul');
            if (!children.hasClass('open')) {
                children.hide();
            }
            $(this).children('a').append($('<i class="fa fa-angle-down"></i>').click(function(e) {
                e.preventDefault();
                $(this).parent().siblings('ul').slideToggle(500);
            }));
        }
    });

	$('.accordion').each(function() {
		$('.accordion-body', this).hide();
		$('.accordion-header span.fa', this).attr('class', 'fa fa-angle-down');
		$('.accordion-header', this).click(function(e) {
			e.preventDefault();
			$(this).siblings('.accordion-body').slideToggle(500);
		});
	});

	$('.centre-page-sidebar-nav > h3 > a > i').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().siblings('div.sidebar-nav-holder').slideToggle(500, function() {
			if (!$(this).parent().hasClass('services') || $('div.centre-page-sidebar-nav:not(.services)').length < 1) {
				$(this).toggleClass('mobile-only', $(this).is(':visible')).css('display', '');
			}
		});
	});
	$('div.centre-page-sidebar-nav.services').each(function() {
		$('div.sidebar-nav-holder', this).toggle($('div.centre-page-sidebar-nav:not(.services)').length < 1);
	});

	$('#fontSize a').click(function(e) {
		e.preventDefault();
		$('body').removeClass('small').removeClass('medium').removeClass('large').addClass($(this).attr('class'));
		$.get(
			$(this).attr('href'),
			{ ajax: 1 },
			function (response, status) {

			}
		)
	});

	if ($('.banner-slides div.slider-block').length > 0) {
		$('.banner-slides').slick({
			arrows: false,
			fade: true,
			dots: !$('body').hasClass('stay-well-this-winter'),
			swipe: false,
			speed: 600,
			autoplay: true,
			autoplaySpeed: 5000
		});
	}

	if ($('.partners ul').length > 0) {
		$('.partners ul').slick({
			arrows: true,
			speed: 600,
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
			responsive: [
				{
					breakpoint: break_point_tablet_portrait,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: break_point_phone,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}

	$('form.keyword-search input').focusin(function(){
		$(this).parents('div.header-menu').css('display', 'block');
	}).focusout(function() {
		$(this).parents('div.header-menu').css('display', '');
	});

	$('div.nav-dropdown > div').click(function(e) {
		if (window_width() <= break_point_phone) {
			$('> ul', $(this).parents('div.nav-dropdown')).slideToggle(500, function() {
				$(this).toggleClass('mobile-only', $(this).is(':visible')).css('display', '');
			});
		}
	});

	$('header nav > ul > li > a').click(function(e) {
		if (is_touch_device()) {
			//e.preventDefault();
		}
	});

	if (is_ie8()) {
		$('header nav > ul > li').hover(function() {
			$(this).children('div.header-menu').show();
		}, function() {
			$(this).children('div.header-menu').hide();
		});
	}
});

function window_width() {
    $('body').css('overflow', 'hidden'); width = $(window).width(); $('body').css('overflow', 'auto');
    return width;
}

function is_touch_device() {
	return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

function is_ie8() {
	return $('html').hasClass('ie8');
}
