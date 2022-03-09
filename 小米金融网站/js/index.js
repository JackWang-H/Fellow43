//登陆
//函数立即调用，为了不污染全局变量
(function () {
    var myModal;
    var oBtnLogin = document.getElementById('btn-login');
    oBtnLogin.onclick = function () {
        myModal = new Modal({
            ele:'myModal1',
            width: 800,
            height: 300,
            onOk: function(){
                var username = document.getElementById('username');
                var password = document.getElementById('password');
                console.log(username.value,password.value);
            }
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

    var oBtn1 = document.getElementById('btn1');
    oBtn1.onclick = function () {
        myModal.close();
    };


})();

