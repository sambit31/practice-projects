let searchbtn = document.querySelector(".search");
let usernameInput = document.querySelector(".username");
let profile = document.querySelector(".profile");
let card = document.querySelector(".card");

function getProfileData(username) {
  return fetch(`https://api.github.com/users/${username}`).then(raw => {
    if (!raw.ok) throw new Error("User not found");
    return raw.json();
  });
}

function getRepo(repo){
  return fetch(`https://api.github.com/users/${repo}/repos?sort=updated`).then((raw)=>{
    if (!raw.ok) throw new Error("no repo found");
    return raw.json();
  })
}



function decorateProfileData(details) {
  let data = `
  
    <div class="bg-white rounded-2xl shadow-md p-6 flex gap-6 hover:shadow-lg transition">
      <!-- Avatar -->
      <div class="w-28 h-28 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
        <img src="${details.avatar_url}" alt="User Avatar" class="w-full h-full object-cover" />
      </div>

      <!-- Info -->
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-semibold text-gray-900">${details.name || details.login}</h2>
            <p class="text-gray-600">@${details.login}</p>
          </div>
          <a href="${details.html_url}" target="_blank" rel="noopener noreferrer" 
             class="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition">
            View Profile
          </a>
        </div>

        <p class="mt-3 text-gray-700 leading-snug">
          ${details.bio || "No bio available"}
        </p>

        <!-- Stats -->
        <div class="mt-5 flex gap-6 text-sm text-gray-600">
          <span><strong class="text-gray-900">${details.public_repos}</strong> Repos</span>
          <span><strong class="text-gray-900">${details.followers}</strong> Followers</span>
          <span><strong class="text-gray-900">${details.following}</strong> Following</span>
        </div>

        <!-- Extra Info -->
        <div class="mt-5 grid grid-cols-2 gap-y-2 text-sm text-gray-700">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 2C8 2 4 6 4 10c0 7 8 12 8 12s8-5 8-12c0-4-4-8-8-8z"></path>
            </svg>
            <span>${details.location || "Not available"}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
            <a href="${details.blog || "#"}" class="text-blue-600 hover:underline">${details.blog || "No website"}</a>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 01-8 0"></path>
              <path d="M12 14v7"></path>
              <path d="M9 21h6"></path>
            </svg>
            <span>${details.company || "No company"}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 8v4l3 3"></path>
              <path d="M20.4 15.9A9 9 0 1115.9 3.6"></path>
            </svg>
            <span>Joined ${new Date(details.created_at).toDateString()}</span>
          </div>
        </div>
      </div>
    </div>`;

  profile.innerHTML = data;
}


function decorateRepoData(repos) {
  if (!repos.length) {
    repoSection.innerHTML = `<p class="text-gray-500">No repositories found.</p>`;
    return;
  }
  let repocards=repos.map((repo)=>` <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h3 class="text-lg font-bold text-gray-900 mb-2">
        <a href="${repo.html_url}" target="_blank" class="hover:underline">${repo.name}</a>
      </h3>
      <p class="text-gray-600 text-sm mb-4">${repo.description || "No description"}</p>
      <div class="flex items-center text-sm text-gray-500 space-x-6">
        <span>💻 ${repo.language || "Unknown"}</span>
        <span>⭐ ${repo.stargazers_count} Stars</span>
        <span>🍴 ${repo.forks_count} Forks</span>
        <span>🕒 Updated ${new Date(repo.updated_at).toDateString()}</span>
      </div>
    </div>`).join("");


       card.innerHTML = `${repocards}`;
}
searchbtn.addEventListener("click", function () {
  let name = usernameInput.value.trim();
  if (name.length > 0) {
    getProfileData(name).then((data) => decorateProfileData(data))
    getRepo(name).then((repodata)=>decorateRepoData(repodata))
      .catch((err) => {
        profile.innerHTML = `<p class="text-red-500">${err.message}</p>`;
        card.innerHTML = "";
      });
  } else {
    alert("Please enter a GitHub username!");
  }
});



