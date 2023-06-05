const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
    .catch(error => console.log(error))
}

const loadUser2 = async() => {
 try{
    const res = await  fetch('https://randomuser.me/api/?gender=female')
    const data = await res.json();
    displayUser(data);
 }
 catch(error){
    console.log(error)
 }
}

const displayUser = user => {
    const genderTag = document.getElementById('gender')
    genderTag.innerHTML = user.results[0].gender;

    const name = user.results[0].name.first + ' ' + user.results[0].name.last + ' ' + user.results[0].name.title;
    document.getElementById('name').innerHTML = name;

    console.log(user.results[0].name);
}

loadUser();