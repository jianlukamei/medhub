
//script for navbar le footer id kho rui shortcut t tat mei theak. hei script kho lou ethei any page khou <div id="navbar"></div> kum su lana t nu the.

document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("navbar").innerHTML = data));

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("footer").innerHTML = data));
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the current URL, removing any fragment
  var documentUrl = document.location.href.replace(/#.*$/, "");

  // Iterate through all links
  var linkEls = document.getElementsByTagName("A");
  for (var linkIndex = 0; linkIndex < linkEls.length; linkIndex++) {
    var linkEl = linkEls[linkIndex];

    // Ignore links that don't begin with #
    if (!linkEl.getAttribute("href").match(/^#/)) {
      continue;
    }

    // Convert to an absolute URL
    linkEl.setAttribute("href", documentUrl + linkEl.getAttribute("href"));
  }
});



const words = ["Wellness", "Healthcare", "Sexual Health"];
let index = 0;

function changeText() {
  index = (index + 1) % words.length;
  document.getElementById("changingText").textContent = words[index];
}

setInterval(changeText, 2000);


document.getElementById("loginform").addEventListener("click", function () {
  let email = document.getElementById("exampleInputEmail1").value.trim();
  let password = document.getElementById("exampleInputPassword1").value.trim();
  let alertBox = document.getElementById("alertBox");

  if (email === "" || password === "") {
    alertBox.style.display = "block"; 
  } else {
    alertBox.style.display = "none";
    alert("Login successful!");
  }
});

function resetalert() {
  alert("Enter a valid email!");
}