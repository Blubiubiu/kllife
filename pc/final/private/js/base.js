
$(function(){
	var timer = null;
	var iNow = 0;
	// 语音通知手风琴效果
	$(".accordion-leader ul li").each(function(){
		var fold = $(this).find(".fold");
		var unfold = $(this).find(".unfold");
		if(fold.css("opacity") == '0'){
			$(this).width(402);
		}else{
			$(this).width(133);
		}
	});
	
	$(".accordion-leader li").click(function(){
		var li_index = $(this).index();
		iNow = li_index;
		$(this).siblings().stop().animate({width:133},1000);
		$(this).siblings().find(".unfold").stop().animate({opacity: '0'},1500);
		$(this).siblings().find(".fold").stop().animate({opacity: '1'},1500);
		$(this).stop().animate({width:402},1000);
		$(this).find(".unfold").stop().animate({opacity: '1'},1500);
		$(this).find(".fold").stop().animate({opacity: '0'},1500);
	});

	
	function autoPlay(){
		timer = setInterval( function () {

		iNow++;
		if( iNow > $(".accordion-leader ul li").length-1 ){ //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
    		iNow=0;
   		}
	   		$(".accordion-leader ul li").eq(iNow).trigger('click');
		},3000 );
	}
	autoPlay();

	$(".accordion-leader .unfold").hover( 
		function () { clearInterval(timer) },
		function () { autoPlay() } 
	);
});
