function myFunction() {
    var x = document.getElementById("test");
    if (x.innerHTML === "Hallais") {
      x.innerHTML = document.getElementById("test");
    } else {
      x.innerHTML = "Hallais";
    }
  }