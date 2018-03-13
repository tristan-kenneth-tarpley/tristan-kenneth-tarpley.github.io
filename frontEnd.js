$('.oneSelect').click(function(){
	$('#forClass > div:nth-child(1)').removeClass();
	$('#forClass > div:nth-child(1)').addClass("one");
	$(".headshot").attr("src","images/cheesin.jpg");
	$(".smile").removeClass('inactive');
	$('#cleanUp').addClass('inactive');	
})

$('.twoSelect').click(function(){
	$('#forClass > div:nth-child(1)').removeClass();
	$('#forClass > div:nth-child(1)').addClass("two");
	$(".headshot").attr("src","images/rutherford.jpeg");	
	$('#cleanUp').addClass('inactive');	
	$(".smile").addClass('inactive');
})

$('.threeSelect').click(function(){
	$('#forClass > div:nth-child(1)').removeClass();
	$('#forClass > div:nth-child(1)').addClass("three");
	$(".headshot").attr("src","images/clean.jpeg");	
	$(".smile").removeClass('inactive');
	$('#cleanUp').removeClass('inactive');
})

var flag = 1;
function changeImage(){
	if(flag == 1) {
      $(".headshot").attr("src","images/muggin.jpg");
      console.log('image should be changed.');
      $(".smile").text('Click here to tell me a joke.');
      flag = 0;
    }
    else if(flag == 0) {
      $(".headshot").attr("src","images/cheesin.jpg");
      console.log('image should be changed.');
      $(".smile").text('Click again to make me mad.');
      flag = 1;
    }
}




$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.addEventListener('scroll', function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }, {passive: true});
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateX(' + -(scrollTop / this.speed) + 'px)');
};


// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
  $('[data-scroll-speed-vertical]').moveIt();
});