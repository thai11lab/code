var i = 0;
    var intervalId
var width = 0;
    $('#lst-gallery').on('initialized.owl.carousel', function(e) {
    var active = e.relatedTarget.relative(e.item.index)+1;
    var total =  e.item.count;
    $('#gallery-active').text('0'+active);
    $('#gallery-total').text('0' + total);  
    move();             
    });
    $('#lst-gallery').owlCarousel({                
    items: 1.3,
    loop: true,
    margin: 0,
    nav:false,
    autoplay:true,                
    dots:false,
    smartSpeed:1000,
    });
    $(".gallery-cus-next").click(function() {
        $('#lst-gallery').trigger('next.owl.carousel');
        $('#lst-gallery').trigger('stop.owl.autoplay');
        $('#lst-gallery').trigger('play.owl.autoplay');
    });

    $(".gallery-cus-prev").click(function() {
        $('#lst-gallery').trigger('prev.owl.carousel');
        $('#lst-gallery').trigger('stop.owl.autoplay');
        $('#lst-gallery').trigger('play.owl.autoplay');

    });
    
    $('#lst-gallery').on('changed.owl.carousel', function(e) {
    var active = e.relatedTarget.relative(e.item.index)+1;
    var total =  e.item.count;                
    $('#gallery-active').text('0'+active);
    $('#gallery-total').text('0' +total);
    //alert("123");
    $(".gallery-controls").css("z-index","0");
    clearInterval(intervalId);
    setTimeout(function(){
        $(".gallery-controls").css("z-index","10");
    }, 1000);
    i = 0;
    move();
});
    function move() {
    if (i == 0) {
        i = 1;
        width = 0;
        
        intervalId = setInterval(frame, 45);                    
        }               
    }
    function frame() {
        var elem = document.getElementById("myBar");                   
        if (width >= 100) {
            clearInterval(intervalId);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";                    
        }
    }