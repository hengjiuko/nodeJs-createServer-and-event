//引入文件模块
var fs = require( "fs" );
//console.log( fs );

//什么时候文件读完了，什么时候在输出，不会阻塞，提高性能
fs.readFile( "input.txt",function( err,data ){
    if( err ){
        return err;
    }
    console.log( data.toString() );
} )

//首先执行这个
console.log( '---------------异步---读取文件已经完成' );