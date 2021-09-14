function toggleClass() {
  var subNave = document.getElementById("sublist");
  subNave.classList.toggle("active");
}

$(".humburger").click(function () {
  $(this).toggleClass("open");
  $('.main-controller').toggleClass("expended");
});
$(".search_field .stacksearch").click(function () {
  $('.search_field').toggleClass("active");
});
$(".md_dot").click(function () {
  $(this).toggleClass("active");
});
$(".dropdown-toggle, .skip").click(function () {
  $(".dropdown").toggleClass("active");
});
$(".editable_content .icon, .editable_field i").click(function () {
  $(".editable_content").toggleClass("active");
});
