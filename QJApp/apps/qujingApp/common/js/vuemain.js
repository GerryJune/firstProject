// 辅料检查 首页 s
var auxiliaryExamination={"data":[{
	"list":{  //列表
		"title":[{"name":"","type":"","number":""}],
		"text":[{  //行数组
			"number":"001",  //编码
			"type":"",
			"qualified":false,  //是否合格
			"center":[{   // 文本项目
				"key":"辅料名称：",
				"value":"小盒包装纸",
				"number":""
			},{   // 文本项目
				"key":"厂家",
				"value":"云南九九彩印公司",
				"number":"001"
			},]
		},{  //行数组
			"number":"001",  //编码
			"type":"",
			"qualified":true,  //是否合格
			"center":[{   // 文本项目
				"key":"辅料名称：",
				"value":"小盒包装纸",
				"number":""
			},{   // 文本项目
				"key":"厂家",
				"value":"云南九九彩印公司",
				"number":"001"
			},]
		},]
	}
}]}
function isGood(i,data) {
	console.log(data);
	data[i].qualified=!data[i].qualified
}
// 辅料检查 首页 e
// 条件筛选 s
var gradeData = 
// {'data':[{grade:[{
// 	name:'',
// 	number:'',
// }]}]}
{
	"data":[{
		"grade":[{  //牌号
			"name":"牌号",
			"number":"001",
			"type":false,//false:单选.true:多选
			"option":[
			   {"name":"云烟(软珍品)","number":"001",isA:true,},
			   {"name":"云烟(软如意)1","number":"002",isA:false},
			]
		}],
	}],
};
var modelData = {
	"data":[{
		
		"model":[{  //机型
			// "name":"",
			"number":"002",
			"type":'true',
			"option":[
				{"name":"GDX1#PROTOS70(1)","number":"001",isA:true},
			   {"name":"GDX1#PROTOS70(1)","number":"002",isA:false},
			   {"name":"GDX1#756(1)","number":"003",isA:false}],
		}],
		
	}],
};
var crewData = {
	"data":[{
		"crew":[{  //机组
			"name":"机组",
			"number":"003",
			"type":false,
			"option":[
					   {"name":"50号卷包机组","number":"001",isA:true},
					   {"name":"60号卷包机组","number":"002",isA:false}
					]
		}],
	}],
};

function showStyle(i,data,type) {
	if (!JSON.parse(type)&&type!==null) {
		for (var j = 0;j < data.length; j++) {
			data[j].isA=false;
		}
	}
	data[i].isA=!data[i].isA
}
function chooseMask(i,type,className) {
	if (!JSON.parse(type)) {
		console.log(!type);
		$('.'+className).removeClass('choose-active');
	}
	$('.'+className).eq(i).toggleClass('choose-active');
}
// 厂家选择 s
var factoryData = {"data":[{
	"check":[{
		"name":"云南某某厂",
		"number":"001",
		"type":true, //勾选状态
	},{
		"name":"云南某某厂1",
		"number":"002",
		"type":false, //勾选状态
	},{
		"name":"云南某某厂1",
		"number":"003",
		"type":false, //勾选状态
	},{
		"name":"云南某某厂1",
		"number":"004",
		"type":false, //勾选状态
	},]
}]};
function factoryChoose(i,data) {
	for (var j = 0;j < data.length; j++) {
		data[j].type=false;
	}
	console.log(data);
	data[i].type=!data[i].type
}
// 选择人员确定
/*
	人员选择【复用】   selectionPage
	条件:number=""  ！[是否需要编号]
	{"data":[{}]}
*/
var peopleData = {"data":[{
	"condition":[{
		"title":{"name":"Test1"},
		"type":"jt",    //  选择   lx
		"number":"1006",
		"check":"not",  // choice:多选   	radio :单选  not:不可选择
		"center":[{
			"text":"爱新觉罗",
			"number":"001",
			"type":"1",
			"isSelected":true
		},{
			"text":"白斌",
			"number":"002",
			"type":"1",
			"isSelected":false
		},{
			"text":"白斌2",
			"number":"003",
			"type":"1",
			"isSelected":false
		}]
	}]
}]}
// ZE.myevent.peopleChoose= fun
function peopleChoose(i,data,check) {//choice:多选   	radio :单选  not:不可选择
	if (check=='not') {return}
	if (check=='radio') {
		console.log(data)
		for (var j = 0; j < data.length; j++) {
			data[j].isSelected = false;
		}
	}
	data[i].isSelected=!data[i].isSelected;
}
// 综合数据
function changeStyle(i,className,activeClass) {//jquery 单选方法
	$('.'+className).removeClass(activeClass);
	$('.'+className).eq(i).addClass(activeClass);
}

Vue.config.debug=true;
var comprehensive = {"data":[{
	"list":{  //列表
		"title":[{"name":"","type":"","number":""}],
		"text":[
		{  //行数组
			"number":"002",
			"type":"",
			// "size":0,//数量
			"center":[{   // 文本项目
				"key":"日期",
				"value":"08:20:17"
			},{   // 文本项目
				"key":"取样指数",
				"value":"3011"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"牌号",
				"value":"云烟(紫)"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"班组",
				"value":"2班"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},]
		},{  //行数组
			"number":"002",
			"type":"",
			// "size":0,//数量
			"center":[{   // 文本项目
				"key":"日期",
				"value":"08:20:17"
			},{   // 文本项目
				"key":"取样指数",
				"value":"3011"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"牌号",
				"value":"云烟(紫)"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"班组",
				"value":"2班"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},]
		},{  //行数组
			"number":"002",
			"type":"",
			// "size":0,//数量
			"center":[{   // 文本项目
				"key":"日期",
				"value":"08:20:17"
			},{   // 文本项目
				"key":"取样指数",
				"value":"3011"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"牌号",
				"value":"云烟(紫)"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"班组",
				"value":"2班"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},]
		},{  //行数组
			"number":"002",
			"type":"",
			// "size":0,//数量
			"center":[{   // 文本项目
				"key":"日期",
				"value":"08:20:17"
			},{   // 文本项目
				"key":"取样指数",
				"value":"3011"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"牌号",
				"value":"云烟(紫)"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},{   // 文本项目
				"key":"班组",
				"value":"2班"
			},{   // 文本项目
				"key":"重量缺陷数",
				"value":"0.231"
			},]
		}
		]
	}
}]};

var auxiliaryExaminationDetails={"data":[{
	"deta":[{
		"key":"辅料名称",
		"value":"小盒包装纸",
		"color":'blue'
	},{
		"key":"厂家",
		"value":"云南九九彩印有限公司",
		"color":''
	},{
		"key":"是否合格",
		"value":"是",
		'color':'red'
	},{
		"key":"定量设计指标",
		"value":"32",
		'color':'green'
	},{
		"key":"全重",
		"value":"32",
		'color':'green'
	},{
		"key":"宽度",
		"value":"32",
		'color':''
	},{
		"key":"长度",
		"value":"32",
		'color':''
	},{
		"key":"透气度",
		"value":"32",
		'color':''
	}]
}]}
// 卷包巡检 s

var rolling_check= {"data":[{
	"list":{  //列表
		"title":[{"name":"","type":"","number":""}],
		"text":[{  //行数组
			"number":"",
			"type":"",
			"size":0,//数量
			"center":[{   // 文本项目
				"key":"参数名称：",
				"value":"小盒包装纸"
			},{   // 文本项目
				"key":"等级",
				"value":"B"
			},{   // 文本项目
				"key":"扣分值",
				"value":0.2
			},]
		}]
	},
	"top":{  //头部信息展示对象
		"crew":"50#",//机组
		"mark":80,//分数
		"time":"15:00",//时间
		"number":"",
		// "more":"001",  //次数  传编号
	},
	"more":[{
		"name":"第一次检验",
		"number":"001"
	},{
		"name":"第二次检验",
		"number":"002"
	}]
}]};

var rollingPacking={
	"data":[{
		"roll":[{  //
			"name":"卷接",
			"number":"003",
			"type":false,
			"option":[
					   {"name":"卷制","number":"001",isA:true},
					   {"name":"烟支物理指标","number":"002",isA:false},
					   {"name":"卷烟纸","number":"003",isA:false},
					   {"name":"接装纸","number":"004",isA:false},
					   {"name":"烟支物理指标","number":"005",isA:false},
					]
		}],
		"packing":[{  //卷接
			"name":"硬包包装",
			"number":"003",
			"type":'true',
			"option":[
					   {"name":"50号卷包机组","number":"001",isA:true},
					   {"name":"60号卷包机组","number":"002",isA:false}
					]
		}],
	}],
}
// 卷包巡检 e
// 已处理的 s
var hasHandled = {"data":[{
	"list":{  //列表
		"title":[{"name":"","type":"","number":""}],
		"text":[{  //行数组
			"number":"001",
			"type":"",
			// "size":0,//数量
			"center":[{   // 文本项目
				"key":"类型",
				"value":"人工"
			},{   // 文本项目
				"key":"类别",
				"value":"spc"
			},{   // 文本项目
				"key":"日期",
				"value":"2016-07-18 9:00"
			},{   // 文本项目
				"key":"班组",
				"value":"要填检测室'温度,湿度'的表,早班上班时填早班上班时填早班上班时填早班上班时填早班上班时填"
			}]
		},{  //行数组
			"number":"002",
			"type":"",
			// "size":0,//数量
			"center":[{   // 文本项目
				"key":"类型",
				"value":"人工"
			},{   // 文本项目
				"key":"类别",
				"value":"spc"
			},{   // 文本项目
				"key":"日期",
				"value":"2016-07-18 9:00"
			},{   // 文本项目
				"key":"班组",
				"value":"2要填检测室'温度,湿度'的表,早班上班时填早班上班时填早班上班时填早班上班时填早班上班时填"
			}]
		},]
	}
}]}
var unusualManagement={"data":[{
	"deta":[{   // 文本项目
				"key":"类型",
				"value":"人工"
			},{   // 文本项目
				"key":"类别",
				"value":"spc"
			},{   // 文本项目
				"key":"日期",
				"value":"2016-07-18 9:00"
			},{   // 文本项目
				"key":"班组",
				"value":"要填检测室'温度,湿度'的表,早班上班时填早班上班时填早班上班时填早班上班时填早班上班时填"
			}]
}]}
 var vm = new Vue({
	el: "#app",
	data:{
		auxiliaryExamination:auxiliaryExamination.data[0].list.text,//辅料检查
		auxiliaryExaminationDetails:auxiliaryExaminationDetails.data[0].deta,//辅料检查详情,
		check:peopleData.data[0].condition[0].check,
		selectionPage:peopleData.data[0].condition[0].center,//厂家选择
		inspection:{
			top:rolling_check.data[0].top,
			list:rolling_check.data[0].list,
			more:rolling_check.data[0].more,
			packing:rollingPacking.data[0].packing[0],
			roll:rollingPacking.data[0].roll[0]	
		},//卷包巡检
		comprehensive:comprehensive.data[0].list.text,//测试台综合数据   
		grade:gradeData,//牌号
	  	model:modelData,//机型
	  	crew:crewData,//机组,
	  	hasHandled:hasHandled,//已处理
	  	unusualManagement:unusualManagement,//异常管理
	}

})