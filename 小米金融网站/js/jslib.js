var util = (function(){
    return {
        getByClass: function (className,tagName,context){
            var elements = [];
            context = context || document; //相当于if else判断
            //先检测一下当前浏览器是否支持getElementsByClassName，如果支持直接调用，否者调用自己的自己的方法
            if(document.getElementsByClassName){
                elements = context.getElementsByClassName(className);
            }else{
                var aTag = context.getElementsByTagName(tagName);
                for(var i = 0; i < aTag.length; i++){
                    if(aTag.className == className){   //这里如果是一个多类呢？<li class="item aa">item 2</li>
                        elements.push(aTag[i]);        //此处需要用正则表达式来处理
                    }
                }
            }
            return elements;
        },
        
        next: function(elem){
            do{
                elem = elem.nextSibling;
            }while(elem && elem.nodeType != 1);
            return elem;
        
        },
        
        first: function (elem){
            elem = elem.firstChild;
                return elem && elem.nodeType != 1 ? this.next(elem) : elem;
            
        }
    }
})();