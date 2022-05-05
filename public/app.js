$(document).ready(() => {
    $('.nav-tabs a').click(function(){
        $(this).tab('show');
      })
})
$(".nav-tabs a").click(function () {
  $("body,html").animate(
    {
      scrollTop: $("#" + $(this).data("value")).offset().top,
    },
    1000
  );
});
