(function(){

  var sliderItems = document.querySelectorAll(".slider-item")
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


})();
