// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

// STEP 1: The line of code below is what lets JavaScript find the elements that
// we want to make clickable, i.e., the elements we want to add our event
// listener to. Without JavaScript, clicking on these heart shapes does nothing.
// Uncomment the code and refresh the demo page. 

// const articleHearts = document.querySelectorAll(".like-glyph");


// STEP 2: In order for the call to the server and the update of the DOM to
// work, we need to add a click event listener to our hearts. That's Pillar 1,
// Recognize Events.

// Uncomment this code:

// for (const glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      alert("Click event recognized by JavaScript");
      // STEP 3: Here we're using Pillar 2 (DOM Manipulation) to update the
      // screen and mimicking Pillar 3 (Server Communication) to only update the
      // screen if the sending of information to the server succeeds.
      // Uncomment the 3 lines below:
      // heart.innerText = glyphStates[heart.innerText];
      // heart.style.color = colorStates[heart.style.color];
      // alert(serverMessage);
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

// STEP 4: 

// When all the STEPs' code changes have been complete, you'll be able to see a
// working demonstration of our reference example. Sure, it's maybe not as
// pretty as a professional site, but they're only different from our site in
// style, not substance.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
