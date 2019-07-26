//测试数据库是否连接成功
//var testDb = require('../tests/dbtest.js');
var db = require('../utils/db');
var configs = require(process.argv[2]);

//init db pool.
db.init(configs.mysql());

//

var config = configs.account_server();
var as = require('./account_server');
as.start(config);

var dapi = require('./dealer_api');
dapi.start(config);