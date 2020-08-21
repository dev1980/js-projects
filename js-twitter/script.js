// Global variable
let tweetList = document.querySelector('.tweet-list');

// Event listner

const eventListener = () => {
  document.querySelector('#form').addEventListener('submit', addTweet);
  tweetList.addEventListener('click', removeTweet);
  //Documents
  document.addEventListener('DOMContentLoaded', localStorageOnLoad);

}


// Function

const addTweet = (e) =>{
  e.preventDefault();
  let tweet = document.querySelector('.tweet').value; // get tweet

  
  // addTweet to local storage
  addTweetLocalStorage(tweet);

}

// Remove the tweet form the DOM

function removeTweet(e) {
  if(e.target.classList.contains('remove-tweet')){
    e.target.parentElement.remove();
  } 

  //Remove from the localstorage
 removeTweetLocalStorage(e.target.parentElement.textContent);
}

//Add the tweet to the localStorage

function addTweetLocalStorage(tweet) {
let tweets = getTweetsFromStorage();
tweets.push(tweet);
//Convert tweets to string
localStorage.setItem('tweets', JSON.stringify(tweets));

}

function getTweetsFromStorage(){
  let tweets;
  const tweetsLS = localStorage.getItem('tweets')
  if(tweetsLS == null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetsLS);
  }
  return tweets;
}

// Print local storage

function localStorageOnLoad() {
  let tweets = getTweetsFromStorage();
  //loop through the storage and print the value
  tweets.forEach(function(tweet){
//create delete button

let removeTweet = document.createElement('a');
removeTweet.className = "remove-tweet"
removeTweet.textContent = 'X';

// create li element
let li = document.createElement('li');
li.textContent = tweet;
li.appendChild(removeTweet)

tweetList.appendChild(li)

  })
  
}

function removeTweetLocalStorage(tweet){
  //get tweets from storage
let tweets = getTweetsFromStorage();
// Remote the x from the tweets

const tweetDelete = tweet.substring(0, tweet.length-1);
tweets.forEach(function(tweetLS, index){
if(tweetDelete === tweetLS) {
  tweets.splice(index, 1);
}
});

 localStorage.setItem('tweets', JSON.stringify(tweets));

}

eventListener();