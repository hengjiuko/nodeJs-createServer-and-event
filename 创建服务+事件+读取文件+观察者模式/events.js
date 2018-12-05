//引入events模s块
var events = require( "events" );
//console.log( events );

//创建一个事件对象
var eventEmitter = new events.EventEmitter();

//绑定一个事件
eventEmitter.on( "xxx",function(){
    console.log( "事件xxx被触发" );

    //触发事件
    eventEmitter.emit( "aaa" );
} )

//绑定第二个事件
eventEmitter.on( "aaa",function(){
    console.log( "事件aaa被触发" );
} )

//触发事件
eventEmitter.emit( "xxx" );

console.log( "js已经执行完毕" );