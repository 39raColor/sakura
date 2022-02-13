window.addEventListener('load', () => {
  console.log('Window Loaded');
  fpg.style.display = "block";
  console.log('onReady : Success');
  listenEvent();
});

//iosスクロール禁止
function disableScroll(event) {
  event.preventDefault();
}

