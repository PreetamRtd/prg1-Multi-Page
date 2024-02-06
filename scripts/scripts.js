const postContainer = document.getElementById("post-container");
const postInput = document.getElementById("post-input");


function postclick() {
    const HTMLString = `
    <div class="post">
    <div class="user-name">me</div>
    <br>
    <div class="post-content">
        ${postInput.value}
    </div>
    </div>
    `
    if(postInput.value !== "") {
    postContainer.innerHTML = postContainer.innerHTML + HTMLString;
    }
    postInput.value = "";
}

