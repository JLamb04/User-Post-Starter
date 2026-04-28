const postListEl = document.querySelector(".posts");
const id = localStorage.getItem("id")

async function onSearchhange(event) { 
    const id = event.target.value
   renderPosts(id)
}

async function renderPosts(id) { 
    const posts = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData =  await posts.json();
postListEl.innerHTML = postsData.map(posts => postHTML(posts)).join('');
}

functionpostHTML(posts) {
    return
     `<div class="posts>"
    <div class="posts__title">
        ${posts.title}
        </div>
        <p class="post__body">
            ${post.body}
            </p>
    </div> 
     `
}

renderPosts(id);
