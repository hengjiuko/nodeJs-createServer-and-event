//发布者,只有发布者，才能发送消息
var pub = {
    publish : function(){
        _depObj.notify();
    }
}

//订阅者
var sub1 = {
    updata : function(){
        console.log( 111 );
    }
}

var sub2 = {
    updata : function(){
        console.log( 222 );
    }
}

var sub3 = {
    updata : function(){
        console.log( 333 );
    }
}

//主题对象,用来发布消息的
function Dep(){

    //三个订阅者
    this.subs = [ sub1,sub2,sub3 ];
}

Dep.prototype.notify = function(){
    for( var i=0; i<this.subs.length; i++ ){
        this.subs[i].updata();
    }
}


//发布者发布一个消息
//触发notify方法，被订阅者接收到，触发订阅者的updata
var _depObj=new Dep(); 

pub.publish();

















