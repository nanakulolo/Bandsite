// import the CommentsAPI from the band-site-api.js
import CommentsAPI from "./band-site-api.js";

// Create an instance (object) of the JokesAPI class
// ------------------------------------------------
const commentsApi = new CommentsAPI("f86f619d-efa4-4342-b039-a931d732251a");

// function to diplay comments
const commentsSection = document.querySelector("#comments__section");

async function displayComments() {
  //clear comments section
  commentsSection.textContent = "";

  const comments = await commentsApi.getComments();
  
  for (let i = 0; i < comments.length; i++) {
    displayComment(comments[i]);
  }
}

// defining the space under the comment button//
function displayComment(comment) {
  //creating container
  const commentsPost = document.createElement("div");
  commentsPost.setAttribute("class", "commentspost");
  commentsSection.append(commentsPost);

  //creating username avatar
  const postImage = document.createElement("img");
  postImage.setAttribute("class", "commentsposts__image");
  postImage.setAttribute("src", "../assets/images/avatar.jpg");
  commentsPost.append(postImage);

  //creating subcontainer for name and comment
  const postContainer = document.createElement("div");
  postContainer.setAttribute("class", "commentsposts__container");
  commentsPost.append(postContainer);

  //creating subcontainer for name and comment
  const postSubcontainer = document.createElement("div");
  postSubcontainer.setAttribute("class", "commentsposts__subcontainer");
  postContainer.append(postSubcontainer);

  //creating preloaded name of the poster
  const postName = document.createElement("div");
  postName.setAttribute("class", "commentsposts__name");
  postName.textContent = comment.name;
  postSubcontainer.append(postName);

  //creating preloaded time stamp
  const postTimestamp = document.createElement("div");
  postTimestamp.setAttribute("class", "commentsposts__timestamp");
  const formatedCommentDate = formatDate(comment.timestamp);
  postTimestamp.textContent = formatedCommentDate;
  postSubcontainer.append(postTimestamp);

  //creating preloaded comment
  const postComment = document.createElement("div");
  postComment.setAttribute("class", "commentsposts__comments");
  postComment.textContent = comment.comment;
  postContainer.append(postComment);

  //creating attribute class for line divider
  const postsDivide = document.createElement("hr");
  postsDivide.setAttribute("class", "comments__divide");
  commentsSection.append(postsDivide);
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
}

// creating functionality for comment button

// selecting form element
const form = document.querySelector("#form");

//add event listener when commenter submits form
form.addEventListener("submit", async (event) => {
  // b) prevent default form behaviour to prevent refresh
  event.preventDefault();
  // creating new comment object to add to existing comment array
  const newPost = {
    name:  event.target.name.value,
    comment: event.target.comment.value,
  };

  await commentsApi.postComment(newPost);
  
  displayComments();

  //reseting the form 
  form.reset();
});

// calling function to display comment section
displayComments();
