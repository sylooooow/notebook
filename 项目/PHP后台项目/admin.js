window.onload = function () {

    var dataTable = document.getElementById("dataTable");
    var chooseAll = null; //全选按钮
    var nowTarget = null; //当前分页元素
    var page = 1; //当前页数
    //记录增添菜单分类按钮的状态
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;


    //创建第1行表格标题
    createFirstRow();
    function createFirstRow() {
        dataTable.innerHTML = "";
        var firstRow = document.createElement("tr");
        dataTable.appendChild(firstRow);
        firstRow.className = "first";
        firstRow.className = "first";
        for (var i = 0; i < 10; i++) {
            var firstRowTh = document.createElement("th");
            firstRow.appendChild(firstRowTh);
        }
        var allChoose = document.createElement("input");
        var allChooseLable = document.createElement("lable");
        allChooseLable.innerHTML = "全选";
        allChoose.type = "checkbox";
        allChoose.id = "chooseAll";

        firstRow.children[0].appendChild(allChoose);
        firstRow.children[0].appendChild(allChooseLable);
        firstRow.children[1].innerHTML = "影片ID";
        firstRow.children[2].innerHTML = "影片名";
        firstRow.children[3].innerHTML = "图片";
        firstRow.children[4].innerHTML = "评分";
        firstRow.children[5].innerHTML = "热门";
        firstRow.children[6].innerHTML = "华语";
        firstRow.children[7].innerHTML = "欧美";
        firstRow.children[8].innerHTML = "日韩";
        firstRow.children[9].innerHTML = "操作";

        //获取全选按钮，并添加点击事件
        chooseAll = document.getElementById("chooseAll");
        chooseAll.onclick = chooseAllCheckBox;
    }


    //创建后面的tr函数
    function createDataTr(data) {
        var dataArr = data;
        for (var i = 0; i < dataArr.length; i++) {
            var row = document.createElement("tr");
            var td = document.createElement("td");
            var rowChoose = document.createElement("input");
            rowChoose.type = "checkbox";
            rowChoose.className = "isChoose";
            dataTable.appendChild(row);
            row.appendChild(td);
            td.appendChild(rowChoose);

            for (var key in dataArr[i]) {
                var theTd = document.createElement("td");
                theTd.innerHTML = dataArr[i][key];
                row.appendChild(theTd);
            }

            var tdControl = document.createElement("td");
            row.appendChild(tdControl);
            var editBtn = document.createElement("button");
            editBtn.innerHTML = "编辑";
            editBtn.className = "editBtn";
            tdControl.appendChild(editBtn);
            //给编辑按钮添加一个点击事件
            editBtn.onclick = editTrData;

            var deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "删除";
            deleteBtn.className = "deleteBtn";
            tdControl.appendChild(deleteBtn);
            //给删除按钮添加一个点击事件
            deleteBtn.onclick = deleteTrData;
        }
    }


    //页面加载完成请求数据库里的内容和数据数量
    var request_url = "interface.php?type=1";
    ajax_get(request_url, domOperation);

    //ajax请求完成后的回调，进行一些dom操作
    function domOperation(data) {
        var dataArr = JSON.parse(data)["data"];
        var dataCount = JSON.parse(data)["count"][0]["count(*)"];
        dataCount = Number(dataCount);

        //创建后面的tr
        createDataTr(dataArr);

        //调用分页操作函数
        operationPage(dataCount);
    }


    //ajax请求完成后,对底部的分页进行操作
    function operationPage(num) {
        var pageUl = document.getElementsByClassName("pagination")[0];
        pageUl.innerHTML = "";

        var firstLi = document.createElement("li");
        var firstLi_a = document.createElement("a");
        var firstLi_a_span = document.createElement("span");
        firstLi_a_span.innerHTML = "&laquo;";
        firstLi_a_span.setAttribute("aria-hidden", true);
        firstLi_a.appendChild(firstLi_a_span);
        firstLi_a.setAttribute("aria-label", "Previous");
        firstLi.appendChild(firstLi_a);
        pageUl.appendChild(firstLi);
        //给上一页li点击事件
        firstLi.onclick = toPrevious;

        var pageNum = Math.ceil(num / 30); //12
        for (var j = 1; j <= pageNum; j++) {
            var num_li = document.createElement("li");
            var num_a = document.createElement("a");
            num_a.innerHTML = j;
            num_a.href = "#";
            num_li.appendChild(num_a);
            pageUl.appendChild(num_li);

            //如果是第一页，给它一个背景颜色
            if (j == 1) {
                nowTarget = num_a;
                nowTarget.style.backgroundColor = "#EEEEEE";
            }

            //给每个li添加一个点击事件
            num_li.onclick = jumpTo;
        }

        var lastLi = document.createElement("li");
        var lastLi_a = document.createElement("a");
        var lastLi_a_span = document.createElement("span");
        lastLi_a_span.innerHTML = "&raquo;";
        lastLi_a_span.setAttribute("aria-hidden", true);
        lastLi_a.appendChild(lastLi_a_span);
        lastLi_a.setAttribute("aria-label", "Next");
        lastLi.appendChild(lastLi_a);
        pageUl.appendChild(lastLi);
        //给下一页li点击事件
        lastLi.onclick = toNext;
    }

    //上一页点击函数
    function toPrevious() {
        //获取父级ul
        var parentNode = this.parentNode;
        //当前的页数为page,且page随分页的点击而改变
        page--;
        if (page == 0) {
            page = 1;

        } else {
            //跳转到不同页数上，并添加和移除背景色
            nowTarget.style.backgroundColor = "";
            nowTarget = parentNode.children[page].children[0];
            nowTarget.style.backgroundColor = "#EEEEEE";
            jumpTo(page);
        }
    }

    //下一个点击函数
    function toNext() {
        //获取父级ul
        var parentNode = this.parentNode;
        //获取下一页Li按钮的下标
        var allLiCount = parentNode.children.length - 1;
        //当前的页数为page,且page随分页的点击而改变
        page++;
        if (page == allLiCount) {
            page = allLiCount - 1;

        } else {
            //跳转到不同页数上，并添加和移除背景色
            nowTarget.style.backgroundColor = "";
            nowTarget = parentNode.children[page].children[0];
            nowTarget.style.backgroundColor = "#EEEEEE";
            jumpTo(page);
        }
    }


    //分页中Li的点击函数
    function jumpTo(pageNum) {
        var pageIndex = "";
        var url = "";
        //如果传来的参数是数字类型，说明是前后按钮在控制，否则是直接点的第几页
        if (typeof(pageNum) == "number") {
            url = "interface.php?type=2&pageIndex=" + pageNum;
        } else {
            nowTarget.style.backgroundColor = "";
            nowTarget = this.children[0];
            nowTarget.style.backgroundColor = "#EEEEEE";
            pageIndex = this.children[0].innerHTML;
            page = pageIndex;   //给当前页数进行赋值
            url = "interface.php?type=2&pageIndex=" + pageIndex;
        }

        ajax_get(url, function (data) {
            //获取到点击页数后的数据
            var dataArr = JSON.parse(data);

            //创建第1行表格标题
            createFirstRow();

            //创建后面的tr
            createDataTr(dataArr);

        })

    }


    //搜索
    var searchBtn = document.getElementsByClassName("long_search_btn")[0];
    searchBtn.onclick = searchData;
    function searchData() {
        var searchText = document.getElementById("searchText");
        searchText = searchText.value;
        if (searchText != "") {
            var url = "interface.php?type=3&searchText=" + searchText;
            ajax_get(url, function (data) {
                var dataArr = JSON.parse(data)["data"];
                var dataCount = JSON.parse(data)["count"];

                //创建第1行表格标题
                createFirstRow();

                //创建后面的tr
                createDataTr(dataArr);

                //调用分页操作函数
                operationPage(dataCount);
            })
        }
    }


    //删除(点击事件在创建时已绑定)
    function deleteTrData() {
        var targetParent = this.parentNode.parentNode;
        var targetId = targetParent.children[1].innerHTML;

        var url = "interface.php?type=4&dataId=" + targetId;
        var msg = "确定要删除吗？";
        if (confirm(msg)) {
            ajax_get(url, function (data) {
                var flag = JSON.parse(data)["flag"];

                if (flag == "1") {
                    alert("删除成功!");
                    location.reload(true);

                } else {
                    alert("删除失败!");
                }
            })
        }
    }


    //全选
    function chooseAllCheckBox() {
        var allCheckBox = document.getElementsByClassName("isChoose");
        if (this.checked == true) {
            for (var i = 0; i < allCheckBox.length; i++) {
                allCheckBox[i].checked = true;
            }
        } else {
            for (var i = 0; i < allCheckBox.length; i++) {
                allCheckBox[i].checked = false;
            }
        }
    }


    //批量删除
    var allDeleteBtn = document.getElementById("all_delete");
    allDeleteBtn.onclick = deleteAll;
    function deleteAll() {
        var allCheckBox = document.getElementsByClassName("isChoose");
        var checkedParent = null;
        var checkedId = "";
        var isChooseFlag = false;

        var msg = "真的要删除吗？";
        if (confirm(msg)) {
            for (var i = 0; i < allCheckBox.length; i++) {
                if (allCheckBox[i].checked == true) {
                    checkedParent = allCheckBox[i].parentNode.parentNode;
                    checkedId = checkedParent.children[1].innerHTML;
                    //执行删除函数
                    deleteCheckedData(checkedId);
                    isChooseFlag = true;
                }
            }
        }

        //如果flag为true,删除成功
        if (isChooseFlag) {
            alert("删除成功!");
            location.reload(true);
        } else {
            alert("请选择要删除的数据!");
        }

    }

    //删除执行函数
    function deleteCheckedData(id) {
        var targetId = id;
        var url = "interface.php?type=4&dataId=" + targetId;
        ajax_get(url, function (data) {
            var flag = JSON.parse(data)["flag"];
        })
    }



    //隐藏新增盒子的显示与隐藏
    showAndHide();
    var hideBox = document.getElementById("hidden");  //隐藏的菜单
    function showAndHide() {
        var addBtn = document.getElementsByClassName("long_add_btn")[0];
        var closeBtn = document.getElementById("close");
        addBtn.onclick = function () {
            hideBox.style.display = "block";
        };
        closeBtn.onclick = function () {
            hideBox.style.display = "none";
        };
    }
    
    
    //新增菜单里的分类按钮点击事件
    classifyClick();
    function classifyClick() {
        var classifyBtn = document.getElementsByClassName("choose");

        classifyBtn[0].onclick = function() {
            if(a == 0) {
                classifyBtn[0].style.backgroundColor = "#1B71FF";
                classifyBtn[0].style.outline = "none";
                classifyBtn[0].style.color = "white";
                a++;
            } else if(a == 1) {
                classifyBtn[0].style.backgroundColor = "#FFFFFF";
                classifyBtn[0].style.color = "#555365";
                a--;
            }
        };
        classifyBtn[1].onclick = function() {
            if(b == 0) {
                classifyBtn[1].style.backgroundColor = "#1B71FF";
                classifyBtn[1].style.outline = "none";
                classifyBtn[1].style.color = "white";
                b++;
            } else if(b == 1) {
                classifyBtn[1].style.backgroundColor = "#FFFFFF";
                classifyBtn[1].style.color = "#555365";
                b--;
            }
        };
        classifyBtn[2].onclick = function() {
            if(c == 0) {
                classifyBtn[2].style.backgroundColor = "#1B71FF";
                classifyBtn[2].style.outline = "none";
                classifyBtn[2].style.color = "white";
                c++;
            } else if(c == 1) {
                classifyBtn[2].style.backgroundColor = "#FFFFFF";
                classifyBtn[2].style.color = "#555365";
                c--;
            }
        };
        classifyBtn[3].onclick = function() {
            if(d == 0) {
                classifyBtn[3].style.backgroundColor = "#1B71FF";
                classifyBtn[3].style.outline = "none";
                classifyBtn[3].style.color = "white";
                d++;
            } else if(d == 1) {
                classifyBtn[3].style.backgroundColor = "#FFFFFF";
                classifyBtn[3].style.color = "#555365";
                d--;
            }
        }
    }

    //点击提交事件
    var submitBtn = document.getElementById("submit");
    submitBtn.onclick = sendData;
    function sendData() {
        var inputParent = document.getElementsByClassName("hidden_box_content_right")[0];
        var movieName = inputParent.children[0].children[0];
        var name_text = movieName.value;
        var movieRate = inputParent.children[1].children[0];
        var rate_text = movieRate.value;
        var movieImg = inputParent.children[2].children[0];
        var img_text = movieImg.value;
        var movieId = inputParent.children[3].children[0];
        var id_text = movieId.value;

        var hot_text = a;
        var chinese_text = b;
        var america_text = c;
        var korea_text = d;

        //进行网络请求
        var url = "interface.php?type=5&name_text=" + name_text + "&rate_text=" + rate_text + "&img_text=" + img_text + "&id_text=" + id_text + "&hot_text=" + hot_text + "&chinese_text=" + chinese_text + "&america_text=" + america_text + "&korea_text=" + korea_text;
        ajax_get(url,function (data) {
            if (data == "1") {
                alert("添加成功!");
                location.reload(true);
            }
        })
    }




    //编辑
    function editTrData() {
        hideBox.style.display = "block";
        //点击的编辑按钮当前所在的tr
        var editBtnParent = this.parentNode.parentNode;
        //获取菜单里所有input的父级
        var inputParent = document.getElementsByClassName("hidden_box_content_right")[0];
        //获取菜单里的每一个input，并赋值为当前所在行的数据
        var movieName = inputParent.children[0].children[0];
        movieName.value = editBtnParent.children[2].innerHTML;
        var movieRate = inputParent.children[1].children[0];
        movieRate.value = editBtnParent.children[4].innerHTML;
        var movieImg = inputParent.children[2].children[0];
        movieImg.value = editBtnParent.children[3].innerHTML;
        var movieId = inputParent.children[3].children[0];
        movieId.value = editBtnParent.children[1].innerHTML;

        //判断分类按钮对应的数组是否为1，如果是背景色为蓝色，否则白色。并给对应的字母进行赋值
        var classifyBtn = document.getElementsByClassName("choose");
        //遍历所有的分类按钮，初始化背景颜色为无
        for (var i = 0; i < classifyBtn.length; i++) {
            classifyBtn[i].style.backgroundColor = "";
        }
        if (editBtnParent.children[5].innerHTML == "1") {
            classifyBtn[0].style.backgroundColor = "#1B71FF";
            a = 1;
        }
        if (editBtnParent.children[6].innerHTML == "1") {
            classifyBtn[1].style.backgroundColor = "#1B71FF";
            b = 1;
        }
        if (editBtnParent.children[7].innerHTML == "1") {
            classifyBtn[2].style.backgroundColor = "#1B71FF";
            c = 1;
        }
        if (editBtnParent.children[8].innerHTML == "1") {
            classifyBtn[3].style.backgroundColor = "#1B71FF";
            d = 1;
        }

    }






    function ajax_get(url, fn) {
        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var theData = xhr.responseText;
                if (fn) {
                    fn(theData);
                }
            }
        };
        xhr.open("get", url, true);
        xhr.send();
    }
};