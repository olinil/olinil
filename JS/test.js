function myFunction() {
    var x = document.getElementById("test");
    if (x.innerHTML === "Hallais") {
      x.innerHTML = "";
    } else {
      x.innerHTML = "Hallais";
    }
  }