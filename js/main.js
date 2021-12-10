// $('.fade').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear',
//   arrow:true,
// });
// Slader
window.onload = function() {
    new Slider({
      images: '.gallery .photo img',
      next: '.gallery .tabs .next',
      prev: '.gallery .tabs .prev',
    })
    function Slider(obj) {
      this.images = document.querySelectorAll(obj.images)
      this.btNext = document.querySelector(obj.next)
      this.btPrev = document.querySelector(obj.prev)
      // this.interval = obj.interval

      var i = 0
      


      this.prev = function () {
        console.log('prev', this);
        this.images[i].className = "";
        i--
        if(i<0) {
          i = this.images.length - 1
        }
        this.images[i].className = "shown";

      }

      this.next = function () {
        console.log('next');
        this.images[i].className = "";
        i++
        if(i>= this.images.length) {
          i = 0
        }
        this.images[i].className = "shown"


      }


      this.btNext.addEventListener('click', this.next.bind(this))
      this.btPrev.addEventListener('click', this.prev.bind(this))


      // setInterval(this.next.bind(this), this.interval)





    }
}
// Бургер-----------------
const iconMenu = document.querySelector('.menu_icon');
if (iconMenu){
    const menuBody = document.querySelector('.main_nav');
    iconMenu.addEventListener("click", function(e) {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');

      
    });


}
    
   
