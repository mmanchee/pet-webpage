$(document).ready(function() {
  $("button#light-change").click(function() {
    $("body").removeClass();
    $("body").addClass("light-dark");
  });

  $("button#dark-change").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-light");
  });
});