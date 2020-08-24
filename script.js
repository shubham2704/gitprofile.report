
const input = document.getElementById('username');
const name = document.querySelector('h1');
const name2 = document.querySelector('h2');
const submit = document.getElementById('button');
const buttonElement = document.getElementById('btn');
const url = "https://api.github.com/users/"




async function showResults(){
	const data=await fetch(`${url}${input.value}`)
	const fdata=await data.json();
    console.log(fdata)
    name2.innerHTML = fdata.login

}

submit.addEventListener('click', showResults);



