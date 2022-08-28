function something(greet, name){
    function sayHi(){
        console.log(greet, name)
    }

    sayHi()
}

something('Good Morning', 'Faysal Riyad')
something('Good Morning', 'Parvez Zihad')


/* function greeting(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }
    }

    var message = greet + ' ' + getFirstName()
    console.log(message)
}

greeting('Good Morning', 'Faysal Alam')
greeting('Good Morning') */


function greeting(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        } else{
            return ''
        }
    }

    var message = greet + ' ' + getFirstName()
    console.log(message)
}

greeting('Good Morning', 'Faysal Alam')
greeting('Good Morning')

