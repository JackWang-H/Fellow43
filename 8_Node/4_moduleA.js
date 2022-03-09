// exports.add11 = function add(a, b){ //这种导出的就是一个整体exports对象
//     return a + b;
// };//exports是自带的一个对象

// exports.minus = function minus(a, b){
//     return a - b;
// }

module.exports = function add(a, b){ //这样require后得到的就是等号后面的东西，既函数

        return a + b;
    };