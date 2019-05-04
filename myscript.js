function nextSongButton() {
  let element = document.getElementsByClassName("ytp-next-button");
  if (element && element.item(0)) {
    window.addEventListener("keydown", function(e) {
      if (e.key === "n" || e.which === 78) {
        element.item(0).click();
      }
    });
  }
}

nextSongButton();
