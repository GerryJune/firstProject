var MaskData={
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
	"model":[{  //机型
		"name":"",
		"number":"002",
		"type":'',
		"option":[
			{"name":"GDX1#PROTOS70(1)","number":"001",isA:false},
		   {"name":"GDX1#PROTOS70(1)","number":"002",isA:false},
		   {"name":"GDX1#756(1)","number":"003",isA:false}],
	}],
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
// MaskData.data[0].model[0].name='机型'
// MaskData.data[0].model[0].option= [{"name":"GDX1#PROTOS70(1)","number":"001",isA:false},
// 		   {"name":"GDX1#PROTOS70(1)","number":"002",isA:false},
// 		   {"name":"GDX1#756(1)","number":"003",isA:false}]
Vue.config.debug=true

Vue.component('vue-choose',{
	template:'#con-template',
	data () {
	  return {
	    showNext:false
	  };
	},
	props: {
	  grade :Array,
	  header:String,
	  type:Boolean,
	},
	methods: {
	  showMethod (grade,item,type) {

	    if (type) {
	    	for (var i = 0; i < grade.length; i++) {
	    		grade[i].isA=false;
	    	}
	    }
	    item.isA=!item.isA;
	    this.showNext=true;
	  },
	}
})
var vm = new Vue({

	el: "#app",
	data:{
	    gradeData:MaskData.data[0].grade[0].option,
	    modelData:MaskData.data[0].model[0].option,
	    crewData:MaskData.data[0].crew[0].option,
	    gradeHeader:MaskData.data[0].grade[0].name,
	    modelHeader:MaskData.data[0].model[0].name,
	    crewHeader:MaskData.data[0].crew[0].name,
	    next:false,
	    gradeType:MaskData.data[0].grade[0].type,
	    modelType:MaskData.data[0].model[0].type,
	    crewType:MaskData.data[0].crew[0].type,
	},
	methods: {
	  showMethod (item) {
	    item.isA=!item.isA;
	  }
	}

})
var vm = new Vue({

	el: "#demo",
	data () {
	  return inspection;
	}

})