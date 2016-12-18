// JavaScript Document
$(function(){
	var popWidth = $(".pop").width(),
	popHeight = $(".pop").height(),
	middleHeight = $(".middle").height(),
	middleWidth = $(".middle").width(),
	bigWidth = $(".big").width(),
	bigHeight = $(".big").height(),
	rateX = bigWidth / popWidth,
	rateY = bigHeight / popHeight;
	$(".middle").hover(function() {
		$(".pop,.big").show();
	}, function() {
		$(".pop,.big").hide();
	}).on("mousemove", function(event) {
		$(".pop").offset({
			top: event.pageY - popHeight / 2,
			left: event.pageX - popWidth / 2
		});
		var position = $(".pop").position(),
			_top = position.top,
			_left = position.left;
		//判断_top,_left的取值
		if (_top < 0)
			_top = 0;
		else if (_top > middleHeight - popHeight)
			_top = middleHeight - popHeight;
		if (_left < 0)
			_left = 0;
		else if (_left > middleWidth - popWidth)
			_left = middleWidth - popWidth;
		$(".pop").css({
			top: _top,
			left: _left
		});
		$(".big img").css({
			top: -rateY * _top,
			left: -rateX * _left
		});
	});
	$(".small").hover(function() {
		$(this).addClass("curr").siblings().removeClass("curr");
		var _src = $(this).children("img").attr("src");
		$(".middle img").attr("src", _src.replace("50_", "400_"));
		$(".big img").attr("src", _src.replace("50_", "800_"));
	});
});
$(function(){
	$(".add_shop").click(function(){
		alert('添加成功');
	});
});