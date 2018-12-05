//引入http模块
var http = require( "http" );
console.log( http );

//调用http的createServer的方法,它会返回一个对象
//这个对象有一个listen方法，可以用来监听端口号
http.createServer( function( require, responce ){
    
    //1.发送http头部信息
      //-http状态码：200，意思是一切OK
      //-内容类型：text/plain,以普通文本来解释
      //-内容类型：text/html,以html来解释
    responce.writeHead( 200, { 'Content-Type':'text/plain; charset=utf-8'} );

    //发送响应信息
    responce.end( "创建第一个nodeJs服务器" )
} ).listen(2345)
//listen,监听端口，随便四个数字，一般不用0000

console.log( "服务器创建好了，2345" );