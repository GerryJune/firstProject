var headPageData = {
  ProductionKanban:['ProductionKanban','首页','生产看板'],
  RollPackingWorkshop:['ProductionKanban','生产看板','制丝车间'],
  Production_order:['RollPackingWorkshop','制丝车间','生产调度令'],
  dampingMachine:['RollPackingWorkshop','制丝车间','回潮机'],
  feedingMachine:['RollPackingWorkshop','制丝车间','加料机'],
  shreddingMachine:['RollPackingWorkshop','制丝车间','切丝机'],
  altah:['RollPackingWorkshop','制丝车间','环境温湿度'],
  dryingMachine:['RollPackingWorkshop','制丝车间','烘丝机'],
  perfumingMachine:['RollPackingWorkshop','制丝车间','加香机'],
  formingHome:['ProductionKanban','生产看板','成型车间'],
  formingKanban:['formingHome','成型车间','生产看板'],
  removeDust:['formingHome','成型车间','除尘车间'],
  refrigeration:['formingHome','成型车间','制冷'],
  wasteTobacco:['formingHome','成型车间','废烟丝'],
  formingInfo:['formingHome','成型车间','基础信息'],
  glycerol:['formingHome','成型车间','甘油'],
  exchangeCenter:['formingHome','成型车间','交换中心'],
}
var simulationData = {
    //kanbanHome    看板首页

    //{"data":[{
    //  "advert":[{
    //      "name":"",
    //      "url":"",
    //      "number":"",
    //      "type":""
    //  },{
    //      "name":"",
    //      "url":"",
    //      "number":"",
    //      "type":""
    //  }]
    //}]}
    //formingHome   看板成型首页
    formingHome:{
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
    },

    //silkHome      制丝页面首页

    silkHome:{
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
    },


    //productionScheduling   生产调度令  {"data":[{}]}
    productionScheduling:{
        "data": [{
            "table": {
                "head": { "text": [{ 'value': '批次号', 'color': '' }, { 'value': '任务简述', 'color': '' }, { 'value': '日期', 'color': '' }, { 'value': '状态', 'color': '' }, { 'value': '0', 'color': '' }] },
                "text": [
                    { "text": [{ "value": "1", "color": "" }, { "value": "任务1", "color": "" }, { "value": "08-29", "color": "" }], "number": "0" },
                    { "text": [{ "value": "2", "color": "" }, { "value": "任务2", "color": "" }, { "value": "08-29", "color": "" }], "number": "1" },
                    { "text": [{ "value": "3", "color": "" }, { "value": "任务3", "color": "" }, { "value": "08-29", "color": "" }], "number": "0" },
                    { "text": [{ "value": "5", "color": "" }, { "value": "任务4", "color": "" }, { "value": "08-29", "color": "" }], "number": "1" },
                    { "text": [{ "value": "6", "color": "" }, { "value": "任务5", "color": "" }, { "value": "08-29", "color": "" }], "number": "0" },
                ]
            }
        }]
    },
    //dampingMachine  回潮机
    dampingMachine:{
  "data": [
    {
      "deta": {
        "title": [
          {
            "name": "软包除尘设备",
            "color": "blue"
          },
          {
            "name": "硬包除尘设备",
            "color": "brown"
          }
        ],
        "item": [
          {
            "name": "牌号:",
            "content": "红河"
          },
          {
            "name": "红河",
            "content": "软珍"
          },
          {
            "name": "制丝",
            "content": "红河"
          }
        ],
        "module": [
          {
            "head": {
              "name": "11",
              "color": "red"
            },
            "center": [
              {
                "name": 5800,
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "22",
              "color": "green"
            },
            "center": [
              {
                "name": 580,
                "color": "green"
              }
            ]
          },
          {
            "head": {
              "name": "2#",
              "color": ""
            },
            "center": [
              {
                "name": '温湿度',
                "color": "orange"
              }
            ]
          },
          {
            "head": {
              "name": "3#",
              "color": "blue"
            },
            "center": [
              {
                "name": 5800,
                "color": ""
              }
            ]
          },
          {
            "head": {
              "name": "eee",
              "color": ""
            },
            "center": [
              {
                "name": 423,
                "color": ""
              }
            ]
          },
          {
            "head": {
              "name": "eee",
              "color": ""
            },
            "center": [
              {
                "name": 7852,
                "color": ""
              }
            ]
          },
          {
            "head": {
              "name": "fdg",
              "color": ""
            },
            "center": [
              {
                "name": 5800,
                "color": ""
              }
            ]
          },
          {
            "head": {
              "name": "fgr",
              "color": ""
            },
            "center": [
              {
                "name": 120,
                "color": ""
              }
            ]
          },
          {
            "head": {
              "name": "efr",
              "color": ""
            },
            "center": [
              {
                "name": 5800,
                "color": ""
              }
            ]
          },
          {
            "head": {
              "name": "er",
              "color": ""
            },
            "center": [
              {
                "name": 323,
                "color": ""
              }
            ]
          },
          {
            "head": {
              "name": "rg",
              "color": ""
            },
            "center": [
              {
                "name": 5800,
                "color": ""
              }
            ]
          },
          {
            "head": {
              "name": "easfee",
              "color": ""
            },
            "center": [
              {
                "name": 800,
                "color": ""
              }
            ]
          },
          {
            "head": {
              "name": "eee",
              "color": ""
            },
            "center": [
              {
                "name": 500,
                "color": ""
              }
            ]
          },
          {
            "head": {
              "name": "eee",
              "color": ""
            },
            "center": [
              {
                "name": 580,
                "color": ""
              }
            ]
          }
        ]
      }
    }
  ]
},
    //feedingMachine   加料机
    feedingMachine:{
  "data": [
    {
      "deta": {
        "title": [
          {
            "name": "内容",
            "color": "brown"
          },
          {
            "name": "牌号",
            "color": "blue"
          }
        ],
        "item": [
          {
            "name": "制丝",
            "content": "一班"
          },
          {
            "name": "制丝",
            "content": 2345
          },
          {
            "name": "牌号:",
            "content": "红河"
          }
        ],
        "module": [
          {
            "head": {
              "name": "加料含水量",
              "color": ""
            },
            "center": [
              {
                "name": "38.1893",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "23.6477",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "33.9545",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "38.1295",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "35.5496",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": ""
            },
            "center": [
              {
                "name": "29.9211",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "36.4709",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "20.6009",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": ""
            },
            "center": [
              {
                "name": "28.7834",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "37.3933",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "加料含水量",
              "color": ""
            },
            "center": [
              {
                "name": "36.7705",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": ""
            },
            "center": [
              {
                "name": "38.1055",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": ""
            },
            "center": [
              {
                "name": "36.9077",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "33.1433",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "22.9377",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "加料含水量",
              "color": ""
            },
            "center": [
              {
                "name": "21.8602",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "32.561",
                "color": "brown"
              }
            ]
          }
        ]
      }
    }
  ]
},
    //shreddingMachine  切丝机
    shreddingMachine:{
  "data": [
    {
      "deta": {
        "title": [
          {
            "name": "加料",
            "color": "blue"
          },
          {
            "name": "叶片预处理",
            "color": "brown"
          }
        ],
        "item": [
          {
            "name": "制丝",
            "content": "红河"
          },
          {
            "name": "批次",
            "content": "红河"
          },
          {
            "name": "批次",
            "content": 2345
          }
        ],
        "module": [
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "33.2011",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "28.5157",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "38.6996",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "28.7837",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": ""
            },
            "center": [
              {
                "name": "39.9163",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": ""
            },
            "center": [
              {
                "name": "35.2857",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "加料含水量",
              "color": ""
            },
            "center": [
              {
                "name": "20.9256",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "33.9446",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": ""
            },
            "center": [
              {
                "name": "33.4981",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "22.7298",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": ""
            },
            "center": [
              {
                "name": "22.4442",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "33.0722",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": ""
            },
            "center": [
              {
                "name": "26.7521",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "34.6346",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "38.5525",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "加料含水量",
              "color": ""
            },
            "center": [
              {
                "name": "26.3002",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "29.7485",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "24.7871",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": ""
            },
            "center": [
              {
                "name": "31.6753",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "26.695",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": ""
            },
            "center": [
              {
                "name": "26.35",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "34.9783",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": ""
            },
            "center": [
              {
                "name": "38.5891",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "加料含水量",
              "color": ""
            },
            "center": [
              {
                "name": "27.64",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "加料含水量",
              "color": ""
            },
            "center": [
              {
                "name": "38.2909",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "加料含水量",
              "color": ""
            },
            "center": [
              {
                "name": "39.7201",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": ""
            },
            "center": [
              {
                "name": "37.1738",
                "color": "blue"
              }
            ]
          }
        ]
      }
    }
  ]
},
    //altah      环境局部区域温湿度
    altah:{
  "data": [
    {
      "deta": {
        "title": [
          {
            "name": "加料",
            "color": "blue"
          },
          {
            "name": "加料",
            "color": "brown"
          }
        ],
        "item": [
          {
            "name": "制丝",
            "content": "红河"
          },
          {
            "name": "牌号:",
            "content": "软珍"
          },
          {
            "name": "批次",
            "content": "软珍"
          }
        ],
        "module": [
          {
            "head": {
              "name": "实际流量",
              "color": "blue"
            },
            "center": [
              {
                "name": "25.2747",
                "color": "blue"
              },
              {
                "name": "29.3427",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": "brown"
            },
            "center": [
              {
                "name": "21.6156",
                "color": "brown"
              },
              {
                "name": "31.693",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": "brown"
            },
            "center": [
              {
                "name": "23.3948",
                "color": "#fff"
              },
              {
                "name": "23.96",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": "brown"
            },
            "center": [
              {
                "name": "37.6626",
                "color": "brown"
              },
              {
                "name": "32.7714",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "加料含水量",
              "color": "brown"
            },
            "center": [
              {
                "name": "34.4784",
                "color": "blue"
              },
              {
                "name": "34.035",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": "brown"
            },
            "center": [
              {
                "name": "32.4146",
                "color": "#fff"
              },
              {
                "name": "34.8213",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": "brown"
            },
            "center": [
              {
                "name": "36.7657",
                "color": "#fff"
              },
              {
                "name": "22.629",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": "brown"
            },
            "center": [
              {
                "name": "21.6993",
                "color": "red"
              },
              {
                "name": "25.1133",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": "brown"
            },
            "center": [
              {
                "name": "35.3092",
                "color": "brown"
              },
              {
                "name": "36.7256",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": "blue"
            },
            "center": [
              {
                "name": "29.1586",
                "color": "red"
              },
              {
                "name": "38.5915",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": "blue"
            },
            "center": [
              {
                "name": "30.4056",
                "color": "blue"
              },
              {
                "name": "37.7527",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": "blue"
            },
            "center": [
              {
                "name": "35.7739",
                "color": "red"
              },
              {
                "name": "30.7483",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": "brown"
            },
            "center": [
              {
                "name": "22.0031",
                "color": "brown"
              },
              {
                "name": "22.7987",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "加料含水量",
              "color": "blue"
            },
            "center": [
              {
                "name": "36.0723",
                "color": "brown"
              },
              {
                "name": "32.4971",
                "color": "#fff"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": "brown"
            },
            "center": [
              {
                "name": "24.264",
                "color": "#fff"
              },
              {
                "name": "32.9133",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": "blue"
            },
            "center": [
              {
                "name": "38.4982",
                "color": "red"
              },
              {
                "name": "22.6271",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "设备流量(kg)",
              "color": "brown"
            },
            "center": [
              {
                "name": "29.0594",
                "color": "brown"
              },
              {
                "name": "24.3513",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": "brown"
            },
            "center": [
              {
                "name": "32.9391",
                "color": "#fff"
              },
              {
                "name": "21.4716",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": "brown"
            },
            "center": [
              {
                "name": "26.8147",
                "color": "brown"
              },
              {
                "name": "24.3967",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": "blue"
            },
            "center": [
              {
                "name": "21.0815",
                "color": "blue"
              },
              {
                "name": "23.4785",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": "blue"
            },
            "center": [
              {
                "name": "39.2351",
                "color": "blue"
              },
              {
                "name": "36.0909",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": "brown"
            },
            "center": [
              {
                "name": "27.645",
                "color": "blue"
              },
              {
                "name": "33.5483",
                "color": "blue"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": "blue"
            },
            "center": [
              {
                "name": "38.0723",
                "color": "#fff"
              },
              {
                "name": "28.1643",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "加料含水量",
              "color": "blue"
            },
            "center": [
              {
                "name": "23.594",
                "color": "brown"
              },
              {
                "name": "26.3015",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "实际流量",
              "color": "blue"
            },
            "center": [
              {
                "name": "24.6014",
                "color": "#fff"
              },
              {
                "name": "33.778",
                "color": "brown"
              }
            ]
          },
          {
            "head": {
              "name": "2#桶量温度",
              "color": "brown"
            },
            "center": [
              {
                "name": "27.7363",
                "color": "brown"
              },
              {
                "name": "29.477",
                "color": "red"
              }
            ]
          },
          {
            "head": {
              "name": "加料含水量",
              "color": "brown"
            },
            "center": [
              {
                "name": "30.8589",
                "color": "brown"
              },
              {
                "name": "31.0624",
                "color": "blue"
              }
            ]
          }
        ]
      }
    }
  ]
},
    //dryingMachine  烘丝机
    dryingMachine:{
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
                        "color": "green"
                    },{ //修改   ——- 
                        "name": "5800",
                        "color": "green"
                    },{ //修改   ——- 
                        "name": "5800",
                        "color": "green"
                    },]
                },{
                    "head": {
                        "name": "设定流量",
                        "color": ""
                    },
                    "center": [{ //修改   ——- 
                        "name": "5800",
                        "color": "green"
                    },{ //修改   ——- 
                        "name": "5800",
                        "color": "green"
                    },{ //修改   ——- 
                        "name": "5800",
                        "color": "green"
                    },]
                },]
            }
        }]
    },

    //perfumingMachine   加香机
    perfumingMachine:{
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
                },{
                    "head": {
                        "name": "实际流量",
                        "color": ""
                    },
                    "center": [{ //修改   ——- 
                        "name": "5800",
                        "color": ""
                    }]
                },{
                    "head": {
                        "name": "实际流量",
                        "color": ""
                    },
                    "center": [{ //修改   ——- 
                        "name": "5800",
                        "color": ""
                    }]
                },{
                    "head": {
                        "name": "实际流量",
                        "color": ""
                    },
                    "center": [{ //修改   ——- 
                        "name": "5800",
                        "color": ""
                    },{ //修改   ——- 
                        "name": "5800",
                        "color": ""
                    },{ //修改   ——- 
                        "name": "5800",
                        "color": ""
                    },]
                }]
            }
        }]
    },

    //成型  模块  satrt

    //formingKanban   成型  -  生产看板
    formingKanban:{
  "data": [
    {
      "magnetism": [
        {
          "title": 1,
          "center": {
            "name": "24555",
            "color": "red",
            "type": 1
          }
        },
        {
          "title": 2,
          "center": {
            "name": "4251",
            "color": "blue",
            "type": 1
          }
        }
      ],
      "map": [
        {
          "title": "云烟",
          "center": [
            {
              "key": "计划产量",
              "value": 1129
            },
            {
              "key": "实际产量",
              "value": 4143
            },
            {
              "key": "完成进度%",
              "value": 62
            },
            {
              "key": "嘴棒库存",
              "value": "4657.01"
            }
          ]
        },
        {
          "title": "云紫",
          "center": [
            {
              "key": "计划产量",
              "value": 2789
            },
            {
              "key": "实际产量",
              "value": 2346
            },
            {
              "key": "完成进度%",
              "value": "65.5"
            },
            {
              "key": "嘴棒库存",
              "value": "5522.32"
            }
          ]
        },
        {
          "title": "红河",
          "center": [
            {
              "key": "计划产量",
              "value": 2288
            },
            {
              "key": "实际产量",
              "value": 5754
            },
            {
              "key": "完成进度%",
              "value": "83.5"
            },
            {
              "key": "嘴棒库存",
              "value": "5087.06"
            }
          ]
        },
        {
          "title": "云烟",
          "center": [
            {
              "key": "计划产量",
              "value": 5370
            },
            {
              "key": "实际产量",
              "value": 3650
            },
            {
              "key": "完成进度%",
              "value": "77.7"
            },
            {
              "key": "嘴棒库存",
              "value": "1029.27"
            }
          ]
        },
        {
          "title": "云紫",
          "center": [
            {
              "key": "计划产量",
              "value": 2114
            },
            {
              "key": "实际产量",
              "value": 1379
            },
            {
              "key": "完成进度%",
              "value": "92.7"
            },
            {
              "key": "嘴棒库存",
              "value": "4986.69"
            }
          ]
        },
        {
          "title": "云紫",
          "center": [
            {
              "key": "计划产量",
              "value": 5754
            },
            {
              "key": "实际产量",
              "value": 3353
            },
            {
              "key": "完成进度%",
              "value": "89.4"
            },
            {
              "key": "嘴棒库存",
              "value": "1694.74"
            }
          ]
        },
        {
          "title": "红河",
          "center": [
            {
              "key": "计划产量",
              "value": 4496
            },
            {
              "key": "实际产量",
              "value": 5308
            },
            {
              "key": "完成进度%",
              "value": "97.7"
            },
            {
              "key": "嘴棒库存",
              "value": "2321.93"
            }
          ]
        },
        {
          "title": "红河",
          "center": [
            {
              "key": "计划产量",
              "value": 1174
            },
            {
              "key": "实际产量",
              "value": 5902
            },
            {
              "key": "完成进度%",
              "value": "92.7"
            },
            {
              "key": "嘴棒库存",
              "value": "5712.24"
            }
          ]
        },
        {
          "title": "云烟",
          "center": [
            {
              "key": "计划产量",
              "value": 2904
            },
            {
              "key": "实际产量",
              "value": 1309
            },
            {
              "key": "完成进度%",
              "value": "82.9"
            },
            {
              "key": "嘴棒库存",
              "value": "1152.37"
            }
          ]
        },
        {
          "title": "云紫",
          "center": [
            {
              "key": "计划产量",
              "value": 3171
            },
            {
              "key": "实际产量",
              "value": 2549
            },
            {
              "key": "完成进度%",
              "value": 78
            },
            {
              "key": "嘴棒库存",
              "value": "5864.26"
            }
          ]
        },
        {
          "title": "云紫",
          "center": [
            {
              "key": "计划产量",
              "value": 2322
            },
            {
              "key": "实际产量",
              "value": 5559
            },
            {
              "key": "完成进度%",
              "value": 100
            },
            {
              "key": "嘴棒库存",
              "value": "1961.5"
            }
          ]
        },
        {
          "title": "云紫",
          "center": [
            {
              "key": "计划产量",
              "value": 3717
            },
            {
              "key": "实际产量",
              "value": 1926
            },
            {
              "key": "完成进度%",
              "value": "83.4"
            },
            {
              "key": "嘴棒库存",
              "value": "1401.92"
            }
          ]
        }
      ]
    }
  ]
},

    //removeDust  除尘
    removeDust:{
  "data": [
    {
      "detaList": [
        {
          "deta": {
            "title": [
              {
                "name": "软包除尘",
                "color": "blue"
              }
            ],
            "module": [
              {
                "head": {
                  "name": "加料含水量",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "33.13",
                    "color": "#fff"
                  }
                ]
              },
              {
                "head": {
                  "name": "设备流量(kg)",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "33.7",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "25.1",
                    "color": "#fff"
                  }
                ]
              },
              {
                "head": {
                  "name": "实际流量",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "21.68",
                    "color": "red"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "35.38",
                    "color": "#fff"
                  }
                ]
              },
              {
                "head": {
                  "name": "2#桶量温度",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "31.85",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "32.49",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "2#桶量温度",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "32.41",
                    "color": "blue"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "26.95",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "2#桶量温度",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "26.44",
                    "color": "#fff"
                  }
                ]
              },
              {
                "head": {
                  "name": "设备流量(kg)",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "26.79",
                    "color": "red"
                  }
                ]
              },
              {
                "head": {
                  "name": "实际流量",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "39.21",
                    "color": "#fff"
                  }
                ]
              },
              {
                "head": {
                  "name": "实际流量",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "21.96",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "39.34",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "38.85",
                    "color": "blue"
                  }
                ]
              }
            ]
          }
        },
        {
          "deta": {
            "title": [
              {
                "name": "软包除尘",
                "color": "brown"
              }
            ],
            "module": [
              {
                "head": {
                  "name": "加料含水量",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "33.13",
                    "color": "#fff"
                  }
                ]
              },
              {
                "head": {
                  "name": "设备流量(kg)",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "33.7",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "25.1",
                    "color": "#fff"
                  }
                ]
              },
              {
                "head": {
                  "name": "实际流量",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "21.68",
                    "color": "red"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "35.38",
                    "color": "#fff"
                  }
                ]
              },
              {
                "head": {
                  "name": "2#桶量温度",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "31.85",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "32.49",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "2#桶量温度",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "32.41",
                    "color": "blue"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "26.95",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "2#桶量温度",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "26.44",
                    "color": "#fff"
                  }
                ]
              },
              {
                "head": {
                  "name": "设备流量(kg)",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "26.79",
                    "color": "red"
                  }
                ]
              },
              {
                "head": {
                  "name": "实际流量",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "39.21",
                    "color": "#fff"
                  }
                ]
              },
              {
                "head": {
                  "name": "实际流量",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "21.96",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "blue"
                },
                "center": [
                  {
                    "name": "39.34",
                    "color": "brown"
                  }
                ]
              },
              {
                "head": {
                  "name": "加料含水量",
                  "color": "brown"
                },
                "center": [
                  {
                    "name": "38.85",
                    "color": "blue"
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ]
},


    //refrigeration 制冷
    refrigeration:{
        "data": [{
            "detaList": [{
                "deta": {
                    "title": [{
                        "name": "软包制冷",
                        "color": "blue",
                    }],
                    "item": [{
                        "name": null,
                        "content": null
                    }],
                    "module": [{
                        "head": {
                            "name": "1#",
                            "color": "blue"
                        },
                        "center": [{ //修改   ——- 
                            "name": "74",
                            "color": "red"
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": "red"
                        },
                        "center": [{ //修改   ——- 
                            "name": "64",
                            "color": "red"
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": "green"
                        },
                        "center": [{ //修改   ——- 
                            "name": "24",
                            "color": "red"
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": ""
                        },
                        "center": [{ //修改   ——- 
                            "name": "34",
                            "color": "red"
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": "blue"
                        },
                        "center": [{ //修改   ——- 
                            "name": "24",
                            "color": "red"
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": ""
                        },
                        "center": [{ //修改   ——- 
                            "name": "4",
                            "color": "red"
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": "orange"
                        },
                        "center": [{ //修改   ——- 
                            "name": "44rtr4",
                            "color": "red"
                        }]
                    },]
                }
            }, {
                "deta": {
                    "title": [{
                        "name": "硬包制冷",
                        "color": "#f3f",
                    }],
                    "item": [{
                        "name": null,
                        "content": null
                    }],
                    "module": [{
                        "head": {
                            "name": "1#",
                            "color": "#f0f0f0"
                        },
                        "center": [{ //修改   ——- 
                            "name": "5800",
                            "color": ""
                        }]
                    }]
                }
            }, ]
        }]
    },

    //wasteTobacco 废烟丝
    wasteTobacco:{
        "data": [{
            "detaList": [{
                "deta": {
                    "title": [{
                        "name": "软包制冷",
                        "color": "blue",
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
                        "name": "硬包制冷",
                        "color": "#f3f",
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
                            "name": "500",
                            "color": ""
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": ""
                        },
                        "center": [{ //修改   ——- 
                            "name": "5060",
                            "color": ""
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": ""
                        },
                        "center": [{ //修改   ——- 
                            "name": "500",
                            "color": ""
                        }]
                    },{
                        "head": {
                            "name": "2#",
                            "color": ""
                        },
                        "center": [{ //修改   ——- 
                            "name": "500",
                            "color": "green"
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": "blue"
                        },
                        "center": [{ //修改   ——- 
                            "name": "5050",
                            "color": ""
                        }]
                    },]
                }
            }, ]
        }]
    },
    //formingInfo    成型  -- 基础信息
    formingInfo:{
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
        ]
},


    //glycerol   甘油

    glycerol:{
        "data": [{
            "detaList": [{
                "deta": {
                    "title": [{
                        "name": "软包甘油",
                        "color": "red",
                    }],
                    "module": [{
                        "head": {
                            "name": "1#",
                            "color": "blue"
                        },
                        "center": [{ //修改   ——- 
                            "name": "500",
                            "color": "red"
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": ""
                        },
                        "center": [{ //修改   ——- 
                            "name": "6800",
                            "color": ""
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": "blue"
                        },
                        "center": [{ //修改   ——- 
                            "name": "530",
                            "color": ""
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": ""
                        },
                        "center": [{ //修改   ——- 
                            "name": "5100",
                            "color": ""
                        }]
                    },]
                }
            }, {
                "deta": {
                    "title": [{
                        "name": "硬包甘油",
                        "color": "green",
                    }],
                    "module": [{
                        "head": {
                            "name": "1#",
                            "color": ""
                        },
                        "center": [{ //修改   ——- 
                            "name": "500",
                            "color": "#e0e0e0"
                        },{ //修改   ——- 
                            "name": "400",
                            "color": "#fff"
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": ""
                        },
                        "center": [{ //修改   ——- 
                            "name": "2800",
                            "color": "#fff"
                        },{ //修改   ——- 
                            "name": "5500",
                            "color": "orange"
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": ""
                        },
                        "center": [{ //修改   ——- 
                            "name": "5800",
                            "color": ""
                        },{ //修改   ——- 
                            "name": "5100",
                            "color": "red"
                        }]
                    },{
                        "head": {
                            "name": "1#",
                            "color": "green"
                        },
                        "center": [{ //修改   ——- 
                            "name": "5800",
                            "color": "blue"
                        },{ //修改   ——- 
                            "name": "5900",
                            "color": "red"
                        }]
                    }]
                }
            }]
        }]
    },


    //exchangeCenter    交换中心
    exchangeCenter:{
        "data": [{
            "table": {
                "head": { "text": [{ 'value': '发送机号', 'color': '' }, { 'value': '发送管号', 'color': '' }, { 'value': '品牌', 'color': '' }, { 'value': '对接机台', 'color': '' }, { 'value': '要料状态', 'color': '' }] },
                "text": [
                    { "text": [{ "value": "发送机号1", "color": "" }, { "value": "发送管号1", "color": "" }, { "value": "品牌", "color": "" }, { "value": "对接机台1", "color": "" }, { "value": "要料状态1", "color": "" }], "number": "0" },
                    { "text": [{ "value": "发送机号2", "color": "" }, { "value": "发送管号2", "color": "" }, { "value": "品牌", "color": "" }, { "value": "对接机台2", "color": "" }, { "value": "要料状态2", "color": "" }], "number": "1" },
                ]
            }
        }]
    }
}
