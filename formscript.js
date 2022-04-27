
var form = document.getElementById('messageform');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("messageform")),
    }).then(
        response => response.json()
    ).then((html) => {
      // you can put any JS code here
      window.location.href = "thank-you.html";
      alert('success')
    });
  });

function test() {
    console.log("We have run");
    window.location.href = "thank-you.html";
}