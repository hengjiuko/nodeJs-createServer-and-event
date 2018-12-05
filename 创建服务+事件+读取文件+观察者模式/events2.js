//引入events模s块
var events = require( "events" );
//console.log( events );

//创建一个事件对象
var eventEmitter = new events.EventEmitter();

//绑定一个事件
eventEmitter.on( "xxx",function(){
    console.log( "事件xxx被触发" );
} )

//计时器，延长几秒触发事件
setTimeout( function(){
    //触发事件
    eventEmitter.emit( "xxx" );
},2000 )




console.log( "js已经执行完毕" );