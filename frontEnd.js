$('.oneSelect').click(function(){
	$('#forClass > div:nth-child(1)').removeClass();
	$('#forClass > div:nth-child(1)').addClass("one");
	$(".headshot").attr("src","images/cheesin.jpg");

	$('#cleanUp').addClass('inactive');	
})

$('.twoSelect').click(function(){
	$('#forClass > div:nth-child(1)').removeClass();
	$('#forClass > div:nth-child(1)').addClass("two");	
	$(".headshot").attr("src","images/cheesin.jpg");

	$('#cleanUp').addClass('inactive');	
})

$('.threeSelect').click(function(){
	$('#forClass > div:nth-child(1)').removeClass();
	$('#forClass > div:nth-child(1)').addClass("three");
	$(".headshot").attr("src","images/clean.jpeg");	
	$(".smile").css('display', 'none');
	$('#cleanUp').removeClass('inactive');
})

var flag = 1;
function changeImage(){
	if(flag == 1) {
      $(".headshot").attr("src","images/muggin.jpg");
      $(".smile").text('Click here to tell me a joke.');
      flag = 0;
    }
    else if(flag == 0) {
      $(".headshot").attr("src","images/cheesin.jpg");
      $(".smile").text('Click again to make me mad.');
      flag = 1;
    }
}