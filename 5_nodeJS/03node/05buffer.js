/*

js语法里只有字符串数据类型，没有二进制类型
buffer 缓冲区 暂时存放在内存里的一段数据
buffer 单位使用16进制 取值范围0~255 8位

*/

var buffer = new Buffer(10);

//填充
buffer.fill(255,0);  //参数：值 、起始偏移位、 结束位
console.log(buffer);


//通过数组形式创建
var buffer2 = new Buffer([1,255,0xb3]);
console.log(buffer2);

//通过字符串形式创建
var buffer3 = new Buffer("无嫌疑和张勇");
console.log(buffer3);

//e5 90 b4
var buff4 = new Buffer([0xe6, 0x97, 0xa0, 0xe5, 0xab, 0x8c, 0xe7, 0x96, 0x91, 0xe5, 0x92, 0x8c, 0xe5, 0xbc, 0xa0, 0xe5, 0x8b, 0x87]);
console.log(buff4.toString());

var buff5 = new Buffer([0xe5,0x90,0xb4,0xe6, 0x98]);
var buff6 = new Buffer([0xbe,0xe6,0xaf,0x85,0xe5,0x92,
    0x8c,0xe5, 0xbc,0xa0,0xe5,0x8b,0x87]);

//buff拼接,占用内存极高,不建议使用，建议用下面的
console.log(Buffer.concat([buff5,buff6]).toString());


var stringDecoder = require("string_decoder").StringDecoder;
var decoder = new stringDecoder();
console.log(decoder.write(buff5));
console.log(decoder.write(buff6));