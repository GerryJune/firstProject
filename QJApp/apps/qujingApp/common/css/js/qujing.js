

var simulationData = {
	user: // 用户表 -3
		[{
		data: [{
			code: 1
		}]
	}, {
		data: [{
			number: "001",
			name: "zhangsan	",
			pass: "123456",
			userTrack: "1.aspx",
			dep: "001",
			role: "001",
			rpass: false,
			autoLoad: false,
			userImg: "List3.jpg",
			sex: "g",
			phone: "133115225",
			seniority: "2",
			email: "111@qq.com",
		}]
	}, {
		data: [{
			code: 1
		}]
	}],
	workHome: {
		data: [{ //工作 -5
			factorys: [{
				number: "001",
				name: "昆明卷烟厂",
				main_url: "List3.jpg",
				unread: "2"
			}, {
				number: "001",
				name: "红河卷烟厂",
				main_url: "List3.jpg",
				unread: "2"
			}, {
				number: "001",
				name: "曲靖卷烟厂",
				main_url: "List3.jpg",
				unread: "2"
			}, {
				number: "001",
				name: "会泽卷烟厂",
				main_url: "List3.jpg",
				unread: "2"
			}, {
				number: "001",
				name: "乌兰卷烟厂",
				main_url: "List3.jpg",
				unread: "2"
			}, {
				number: "001",
				name: "新疆卷烟厂",
				main_url: "List3.jpg",
				unread: "2"
			}],
			adverts: [{
				main_url: "List3.jpg",
				number: "001"
			}, {
				main_url: "List3.jpg",
				number: "001"
			}],
		}]
	},
	plantManage: {
		data: [{ //工厂管理 -6
			listUpdateType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "消息", //列表主文本
					left_min_text: "张晟敏:工艺质量现场测试任务,请及时处理",
					right_min_text: "",
					time: "06-16上午9:30",
					boult_url: "", //小图标
					main_url: "img/List3.jpg",
					unread: 30, //number
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					file: [{
						file_type_url: "",
						type: "", //类型
						url: "", //地址
						size: "", //大小
						name: "null", //名字
					}],
					side: "r%c%t", //删除、确认、置顶
					number: "001", // 唯一标识符
				}, {
					max_text: "任务跟踪", //列表主文本
					left_min_text: "张晟敏:工艺质量现场测试任务",
					right_min_text: "",
					time: "06-16上午9:30",
					boult_url: "", //小图标
					main_url: "img/List3.jpg",
					unread: 30, //number
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					file: [{
						file_type_url: "",
						type: "", //类型
						url: "", //地址
						size: "", //大小
						name: "null", //名字
					}],
					side: "r%c%t", //删除、确认、置顶
					number: "001", // 唯一标识符
				}, {
					max_text: "现场问题反馈", //列表主文本
					left_min_text: "李维安:工艺质量现场测试问题反馈",
					right_min_text: "",
					time: "06-16上午9:30",
					boult_url: "", //小图标
					main_url: "img/List3.jpg",
					unread: 30, //number
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					file: [{
						file_type_url: "img/List3.jpg",
						type: "", //类型
						url: "", //地址
						size: "", //大小
						name: "null", //名字
					}],
					side: "r%c%t", //删除、确认、置顶
					number: "001", // 唯一标识符
				}]
			},
			adverts: [{
				main_url: "List3.jpg",
				number: "001"
			}, {
				main_url: "List3.jpg",
				number: "001"
			}],
		}]
	},
	message: {
		data: [{ //消息 8
			listUpdataType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "制丝跟批测试", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 3, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "卷包跟批测试", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 3, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "制丝过程消耗", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 0, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "卷包过程消耗", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 10, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "往年问卷核查", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 0, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "在线工艺保障", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}]
			}

		}]
	},

	historyInspect: {
		data: [{ //往年问题核查 -9
			listUpdataType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "提醒：请及时处理任务",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "急",
						number: "1",
						color: "red"
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "提醒：请及时处理任务：",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "急",
						number: "1",
						color: "red"
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "提醒：请及时处理任务：",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "急",
						number: "1",
						color: "red"
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}]
			}

		}]
	},
	taskCheck: {
		data: [{ //任务查看
			listUpdataType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "提醒：请及时处理任务",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "急",
						number: "1",
						color: "red"
					}
				}]
			},
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main_url: "img/testBrand.png",
					content: "测试牌号",
					title: "云烟",
					number: "001"
				}, {
					main_url: "img/testObj.png",
					content: "测试对象",
					title: "制丝车间",
					number: "001"
				}, {
					main_url: "img/untilTime.png",
					content: "任务截止日期",
					title: "2016-7-15",
					number: "001"
				}, {
					main_url: "img/testLine.png",
					content: "测试线",
					title: "A线",
					number: "001"
				}, {
					main_url: "img/testLine.png",
					content: "测试工段",
					title: "真空回潮",
					number: "001"
				}, {
					main_url: "img/testProcess.png",
					content: "测试工序",
					title: "松散回潮",
					number: "001"
				}, {
					main_url: "img/testProcess.png",
					content: "参数点",
					title: "工艺流量",
					number: "001"
				}, {
					main_url: "img/testDes.png",
					content: "任务描述",
					title: "围绕现场工艺质量测试问题核查,现场核查人员可利用移动端的方式对现场问题进行拍摄,文字录入并将核查结果上报",
					number: "001"
				}]
			}

		}]
	},
	//taskTrace 任务跟踪 -30
	taskTrace: {
		data: [{
			listUpdataType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "张晟敏：工艺质量现场测试任务111", //列表主文本
					left_min_text: "3个组员正在处理,2人未处理,1人已处理",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "张晟敏：工艺质量现场测试任务222", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "img/icon.png",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "伍晟敏：工艺质量现场测试任务333", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "img/test.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "王晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "img/test.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "汤晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "李晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "林晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}]
			},
		}]
	},
	trackingDetails: { //任务跟踪详情  -31 32
		data: [{

			listUpdateType: "",
			listUser: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "3个组员正在处理,2人未处理,1人已处理",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}]
			},
			list: {
				title: {
					text: "共6位组员" //大标题
				},
				text: [{
					max_text: "陈毅", //列表主文本
					left_min_text: "",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					taskList: [{
						taskState: {
							text: "未处理",
							number: "1",// 1 提醒背景红色 2 已提醒背景灰色
							color: "red"
						},
						state: {
							text: "紧急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "red"
						},
						state: {
							text: "一般",
							number: "2",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "red"
						},
						state: {
							text: "一般",
							number: "2",
							color: "red"
						}, //一般、紧急taskTrace
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "一般",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}]
				}, {
					max_text: "陈毅", //列表主文本
					left_min_text: "",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					taskList: [{
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, ]
				}, {
					max_text: "陈毅", //列表主文本
					left_min_text: "",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					taskList: [{
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "red"
						},
						state: {
							text: "",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}]
				}, {
					max_text: "陈毅", //列表主文本
					left_min_text: "",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					taskList: [{
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "紧急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "一般",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "一般",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}]
				}],
				task: {
					total: "6",
					not: "1",
					hand: "3",
					stocks: "2"
				}
			},
		}]
	},
	crewTrackingDetails: {
		data: [{ //组员任务跟踪详情 -33
			listUpdataType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "陈毅", //列表主文本
					left_min_text: "昆烟测试组",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "处理中",
						number: "1",
						color: "red"
					}
				}]
			},
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main_url: "img/2.png",
					content: "测试牌号",
					title: "云烟",
					number: "001"
				}, {
					main_url: "",
					content: "测试对象",
					title: "制丝车间",
					number: "001"
				}, {
					main_url: "img/not.png",
					content: "任务截止日期",
					title: "2016-7-15",
					number: "001"
				}, {
					main_url: "img/test.png",
					content: "测试线",
					title: "A线",
					number: "001"
				}, {
					main_url: "img/yes.png",
					content: "测试工段",
					title: "真空回潮",
					number: "001"
				}, {
					main_url: "List3.jpg",
					content: "测试工序",
					title: "松散回潮",
					number: "001"
				}, {
					main_url: "List3.jpg",
					content: "参数点",
					title: "工艺流量",
					number: "001"
				}, {
					main_url: "List3.jpg",
					content: "任务描述",
					title: "围绕现场工艺质量测试问题核查,现场核查人员可利用移动端的方式对现场问题进行拍摄,文字录入并将核查结果上报",
					number: "001"
				}]
			}

		}]
	},
	reminderOptions: {
		data: [{ //提醒选项 -34
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "请尽快完成下发任务",
					number: "001"
				}, {
					main: "请尽快完成下发任务",
					number: "002"
				}, {
					main: "请尽快完成下发任务",
					number: "003"
				}, {
					main: "请尽快完成下发任务",
					number: "004"
				}]
			}
		}]
	},
	leadSeeTracking: {
		data: [{ //领导视角任务跟踪详情 -44
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "处理中",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					state: {
						text: "紧急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}]
			},
			userList: {
				title: {
					text: "共6个确认" //大标题
				},
				text: [{
					max_text: "陈毅", //列表主文本
					main_url: "img/List3.jpg",
					number: "001", // 唯一标识符
				}, {
					max_text: "方元先", //列表主文本
					main_url: "img/List3.jpg",
					number: "001", // 唯一标识符
				}, {
					max_text: "李晓杰", //列表主文本
					main_url: "img/List3.jpg",
					number: "001", // 唯一标识符
				}, {
					max_text: "张大栾", //列表主文本
					main_url: "img/List3.jpg",
					number: "001", // 唯一标识符
				}]
			},
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main_url: "List3.jpg",
					content: "昆明卷烟厂",
					main: "烟厂名称",
					number: "001"
				}, {
					main_url: "List3.jpg",
					content: "2016-7-15",
					main: "任务截止日期",
					number: "001"
				}, {
					main_url: "List3.jpg",
					content: "围绕现场工艺质量测试问题核查,现场核查人员可利用移动端的方式对现场问题进行拍摄,文字录入并将核查结果上报",
					main: "任务描述",
					number: "001"
				}]
			}
		}]
	},

	feedback: {
		data: [{ //feedback-13
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午10:30",
					main_url: "img/List3.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午10:30",
					main_url: "img/List3.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午10:30",
					main_url: "img/List3.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午10:30",
					main_url: "img/List3.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午9:30",
					main_url: "img/List3.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}]
			}
		}]
	},
	minuteTickling: {
		data: [{ //现场问题反馈 -14
			data: {
				title: {
					text: "",
				},
				text: [{
					main: "标题",
					content: "工艺质量现场测试问题反馈",
					number: "001"
				}, {
					main: "反馈人",
					content: "李维安",
					number: "001"
				}, {
					main: "测试牌号",
					content: "云烟",
					number: "001"
				}, {
					main: "测试车间",
					content: "制丝车间",
					number: "001"
				}, {
					main: "生产线",
					content: "A线",
					number: "001"
				}, {
					main: "测试工段",
					content: "真空回潮",
					number: "001"
				}, {
					main: "测试工序",
					content: "松散回潮",
					number: "001"
				}, {
					main: "参数点",
					content: "工艺流量",
					number: "001"
				}, {
					main: "图片",
					content: "",
					number: "001"
				}, {
					main: "结果描述",
					content: "",
					number: "001"
				}]
			}
		}]
	},
	brandChoice: [{
		data: [{ //标题
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "标题1",
					number: "001"
				}, {
					main: "标题2",
					number: "001"
				}, {
					main: "标题3",
					number: "001"
				}]
			}
		}]
	},{
		data: [{ //牌号选择 -15
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "云烟",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟软珍",
					number: "001"
				}, {
					main: "云烟",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟软珍",
					number: "001"
				}, {
					main: "云烟",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟软珍",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟软珍",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟软珍",
					number: "001"
				}]
			}
		}]
	},
	{
		data: [{ //测试车间
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "车间1",
					number: "001"
				}, {
					main: "车间2",
					number: "001"
				}, {
					main: "车间3",
					number: "001"
				}]
			}
		}]
	},
	{
		data: [{ //生产线
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "生产线1",
					number: "001"
				}, {
					main: "生产线2",
					number: "001"
				}, {
					main: "生产线3",
					number: "001"
				}]
			}
		}]
	},
	{
		data: [{ //测试工段
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "测试工段1",
					number: "001"
				}, {
					main: "测试工段2",
					number: "001"
				}]
			}
		}]
	},
	{
		data: [{ //测试工序 -
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "测试工序1",
					number: "001"
				}, {
					main: "测试工序2",
					number: "001"
				}, {
					main: "测试工序3",
					number: "001"
				}, {
					main: "测试工序4",
					number: "001"
				}, {
					main: "测试工序5",
					number: "001"
				}]
			}
		}]
	}],
	parameterChoice: //参数点选择 -16
	{
		data: [{
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "参数1",
					number: "001"
				}, {
					main: "参数2",
					number: "001"
				}, {
					main: "参数3",
					number: "001"
				}, {
					main: "参数444444",
					number: "001"
				}, {
					main: "参数5",
					number: "001"
				}, {
					main: "参数6",
					number: "001"
				}, {
					main: "参数7",
					number: "001"
				}, {
					main: "参数8",
					number: "001"
				}, {
					main: "参数9",
					number: "001"
				}, {
					main: "参数6",
					number: "001"
				}, {
					main: "参数7",
					number: "001"
				}, {
					main: "参数8",
					number: "001"
				}, {
					main: "参数9",
					number: "001"
				}, {
					main: "参数10",
					number: "001"
				}, {
					main: "参数11",
					number: "001"
				}]
			}
		}]
	},
	leadSeeTickling: { // 领导视角现场问题反馈详情 48
		data: [{
			listUpdateType: "", // top bottom new
			form: {
				title: "工艺质量现场测试问题反馈", //标题
				user: {
					name: "李维安",
					url: "",
					number: ""
				}, //反馈用户
				testmark: "云烟", //测试牌号
				testObj: "制丝车间", //测试车间
				deadline: "2016 - 7 - 15",
				holdingwire: "A线", //生产线
				section: "真空回潮", //测试工段
				teststep: "散松回潮", //测试工序
			},
			parameterset: [{
				parameter: "工艺流量",
				description: "当班设备3# 5# 卷烟机工艺质量测试问题核查完成",
				url: [""],
			}],
			parameterset: [{
				parameter: "参数点1",
				description: "当班设备3# 5# 卷烟机工艺质量测试问题核查完成",
				url: [""],
			}]
		}]
	},
	myInfo: //个人信息 -45
	{
		data: [{
			number: "001",
			name: "张晟敏	",
			pass: "123456",
			userTrack: "1.aspx",
			dep: "001",
			role: "001",
			rpass: false,
			autoLoad: false,
			userImg: "List3.jpg",
			sex: "男",
			phone: "133115225",
			seniority: "2",
			email: "liwl@qujing.com",
		}]
	},

}