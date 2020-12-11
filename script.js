
const input = document.getElementById('username-test');
const name = document.querySelector('h1');
const bio = document.querySelector('h2');
const image = document.querySelector('.profile');
const submit = document.getElementById('button');
const buttonElement = document.getElementById('btn');
const url = "https://api.github.com/users/"




async function showResults(){
	const data=await fetch(`${url}${input.value}`)
    const fdata=await data.json();
    console.log(fdata)
    name.innerHTML = fdata.login
    bio.innerHTML = fdata.bio;
    image.innerHTML = `<img src = "${fdata.avatar_url}">`;

}

submit.addEventListener('click', showResults);



