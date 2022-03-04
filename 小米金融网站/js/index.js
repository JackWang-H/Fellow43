//登陆
//函数立即调用，为了不污染全局变量
(function () {
    var oBtnLogin = document.getElementById('btn-login');
    oBtnLogin.onclick = function () {
        new Modal({
            ele:'myModal1',
            width: 800,
            height: 300
        });//创建一个新的弹层组件
        return false;//阻止浏览器的默认行为
    };

    var oBtnRegist = document.getElementById('btn-regist');
    oBtnRegist.onclick = function () {
        new Modal({
            ele:'myModal2',
            width: 700,
            height: 500
        });//创建一个新的弹层组件
        return false;//阻止浏览器的默认行为
    };
})();

