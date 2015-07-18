$(function() {
	/**
	 * Func: 浮动条
	 * Note: 1 offsetTop 与 winScroll 位置
	 * 		 2 配合CSS定位方法
	 */
	var element = $("#nav"),
		offsetTop = element.offset().top;
	$(window).scroll(function() {
		var winScroll = $(window).scrollTop();
		if (offsetTop < winScroll) {
			element.addClass('fixed');
		} else {
			element.removeClass('fixed');
		}
	});

	/**
	 * Func: 下划线滑动
	 * Note：闭包循环传参
	 */
	var links = $("#nav li"),
		decorate = $("#decorate");
	for (var i = 0; i < links.length; i++) {
		(function(j) {
			$(links[j]).mouseover(function(event) {
				decorate.animate({
					'left': decorate.width() * j + "px"
				}, "fast", "swing");
			});
		})(i);
	}
});