
window.addEventListener('load', fillList);
const dogList = document.getElementById('dropdownMenu');
dogList.addEventListener('change', pickBreed);
//Fetch all of the dog breeds
function fillList(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => addBreed(data.message))
    .catch(error => console.log('Error: ' + error));
}
//Populate list with dog breeds
function addBreed(data){
    let list = '';
    Object.keys(data)
    .forEach(key => list += `<option value="${key}">${key}</option>`);
    document.getElementById('dropdownMenu').innerHTML = list;    
}
//fetch image of selected dog breed
function pickBreed(){
    let pickedBreed = dogList.options[dogList.selectedIndex].value;
    fetch(`https://dog.ceo/api/breed/${pickedBreed}/images/random`)
    .then(res => res.json())
    .then(data => document.getElementById('selectedImage').src = data.message)
    .then(console.log('done!'))
    .catch(error => console.log('Error: ' + error));
}
//fetch random dog image
fetch("https://dog.ceo/api/breed/hound/images/random")
.then(res => res.json())
.then(data => document.getElementById('dog').src = data.message)
.catch(error => console.log('Error: ' + error));

