function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
}
function pubChangePage (headPageData) {
	var headHtml = '<div class="header">'+
					'<img src="images/left.png" class="PUBLIC-CENTER-V header-back-icon" />'+
					'<span class="PUBLIC-CENTER-V-SPAN header-back-title" >制丝车间</span>'+
					'<span class="abs-center header-center">加香机</span>'+
				'</div>';
	for (var key in headPageData) {
		$('#'+key).prepend(headHtml);
		$('#'+key).find('.header-back-title').text(headPageData[key][1]);
		$('#'+key).find('.header-center').text(headPageData[key][2]);
		$('#'+key).find('.header-back-title').unbind('click').bind('click',function(event) {
			var nextPage = key;
			event.stopPropagation();
			var currPage = $(this).parent().parent().attr('id');
			$.mobile.changePage('#'+ headPageData[currPage][0],{transition:'none'});
		});
	}
};
pubChangePage (headPageData);
function swichPagePub (nextPage) {
	$.mobile.changePage('#'+ nextPage,{transition:'none'});
}
var HlClone = function (doc,data) {
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
		}
	}
}
var HlChangeText = function (doc,data) {
	for (var m = 0; m < doc.length; m++) {
		doc.eq(m).text(data[m].name);
		doc.eq(m).css('color',data[m].color);
	}
}
var HlChangeitem = function (doc,data,key) {
	for (var i = 0; i < doc.length; i++) {
		doc.eq(i).text(data[i][key]);
	}
}
var HlChangeitem1 = function (doc,data,key) {
	for (var i = 0; i < doc.length; i++) {
		doc.eq(i).text(data[i][key]+':');
	}
}
var HLqujing = function () {
};
HLqujing.prototype= {
	pubGetClone:function(id,pagedata){
		var comData =  pagedata.data[0];
		if (this.isDetaList(pagedata)) {
			var detaList = comData.detaList;
		}else{
			var detaList = pagedata.data;
		}
		var doc = $('#'+id).find('.pub-wrap-dataList');
		HlClone(doc,detaList);
		for (var i = 0; i < detaList.length; i++) {
			var $iPubDataList = $('#'+id).find(".pub-wrap-dataList").eq(i);
			var $pubHeaderTitle = $iPubDataList.find('.pub-header-title');
			var titleData = detaList[i].deta.title;
			HlClone($pubHeaderTitle,titleData);
			var $pubHeaderTitle1 = $iPubDataList.find('.pub-header-title');
			// HlChangeText($pubHeaderTitle1,titleData);
			HlChangeitem($pubHeaderTitle1,titleData,'name');
			var titleDataLen = titleData.length;
			for(var k = 0, length3 = titleData.length; k < length3; k++){
				id=='feedingMachine'?console.log('#'+id+' .pub-wrap-dataList:nth-child('+(i+1)+') .pub-header-title:nth-child('+(k+1)+')::before','background:'+ titleData[k].color):false;
				document.styleSheets[3].addRule('#'+id+' .pub-wrap-dataList:nth-child('+(i+1)+') .pub-header-title:nth-child('+(k+1)+')::before','background:'+ titleData[k].color);
			}
			if (detaList[i].deta.item) {
				var itemData = detaList[i].deta.item;
				var $pubHeaderInfo = $iPubDataList.find('.pub-header-info');
				HlClone($pubHeaderInfo,itemData);
				var $pubHeaderName = $iPubDataList.find('.pub-header-name');
				var $pubHeaderItem = $iPubDataList.find('.pub-header-item');
					
				HlChangeitem1($pubHeaderName,itemData,'name');
				HlChangeitem($pubHeaderItem,itemData,'content');
				var $pubHeaderInfo1 = $iPubDataList.find('.pub-header-info');
				itemData.forEach(function (item,index) {
					if (item.name==''||item.name==null) {
						$pubHeaderInfo1.eq(+index).hide()}
				})
			}
			//克隆iBoxspan
			var $pubBox = $iPubDataList.find('.pub-box');
			var $pubBoxItem = $pubBox.eq(0).find('.pub-box-item');
			var moduleData= detaList[i].deta.module;
			var itemSpan = moduleData[0].center;
			var firname = moduleData[0].center[0].name;
			if (firname==''||firname==null) {
				var $firBox = $iPubDataList.find('.pub-box');
				$firBox.addClass('box-add-plus').find('.add-plus').addClass('box-invisible');
				this.addPlus($firBox);
			}else{
				HlClone($pubBoxItem,itemSpan);
				//pub-box
				HlClone($pubBox,moduleData);
				var boxLen = $iPubDataList.find('.pub-box').length;
				for (var j=0;j<boxLen;j++) {//改变box-title的text和color
					var $pubBoxTitle = $iPubDataList.find('.pub-box-title').eq(j);
					var jboxTitle = moduleData[j].head.name;
					var jboxHeadColor = moduleData[j].head.color;
					$pubBoxTitle.text(jboxTitle);
					$pubBoxTitle.css('color',jboxHeadColor);
					var $pubBox1 = $iPubDataList.find('.pub-box');
					var jboxSpan = moduleData[j].center;
					var $boxSpan = $pubBox1.eq(j).find('span');
					HlChangeText($boxSpan,jboxSpan);
				}
				var $addBox = $iPubDataList.find('.pub-box');
				this.addPlus($addBox);
			}
		}
	},
	hasItem:function(pageData){
		if (this.isDetaList(pageData)) {
			return pageData.data[0].detaList[0].deta.item? true : false;
		}else{
			return pageData.data[0].deta.item?true:false;
		}
	},
	isDetaList:function(pageData){
		return pageData.data[0].detaList? true:false;
	},
	addPlus:function (doc) {
		if(doc.length % 3>0){
			var len = 3 - doc.length % 3;
			var last = doc.last();
			for (var i = 0; i < len; i++) {
				var clone = last.clone(true).addClass('box-add-plus')
				clone.find('.add-plus').addClass('box-invisible');
	//			console.log(last.clone().html())
				doc.last().after(clone);
			}
		}
		
	},
	createHeaderItem:function(id){
		var pubHeaderInfos = $("<div class='pub-header-infos'>");
		var pubHeaderInfo = $("<div class='pub-header-info'>");
		var pubHeaderName = $("<span class='pub-header-name'>");
		var pubHeaderItem = $("<span class='pub-header-item'>");
		$('#'+id).find(".pub-wrap-header").append(pubHeaderInfos);
		$('#'+id).find(".pub-header-infos").append(pubHeaderInfo).find('.pub-header-info').append(pubHeaderName).append(pubHeaderItem);
	},
	createBoxItem:function(id){
		var pubBoxTitle = $('<div class="pub-box-title">');
		var span = $('<span class="pub-box-item ">');
		$('#'+id).find('.add-plus').append(pubBoxTitle).append(span);
	},
	firstCreateDom:function (id,pageData) {
		var pubWrapHeader = $("<div class='pub-wrap-header'>");
		var pubHeaderTitle = $("<div class='pub-header-title'>");
		$('#'+id).find(".pub-wrap-dataList").append(pubWrapHeader)
		$('#'+id).find(".pub-wrap-header").append(pubHeaderTitle);
		var pubBoxes = $('<div class="pub-wrap-content pub-boxes">');
		var pubBox = $('<div class="pub-box">');
		var addPlusDiv = $("<div class='add-plus'>");
		$('#'+id).find(".pub-wrap-dataList").append(pubBoxes).find('.pub-boxes').append(pubBox).find('.pub-box').append(addPlusDiv);
		if (this.hasItem(pageData)) {
			this.createHeaderItem(id);
		}
		this.createBoxItem(id);
	},
	
};
function diffPage(id,pageData) {
	var data = simulationData[pageData].data[0]
	var magnetismData = data.magnetism;
	var $difHead = $('#'+id).find('.dif-head');
	HlClone($difHead,magnetismData);
	var $difBoxTitle = $('#'+id).find('.dif-box-title');
	console.log(magnetismData)
	for(var k = 0, length3 = magnetismData.length; k < length3; k++){
		$difBoxTitle.eq(k).text(magnetismData[k].title);
	}	
	for(var i = 0, length1 = magnetismData.length; i < length1; i++){
		$('#'+id).find('.dif-head-span').eq(i).text(magnetismData[i].center.name);
		$('#'+id).find('.dif-head-span').eq(i).css('color',magnetismData[i].center.color);
	}
	var $difBox = $('#'+id).find('.dif-box-fir');
	HlClone($difBox,data.map);
	HlChangeitem($('#'+id).find('.box-title'),data.map,'title');
	for(var j = 0, length2 = data.map.length; j < length2; j++){
		HlChangeitem($('#'+id).find('.dif-box-fir').eq(j).find('.dif-box-left'),data.map[j].center,'key');
		HlChangeitem($('#'+id).find('.dif-box-fir').eq(j).find('.dif-box-right'),data.map[j].center,'value');
	}
}
diffPage('formingKanban','formingKanban');
function createSinglePage (id) {
	var RemoveDust = new HLqujing();
	RemoveDust.firstCreateDom(id,simulationData[id]);
	RemoveDust.pubGetClone(id,simulationData[id]); 
}
function diffData (id,data) {
	var RemoveDust = new HLqujing();
	RemoveDust.firstCreateDom(id,simulationData[id]);
	RemoveDust.pubGetClone(id,simulationData[id]); 
}
createSinglePage ('dampingMachine');//回潮机
createSinglePage ('feedingMachine');//加料机
createSinglePage ('shreddingMachine');//切丝机
createSinglePage ('altah');//环境温湿度
createSinglePage ('dryingMachine');//烘丝机
createSinglePage ('perfumingMachine');//加香机
createSinglePage ('removeDust');//除尘
createSinglePage ('refrigeration');//制冷
createSinglePage ('wasteTobacco');//废烟丝
createSinglePage ('glycerol');//甘油

