while(true){
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand === 3){
        console.log('Yesssss')
        break
    } else{
        console.log('Nooooooooo')
    }
}

for(var i = 1; i < 10; i++){
    if(i % 5 === 0){
        break
    } else{
        console.log(i)
    }
}

