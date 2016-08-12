$(document).ready(function() {

  $("form#first-question").submit(function(event) {
    var frontEndBackEnd = $("input:radio[name=frontend-backend]:checked").val();

    event.preventDefault();
    $(".questionnaire").css("display", "none");

    if (frontEndBackEnd === "front") {
      $(".question1-front").slideDown(1000);
    } else {
      $(".question1-back").slideDown(1000);
    }
  });

  $("form#back-form").submit(function(event) {
    var smallBigCompany = $("input:radio[name=small-big]:checked").val();

    event.preventDefault();
    $(".questionnaire").css("display", "none");
    $(".question1-back").css("display", "none");

    if (smallBigCompany === "small") {
      $(".question2-small").slideDown(1000);
    } else {
      $(".question2-big").slideDown(1000);
    }
  });

  $("form#small-form").submit(function(event) {
    var productType = $("input:radio[name=product-type]:checked").val();

    event.preventDefault();
    $(".questionnaire").css("display", "none");
    $(".question2-small").css("display", "none");

    if (productType === "web") {
      $(".question3-web").slideDown(1000);
    } else {
      $(".question3-android").slideDown(1000);
    }
  });

  $("form#big-form").submit(function(event) {
    var productTypeBig = $("input:radio[name=product-type-big]:checked").val();

    event.preventDefault();
    $(".questionnaire").css("display", "none");
    $(".question2-big").css("display", "none");

    if (productTypeBig === "web") {
      $(".question3-web").slideDown(1000);
    } else if (productTypeBig === "business"){
      $(".question3-business").slideDown(1000);
    } else {
      $(".question3-android").slideDown(1000);
    }
  });

  $("form#web-form").submit(function(event) {
    var clientType = $("input:radio[name=client-type]:checked").val();

    event.preventDefault();
    $(".questionnaire").css("display", "none");
    $(".question3-web").css("display", "none");

    if (clientType === "1") {
      $(".question4-php").slideDown(1000);
    } else {
      $(".question4-ruby").slideDown(1000);
    }
  });
});
