// Global variables
let tweetList = document.querySelector('.tweet-list');


//Event Listners

let eventListener = () =>{
  document.querySelector('#form').addEventListener('submit', newTweet)
}



// Form Submission


//Functions

let newTweet = (e) => {
e.preventDefault();
// READ TEAXT AREA VALUE
let tweet = document.querySelector('.tweet').value;

// create list to add the tweet

let li = document.createElement('li');
li.textContent = tweet;
tweetList.appendChild(li)

}

eventListener();