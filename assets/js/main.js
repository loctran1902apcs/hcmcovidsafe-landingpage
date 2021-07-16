var loader = document.getElementById("loader");
var main = document.getElementById("main");
console.log('loader', loader);

window.addEventListener('load', function () {
  loader.classList.add("remove");
  main.classList.add("show");
})


// window.addEventListener('load', setTimeout(function () {
//   loader.classList.add("remove");
// },2000))
