jQuery(document).ready(function($) {

    
    var array = ['1', '2', '3'];
    var id = array[0];
    var data = getData(id);
    for (var i = 1; i < array.length; i++) {
        // Or only the last "i" will be used
        (function (i) {
            data = data.then(function() {
                return getData(array[i]);
            });
        }(i));
    }
    
    // Also, see how better the getData can be.
    function getData(id) {
        return $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos/' + id,
            dataType: 'jsonp',
        }).done(function(d) {
            var response = d;
            console.log(d);
        }).fail(function() {
            alert('ERROR');
        });
    }
    $('#slider-linh-vuc').on('initialized.owl.carousel', function(e) {
        var index = e.item.index -1;
        $("span[data-index='"+index+"']").addClass("active");
        console.log(index);

     });
$('#slider-linh-vuc').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 0,
    nav:false,
    autoplay:false,
    dots:false,
    smartSpeed:1000,
    autoplayTimeout:5000 ,
         
  });
$('#slider-linh-vuc').on('changed.owl.carousel', function(e) {
    var index = e.item.index -1;
    $(".item-index").removeClass("active");
    $("span[data-index='"+index+"']").addClass("active");
    console.log(index);
});
$('#slider-doi-tac').owlCarousel({               
    items: 5,
    loop: true,
    margin: 10,
    nav:false,
    autoplay:true,
    dots:false,
    smartSpeed:1000,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1366:{
            items:5,
            nav:true,                        
        },
        1600:{
            items:5,
            nav:true,                       
        }
    },
  });
  if($(window).width()>590){
  $('#slider-tin-tuc').on('initialized.owl.carousel', function(e) {
    $("#slider-tin-tuc .owl-stage").css("margin-left","-100px");
    $("#slider-tin-tuc.owl-carousel .active").removeClass("center");
    $("#slider-tin-tuc.owl-carousel .active").first().addClass("center");
    
});
  }
  $('#slider-tin-tuc').owlCarousel({               
    items: 3.5,
    loop: true,
    margin: 20,
    nav:false,
    autoplay:false,
    dots:false,
    smartSpeed:2000,
    center:false,
    animateOut: 'hideOut',
    animateIn: 'bounceInUp',
    
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1366:{
            items:3,
            nav:true,                        
        },
        1600:{
            items:3.5,
            nav:true,                       
        }
    },
  });
  if($(window).width()>590){
    $('#slider-tin-tuc').on('dragged.owl.carousel', function(e) {
     
        $("#slider-tin-tuc .owl-stage").css("margin-left","-100px");
        $("#slider-tin-tuc.owl-carousel .active").removeClass("center");
        $("#slider-tin-tuc.owl-carousel .active").first().addClass("center");
        
    });
    $('#slider-tin-tuc').on('changed.owl.carousel', function(e) {
        setTimeout(function (){
      $("#slider-tin-tuc .owl-stage").css("margin-left","-100px");
      $("#slider-tin-tuc.owl-carousel .active").removeClass("center");
      $("#slider-tin-tuc.owl-carousel .active").first().addClass("center");
        },300)
    });
  }

$('.owl-cus-next').click(function() {
    $('#slider-tin-tuc').trigger('next.owl.carousel');
})
$('.owl-cus-prev').click(function() {
    $('#slider-tin-tuc').trigger('prev.owl.carousel');
})
$( ".menu-icon" ).click(function() {
    $( ".menu-mobile" ).toggleClass( "active" );
  });
});