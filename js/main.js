window.sr = ScrollReveal();

sr.reveal('#who_we_are', {
	duration: 2000,
	origin: 'right',
	distance: '-400px'
});

sr.reveal('#three_baloons', {
	duration: 2000,
	origin: 'left',
	distance: '-500px'
});

sr.reveal('.info-contacto', {
	duration: 1000,
	origin: 'top',
	distance: '-700px'
});

sr.reveal('.services', {
	duration: 1000,
	origin: 'top',
	distance: '-400px'
});

sr.reveal('#seguridad_fisica', {
	duration: 2000,
	origin: 'left',
	distance: '-700px'
});

sr.reveal('#custodia__mercaderia', {
	duration: 2000,
	origin: 'right',
	distance: '-700px'
});

sr.reveal('#seguridad_electronica', {
	duration: 2000,
	origin: 'left',
	distance: '-700px'
});

sr.reveal('#investigacion', {
	duration: 2000,
	origin: 'right',
	distance: '-700px'
});

sr.reveal('.title-terri', {
	duration: 2000,
	origin: 'bottom',
	distance: '-700px'
});


sr.reveal('.parrafo-terri', {
	duration: 2600,
	origin: 'left',
	distance: '-150px'
});




const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});



const text = ["E", "ES", "ESP", "ESPE", "ESPEC", "ESPECI", "ESPECIA", "ESPECIAL", "ESPECIALI", "ESPECIALID", "ESPECIALIDA", "ESPECIALIDAD", "ESPECIALIDA", "ESPECIALID", "ESPECIALID", "ESPECIALI", "ESPECIAL", "ESPECIA", "ESPECI", "ESPEC", "ESPE", "ESP", "ES", "E"]


var counter = 0;

const especialidadText = document.getElementById('especialidad_text');

setInterval(()=>{
	counter++
	especialidadText.textContent = text[counter%(text.length)]
}, 400)

$(".count").each(function () {
	var $this = $(this),
		countTo = $this.attr("data-number");
	$({
		countNum: $this.text()
	}).animate(
		{
			countNum: countTo
		},
  
		{
			duration: 8000,
			easing: "swing",
			step: function () {
				$this.text(
					Math.ceil(this.countNum).toLocaleString("en")
				);
			},
			complete: function () {
				$this.text(
					Math.ceil(this.countNum).toLocaleString("en")
				);
			}
		}
	);
});


$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});