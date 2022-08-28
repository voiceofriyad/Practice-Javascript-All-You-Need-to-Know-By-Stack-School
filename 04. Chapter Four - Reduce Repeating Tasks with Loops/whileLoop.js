var i = 0
while(i < 5){
    console.log('riyad')
    i++
}

var isRunning = true
while (isRunning){
    var rand = Math.floor(Math.random() * 10 + 1) 
    if(rand === 5){
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    } else{
        console.log('You have got ' + rand)
    }
}

