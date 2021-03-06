// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
let key = document.querySelector(".video-key");
let trailerToggle = document.querySelector(".trailer");
let modalPlayer = document.querySelector(".trending-modal");
let modalClose = document.querySelector(".close");
let actualPlayer = document.querySelector("#player");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.


var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "780",
    width: "1280",
    videoId: key.textContent,
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  trailerToggle.addEventListener("click", () => {
    modalPlayer.style.display = "flex";
    event.target.playVideo();
  });
  // event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
// var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    player.stopVideo();
    // setTimeout(stopVideo, 10000);
    // done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

modalClose.addEventListener("click", () => {
  modalPlayer.style.display = "none";
  player.stopVideo();
});
