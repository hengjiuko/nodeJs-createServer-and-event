//引入文件模块
var fs = require( "fs" );
//console.log( fs );

//同步读取文件,将读取的结果保存在变量中
var _data = fs.readFileSync( "input.txt" );

//先输出它，如果读取文件很大，就要等很长时间
console.log( _data.toString() );

//再执行它，上面那个文件的读取对这个执行造成了阻塞
console.log( "--------同步读取文件完成" );
