$(()=>{
  $('.main-bar').load('/components/navbar.html');  
  $('.intro').load('/components/intro.html');
  $('#skills').load('/components/skills.html');
  $('#projects').load('/components/projects.html');
  $('#footer').load('/components/footer.html');
})
function copyToClipboard(params) {
  var $temp=$("<input>");
  $("body").append($temp);
$temp.val('Surjeetrajput433@gmail.com').select();
document.execCommand("copy");
$temp.remove();
$('#msg').text("email copied to clipboard successfully");
}