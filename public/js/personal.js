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
$(".linke").attr({href: "/Starhd/Gothic_Harvest"});
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
//click function
	$(".jomung").click(function() {
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




