//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function () {
  var d = document,
    accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = 'ontouchstart' in window,
    pointerSupported = 'pointerdown' in window;

  skipClickDelay = function (e) {
    e.preventDefault();
    e.target.click();
  };

  setAriaAttr = function (el, ariaType, newProperty) {
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function (el1, el2, expanded) {
    switch (expanded) {
      case 'true':
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case 'false':
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
        break;
    }
  };
  //function
  switchAccordion = function (e) {
    console.log('triggered');
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if (thisAnswer.classList.contains('is-collapsed')) {
      setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
      setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');

    thisAnswer.classList.toggle('animateIn');
  };
  for (var i = 0, len = accordionToggles.length; i < len; i++) {
    if (touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if (pointerSupported) {
      accordionToggles[i].addEventListener(
        'pointerdown',
        skipClickDelay,
        false
      );
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

// za modal dialog

$('.button').click(function () {
  var buttonId = $(this).attr('id');
  var zmppClan = $(this).attr('data-zmpp');
  console.log(zmppClan);

  switch (zmppClan) {
    case 'clan1a':
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('body').addClass('modal-active');
      $('#objasnjenje-clana').empty();
      $('#objasnjenje-clana').append(
        $(
          '<div><p style="color:green;font-weight: bold;">ZMPP reguliše:</p><ul class="list-style"><li>Direktnu međunarodnu nadležnost</li><li>Momenat ocene postojanja direktne međunarodne nadležnosti suda RS</li><li>Zabranu dvostruke međunarodne litispendencije</li><li>Aktorsku kauciju</li><li>Siromaško pravo</li><li>Priznanje i izvršenje stranih sudskih odluka</li><li>Postupak za priznanje stranih sudskih odluka</li><li>Nadležnost suda RS u starateljskim stvarima i uslove za priznanje stranih sudskih odluka u starateljskim stvarima</li><li>Određenje merodavnog prava za stranačku i parničnu sposobnost</li><li>Imovinska potraživanja iz ugovora o radu</li><li>Ranvoa</li><li>Fraus legis</li><li>Intertemporalni sukob zakona</li><li>Nejedinstveni pravni poredak</li><li>Jednostrani pravni posao</li><li>Nadležnost organa starateljstva</li><li>Kvalifikaciju</li></ul></div>'
        ).fadeIn('slow')
      );
      break;
    case 'clan1b':
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('body').addClass('modal-active');
      $('#objasnjenje-clana').empty();
      $('#objasnjenje-clana').append(
        $(
          '<div><p style="color:red;font-weight: bold;">ZMPP ne reguliše:</p><ul class="list-style"><li>Obaveze iz menice</li><li>Laku telesnu povredu</li><li>Imunitet</li><li>Prethodno pitanje</li><li>Norme neposredne primene</li><li>Međunarodnu pravnu pomoć</li><li>Dostavljanje</li><li>Jemstvo</li><li>Prekršaj/kazne</li><li>Sticanje državljanstva i prebivalište</li><li>Krivična dela</li><li>Prava stranaca</li><li>Stvarna prava na brodovima u izgradnji</li><li>Relativnu isključivu nadležnost</li><li>Posledice nesaznatljivosti stranog prava</li><li>Mesna nadležnost srpskog suda koji je međunarodno nadležan</li><li>Sticanje i prestanak državljanstva</li><li>Prava stranaca da nasleđuju u Srbiji</li></ul></div>'
        ).fadeIn('slow')
      );
      break;
    case 'clan2a':
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('body').addClass('modal-active');
      $('#objasnjenje-clana').empty();
      $('#objasnjenje-clana').append(
        $(
          '<div style="text-align: left;">Eventualne praznine koje se mogu pojaviti u toku primene ZMPP imaju se prevazići tako što će organ koji primenjuje pravo imati zadatak da pronađe rešenje shodnom primenom: <ol class="list-style"><li>odredaba i načela ZMPP</li><li>načela pravnog poretka Srbije</li><li>načela međunarodnog privatnog prava</li></ol></ul></ul></div>'
        ).fadeIn('slow')
      );
      break;
    case 'clan2b':
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('body').addClass('modal-active');
      $('#objasnjenje-clana').empty();
      $('#objasnjenje-clana').append(
        $(
          '<div style="text-align: left;">1. Kako se popunjavaju pravne praznine?<ol class="list-style"><li></li><li></li><li></li></ol></div><div style="text-align: left;">2. Pravne praznine u ZMPPu se mogu popunjavati "principom najbliže veze"? <ul class="list-style"><li style="color: green;">TAČNO</li></li></ul></ul></div>'
        ).fadeIn('slow')
      );
      break;
    case 'clan3':
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('body').addClass('modal-active');
      $('#objasnjenje-clana').empty();
      $('#objasnjenje-clana').append(
        $(
          '<div style="text-align: left;">Hijerarhija izvora: <ol class="list-style"><li>Ustav</li><li>Potvrđeni (ratifikovani) međunarodni ugovori (bilateralni)</li><li>Potvrđene međunarodne konvencije (multilateralni)</li><li>Domaći zakoni</li><li>ZMPP</li></ol></div>'
        ).fadeIn('slow')
      );
      break;
  }
});

$('#modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});


class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}

new StickyNavigation();