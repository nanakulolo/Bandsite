// creating comments array

const commentsArray = [
    {
      name: "Christina Cabrea",
      comment:
        "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
      date: "10/26/2023",
    },
    {
      name: "Issac Tadesse",
      comment:
        "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
      date: "10/20/2023",
    },
    {
      name: "Victor Pinto",
      comment:
        "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
      date: "11/02/2023",
    },
  ];
  
  // function to diplay comments
  const commentsSection = document.querySelector("#comments__section");
  
  function displayComments() {
    for (let i = 0; i < commentsArray.length; i++) {
      displayComment(commentsArray[i]);
    }
  }
  // defining the space under the comment button//
  function displayComment(comment) {
    const post = document.querySelector("#comments__section");
  
    //creating container
    const commentsPost = document.createElement("div");
    commentsPost.setAttribute("class", "commentspost");
  
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
    postTimestamp.textContent = comment.date;
    postSubcontainer.append(postTimestamp);
  
    //creating preloaded comment
    const postComment = document.createElement("div");
    postComment.setAttribute("class", "commentsposts__comments");
    postComment.textContent = comment.comment;
    postContainer.append(postComment);
  
    //creating attribute class for line divider
    const postsDivide = document.createElement("hr");
    postsDivide.setAttribute("class", "comments__divide");
  
    // posts the newly created comment to the top of the comment section
    post.prepend(commentsPost);
    post.prepend(postsDivide);
  }
  
  // creating functionality for comment button
  
  // selecting form element
  const form = document.querySelector("#form");
  
  //add event listener when commenter submits form
  form.addEventListener("submit", function (event) {
    // b) prevent default form behaviour to prevent refresh
    event.preventDefault();
  
    // c) test case to verify form will take in inputs
    //console.log(event.target.name.value);
    //console.log(event.target.comment.value);
  
    //storing inputs values into variables
    const newCommenter = event.target.name.value;
    const newComment = event.target.comment.value;
  
    //creating new current date varibable
    const today = new Date();
    const date =
      "0" +
      (today.getMonth() + 1) +
      "/" +
      today.getDate() +
      "/" +
      today.getFullYear();
    const dateTime = date;
  
    // creating new comment object to add to existing comment array
    const newPost = {
      name: newCommenter,
      comment: newComment,
      date: dateTime,
    };
  
    //call display comments function with updated array
    displayComment(newPost);
    //reseting the form 
    form.reset();
  });
  // calling function to display comment section
  displayComments();
  