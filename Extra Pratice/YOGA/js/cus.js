$(document).ready(function () {
  $('#menu').slicknav({
    'prependTo': '#mobilemenu',
});  
  new WOW().init();
  $('body').materialScrollTop();
});