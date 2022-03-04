//写法非常的nice
//要学会去封装组件！！！！！！！！！！！
var Modal = (function () {

    function extend(target, obj){
        for (var p in obj) {
            if(typeof obj[p] == 'object'){
                //....
                // target[p] = extend({}, obj[p]);
                target[p] = extend(obj[p].constructor == Array ? [] : {}, obj[p]);

            }else{
                target[p] = obj[p];
            }
        }
        return target;
    }


//弹层组件的默认属性
    var settings = {
        width: 600,
        height: 400
    };


    function Modal(options){
        var oModal = document.getElementById(options.ele);
        oModal.style.display = 'block'

        // dom查找的方式
        // var modalDialog = oModal.getElementsByClassName('modal-dialog')[0];
        //dom遍历的方式
        var modalDialog = util.first(oModal);
        //第一次优化：可以用三则表达式
        //但是当有很多参数时就会出现很多的三则表达式，就会有点麻烦
        //所以在考虑第二次优化
        // modalDialog.style.width = (options.width ? options.width : 600) + 'px';
        // modalDialog.style.height = (options.height ? options.height : 400) + 'px';
        //第二次优化：用对象合并的方法
        //将options合并到settings中!!!!!重要
        settings = extend(settings, options);
        modalDialog.style.width = settings.width + 'px';
        modalDialog.style.height = settings.height+ 'px';

        // oModal.querySelector('.close');也可以用这个
        var btnClose = oModal.getElementsByClassName('close')[0];
        btnClose.onclick = function () {
            oModal.style.display = 'none';
        }
    }
    return Modal;
})();