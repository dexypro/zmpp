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
    case 'clan1':
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('body').addClass('modal-active');
      $('#objasnjenje-clana').empty();
      $('#objasnjenje-clana').append(
        $(
          '<div>ZMPP reguliše:<ul class="list-style"><li>Direktnu međunarodnu nadležnost</li><li>Momenat ocene postojanja direktne međunarodne nadležnosti suda RS</li><li>Zabranu dvostruke međunarodne litispendencije</li><li>Aktorsku kauciju</li><li>Siromaško pravo</li><li>Priznanje i izvršenje stranih sudskih odluka</li><li>Postupak za priznanje stranih sudskih odluka</li><li>Nadležnost suda RS u starateljskim stvarima i uslove za priznanje stranih sudskih odluka u starateljskim stvarima</li><li>Određenje merodavnog prava za stranačku i parničnu sposobnost</li></ul></div>'
        ).fadeIn('slow')
      );
      break;
    case 'clan2':
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('body').addClass('modal-active');
      $('#objasnjenje-clana').empty();
      $('#objasnjenje-clana').append(
        $('<p>Prezentacije Stefan Jovanovic</p>').fadeIn('slow')
      );
      break;
    default:
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('body').addClass('modal-active');
      $('#objasnjenje-clana').empty();
      $('#objasnjenje-clana').append(
        $('<p>Prezentacije Marka Jovanovica</p>').fadeIn('slow')
      );
  }
});

$('#modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});
