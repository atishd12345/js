var calc = require('./calc.js')

resultSub = calc.sub(5,4)
console.log(calc.add(4,5), +resultSub)

var fs = require('fs')
fs.writeFile('calc1.js', "let a=4",err=>console.log(`Saved ${err}`));
fs.appendFile('calc1.js', '\nlet b=3',err=>console.log('done'));
fs.readFile('calc1.js', 'utf8',(err,data)=> console.log(data));
fs.unlink('calc1.js',function(err){console.log('Deleted')});
