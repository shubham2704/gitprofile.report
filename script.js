// Github API URL
const url = "https://api.github.com/users/";

// Getting Input feild and Button
const username = document.getElementById('username');
const submit = document.getElementById('submit');

// Getting Dom Elements 
const mainProfile = document.getElementById('main-profile');
const basicProfile = document.getElementById('basic-profile');
const extraProfile = document.getElementById('extra-profile');

// Fetch Function
async function getdata(){
    const mainData = await fetch(`${url}${username.value}`);
    const data = await mainData.json();

    showdata(data);
};

function showdata(data) {
    // adding data to main profile div
    mainProfile.innerHTML = `
    <div class="column level-item has-text-centered">
        <!-- Empty to make data center -->
     </div>
  
    <div class="column level-item has-text-centered">
        <p class="heading"><img src="${data.avatar_url}" alt="Placeholder image" width="40%" height="90%"></p>
        <p class="title">${data.login}</p>
        <p class="px-4 body">${data.bio}</p>
        <p class="body">Location : ${data.location}</p>
        <p class="heading">Joined At : ${data.created_at}</p>
    </div>

    <div class="column level-item has-text-centered">
        <!-- Empty to make data center -->
    </div>`;

    // adding data to basic profile div
    basicProfile.innerHTML = `
      <div class="column level-item has-text-centered">
          <p class="heading">Followers</p>
          <p class="title">${data.followers}</p>
      </div>
      
      <div class="column level-item has-text-centered">
        <p class="heading">Following</p>
        <p class="title">${data.following}</p>
      </div>
      
      <div class="column level-item has-text-centered">
        <p class="heading">Public Repos</p>
        <p class="title">${data.public_repos}</p>
      </div>

      <div class="column level-item has-text-centered">
        <p class="heading">Public Gists</p>
        <p class="title">${data.public_gists}</p>
      </div>`;

    // adding data to exata profile div
    extraProfile.innerHTML = `
      <div class="column level-item has-text-centered">
        <p class="heading">Email</p>
        <p class="body">${data.email}</p>
      </div>

      <div class="column level-item has-text-centered">
        <p class="heading">Twitter</p>
        <p class="body"><a href="https://twitter.com/${data.twitter_username}">${data.twitter_username}</a></p>
      </div>

      <div class="column level-item has-text-centered">
        <p class="heading">Company</p>
        <p class="body"><a href="${data.company}">${data.company}</a></p>
      </div>

      <div class="column level-item has-text-centered">
        <p class="heading">Website</p>
        <p class="body"><a href="${data.blog}">${data.blog}</a></p>
      </div>`;
}


submit.addEventListener('click', getdata);





