$(function () {
  // Button 'more'

  $(".card:nth-child(n+12)").hide();
  $(".more").on("click", function () {
    $(".card:nth-child(n+12)").slideDown();
    $(this).hide();
  });
});
