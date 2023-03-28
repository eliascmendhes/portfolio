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
// seleciona todos os elementos <span> dentro das <li> com a classe "habilidades-item"
const spans = document.querySelectorAll('#sobre-mim p');

// adiciona um listener de mouseover em cada span
spans.forEach(span => {
  span.addEventListener('mouseover', () => {
    // muda a cor do span para vermelho (#b30000)
    span.style.color = '#b30000';
  });

  // adiciona um listener de mouseout em cada span
  span.addEventListener('mouseout', () => {
    // retorna a cor original do span (#FF5A5F)
    span.style.color = '#FF5A5F';
  });
});

