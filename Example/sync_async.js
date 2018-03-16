var fs = require('fs');
var event = require('events').EventEmitter;
var emitter = new event();
var app = {};



app.usingSync = function(){
    console.log('Starting to read');
    var nameList = fs.readFileSync('Names.txt', 'utf-8');
    console.log(nameList)
    console.log('Done');
}

app.usingAsync = function(){
    console.log('Starting to read');
    fs.readFile('Names.txt', 'utf-8',(err, data)=>console.log(data));
    //console.log(nameList)
    console.log('Done');
}
app.usingEventEmitter = function(){
    emitter.on('start', function(fileName){
        console.log('starting');
        fs.readFile(fileName, 'utf-8',function(err, data){
            if(err){
                console.log('Error'+err);
            } else{
                console.log(data);
            }
        });
        console.log('Ending');
    })

    emitter.emit('start', 'Names.txt');
    emitter.emit('start', 'Places.txt')
}

//app.usingSync();
//app.usingAsync();
app.usingEventEmitter();