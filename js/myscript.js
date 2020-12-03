$(function(){
	$("#top_carousel").carousel({
	  interval: 4000
	})
	// 17. 캐로셀 마지막 이미지의 ht를 가져와서 나머지 동영상과 이미지의 ht를 맞춤
	var top_carousel_ht=$("#top_carousel .item:last-of-type").height();
	$("#top_carousel, #top_carousel .carousel_control,#top_carousel .carousel-inner, .sensual").height(top_carousel_ht);
	$(window).resize(function(){
		var top_carousel_ht=$("#top_carousel .item:last-of-type").height();
		$("#top_carousel, #top_carousel .carousel_control,#top_carousel .carousel-inner, .sensual").height(top_carousel_ht);
	})
	// 47.animatescroll 구현
	$(".nav li:nth-child(1) a, .navbar-brand").click(function(){
		$("#top").animatescroll({scrollSpeed:1500,easing:"easeInOutBack", padding:200});
	})
	$(".nav li:nth-child(2) a").click(function(){
		$("#accordian_contents_02").animatescroll({scrollSpeed:1500,easing:"easeInOutBack", padding:200});
	})
	$(".nav li:nth-child(3) a").click(function(){
		$("#gallery_contents_03").animatescroll({scrollSpeed:1500,easing:"easeInOutBack", padding:200});
	})
	$(".nav li:nth-child(4) a").click(function(){
		$("#form_contents_04").animatescroll({scrollSpeed:1500,easing:"easeInOutBack", padding:200});
	})

	// 48.waypoint plugin 동작구문
	$(".wp1").waypoint(function(direction){
		if(direction==="down"){
			$(".wp1").addClass("bounceInDown animated")
		}
	},{
		offset:"50%"
	})
	$(".wp1").waypoint(function(direction){
		if(direction==="up"){
			$(".wp1").removeClass("bounceInDown animated")
		}
	},{
		offset:"50%"
	})

	$(".wp2").waypoint(function(direction){
		if(direction==="down"){
			$(".wp2").addClass("fadeInDown animated")
		}
	},{
		offset:"50%"
	})
	$(".wp2").waypoint(function(direction){
		if(direction==="up"){
			$(".wp2").removeClass("fadeInDown animated")
		}
	},{
		offset:"50%"
	})

	$(".wp3").waypoint(function(direction){
		if(direction==="down"){
			$(".wp3").addClass("fadeInLeft animated")
		}
	},{
		offset:"80%"
	})
	$(".wp3").waypoint(function(direction){
		if(direction==="up"){
			$(".wp3").removeClass("fadeInLeft animated")
		}
	},{
		offset:"80%"
	})

	$(".wp4 ,.wp5").waypoint(function(direction){
		if(direction==="down"){
			$(".wp4 ,.wp5").addClass("fadeInUp animated sh")
		}
	},{
		offset:"70%"
	})
	$(".wp4 ,.wp5").waypoint(function(direction){
		if(direction==="up"){
			$(".wp4 ,.wp5").removeClass("fadeInUp animated sh")
		}
	},{
		offset:"70%"
	})

	// 51. 스크롤의 위치를 얻어와서 해당번째 메뉴 활성화
	var menu=$(".nav li");
	$(window).on("scroll",function(){
		var scrollTop=$(window).scrollTop();
		var bg1_top=$(".bg1").offset().top;
		var bg2_top=$(".bg2").offset().top;
		var bg3_top=$(".bg3").offset().top;
		var bg4_top=$(".bg4").offset().top;
		if(scrollTop>=0 && scrollTop<bg1_top-200){
			menu.removeClass("active");
			menu.eq(0).addClass("active");
		}
		else if(scrollTop>=bg1_top-200 && scrollTop<bg2_top-210){
			menu.removeClass("active");
			menu.eq(1).addClass("active");
		}
		else if(scrollTop>=bg2_top-210 && scrollTop<bg3_top-210){
			menu.removeClass("active");
			menu.eq(2).addClass("active");
		}
		else if(scrollTop>=bg3_top-210 && scrollTop<bg4_top){
			menu.removeClass("active");
			menu.eq(3).addClass("active");
		}
	})

})

