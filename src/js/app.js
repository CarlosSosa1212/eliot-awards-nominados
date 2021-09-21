/*Propiedades de slide*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    /* If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },*/
  
    /* Navigation arrows*/
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    /* And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });


$(document).ready(function(){

    /* Animaciuon de arrastrar */
    setInterval(function(){
        arrastrar();
    }, 500);
    setInterval(function(){
        nominado();
    }, 1000);
    
    $("#1").hover(function(){
      $('#hover-1').slideToggle("slow");
    });
    $("#2").hover(function(){
      $('#hover-2').slideToggle("slow");
    });
    $("#3").hover(function(){
      $('#hover-3').slideToggle("slow");
    });
    $("#4").hover(function(){
      $('#hover-4').slideToggle("slow");
    });
    $("#5").hover(function(){
      $('#hover-5').slideToggle("slow");
    });

});

function arrastrar(){
        $('.arrastrar').toggleClass('big');
}
function nominado() {
    $('.nominado-amim').toggleClass('big');
}