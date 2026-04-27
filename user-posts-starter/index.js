// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
console.log("Hello World!");

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await users.json();
  console.log(userData);
  const userList = document.querySelector(".user-list");
  const userHTML = userData
    .map(
      (user) => `<div class="user-card">
     <div class="user-card__container">
     <h3>${user.name}</h3>
     <p><b>Email:</b> ${user.email}</p>
      <p><b>Phone:</b> ${user.phone}</p>
     <p><b>Website:</b> <a href="${user.website}" target="_blank">
     ${user.website}
     </a>
    </div>
  </div>`,
    )
    .join("");
  userList.innerHTML = userHTML;
}

main();