$(document).ready(function() {
  $("#web-des").on("click", function() {
    $(".ex-container li").hide();
    $(".web-des-it").show("slow");
  });

  $("#graphic").on("click", function() {
    $(".ex-container li").hide();
    $(".graphic").show("slow");
  });

  $("#flat").on("click", function() {
    $(".ex-container li").hide();
    $(".flat").show("slow");
  });

  $("#all").on("click", function() {
    $(".ex-container li").show("slow");
  });



});
