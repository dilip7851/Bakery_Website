

var bar = document.querySelector("#bar")
var closeBox = document.querySelector("#closeBox")
var main = document.querySelector(".mainHeader div:nth-child(2)")


bar.addEventListener(
  "click",
  function () {
    main.style.transition = "0.8s"


    main.style.transform = "translateX(0%)";
    closeBox.style.display = "block";
    bar.style.display = "none"
  }
)



closeBox.addEventListener(
  "click",
  function () {
    main.style.transition = "0.5s"
    main.style.transform = "translateX(-100%)";

    closeBox.style.display = "none";
    bar.style.display = "block"
  }
)


document.addEventListener(
  "scroll",
  function (e){


   

      if(window.scrollY > 60){
        document.body.classList.add("static");
      } else{
        document.body.classList.remove("static");

      }
  }

)