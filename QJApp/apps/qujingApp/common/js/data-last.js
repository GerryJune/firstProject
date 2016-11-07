//昆烟移动数据格式      现场管理部分
//编写日期                     2016.9.24
//编写人                        王熙
//联系QQ            1181893478   

//siteManagement  现场管理      说明  进入现场管理界面就把 辅料确认和卷包检测的侧边栏筛选条件数据
//                               卷包检测当前页的筛选卷接和硬包包装以及软包包装条件也一并返回







 // basics_fl.aspx?type="jz"&number={ph:"",jx:"",jz:["","",""]}

// 

  // basics_fl.aspx?type="all"




  
  /*
	新调整的数据结构  2016-10-11
	注意：所有的请求都会默认带用户编号（在用户编号存在的情况下）


  */


 // 现场管理   siteManagement
 // 条件   {}
 var siteManagement={"data":[{
	 "menu":[{  //菜单  支持多个
		"number":"001",
		"type":"fl",
		"name":"辅料确认",
		"main_url":"img/24.png"
	},{
		"number":"001",
		"type":"jb",
		"name":"卷包检验",
		"main_url":"img/24.png"
	},{
		"number":"001",
		"type":"fx",
		"name":"封箱检验",
		"main_url":"img/24.png"
	}],
	"ad":[{  //广告图  支持多图
		"url":"img/24.png",
		"number":"001",
		"type":""
	}]
}]}



/*
	辅料检查【改】   auxiliaryExamination
	条件：type="0"&grade=""&model=""&crew=""         【type: 0-请求数据  1-保存数据】
	{"data":[{}]}
*/
var auxiliaryExamination={"data":[{
	"list":{  //列表
		"title":[{"name":"","type":"","number":""}],
		"text":[{  //行数组
			"number":"",  //编码
			"type":"",
			"qualified":false,  //是否合格
			"center":[{   // 文本项目
				"key":"辅料名称：",
				"value":"小盒包装纸",
				"number":""
			}]
		}]
	}
}]}

/*
	辅料检查详情【改】   auxiliaryExaminationDetails
	条件:number=""
	{"data":[{}]}
*/
var auxiliaryExaminationDetails={"data":[{
	"deta":[{
		"key":"辅料名称",
		"value":"小盒包装纸"
	},{
		"key":"厂家",
		"value":"云南九九彩印有限公司"
	},{
		"key":"是否合格",
		"value":"是"
	},{
		"key":"定量设计指标",
		"value":"32"
	},{
		"key":"全重",
		"value":"32"
	},{
		"key":"宽度",
		"value":"32"
	},{
		"key":"长度",
		"value":"32"
	},{
		"key":"透气度",
		"value":"32"
	}]
}]}


/*
	厂家选择【改】   selectionPage
	条件:number=""  ！[是否需要编号]
	{"data":[{}]}
*/
var selectionPage={"data":[{
	"check":[{
		"name":"云南某某厂",
		"number":"001",
		"type":false, //勾选状态
	}]
}]}



/*
	卷包巡检   inspection
	条件:type="0"&grade=""&crew=""&packing=""&data={}    【type: 0-请求数据  1-保存数据】
	{"data":[{}]}
*/
var inspection ={"data":[{
	"list":{  //列表
		"title":[{"name":"","type":"","number":""}],
		"text":[{  //行数组
			"number":"",
			"type":"",
			"size":0,//数量
			"center":[{   // 文本项目
				"key":"辅料名称：",
				"value":"小盒包装纸"
			}]
		}]
	},
	"top":{  //头部信息展示对象
		"crew":"",//机组
		"mark":80,//分数
		"time":"15:00",//时间
		"number":"",
		'selected':"第一次检验"
		// "more":"001",  //次数  传编号
	},
	"more":[{
		"name":"第一次检验",
		"number":"001"
	},{
		"name":"第二次检验",
		"number":"002"
	}]
}]}



/*
	测试台综合数据   comprehensive
	条件:type="0"&number=""    【type: 0-请求数据  1-保存数据】
	{"data":[{}]}
*/
{"data":[{
	"list":{  //列表
		"title":[{"name":"","type":"","number":""}],
		"text":[{  //行数组
			"number":"001",
			"type":"",
			// "size":0,//数量
			"center":[{   // 文本项目
				"key":"日期：",
				"value":"08:20:17"
			},{   // 文本项目
				"key":"取样指数",
				"value":"30"
			},{   // 文本项目
				"key":"牌号",
				"value":"云烟(紫)"
			},{   // 文本项目
				"key":"班组",
				"value":"1班"
			},]
		}]
	}
}]}




/*
	选择项目统一结构    方法名可以自定义
	条件:  type="jb"&grade=""&model=""&crew=[""]
*/
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
}

{
	"data":[{
		
		"model":[{  //机型
			"name":"",
			"number":"002",
			"type":'',
			"option":[
				{"name":"GDX1#PROTOS70(1)","number":"001",isA:false},
			   {"name":"GDX1#PROTOS70(1)","number":"002",isA:false},
			   {"name":"GDX1#756(1)","number":"003",isA:false}],
		}],
		
	}],
}


{
	"data":[{
		"crew":[{  //机组
			"name":"机组",
			"number":"003",
			"type":false,
			"option":[
					   {"name":"50号卷包机组","number":"001",isA:false},
					   {"name":"60号卷包机组","number":"002",isA:false}
					]
		}],
	}],
}


var rolling_packing={
	"data":[{
		"packing":[{  //硬包包装
			"name":"机组",
			"number":"003",
			"type":false,
			"option":[
					   {"name":"50号卷包机组","number":"001",isA:false},
					   {"name":"60号卷包机组","number":"002",isA:false}
					]
		}],
		"roll":[{  //卷接
			"name":"机组",
			"number":"003",
			"type":false,
			"option":[
					   {"name":"50号卷包机组","number":"001",isA:false},
					   {"name":"60号卷包机组","number":"002",isA:false}
					]
		}],
	}],
}

