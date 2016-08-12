$(document).ready(function() {

  $("form#first-question").submit(function(event) {
    var frontEndBackEnd = $("input:radio[name=frontend-backend]:checked").val();

    event.preventDefault();
    $(".questionnaire").css("display", "none");

    if (frontEndBackEnd === "front") {
      $(".question1-front").show();
    } else {
      $(".question1-back").show();
    }
  });

  $("form#back-form").submit(function(event) {
    var smallBigCompany = $("input:radio[name=small-big]:checked").val();

    event.preventDefault();
    $(".questionnaire").css("display", "none");
    $(".question1-back").css("display", "none");

    if (smallBigCompany === "small") {
      $(".question2-small").show();
    } else {
      $(".question2-big").show();
    }
  });

  $("form#small-form").submit(function(event) {
    var productType = $("input:radio[name=product-type]:checked").val();

    event.preventDefault();
    $(".questionnaire").css("display", "none");
    $(".question2-small").css("display", "none");

    if (productType === "web") {
      $(".question3-web").show();
    } else {
      $(".question3-android").show();
    }
  });

  $("form#big-form").submit(function(event) {
    var productTypeBig = $("input:radio[name=product-type-big]:checked").val();

    event.preventDefault();
    $(".questionnaire").css("display", "none");
    $(".question2-big").css("display", "none");

    if (productTypeBig === "web") {
      $(".question3-web").show();
    } else if (productTypeBig === "business"){
      $(".question3-business").show();
    } else {
      $(".question3-android").show();
    }
  });
});
