// write a for loop that prints your name 10 times without using code snippets 


// for(let i = 0; i<10;i++){
//     console.log('Hassan')
// }


// write a while loop that prints your surname 20 times

// let counter = 0

// while(counter < 20){
//     console.log('Daahir')
//     counter++;
// }

// write a do while loop that don't print anything, but put a console.log('I am in the loop body')

// do{
//     console.log('i am in the loop')
    
// } 
// while(false)

// write an array that holds 10names of your friends and family

let FriendsAndFamily = [ 'Halimo' , 'Jama', 'Farah', 'Noor', 'Bilan', 'Saynab', 'Sacdiya', 'Hassan', 'Fatima', 'Ali']

// How many iteration functions come with arrays

// FriendsAndFamily.forEach()
// FriendsAndFamily.map()
// FriendsAndFamily.filter()
// FriendsAndFamily.reduce()
// FriendsAndFamily.every()

// Print every element in the FamilyAndFriends array,using forEach(),  and put hello in front of every name

FriendsAndFamily.forEach(
    function(name){
        console.log('Hi ' + name)
    }
)


// convert the above function to an arrow function

FriendsAndFamily.forEach(name =>console.log('Hi ' + name))
