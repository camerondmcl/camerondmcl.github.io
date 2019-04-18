
function showMenu() {
  var menu = document.getElementById("menuItems");
  var icon = document.getElementById("hamburgerIcon");
  console.log('hamburger menu clicked')
  if (menu.style.display == "block") {
    menu.style.display = "none";
    icon.style.backgroundColor = "#1B2733";
    icon.style.color = "#FFFFFF";
    console.log('removing hamburger menu')
  } else {
    menu.style.display = "block";
    icon.style.backgroundColor = "#FFFFFF";
    icon.style.color = "#1B2733";
    console.log('displaying hamburger menu')
  }
}

function navScroll() {
  console.log('sticky nav function called');
  console.log(window.pageYOffset);
  console.log(navBarY);
  if (window.pageYOffset >= navBarY) {
    navBar.classList.add("sticky");
    console.log('making nav sticky');
  } else {
    navBar.classList.remove("sticky");
    console.log('making nav not sticky');
  }
}

function playPause() {
  console.log('play/pause pressed');
  if (catVideo.paused){
    catVideo.play();
    console.log('playing');
  } else {
    catVideo.pause();
    console.log('paused');
  }
}

function muteAudio() {
  console.log('mute pressed');
  if (catVideo.muted){
    catVideo.muted = false;
    console.log('unmuting');
  } else{
    catVideo.muted = true;
    console.log('muting');
  }
}

function showModal(){
  modal.style.display = "block";
  console.log('opening modal');
}

function toggleAccordion(){
  console.log('clicked accordion');
  accordionContent.classList.toggle("active");
  var panel = accordion.nextElementSibling;
  if (panel.style.maxHeight){
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}
