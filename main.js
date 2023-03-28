$(window).on('scroll', function () {
  var scrollTop = $(window).scrollTop();
  $('.fade-in').each(function () {
    var elementOffsetTop = $(this).offset().top;
    if (elementOffsetTop - scrollTop < $(window).height() / 1.3) {
      $(this).addClass('visible');
    } else {
      $(this).removeClass('visible');
    }
  });
});

const spans = document.querySelectorAll('#sobre-mim p');

spans.forEach(span => {
  span.addEventListener('mouseover', () => {
    // muda a cor  para vermelho (#b30000)
    span.style.color = '#b30000';
  });

  
  span.addEventListener('mouseout', () => {
     (#b30000)
    span.style.color = '#FF5A5F';
  });
});

