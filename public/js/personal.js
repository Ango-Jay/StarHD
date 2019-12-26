$(document).ready(function(){
/* 	//hover function links
	$(".jumia").hover(
function() {
$(".linke").attr({href: "/Gothic_Harvest"});
},
function() {
$(".linke").attr({href: "images/gothicharv.jpg"});
}
); */
	//hover function images
	$(".jumia").hover(
function() {
$(".jumia").attr({src: "./images/play.png"});
//$(".linke").attr({href: "/Starhd/Gothic_Harvest"});
},
function() {
$(".jumia").attr({src: "./images/gothicharv.jpg"})
}
);


$(".jumia1").hover(
function() {
$(".jumia1").attr({src: "./images/play.png"});
$(".linke1").attr({href: "/Starhd/Joker"});
},
function() {
$(".jumia1").attr({src: "./images/Joker.jpg"});
}
);

$(".jumia2").hover(
    function() {
    $(".jumia2").attr({src: "./images/play.png"});
    $(".linke2").attr({href: "/Starhd/Klaus"});
    },
    function() {
    $(".jumia2").attr({src: "./images/KLAUS.jpg"});
    }
    );

    $(".jumia3").hover(
        function() {
        $(".jumia3").attr({src: "./images/play.png"});
        $(".linke3").attr({href: "/Starhd/Inception"});
        },
        function() {
        $(".jumia3").attr({src: "./images/INCEPTION.jpg"});
        }
        );

        $(".jumia4").hover(
            function() {
            $(".jumia4").attr({src: "./images/play.png"});
            $(".linke4").attr({href: "/Starhd/PointBlank"});
            },
            function() {
            $(".jumia4").attr({src: "./images/POINTBLANK.jpg"});
            }
            );

            $(".jumia5").hover(
                function() {
                $(".jumia5").attr({src: "./images/play.png"});
                $(".linke5").attr({href: "/Starhd/Hustle"});
                },
                function() {
                $(".jumia5").attr({src: "./images/HUSTLE.jpg"});
                }
                );
//click function
	$(".jomung").click(function() {
        var emo = $(".tbod1");
        var eme = $(".tbod");
        eme.removeClass("mhide");
        emo.addClass("mhide");


        var img = $(".jumia");
    
    if (img.width() > 200)
    {
        img.animate({width: "200px", height: "200px"}, 100);
    }
    else 
    {
        img.animate({width:'411px', height:'608px'}, 100);
    }
});

$(".jomung1").click(function() {
    var emo = $(".tbod");
    var eme = $(".tbod1");
    eme.removeClass("mhide");
    emo.addClass("mhide");
  
    
    var img = $(".jumia1");
    
    if (img.width() > 200)
    {
        img.animate({width: "200px", height: "200px"}, 100);
    }
    else 
    {
        img.animate({width:'411px', height:'608px'}, 100);
    }
});
    
$(".jomung2").click(function() {
    var emo = $(".tbod");
    var eme = $(".tbod1");
    eme.removeClass("mhide");
    emo.addClass("mhide");
  
    
    var img = $(".jumia2");
    
    if (img.width() > 200)
    {
        img.animate({width: "200px", height: "200px"}, 100);
    }
    else 
    {
        img.animate({width:'411px', height:'608px'}, 100);
    }
});
    
$(".jomung3").click(function() {
    var emo = $(".tbod");
    var eme = $(".tbod1");
    eme.removeClass("mhide");
    emo.addClass("mhide");
  
    
    var img = $(".jumia3");
    
    if (img.width() > 200)
    {
        img.animate({width: "200px", height: "200px"}, 100);
    }
    else 
    {
        img.animate({width:'411px', height:'608px'}, 100);
    }
});
    
$(".jomung4").click(function() {
    var emo = $(".tbod");
    var eme = $(".tbod1");
    eme.removeClass("mhide");
    emo.addClass("mhide");
  
    
    var img = $(".jumia4");
    
    if (img.width() > 200)
    {
        img.animate({width: "200px", height: "200px"}, 100);
    }
    else 
    {
        img.animate({width:'411px', height:'608px'}, 100);
    }
});

$(".jomung5").click(function() {
    var emo = $(".tbod");
    var eme = $(".tbod1");
    eme.removeClass("mhide");
    emo.addClass("mhide");
  
    
    var img = $(".jumia5");
    
    if (img.width() > 200)
    {
        img.animate({width: "200px", height: "200px"}, 100);
    }
    else 
    {
        img.animate({width:'411px', height:'608px'}, 100);
    }
});
	
  
  $(window).scroll(function () {
      // Get the height of the banner,
      // and then set your menu.
      var bannerHeight = $('#banner').height();
      
    if ($(window).scrollTop() > bannerHeight) {
	  $(".imo").attr({src: "./images/loggy.png"}).addClass("padd");
    }
    if ($(window).scrollTop() < bannerHeight) {
	  $(".imo").attr({src: "./images/logo2.png"}).removeClass("padd");
    }
  });

	
	
	
});




