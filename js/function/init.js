function Init() {
  URL.revokeObjectURL(showSrcImg.src);
  URL.revokeObjectURL(hiddenImg.src);
  input.value = null;
  srcImg.src = "";
  hiddenImg.src = "";
  cvted = 0; /*2021.1201: add*/
  displaySakura()
  displayInputCanvas();
  displayFirstPage();
  console.clear();
  console.log('setting-initialized');
}
