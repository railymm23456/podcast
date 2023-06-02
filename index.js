alert("Welcome to main page of 'ZANA'");
var x = document.getElementById("img_txt");

// if (x) {
  x.addEventListener("mouseover", func, false);
  x.addEventListener("mouseout", func1, false);
// }

function func()
{
   document.getElementById("toto").setAttribute("style", "display:block;")
}

function func1()
{
    document.getElementById("toto").setAttribute("style", "display:none;")
}
function Function() {
  document.getElementById("demo").style.backgroundColor = "green";
  document.getElementById("demo").innerHTML ="Submitted Successfully!";
}
