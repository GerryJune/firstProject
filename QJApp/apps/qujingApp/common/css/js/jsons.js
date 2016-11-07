//kanbanHome    看板首页

//{"data":[{
//	"advert":[{
//		"name":"",
//		"url":"",
//		"number":"",
//		"type":""
//	},{
//		"name":"",
//		"url":"",
//		"number":"",
//		"type":""
//	}]
//}]}

//formingHome   看板成型首页
var formingHome = {
	"data": [{
		"machine": [{
			"name": "发射机",
			"number": "001",
			"type": ""
		}, {
			"name": "成型机",
			"number": "002",
			"type": "" //预留字节
		}],
		"area": [{
			"name": "软包片区",
			"number": "001",
			"type": ""
		}, {
			"name": "硬包片区",
			"number": "002",
			"type": "" //预留字节
		}]
	}]
}

//silkHome      制丝页面首页

var silkHome = {
	"data": [{
		"line": [{
			"name": "叶片线1",
			"number": "001",
			"type": ""
		}, {
			"name": "配叶柜线",
			"number": "002",
			"type": "" //预留字节
		}],
		"tbType": [{
			"name": "TB11",
			"number": "001",
			"type": ""
		}, {
			"name": "TB12",
			"number": "002",
			"type": "" //预留字节
		}],
		"stType": [{
			"name": "ST11",
			"number": "001",
			"type": ""
		}, {
			"name": "ST12",
			"number": "002",
			"type": "" //预留字节
		}],
		"sdType": [{
			"name": "SD411",
			"number": "001",
			"type": ""
		}, {
			"name": "SD412",
			"number": "002",
			"type": "" //预留字节
		}],
		"ttType": [{
			"name": "TT41",
			"number": "001",
			"type": ""
		}, {
			"name": "TT42",
			"number": "002",
			"type": "" //预留字节
		}],
		"ftType": [{
			"name": "FT611",
			"number": "001",
			"type": ""
		}, {
			"name": "FT612",
			"number": "002",
			"type": "" //预留字节
		}]
	}]
}

//productionScheduling   生产调度令  {"data":[{}]}
var productionScheduling = {
	"data": [{
		"table": {
			"head": {
				"text": [{
					'value': '批次号',
					'color': ''
				}, {
					'value': '任务简述',
					'color': ''
				}, {
					'value': '日期',
					'color': ''
				}, {
					'value': '状态',
					'color': ''
				}, {
					'value': '0',
					'color': ''
				}]
			},
			"text": [{
				"text": [{
					"value": "1",
					"color": ""
				}, {
					"value": "任务1",
					"color": ""
				}, {
					"value": "08-29",
					"color": ""
				}],
				"number": "0"
			}, {
				"text": [{
					"value": "2",
					"color": ""
				}, {
					"value": "任务2",
					"color": ""
				}, {
					"value": "08-29",
					"color": ""
				}],
				"number": "1"
			}, {
				"text": [{
					"value": "3",
					"color": ""
				}, {
					"value": "任务3",
					"color": ""
				}, {
					"value": "08-29",
					"color": ""
				}],
				"number": "0"
			}, {
				"text": [{
					"value": "5",
					"color": ""
				}, {
					"value": "任务4",
					"color": ""
				}, {
					"value": "08-29",
					"color": ""
				}],
				"number": "1"
			}, {
				"text": [{
					"value": "6",
					"color": ""
				}, {
					"value": "任务5",
					"color": ""
				}, {
					"value": "08-29",
					"color": ""
				}],
				"number": "0"
			}, ]
		}
	}]
}

//feedingMachine   加料机

var feedingMachine = {
	"data": [{
		"deta": {
			"title": [{
				"name": "叶片预先处理",
				"color": "#fff"
			}],
			"item": [{
				"name": "牌号:",
				"content": "云烟"
			}],
			"module": [{
				"head": {
					"name": "设置流量",
					"color": ""
				},
				"center": [{ //修改   ——- 
					"name": "5800",
					"color": ""
				}]
			}]
		}
	}]
}

//shreddingMachine  切丝机
var shreddingMachine = {
	"data": [{
		"deta": {
			"title": [{
				"name": "切烘A线",
				"color": "#fff"
			}],
			"item": [{
				"name": "牌号:",
				"content": "云烟"
			}],
			"module": [{
				"head": {
					"name": "",
					"color": ""
				},
				"center": [{ //修改   ——- 
					"name": "5800",
					"color": ""
				}]
			}]
		}
	}]
}

//altah      环境局部区域温湿度
var altah = {
	"data": [{
		"deta": {
			"title": [{
				"name": "环境温度",
				"color": "#fff",
			}, {
				"name": "环境湿度",
				"color": "green",
			}],
			"item": [{
				"name": "",
				"content": ""
			}],
			"module": [{
				"head": {
					"name": "片烟",
					"color": ""
				},
				"center": [{ //修改   ——- 
					"name": "5800",
					"color": ""
				}]
			}]
		}
	}]
}

//dryingMachine  烘丝机
var dryingMachine = {
	"data": [{
		"deta": {
			"title": [{
				"name": "切丝A",
				"color": "#fff",
			}],
			"item": [{
				"name": "牌号:",
				"content": "云烟"
			}],
			"module": [{
				"head": {
					"name": "设定流量",
					"color": ""
				},
				"center": [{ //修改   ——- 
					"name": "5800",
					"color": ""
				}]
			}]
		}
	}]
}

//perfumingMachine   加香机
var perfumingMachine = {
	"data": [{
		"deta": {
			"title": [{
				"name": "配加香A",
				"color": "#fff",
			}],
			"item": [{
				"name": "牌号:",
				"content": "云烟"
			}],
			"module": [{
				"head": {
					"name": "实际流量",
					"color": ""
				},
				"center": [{ //修改   ——- 
					"name": "5800",
					"color": ""
				}]
			}]
		}
	}]
}

//成型  模块  satrt

//formingKanban   成型  -  生产看板
var formingKanban = {
	"data": [{
		"magnetism": [{
			"title": "",
			"center": {
				"name": "", //内容
				"color": "", //字体颜色
				"type": "1" //三角形方向        去除  三角形
			}
		}],
		"map": [{
			"title": "",
			"center": [{
				"key": "一班",
				"value": "7277.75"
			}, {
				"key": "一班",
				"value": "7277.75"
			}]
		}]
	}]
}

//removeDust  除尘
var removeDust = {
	"data": [{
		"detaList": [{
			"deta": {
				"title": [{
					"name": "软包除尘",
					"color": "#fff",
				}],
				"item": [{
					"name": null,
					"content": null
				}],
				"module": [{
					"head": {
						"name": "1#",
						"color": ""
					},
					"center": [{ //修改   ——- 
						"name": "5800",
						"color": ""
					}]
				}]
			}
		}, {
			"deta": {
				"title": [{
					"name": "硬包除尘",
					"color": "#fff",
				}],
				"item": [{
					"name": null,
					"content": null
				}],
				"module": [{
					"head": {
						"name": "1#",
						"color": ""
					},
					"center": [{ //修改   ——- 
						"name": "5800",
						"color": ""
					}]
				}]
			}
		}, ]
	}]
}

//refrigeration 制冷
var refrigeration = {
	"data": [{
		"detaList": [{
			"deta": {
				"title": [{
					"name": "软包制冷",
					"color": "#fff",
				}],
				"item": [{
					"name": null,
					"content": null
				}],
				"module": [{
					"head": {
						"name": "1#",
						"color": ""
					},
					"center": [{ //修改   ——- 
						"name": "5800",
						"color": ""
					}]
				}]
			}
		}, {
			"deta": {
				"title": [{
					"name": "硬包制冷",
					"color": "#fff",
				}],
				"item": [{
					"name": null,
					"content": null
				}],
				"module": [{
					"head": {
						"name": "1#",
						"color": ""
					},
					"center": [{ //修改   ——- 
						"name": "5800",
						"color": ""
					}]
				}]
			}
		}, ]
	}]
}

//formingInfo    成型  -- 基础信息
var formingInfo = {
	"data": [{
			"magnetism": [{
				"title": "",
				"center": {
					"name": "", //内容
					"color": "", //字体颜色
					"type": ""
				}
			}],
			"deta": {
				"title": [{
					"name": "当班实时产量",
					"color": "#fff",
				}],
				"item": [{
					"name": null,
					"content": null
				}],
				"module": [{
					"head": {
						"name": "1_1#",
						"color": ""
					},
					"center": [{ //修改   ——- 
						"name": "5800",
						"color": ""
					}]
				}]
			}
		}
	}]
}

//glycerol   甘油

var glycerol = {
	"data": [{
		"detaList": [{
			"deta": {
				"title": [{
					"name": "软包甘油",
					"color": "#fff",
				}],
				"item": [{
					"name": null,
					"content": null
				}],
				"module": [{
					"head": {
						"name": "1#",
						"color": ""
					},
					"center": [{ //修改   ——- 
						"name": "",
						"color": ""
					}]
				}]
			}
		}, {
			"deta": {
				"title": [{
					"name": "硬包甘油",
					"color": "#fff",
				}],
				"item": [{
					"name": null,
					"content": null
				}],
				"module": [{
					"head": {
						"name": "1#",
						"color": ""
					},
					"center": [{ //修改   ——- 
						"name": "5800",
						"color": ""
					}]
				}]
			}
		}]
	}]
}

//exchangeCenter    交换中心
var exchangeCenter = {
	"data": [{
		"table": {
			"head": {
				"text": [{
					'value': '发送机号',
					'color': ''
				}, {
					'value': '发送管号',
					'color': ''
				}, {
					'value': '品牌',
					'color': ''
				}, {
					'value': '对接机台',
					'color': ''
				}, {
					'value': '要料状态',
					'color': ''
				}]
			},
			"text": [{
				"text": [{
					"value": "发送机号1",
					"color": ""
				}, {
					"value": "发送管号1",
					"color": ""
				}, {
					"value": "品牌",
					"color": ""
				}, {
					"value": "对接机台1",
					"color": ""
				}, {
					"value": "要料状态1",
					"color": ""
				}],
				"number": "0"
			}, {
				"text": [{
					"value": "发送机号2",
					"color": ""
				}, {
					"value": "发送管号2",
					"color": ""
				}, {
					"value": "品牌",
					"color": ""
				}, {
					"value": "对接机台2",
					"color": ""
				}, {
					"value": "要料状态2",
					"color": ""
				}],
				"number": "1"
			}, ]
		}
	}]
}