<!--插入语句,可以插入一行或多行-->
<!--INSERT INTO user(name,age,sex,height) VALUES("大哥","3","不详","180")-->
<!--INSERT INTO user(name,age,sex) VALUES("迟晓楠","18","女"),("吴显毅","3","未知")-->



<!--删除语句-->
<!--DELETE FROM user    这样写会删除user表中所有的数据，但不会删除字段-->
<!--DELETE FROM user WHERE id = 8-->
<!--DELETE FROM `user` WHERE sex = "女" AND age < 18      两个条件同时满足-->



<!--更改语句  如果不加where，则所有的name和age字段都会被修改。where是约束条件-->
<!--UPDATE user SET name = "李俊钦",age = 199 WHERE id = 2-->



<!--查询语句-->
<!--SELECT * FROM user    查询user表的所有数据-->
<!--SELECT name FROM user   查询指定字段的数据,字段可以填写多个-->
<!--SELECT * FROM user WHERE age!= 18      查询年龄不等于18-->
<!--SELECT * FROM user WHERE name like "张%"     模糊查询，查询name字段以"张"开头的数据-->
<!--SELECT * FROM user WHERE name like "%颜"     模糊查询，查询name字段以"颜"结束的数据-->
<!--SELECT * FROM user WHERE name like "%三%"    模糊查询，查询name字段所有包含"三"的数据-->
<!--SELECT * FROM user WHERE length(name) = 6    查询name字段为6个字节的数据-->
<!--SELECT * FROM user ORDER BY age              按年龄升序进行查询,默认是升序,也可以写ASC-->
<!--SELECT * FROM user ORDER BY age DESC         按年龄降序进行查询-->
<!--SELECT * FROM user ORDER BY convert(name using gbk)  按拼音排序-->
<!--SELECT * FROM user LIMIT 2,3                 从第2条信息开始查询，查3条信息-->