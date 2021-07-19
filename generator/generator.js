var jimp = require('jimp');

// var generate = function generate(){

    function between(min,max){
        return Math.floor(
            Math.random() * (max - min) + min
        )
    }

    var pose = './images/poses/pose' + between(1,4);
    var poseimg = pose + '/pose.jpg';
    var hat = pose + '/hat'+ between(1,4) + '.png';
    var chain = pose + '/chain'+ between(1,3) + '.png';

    var images = [poseimg, hat, chain];
    
    var jimps = [];
    
    for(var i=0; i< images.length; i++){
        jimps.push(jimp.read(images[i]));
    }
    
    Promise.all(jimps).then(function(data){
        return Promise.all(jimps);
    }).then(function(data){
        data[0].composite(data[1],0,0);
        data[0].composite(data[2],0,0);
        data[0].resize(256,256);
        data[0].pixelate(10);
        data[0].write('./images/final.png',function(){
            console.log("wrote the image");
        });
    });
// }


