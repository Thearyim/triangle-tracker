$(document).ready(function(){
  $("form#triangle").submit(function(event) {
    var firstside = parseInt($("input#first-side").val());
    var secondside = parseInt($("input#second-side").val());
    var thirdside = parseInt($("input#third-side").val());
    var sum1 = firstside + secondside;
    var sum2 = secondside + thirdside;
    var sum3 = firstside + thirdside;

    if(sum1 <= thirdside || sum2 <= firstside || sum3 <= secondside ){
      $(".triangletype").text(" Nothing");
    } else if (firstside === secondside && secondside === thirdside && firstside === thirdside) {
      $(".triangletype").text(" Equilateral");
    } else if (firstside === secondside && firstside != thirdside || firstside === thirdside && firstside != secondside|| secondside === thirdside && secondside != firstside) {
       $(".triangletype").text(" Isosceles");
     } else if (firstside != secondside && secondside != thirdside && firstside != thirdside) {
       $(".triangletype").text(" Scalene");
     }

    event.preventDefault();
  });

});
