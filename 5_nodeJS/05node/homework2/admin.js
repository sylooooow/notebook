$(function () {

    (function () {
        //请求显示用户数据
        $.ajax({
            url: "/getUsers", success: function (result) {
                createFirstRow();
                createUserTable(result);
            }
        });

        //创建第一行标题
        function createFirstRow() {
            $("#dataTable").append($("<tr class='first thread'>" +
                "<th>用户ID</th>" +
                "<th>用户名</th>" +
                "<th>手机号</th>" +
                "<th>剩余抽奖机会</th>" +
                "<th>奖品内定</th>" +
                "<th>获奖情况</th>" +
                "<th>操作</th>" +
                "</tr>"));
        }

        //创建用户列表
        function createUserTable(data) {
            for (var i = 0; i < data.length; i++) {
                var $userTable = $("#dataTable");
                $userTable.append($("<tr class='tr'>" +
                    "<td class='td'>" + data[i]["_id"] + "</td>" +
                    "<td class='td'>" + data[i]["username"] + "</td>" +
                    "<td class='td'>" + data[i]["tel"] + "</td>" +
                    "<td class='td'>" + data[i]["opportunity"] + "</td>" +
                    "<td class='td'>" + data[i]["default"] + "</td>" +
                    "<td class='td'>" + data[i]["award"] + "</td>" +

                    "<td class='td'>" +

                    "<button class='editBtn'>编辑</button>" +
                    "<button class='deleteBtn'>删除</button>" +

                    "</td>" +
                    "</tr>"));
            }
            $(".editBtn").click(edit);
            $(".deleteBtn").click(deleteUser);
        }


        //编辑
        function edit() {
            //显示隐藏编辑页面
            $("#hidden").css("display","block");
            //关闭按钮
            $("#close").click(function () {
                $("#hidden").css("display","none");
            });

            //获取当前点击的用户是哪个
            var user = $(this).parent().parent().children()[1].innerHTML;
            //请求数据库获取信息
            $.ajax({
                url: "/getUserDetail?username=" + user, success: function (result) {
                    //获取默认值
                    $("#userid").val(result[0]["_id"]);
                    $("#username").val(result[0]["username"]);
                    $("#tel").val(result[0]["tel"]);
                    $("#opportunity").val(result[0]["opportunity"]);
                    $("#default").val(result[0]["default"]);
                    $("#award").val(result[0]["award"]);


                    //禁用不能更改的按钮
                    $("#userid").attr("disabled",true);
                    $("#award").attr("disabled",true);

                    //点击提交，修改数据库里的信息
                    $("#submit").click(function () {
                        let url = "/updateUserDetail?opportunity=" + $("#opportunity").val() + "&default=" + $("#default").val() + "&username=" + $("#username").val();
                        $.ajax({
                            url: url, success: function (result) {
                                if (result == "0") {
                                    alert("提交失败!");
                                } else {
                                    alert("提交成功!");
                                    $("#hidden").css("display","none");
                                    location.reload(true);
                                }
                            }
                        });
                    });
                }
            });

        }


        //删除
        function deleteUser() {
            //获取当前点击的是哪个用户
            let targetUser = $(this).parent().parent().children()[1].innerHTML;
            console.log(targetUser);

            var msg = "确定要删除吗？";
            if (confirm(msg)) {
                $.ajax({
                    url : "/deleteUser?username=" + targetUser,
                    success : function (result) {
                        console.log(result);
                        if (result == 0) {
                            alert("删除失败!");
                        } else {
                            alert("删除成功!");
                            location.reload(true);
                        }
                    }
                });
            }
        }



        //添加
        addUser();
        function addUser() {
            $(".long_add_btn").click(function () {
                console.log("ss")
                //显示隐藏编辑页面
                $("#hidden").css("display","block");
                //关闭按钮
                $("#close").click(function () {
                    $("#hidden").css("display","none");
                });

                //清空所有信息
                $("#userid").val("");
                $("#username").val("");
                $("#tel").val("");
                $("#opportunity").val("");
                $("#default").val("");
                $("#award").val("");

                //禁用不需要输入的按钮
                $("#userid").attr("disabled",true);
                $("#award").attr("disabled",true);

                //点击提交
                $("#submit").click(function () {
                    let url = "/addUser?username=" + $("#username").val() + "&tel=" + $("#tel").val() + "&opportunity=" + $("#opportunity").val() + "&default=" + $("#default").val();
                    $.ajax({
                        url: url, success: function (result) {
                            if (result == "0") {
                                alert("提交失败!");
                            } else {
                                alert("提交成功!");
                                $("#hidden").css("display","none");
                                location.reload(true);
                            }
                        }
                    });
                });
            })
        }



        //搜索
        searchUser();
        function searchUser() {
            $(".long_search_btn").click(function () {
                let searchText = $("#searchText").val();
               $.ajax({
                   url: "/search?searchText=" + searchText,
                   success: (data) => {
                       //先清空表格内容
                       var $userTable = $("#dataTable");
                       $userTable.html("");

                       //创建第一行
                       createFirstRow()

                       //创建后面的
                       $userTable.append($("<tr class='tr'>" +
                           "<td class='td'>" + data["_id"] + "</td>" +
                           "<td class='td'>" + data["username"] + "</td>" +
                           "<td class='td'>" + data["tel"] + "</td>" +
                           "<td class='td'>" + data["opportunity"] + "</td>" +
                           "<td class='td'>" + data["default"] + "</td>" +
                           "<td class='td'>" + data["award"] + "</td>" +

                           "<td class='td'>" +

                           "<button class='editBtn'>编辑</button>" +
                           "<button class='deleteBtn'>删除</button>" +

                           "</td>" +
                           "</tr>"));

                       $(".editBtn").click(edit);
                       $(".deleteBtn").click(deleteUser);
                   }
               })
            });
        }
    })();




    //点击切换用户管理和商品管理
    $("#userNav").click(function () {
        $(this).css("background","#D1DBE5");
        $(".right_content").css("display","block");

        $("#awardNav").css("background","");
        $(".right_content2").css("display","none");
    });

    $("#awardNav").click(function () {
        $(this).css("background","#D1DBE5");
        $(".right_content2").css("display","block");

        $("#userNav").css("background","");
        $(".right_content").css("display","none");
    });




    (function () {
        //请求显示奖品数据
        $.ajax({
            url: "/getAwards", success: function (result) {
                createFirstRow();
                createAwardTable(result);
            }
        });

        //创建第一行标题
        function createFirstRow() {
            $("#awardTable").append($("<tr class='first thread'>" +
                "<th>奖品ID</th>" +
                "<th>奖品编号</th>" +
                "<th>奖品数量</th>" +
                "<th>奖品名称</th>" +
                "<th>奖品获得者</th>" +
                "<th>操作</th>" +
                "</tr>"));
        }


        //创建奖品列表
        function createAwardTable(data) {
            // console.log(data);
            let $awardTable = $("#awardTable");
            for (let i = 0; i < data.length; i++) {
                $awardTable.append($("<tr class='tr'>" +
                    "<td class='td'>" + data[i]["_id"] + "</td>" +
                    "<td class='td'>" + data[i]["award_id"] + "</td>" +
                    "<td class='td'>" + data[i]["count"] + "</td>" +
                    "<td class='td'>" + data[i]["award_name"] + "</td>" +
                    "<td class='td'>" + data[i]["owner"] + "</td>" +

                    "<td class='td'>" +

                    "<button class='editBtn'>编辑</button>" +
                    "<button class='deleteBtn'>删除</button>" +

                    "</td>" +
                    "</tr>"));
            }
            $(".editBtn").click(editAward);
            // $(".deleteBtn").click(deleteAward);
        }
        
        
        //编辑
        function editAward() {
            //显示隐藏编辑页面
            $("#awardHide").css("display","block");
            //关闭按钮
            $("#awardClose").click(function () {
                $("#awardHide").css("display","none");
            });

            //获取当前点击的用户是哪个
            var award = $(this).parent().parent().children()[1].innerHTML;
            console.log(award);

            $.ajax({
                url: "/getAwardDetail?award_id=" + award,
                success: function (result) {
                    console.log(result);
                    //设置默认值
                    $("#awardId").val(result[0]["_id"]);
                    $("#awardNum").val(result[0]["award_id"]);
                    $("#awardCount").val(result[0]["count"]);
                    $("#awardName").val(result[0]["award_name"]);
                    $("#awardOwner").val(result[0]["owner"]);

                    //禁止不可修改的选项
                    $("#awardId").attr("disabled",true);
                    $("#awardNum").attr("disabled",true);
                    $("#awardOwner").attr("disabled",true);

                    //点击提交，修改数据库里的信息
                    $("#awardSubmit").click(function () {
                        let url = "/updateAwardDetail?awardCount=" + $("#awardCount").val() + "&awardName=" + $("#awardName").val() + "&award_id=" + $("#awardNum").val();
                        $.ajax({
                            url: url, success: function (result) {
                                if (result == "0") {
                                    alert("提交失败!");
                                } else {
                                    alert("提交成功!");
                                    $("#awardHide").css("display","none");
                                    location.reload(true);
                                }
                            }
                        });
                    });
                }

            });
        }

    })();
});