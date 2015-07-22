

$('#post').click(function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var entry = document.getElementById('entry').value;
  localStorage.person = name;
  localStorage.words = entry;

  confirm(name + ", are you ready to post? For now, it can't be undone.");
  console.log(entry);
  $('#p1').append(entry);
  // document.getElementById("#p1").innerHTML = localStorage.entry;
});
