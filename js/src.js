var slider = document.querySelector('.slider');
  if(slider!=undefined){
    var hammertime = new Hammer(slider);
    var slides = document.querySelectorAll('.slide');
    function goToSlide(index){
      [].forEach.call(slides, function(item){
        item.classList.remove('is-active')
        item.classList.remove('is-next')
        item.classList.remove('is-prev')
      });
      if(!slides[index]){
        return false
      }
      if (index+1 >= slides.length){
        slides[0].classList.add('is-next')
      }else{
        slides[index+1].classList.add('is-next')
      }
      if (index-1 < 0){
        slides[slides.length-1].classList.add('is-prev')
      }else{
        slides[index-1].classList.add('is-prev')
      }
      slides[index].classList.add('is-active')
      slider.style.height = slides[index].clientHeight+'px'
      let allPins = document.querySelectorAll('.slider-pins div');
      [].forEach.call(allPins, function(item){
        item.classList.remove('active');
      });
      allPins[index].classList.add('active');
    }
    var subMenuOpeners = document.querySelectorAll('.sub-menu-open');
    [].forEach.call(subMenuOpeners, function(item){
      item.addEventListener('click', function(){
        let parent = this.parentElement
        parent.classList.toggle('is-active')
        let sub = parent.querySelector('ul');
        sub.classList.toggle('opened')
      })
    })
    function sliderInit(){
      var num = 0;
      var pins = document.createElement('div');
      pins.classList.add('slider-pins');
      [].forEach.call(slides, function(item){
        var pin = document.createElement('div');
        pin.innerText = num;
        pin.dataset.num = num;
        num++;
        pin.addEventListener('click', function(){
          console.log(this.innerText, this.dataset.num)
          goToSlide(+this.innerText);
        })
        pins.appendChild(pin)
      })
      slider.appendChild(pins)
      goToSlide(0);
    }
    sliderInit();
    hammertime.on('swipeleft', function(ev) {
      let current = document.querySelector('.slide.is-active');
      var index = Array.prototype.indexOf.call( slides,current);
      index++;
      if (index >= slides.length){
        index = 0;
      }
      goToSlide(index);
    });
    hammertime.on('swiperight', function(ev) {
      let current = document.querySelector('.slide.is-active');
      var index = Array.prototype.indexOf.call( slides,current);
      index--;
      if (index < 0){
        index = slides.length-1;
      }
      goToSlide(index);
    });
    hammertime.on('swiperight', function(ev) {
    });
  }
var MenuOpeners = document.querySelectorAll('.menu-opener');
[].forEach.call(MenuOpeners, function(item){
  item.addEventListener('click', function(){
    let menu = document.querySelector('.header__menu')
    menu.classList.toggle('is-opened')
  })
})


var searchClick = document.querySelectorAll('.search-menu')[0];
searchClick.addEventListener('click', function(e){
  e.preventDefault()
  let parent = this.parentElement
  if(parent.classList.contains('is-active')){
    parent.submit()
  }else{
    parent.classList.add('is-active')
  }
  e.stopPropagation();
})
var searchInput = document.querySelectorAll('.search-input')[0];
searchInput.addEventListener('click', function(e){
  e.stopPropagation();
})
document.addEventListener('click', function(e){
   searchClick.parentElement.classList.remove('is-active')
})

var sideMenuOpen = document.querySelectorAll('.side-menu-open i')[0];
sideMenuOpen.addEventListener('click', function(){
    let className = document.querySelectorAll('.side-menu')[0]
    console.log(className);
    className.classList.toggle('is-active')
})

function functionADD() {
  var ul = document.querySelectorAll(".header__menu ul");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Four"));
  ul.appendChild(li);
}

