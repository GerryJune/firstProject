(function (page) {//模态框显示和隐藏
	$(".header-right").bind('click',function () {
		$(".MaterialCheck_mask").show();
		$(".mask-content").show();
	})
	$(".MaterialCheck_mask").bind('click',function () {
		$(this).hide();
		$(".mask-content").hide();
	})
})();
var HlClone = function (doc,data) {//公共克隆方法
	var dataLen = data.length;
	var domLen = doc.length;
	if (dataLen>domLen) {
		for (var i = 0; i < dataLen-domLen; i++) {
			var clone = doc.eq(0).clone(true);
			var add = doc.last().after(clone);
		}
	}else if (dataLen < domLen) {
		for (var i = 0; i < -dataLen+domLen; i++) {
			doc.last().remove();
			doc.length=doc.length-1
		}
	}
}
//function changeDataSpan (doc,) {
//	
//}
function optionChoose (chooseDoc,showDoc) {
	chooseDoc.bind('click',function () {
		showDoc.text($(this).text());
		$(this).addClass('choose-active').siblings().removeClass('choose-active');
	})
}
function changeData(doc,data) {
for (var i = 0; i < data.length; i++) {
	doc.eq(i).text(data[i].name).attr('number',data[i].number);
}
}
function maskMethod (id) {
	var $maskItem= $(".brand-num-span").find('span');
	var itemData = siteManagement.data[0].grade[0].option;
	HlClone($maskItem,itemData);
	var modelData = siteManagement.data[0].model[0];
	var crewData = siteManagement.data[0].crew[0];
	$(".brand-num").attr('number',siteManagement.data[0].grade[0].number)
	$(".machine-style").attr('number',modelData.number)
	$(".machine-group").attr('number',crewData.number)
	
	changeData($(".brand-span"),itemData);
	HlClone($(".machine-style-span").find('span'),modelData.option);
	changeData($(".item-choose"),modelData.option);
	HlClone($(".machine-group-span").find('span'),modelData.option);
	changeData($(".item-span"),crewData.option);
	
	optionChoose ($('.brand-span'),$('.brand-span-value'));
	optionChoose ($('.item-choose'),$('.item-choose-value'));
	optionChoose ($('.item-span'),$('.item-span-value'));
}

var MaterialCheck={
	getClone:function (id) {
		var $appBox = $("#MaterialCheck").find('.boxes-info');
		var boxData= accessories.data[0].deta.module;
		HlClone($appBox,boxData);
		for (var i = 0; i < boxData.length; i++) {
			if (boxData[i].name.text===''||boxData[i].name.text===null) {
				$("#MaterialCheck").find('.boxes-info').eq(i).remove();
			}else{
				$("#MaterialCheck").find('.boxes-info').eq(i).attr('number',boxData[i].number);
				$("#MaterialCheck").find('.mertiral-name').eq(i).text(boxData[i].name.text+':').parent().attr('number',boxData[i].name.number)
				$("#MaterialCheck").find('.mertiral-content').eq(i).text(boxData[i].name.value)
				$("#MaterialCheck").find('.fac-name').eq(i).text(boxData[i].manufactor.text+':').parent().attr('number',boxData[i].manufactor.number)
				$("#MaterialCheck").find('.fac-content').eq(i).text(boxData[i].manufactor.value)
				$("#MaterialCheck").find('.ischecked').eq(i).text(boxData[i].qualified.text+':').parent().attr({'number':boxData[i].qualified.number,'value':boxData[i].qualified.value})
				if(boxData[i].qualified.value){
					$("#MaterialCheck").find('.box-cirle').eq(i).addClass('box-cirle-on').find('.sm-cirle').css('left','1.6rem');
				}
				$('.fac-content').unbind().bind('click',function (e) {
					e.stopPropagation();
					var $facName = $("#factoryChoose").find('.fac-name');
					$("#factoryChoose").find('.fac-left-icon').removeClass('fac-choose-yes');
					if ($(this).text()!='') {
						for (var i = 0; i < $facName.length; i++) {
							if($facName.eq(i).attr('number')== $(this).parent().attr('number')){
								$("#factoryChoose").find('.fac-left-icon').eq(i).addClass('fac-choose-yes');
							}
						}
					}
					$.mobile.changePage('#factoryChoose',{transition:'none'});
					var self = $(this);
					var arr=[];
					$("#factoryChoose").find('.left').bind('click',function (e) {
						e.stopPropagation();
						$('.fac-left-icon').removeClass('fac-choose-yes')
						$(this).find('.fac-left-icon').addClass('fac-choose-yes');
						arr.push($(this).find('.fac-name').text());
						$.mobile.changePage('#MaterialCheck',{transition:'none'},1000);
						self.text(arr[0]);
					})
				})
			}
		}
		maskMethod ('MaterialCheck');
		this.isChecked('MaterialCheck')
	},
	isChecked:function (id) {
		$('#'+id).find('.box-cirle').bind('click',function (e) {
			if ($(this).hasClass('box-cirle-on')) {
				$(this).find('.sm-cirle').animate({'left':0},300);
				$(this).removeClass('box-cirle-on');
				$(this).parent().parent().attr('value','false');
			}else{
				$(this).find('.sm-cirle').animate({'left':'1.6rem'},300);
				$(this).addClass('box-cirle-on');
				$(this).parent().parent().attr('value','true');
				
			}
			
		})
	}
}
function facChoose (id) {
	var $facName = $("#"+id).find('.left');
	var facData = siteManagement.data[0].vender;
	HlClone($facName,facData);
	for (var i = 0; i < facData.length; i++) {
		$("#"+id).find('.fac-name').eq(i).text(facData[i].name).attr('number',facData[i].number)
	}
//	$("#"+id).find('.left').bind('click',function (e) {
//		$('.fac-left-icon').removeClass('fac-choose-yes')
//		$(this).find('.fac-left-icon').addClass('fac-choose-yes');
//	})
}
$(function () {
// MaterialCheck.getClone()
	// facChoose ('factoryChoose');
})
