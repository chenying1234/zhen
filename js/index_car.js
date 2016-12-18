$(function(){
	var $lis = $("#box>li"), //所有在box下的li
	len = $lis.length,
	index = 0,
	timer = 0;
	//添加小圆点
	var html = "";
	for (var i = 0; i < len; i++) {
		html += "<div></div>";
	}
	$(html).appendTo("#pages").on("click", function() {
		index = $(this).index();
		move();
	}).eq(0).click();
	$("#banner").hover(function(){
		clearInterval(timer);
	},function() {
		timer = setInterval(move, 3000);
	}).trigger("mouseleave");
	//上一页
	$("#prev").click(function() {
		index-=2;
		if (index == -1) {
			index = len - 1;
		}
		move();
	});
	//下一页
	$("#next").click(move);
	function move() {	
		if (index == len) {
			index = 0;
		}
		$("#pages>div").eq(index).addClass("curr").siblings().removeClass("curr");
		$("#box li").eq(index).fadeIn(1500).siblings().fadeOut(1500);
		index++;
	}
});
$(function(){
	$('.active').hover(function() {
		$(this).siblings(".Zpg_headNavC").show().parent().siblings().children('.Zpg_headNavC').hide();
	},function(){
		$(this).siblings(".Zpg_headNavC").hide();
	});
	$('.Zpg_headNavC').hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
});
$(function(){
	$('.category-a').click(function(){
		if(($(this).siblings('.ul_son')).css('display')=="none")
		{
			$(this).siblings('.ul_son').fadeIn();
		}
		else
		{
			$(this).siblings('.ul_son').fadeOut();
		}
	});
});