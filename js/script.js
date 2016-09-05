(function(){
    var iframe = document.querySelector(".google-map-container iframe");
    var img = document.querySelector(".google-map-container img");
    console.log(img);
    img.style.display = "none";
    iframe.style.display = "block";
})();

(function(){
  if(document.querySelector(".slider")){
    var sliderItems = document.querySelectorAll(".slider-item");
    var buttons = document.querySelectorAll("input[name='slider']");
    buttons[0].checked = "true";
    for(var k = 0; k < buttons.length; k++){
      buttons[k].addEventListener('click', function(e){
        var data = e.target.dataset;
        for(var i = 0; i < sliderItems.length; i++){
          sliderItems[i].style.display = "none";
        }
        sliderItems[data.count].style.display = "block";
      })
    }
  }
})();

!function(){
  var writeUsBtn = document.querySelector("#write-us");
  var popup = document.querySelector(".popup");
  var closeBtn = document.querySelector(".popup__btn-close");
  writeUsBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.add("block-show");
  });
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.remove("block-show");
  })
}();
