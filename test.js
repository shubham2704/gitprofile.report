const url = "https://api.github.com/users/"

const username = document.getElementById('username');
const submit = document.getElementById('submit');

async function getdata(){
    const data = await fetch(`${url}${username.value}`);
    const fdata = await data.json();

    console.log(fdata);
}

submit.addEventListener('click', getdata);