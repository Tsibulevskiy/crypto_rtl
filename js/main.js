function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var leftTime = new Date(Date.parse(new Date()) + 24 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', leftTime);

var item = document.getElementById('timer');
var elem = document.getElementById('more');
document.addEventListener("DOMContentLoaded",  timer());
item.addEventListener('click', function () {
  if (item.classList.contains('ui-tabs-active') == true) {
    if (elem.innerHTML == '1000') {
      timer();
    } else {
      elem.innerHTML = '1000';
    }
  }
});
function timer() {
  var parsElem = parseInt(elem.innerHTML);
  elem.innerHTML = parsElem + 100;
  if (parsElem < 9900) {
    window.setTimeout(timer, 1000);
  }
}


//rage slider

$( function() {
  /* Invest Slider */
  var investMax = 50000,
  investSlider = $('.invest-slider')[0];
  noUiSlider.create(investSlider, {
    start: [100],
    step: 100,
    range: {
      'min': [100, 100],
      '14.2%': [1000, 100],
      '28.5%': [5000, 100],
      '42.8%': [10000, 100],
      '57.1%': [15000, 100],
      '71.4%': [20000, 100],
      '85.7%': [30000, 100],
      'max': [50000, 100]
    },
    tooltips: [wNumb({
      decimals: 0,
      suffix: ' $'
    })],
  });
  investSlider.noUiSlider.on('update', function(){
    var invest = $('#invest');
    invest.val(+investSlider.noUiSlider.get());
    finalCalculation();
  });

  /* Days Slider */
  var termMax = 50000,
  termSlider = $('.term-slider')[0];
  noUiSlider.create(termSlider, {
    start: [1],
    step: 1,
    range: {
      'min': 1,
      // '%': [days, step]
      '16.6%': [15, 1],
      '33.3%': [30, 1],
      '50%': [90, 1],
      '66.6%': [180, 1],
      '83.3%': [270, 1],
      'max': 365
    },
    tooltips: [wNumb({
      decimals: 0,
      edit: function(value){
        if(value <= 30) {
          return value + ' day';
        }
        else {
          return Math.round(value / 30) + ' m';
        }
      }
    })],
  });
  termSlider.noUiSlider.on('update', function(){
    var term = $('#term');
    term.val(+termSlider.noUiSlider.get());
    finalCalculation();
  });

  /* Update final value */
  finalCalculation();
  function finalCalculation(){
    var termVal = $('#term').val(),
    investVal = $('#invest').val(),
    result = $('#result');

    result.html(termVal * investVal);
  }

  /* Update dots */
  function updateDots(slider, value, max) {

  }
});

$(document).ready(function() {
    $('.mob-menu').click(function() {
        $('.mob-nav').fadeIn();
    });
    $('.close').click(function() {
        $('.mob-nav').fadeOut();
    });
      $('.mob-nav a').click(function() {
        $('.mob-nav').fadeOut();
      });
});