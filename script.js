function sidebar_open() {
    document.getElementById("hamburger-icon").style.display = "block";
    document.getElementById("hamburger-icon").style.position = "absolute";
    document.getElementById("hamburger-icon").style.zIndex = "+2";
    document.getElementById("hamburger-icon").style.width = "100%"
    document.getElementById("hamburger-icon").style.height = "100%"
    // document.getElementById("hamburger-icon").style.transition = "all 2s linear 5s";
  }
  
function sidebar_close() {
    document.getElementById("hamburger-icon").style.display = "none";
    document.getElementsByClassName("menu-tabs").style.display = "none";
    // document.getElementById("hamburger-icon").style.transition = "all 2s linear 5s";
    // document.getElementById("hamburger-icon").style.transitionProperty = "2s";
}