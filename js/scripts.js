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


  $("form#front-form").submit(function(event) {
    event.preventDefault();
    $(".questionnaire").css("display", "none");

  });

});
