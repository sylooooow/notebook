console.log("hello node.js!");
var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
    };
    arr[i]();
}
arr[7]();

{
    let a = 1;
    {
        console.log(a + 1);
    }
}

let jsonData = {
    id: 42,
    status: "OK",
    data: [867,5309]
};

let { id, status, data } = jsonData;

console.log(id, status, data);

const isEven = n => n % 2 == 0;
console.log(isEven(4));

coldplay