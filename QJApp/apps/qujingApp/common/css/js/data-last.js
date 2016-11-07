//昆烟移动数据格式      现场管理部分
//编写日期                     2016.9.24
//编写人                        王熙
//联系QQ            1181893478   

//siteManagement  现场管理      说明  进入现场管理界面就把 辅料确认和卷包检测的侧边栏筛选条件数据
//                               卷包检测当前页的筛选卷接和硬包包装以及软包包装条件也一并返回
{"data":[{
	"grade":[{  //牌号        牌号类型  soft 软包   hard   硬包    
		"name":"牌号",
		"number":"001",
		"type":"",
		"option":[
		   {"name":"云烟(软珍品)","number":"001","type":"soft"},
		   {"name":"云烟","number":"002","type":"hard"}
		]
	}],
	"model":[{  //机型     
		"name":"机型",
		"number":"001",
		"type":"",
		"option":[
		   {"name":"GDX1#PROTOS70","number":"001","type":""},
		   {"name":"GDX1#756","number":"002","type":""}
		]
	}],
	"crew":[{  //机组
		"name":"机组",
		"number":"001",
		"type":"",
		"option":[
		   {"name":"50号卷包机组","number":"001","type":""},
		   {"name":"60号卷包机组","number":"002","type":""}
		]
	}],
	"roll":[{  //卷接 
		"name":"卷接",
		"number":"001",
		"type":"",
		"option":[
		   {"name":"卷制","number":"001","type":""},
		   {"name":"烟支物理指标","number":"002","type":""}
		]
	}],
	"hard":[{  //硬包包装条件
		"name":"硬包包装",
		"number":"001",
		"type":"",
		"option":[
		   {"name":"硬包包装筛选条件1","number":"001","type":""},
		   {"name":"硬包包装筛选条件2","number":"002","type":""}
		]
	}],
	"soft":[{  //软包包装条件
		"name":"软包包装",
		"number":"001",
		"type":"",
		"option":[
		   {"name":"软包包装筛选条件1","number":"001","type":""},
		   {"name":"软包包装装筛选条件2","number":"002","type":""}
		]
	}] 
}]}

//根据牌号得到机型
// 请求参数   grade=''
//参数说明   grade牌号标识
{"data":[{
	"model":[{  //机型     
		"name":"机型",
		"number":"001",
		"type":"",
		"option":[
		   {"name":"GDX1#PROTOS70","number":"001","type":""},
		   {"name":"GDX1#756","number":"002","type":""}
		]
	}]
}]}

//根据机型得到机组
// 请求参数   model=''
//参数说明   model机型标识
"crew":[{  //机组
		"name":"机组",
		"number":"001",
		"type":"",
		"option":[
		   {"name":"50号卷包机组","number":"001","type":""},
		   {"name":"60号卷包机组","number":"002","type":""}
		]
	}]

//accessories  辅料检查      
//第一次前台不传请求条件，后台返回数据的条件是传入的条件数据的第一个
//其他请求条件          grade=""&model=""&crew="['','']"
//参数说明                 grade牌号   model机型  crew  机组 
 {"data":[{
 	"deta":{
 		"module":[{
 			 "name":{"text":"辅料名称","value":"小盒包装纸","number":"001"},
 			 "manufactor":{"text":"厂家","value":"云南中烟物资(集团)有限公司","number":"002"},
 			 "qualified":{"text":"是否合格","value":"true","number":"003"},
 			 "number":"003",
 			 "type":""
 		}]
 	}
 }]}


//venderOpt  厂家选择信息
//请求条件       accessories=""
//参数说明       accessories  辅料标识码
 {"data":[{
 	"deta":{
 		"module":[[
 			 {"text":"云南中烟物资(集团)有限公司","number":"001"},
 			 {"text":"云南九九彩印有限公司","number":"002"},
 			 {"text":"云南红塔塑料有限公司","number":"003"},
 		]],
 	}
 }]}

//detailed   辅料详细信息
//请求条件       number=""
//条件说明      number是辅料检查模块标识
 {"data":[{
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
//第一次前台不传请求条件，后台返回数据的条件是传入的条件数据的第一个       
//其他请求条件          grade="云烟(软珍品)"&model="GDX1#756"&crew="50号卷包机组"&roll="003"&hard="006"
 //参数说明               grade牌号   model机型  crew  机组  roll  卷接  hard  硬包包装
 {"data":[{
 	"deta":{
 		"title":{
 			"score":{"text":"得分","value":"97.6","number":"003"},
 			"time":{"text":"取样时间","value":"","number":"003"}
 		},
 		"module":[{
 			 "parameter":{"text":"参数名称","value":"卷制-烟支圆周超标","number":"003"},
 			 "grade":{"text":"等级","value":"B","number":"003"},
 			 "points":{"text":"扣分项","value":"0.2","number":"003"},
 			 "sampling":{"text":"","value":"1","number":"003"},
 			 "number":"003",
 			 "type":""
 		}],
 	}
 }]}

//comprehensive  综合测试台数据
//请求条件           
 {"data":[{
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






 // basics_fl.aspx?type="jz"&number={ph:"",jx:"",jz:["","",""]}

// 

  // basics_fl.aspx?type="all"




  
  /*
	新调整的数据结构  2016-10-11
	注意：所有的请求都会默认带用户编号（在用户编号存在的情况下）


  */


 // 现场管理   siteManagement
 // 条件   {}
 {"data":[{
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
{"data":[{
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
{"data":[{
	"deta":[{
		"key":"辅料名称",
		"value":"小盒包装纸"
	},{
		"key":"厂家",
		"value":""
	}]
}]}


/*
	厂家选择【改】   selectionPage
	条件:number=""  ！[是否需要编号]
	{"data":[{}]}
*/
{"data":[{
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
{"data":[{
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
			"number":"",
			"type":"",
			// "size":0,//数量
			"center":[{   // 文本项目
				"key":"辅料名称：",
				"value":"小盒包装纸"
			}]
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


{
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

