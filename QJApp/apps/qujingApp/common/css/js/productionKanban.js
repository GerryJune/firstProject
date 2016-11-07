function lunbo () {
	$('.pic-active').removeClass('pic-active').siblings().addClass('pic-active');
	$('.dot-active').removeClass('dot-active').siblings().addClass('dot-active');
}
function proChoose (id) {
	$("#"+id).find('.header-choose-show').on('click',function (e) {
		$(".pro-chooses").slideToggle();
		$('.header-choose-show .trangle').toggleClass('trangle-down').toggleClass('trangle-up');
		$.each($('.pro-choose'), function() {
			$(this).bind('click',function (e) {
				var text = $(this).children('span').text();
				$(".pro-chooses").hide();
				$("#"+id).find('.header-choose-title').text(text);
			})
		});
	})
}

function pubCloneAdd (className) {
	var clone = $("."+className).eq(0).clone(true);
	$("."+className).bind('click',function (e) {
		$(this).after(clone);
	})
}
$(document).ready(function () {
	setInterval('lunbo()',2000);
	proChoose ('Production_order');
	proChoose ('dampingMachine');
	proChoose ('feedingMachine');
	proChoose ('shreddingMachine');
	proChoose ('dryingMachine');
	proChoose ('perfumingMachine');
	pubCloneAdd ('damping-box-add');
})