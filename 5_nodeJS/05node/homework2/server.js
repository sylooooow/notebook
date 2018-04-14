//引入express模块
let mongoose = require("mongoose");
//引入express
let express = require("express");
let app = express();

let cookie = "";

let url = "mongodb://127.0.0.1:27017/node1211";
let db = mongoose.connect(url, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("连接成功!");
    }
});

//schema: 一种以文件形式存储的数据模型骨架
let schema = new mongoose.Schema({
    award_id:{type:Number},
    count :{type:Number},
    award_name : {type:String},
    owner : {type:String}
},{
    collection:"lottery"
});

let userSchema = new mongoose.Schema({
    username:{type:String},
    tel :{type:Number},
    default : {type:String, default:null},
    opportunity : {type:Number, default:1},
    award : {type:String, default:""}
},{
    collection:"user"
});
let userModel = mongoose.model("user", userSchema);

//model 由schema构造生成的数据模型
let Model = mongoose.model("lottery", schema);


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/login.html");
});


app.get("/toRegister", (req,res) => {
    res.sendFile(__dirname + "/register.html");
});


//登陆接口
app.get("/login", (req,res) => {
    cookie = req.query.cookie;

    let loginFlag = null;
    userModel.find({}, (err,doc) => {
        if (err) {
            console.error(err);
        } else {
            for (var i = 0; i < doc.length; i++) {
                if (doc[i]["username"] == req.query.username && doc[i]["tel"] == req.query.tel) {
                    loginFlag = true;
                    break;
                } else if (doc[i]["username"] != req.query.username && doc[i]["tel"] != req.query.tel) {
                    loginFlag = false;
                }
            }

            if (loginFlag) {
                res.send("1");
                console.log("登陆成功!");
            } else if (loginFlag == false) {
                //将用户信息插入到数据库
                let data = {
                    username : req.query.username,
                    tel : req.query.tel,
                }
                userModel.create(data, (err,doc) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("添加用户成功:" + doc);
                        res.send("1");
                    }
                });
            } else {
                res.send("3");
                console.log("用户名或手机号已存在!");
            }
        }
    });
    console.log(req.url);
    console.log(req.query);
});


//注册接口
// app.get("/register", (req,res) => {
//     let userFlag = false;
//     userModel.find({}, (err,doc) => {
//         if (err) {
//             console.error(err);
//         } else {
//             for (let i = 0; i < doc.length; i++) {
//                 if (doc[i]["username"] == req.query.username) {
//                     userFlag = true;
//                     break;
//                 }
//             }
//
//             if (!userFlag) {
//                 userModel.create({username:req.query.username, password:req.query.password}, (err,doc) => {
//                     if (err) {
//                         console.error(err);
//                     } else {
//                         console.log("添加用户成功:" + doc);
//                         res.send("1");
//                     }
//                 });
//             } else {
//                 res.send("0");
//                 console.log("用户名已存在!");
//             }
//         }
//     });
//     console.log(req.url);
//     console.log(req.query);
// });



app.get("/lottery", (req,res) => {
    res.sendFile(__dirname + "/lottery.html");
});

app.get("/ajax", (req,res) => {
    //读取cookie,找到现在登录的用户
    console.log("cookie:" + cookie);
    //查询现在登陆的用户
    userModel.findOne({username:cookie}, (err,doc) => {
        if (err) {
            console.error(err);
        } else {
            console.log(doc);

            //获取当前用户抽奖机会
            let this_opportunity = doc["opportunity"];

            //查看该用户是否还有抽奖机会
            if (this_opportunity == 0) {
                res.send("0");
            } else {
                //判断当前用户是否被内定奖品,如果有直接返回奖品,否则正常抽奖
                if (doc["default"]) {

                    //为当前用户添加获得的奖品
                    Model.findOne({award_id:doc["default"]}, (err,doc) => {
                        if (err) {
                            console.log(err);
                        } else {
                            //判断该奖品是否还有
                            if (doc["count"] == 0) {
                                console.log(doc["count"])
                                res.send("3");
                                console.log("该商品已全部被抽完!");
                            } else {
                                console.log("内定奖品:" + doc["default"]);
                                res.send(doc["default"]);

                                //把抽到的奖品对应的数量减1
                                var this_count = doc["count"];
                                this_count -= 1;
                                Model.update({award_id:doc["award_id"]}, {$set:{count:this_count}}, {multi:true}, (err) =>{
                                    if (err) {
                                        console.error(err);
                                    } else {
                                        console.log("该商品数量还有:" + this_count);
                                        console.log("~~~~~");
                                    }
                                });

                                //为当前用户添加获得的奖品
                                userModel.update({username:cookie}, {$set:{award:doc["award_name"]}}, {multi:true}, (err) =>{});
                            }
                        }
                    });

                    //把内定权限重新设置为null
                    userModel.update({username:cookie}, {$set:{default:null}}, {multi:true}, (err) =>{});

                    //为当前用户抽奖机会减1
                    this_opportunity -= 1;
                    userModel.update({username:cookie}, {$set:{opportunity:this_opportunity}}, {multi:true}, (err) =>{
                        if (err) {
                            console.error(err);
                        } else {
                            console.log("当前用户抽奖机会还有:" + this_opportunity);
                        }
                    });
                } else {
                    //启动正常抽奖
                    getAwardDetail(res);
                    //为当前用户抽奖机会减1
                    this_opportunity -= 1;
                    userModel.update({username:cookie}, {$set:{opportunity:this_opportunity}}, {multi:true}, (err) =>{
                        if (err) {
                            console.error(err);
                        } else {
                            console.log("当前用户抽奖机会还有:" + this_opportunity);
                        }
                    });
                }

            }
        }
    });

});


//获取奖品信息函数,然后抽奖
function getAwardDetail(res) {
    var arr = [];
    Model.find({}, (err,doc) => {
        for (var i = 0; i < doc.length; i++) {
            var awardName = doc[i]["award_id"];
            var awardCount = doc[i]["count"];
            var arrDetail = [awardName,awardCount];
            arr.push(arrDetail);
        }
        // console.log(arr);
        // console.log(get_rand(arr));
        lottery(arr,res);
    });
}


//抽奖函数
function lottery(arr,res) {
    Model.findOne({award_id:get_rand(arr)}, (err,doc) => {
        if (err) {
            console.error(err);
        } else {
            //判断该奖品是否还有
            if (doc["count"] == 0) {
                res.send("0");
                console.log("该商品已全部被抽完!");
            } else {
                console.log("商品ID:" + doc["award_id"] + "商品名称:" + doc["award_name"]);
                res.send(doc);

                //把抽到的奖品对应的数量减1
                var this_count = doc["count"];
                this_count -= 1;
                Model.update({award_id:doc["award_id"]}, {$set:{count:this_count}}, {multi:true}, (err) =>{
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("该商品数量还有:" + this_count);
                        console.log("~~~~~");
                    }
                });

                //为当前用户添加获得的奖品
                userModel.update({username:cookie}, {$set:{award:doc["award_name"]}}, {multi:true}, (err) =>{});

                //为该商品添加获得者
                let owners = doc["owner"];
                if (owners.indexOf(cookie) == -1) {
                    owners += cookie;
                    owners += ",";
                    Model.update({award_id:doc["award_id"]}, {$set:{owner:owners}}, {multi:true}, (err) =>{});
                }
            }
        }
    });
}

//概率
function get_rand(proArr) {
    var result = '';
    //概率数组的总概率精度
    var proSum = 0;
    for (var i = 0; i < proArr.length; i++) {
        proSum += proArr[i][1];
    }
    console.log("商品总数量" + proSum);
    var result = 0;
    //概率数组循环
    for (var j = 0; j < proArr.length; j++) {
        var randNum = Math.floor(Math.random()* proSum);
        if(randNum <= proArr[j][1]){
            result = proArr[j][0];
            break;
        } else {
            proSum -= proArr[j][1];
        }
    }
    return result;
}





//后台管理
app.get("/admin", (req,res) => {
    res.sendFile(__dirname + "/admin.html");
});
//请求用户列表
app.get("/getUsers", (req,res) => {
    userModel.find({}, (err,doc) => {
        // console.log(doc);
        res.send(doc);
    });
});

//获取指定用户的信息并返回
app.get("/getUserDetail", (req,res) => {
    let username = req.query.username;
    userModel.find({username:username}, (err,doc) => {
        // console.log(doc);
        res.send(doc);
    });
});

//更新前台修改的数据
app.get("/updateUserDetail", (req,res) => {
    console.log(req.query);
    console.log(req.query.default)
    userModel.update({username:req.query.username}, {$set:{opportunity:req.query.opportunity, default:req.query.default}}, {multi:true}, (err) =>{
        if (err) {
            console.error(err);
            res.send("0");
        } else {
            console.log("更新成功!");
            res.send("1");
        }
    });
});


//删除用户
app.get("/deleteUser", (req,res) => {
    let username = req.query.username;
    userModel.remove({username:username}, (err) =>{
        if (err) {
            console.error(err);
        } else {
            console.log("删除成功!");
            res.send("1");
        }
    });
});


//添加用户
app.get("/addUser", (req,res) => {
    let username = req.query.username;
    let tel = req.query.tel;
    let opportunity = req.query.opportunity;
    let defaultl = req.query.default;
    userModel.create({username:username, tel:tel, opportunity:opportunity, default:defaultl}, (err,doc) => {
        if (err) {
            console.error(err);
        } else {
            console.log("添加用户成功!");
            res.send("1");
        }
    });
});


//搜索
app.get("/search", (req,res) => {
    userModel.findOne({username:req.query.searchText}, (err,doc) => {
        if (err) {
            console.error(err);
        } else {
            console.log("查询用户成功!");
            res.send(doc);
        }
    });
});







//请求奖品列表
app.get("/getAwards", (req,res) => {
    Model.find({}, (err,doc) => {
        res.send(doc);
    });
});

//获取指定奖品详情
app.get("/getAwardDetail", (req,res) => {
    Model.find({award_id:req.query.award_id}, (err,doc) => {
        if (err) {
            console.error(err);
        } else {
            console.log("获取成功");
            res.send(doc);
        }
    });
});

//修改奖品
app.get("/updateAwardDetail", (req,res) => {
    Model.update({award_id:req.query.award_id}, {$set:{count:req.query.awardCount, award_name:req.query.awardName}}, {multi:true}, (err) =>{
        if (err) {
            console.error(err);
        } else {
            console.log("更新成功!");
            res.send("1");
        }
    });
});


app.all("*", (req,res) => {
    res.sendFile(__dirname + req.path);
});

app.listen(8080);