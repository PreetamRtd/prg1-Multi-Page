const pagenum = document.getElementById("pagenum");
const postContainer = document.getElementById("post-container");
const postInput = document.getElementById("post-input");
let count = 0;
function btnclick(pgn) {
    if (pgn == 1) {
        pagenum.innerHTML = "1";
    } else if (pgn == 2) {
        pagenum.innerHTML = "2";
    }
}

function postclick() {
    const HTMLString = `
    <div class="post">
    <div class="user-name">-9611451585</div>
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

