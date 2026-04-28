// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
 const userList = document.querySelector(".user-list");

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await users.json();
  userList.innerHTML = userData.map((user) => userHTML(user)).join("");
}

main();
 
function userHTML(user) {
     `<div class="user-card">
     <div class="user-card__container">
     <h3>${user.name}</h3>
     <p><b>Email:</b> ${user.email}</p>
      <p><b>Phone:</b> ${user.phone}</p>
     <p><b>Website:</b> <a href="${user.website}" target="_blank">
     ${user.website}
     </a><p>
    </div>
  </div>`
}