// DOM SUBMIT, COMMENT_LIST, COMMENT_INPUT
const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector(".comments");
const commentInput = document.querySelector('.comment-input');

function template(data) {
    commentList.insertAdjacentHTML('afterbegin', `
    <div class="comment flex items-start justify-start">
        <img class="comment-avatar" src='${data.avatar}' alt="${data.author}" />
            <div class="flex-1">
                <h3 class="comment-author">${data.author}</h3>
                <p class="comment-body">${data.comment}</p>
            </div>
    </div>
    `)
};

function appendComment(event) {
    // add dynamic data
    const data = {
        avatar : "https://picsum.photos/200",
        comment : commentInput.value,
        author : "Antonio K"
    };
    // prevent form from submitting
    event.preventDefault();

    if (commentInput.value.length < 1) return;

    // append data
    template(data);

    // clear input field
    commentInput.value = " ";

    //save the list to localStorage
    localStorage.setItem('commentListing', commentList.innerHTML);
};

submit.addEventListener('click', appendComment, false);

const saved = localStorage.getItem('commentListing');

if (saved) {
    commentList.innerHTML = saved;
}