//昆烟移动数据格式      现场管理部分
//编写日期                     2016.9.24
//编写人                        王熙
//联系QQ            1181893478   

//siteManagement  现场管理      说明  进入现场管理界面就把 辅料确认和卷包检测的侧边栏筛选条件数据
//                               卷包检测当前页的筛选卷接和硬包包装条件也一并返回
var siteManagement={"data":[{
	"grade":[{  //牌号
		"name":"牌号",
		"number":"001",
		"type":"",
		"option":[
		   {"name":"云烟(软珍品)","number":"001"},
		   {"name":"云烟(软如意)1","number":"002"},
		   {"name":"云烟(软如意)2","number":"003"},
		   {"name":"云烟(软如意)3","number":"004"},
		   {"name":"云烟(软如意)4","number":"005"},
		]
	}],
	"model":[{  //机型
		"name":"机型",
		"number":"002",
		"type":"",
		"option":[
		   {"name":"GDX1#PROTOS70","number":"001"},
		   {"name":"GDX1#756","number":"002"}
		]
	}],
	"crew":[{  //机组
		"name":"机组",
		"number":"003",
		"type":"",
		"option":[
		   {"name":"50号卷包机组","number":"001"},
		   {"name":"60号卷包机组","number":"002"}
		]
	}],
	"roll":[{  //卷接
		"name":"卷接",
		"number":"001",
		"type":"",
		"option":[
		   {"name":"卷制","number":"001"},
		   {"name":"烟支物理指标","number":"002"}
		]
	}],
	"hard":[{  //硬包包装
		"name":"硬包包装",
		"number":"001",
		"type":"",
		"option":[
		   {"name":"硬包包装筛选条件1","number":"001"},
		   {"name":"硬包包装筛选条件2","number":"002"}
		]
	}],
	"vender":[   //厂家选项信息
 		  {"name":"云南中烟物资(集团)有限公司1","number":"001"},
 		  {"name":"云南九九彩印有限公司2","number":"002"},
 		  {"name":"云南红塔塑料有限公司3","number":"003"},
 		  {"name":"云南咏顺包装有限公司4","number":"004"},
 		  {"name":"云南中烟物资有限公司5","number":"005"},
 		  {"name":"云南九九彩印有限公司6","number":"006"},
 		  {"name":"云南彩印有限公司7","number":"007"},
 		],
}]}


//accessories  辅料检查      
//请求条件           
 var accessories={"data":[{
 	"deta":{
 		"module":[{
 			 "name":{"text":"辅料名称","value":"小盒包装纸","number":"001"},
 			 "manufactor":{"text":"厂家","value":"云南中烟物资(集团)有限公司","number":"001"},
 			 "qualified":{"text":"是否合格","value":false,"number":"001"},
 			 "number":"001",
 			 "type":""
 		},{
 			 "name":{"text":"辅料名称","value":"小盒包装纸","number":"002"},
 			 "manufactor":{"text":"厂家","value":"云南九九彩印有限公司","number":"002"},
 			 "qualified":{"text":"是否合格","value":"true","number":"002"},
 			 "number":"002",
 			 "type":""
 		},{
 			 "name":{"text":"辅料名称","value":"小盒包装纸","number":"003"},
 			 "manufactor":{"text":"厂家","value":"","number":""},
 			 "qualified":{"text":"是否合格","value":"true","number":"003"},
 			 "number":"003",
 			 "type":""
 		}],
 	}
 }]}

//detailed   辅料详细信息
 var detailed={"data":[{
 	"deta":{
 		"explicit":[[
 			 {"text":"辅料名称","value":"小盒包装纸"},
 			 {"text":"厂家","value":"云南中烟物资(集团)有限公司"},
 			 {"text":"是否合格","value":"true"},
 			 {"text":"定量设计指标","value":"32"},
 			 {"text":"全重","value":"69"},
 			 {"text":"宽度","value":"58"},
 			 {"text":"长度","value":"69"},
 			 {"text":"透气度","value":"74"},
 			 {"text":"孔带","value":"1"},
 			 {"text":"厚度","value":"23"},
 		]],
 	}
 }]}
 
 //inspection  卷包巡检
 var inspection={"data":[{
 	"deta":{
 		"title":{
 			"score":{"text":"得分","value":"97.6","number":"003"},
 			"time":{"text":"取样时间","value":"","number":"003"}
 		},
 		"module":[[{
 			 "parameter":{"text":"参数名称","value":"卷制-烟支圆周超标","number":"003"},
 			 "grade":{"text":"等级","value":"B","number":"003"},
 			 "points":{"text":"扣分项","value":"0.2","number":"003"},
 			 "sampling":{"text":"","value":"1","number":"003"},
 			 "number":"003",
 			 "type":""
 		}]],
 	}
 }]}

//comprehensive  综合测试台数据
 var comprehensive={"data":[{
 	"deta":{
 		"module":[[
 			 {"text":"日期","value":"08：20：17"},
 			 {"text":"机台","value":"01"},
 			 {"text":"取样指数","value":"30"},
 			 {"text":"重量缺陷指数","value":"0.231"},
 			 {"text":"牌号","value":"1云烟(紫)"},
 			 {"text":"圆周缺陷数","value":"1云烟(紫)"},
 			 {"text":"班组","value":"1云烟(紫)"},
 			 {"text":"长度缺陷数","value":"1云烟(紫)"},
 		]],
 	}
 }]}