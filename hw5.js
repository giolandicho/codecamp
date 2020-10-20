const users = [
    {name: 'Joe', weight: 180, height: 72, reach: 32},
    {name: 'Rick', weight: 200, height: 80, reach: 40},
    {name: 'Steve', weight: 130, height: 66, reach: 29},
    {name: 'Mike', weight: 220, height: 75, reach: 30},
    {name: 'Jim', weight: 155, height: 70, reach: 28},
    {name: 'Melanie', weight: 100, height: 55, reach: 20},
    {name: 'Jessica', weight: 110, height: 57, reach: 21},
    {name: 'Marcus', weight: 175, height: 60, reach: 30},
    {name: 'Chloe', weight: 107, height: 56, reach: 22}
]
//HOF  that takes a list of numbers and returns an array of multipliers for each number
console.log(users.map(user=> user.weight/10));
//Function that takes an object and adds a property to it
function addProperty(users){
    for(let i=0; i<users.length; i++){
        if(users[i].weight/users[i].height >=2.5) {
        users[i]['goal'] = 'lose weight';
        }
        else{
        users[i]['goal'] = 'gain weight';
        }
    }
    console.log(users);
}
addProperty(users);
