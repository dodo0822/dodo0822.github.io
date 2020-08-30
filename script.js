window.addEventListener('scroll', function() {
  if(window.scrollY > 270) {
    document.getElementById('header').className = 'header sticky';
  } else {
    document.getElementById('header').className = 'header';
  }
});