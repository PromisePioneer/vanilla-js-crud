// id selector


let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.querySelector('.msg');
let posts = document.getElementById('posts')


form.addEventListener('submit', (e) => {
    e.preventDefault();


    formValidation()
})



let formValidation = () => {
    if (input.value === '') {
       return  msg.innerHTML = "Post Cannot be blank";
    }
    else {
        acceptData();
    }

}


let data = {}

let acceptData = () => {
    data["text"] = input.value;

    createPost();
}


let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
         <ion-icon class="icon" onClick="editPost(this)" name="create-outline"></ion-icon>
         <ion-icon class="icon" onClick="deletePost(this)" name="trash-outline"></ion-icon>
        </span>
    </div>
    `;

    // reset form
    input.value = "";
}


















