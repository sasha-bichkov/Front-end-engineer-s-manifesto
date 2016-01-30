$(function() {
  $('#commandments').fullpage({
    navigation: true,
    sectionSelector: '.commandment'
  });

  setTimeout(function() {
    $('.spinner').fadeOut(2000);
  }, 300);
});