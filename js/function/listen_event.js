function listenEvent() {
  input.addEventListener("change",readImage,false);
  fileArea.addEventListener('dragover', function(e){
    e.preventDefault();
    fileArea.classList.add('dragover');
  });
  fileArea.addEventListener('dragleave', function(e){
    e.preventDefault();
    fileArea.classList.remove('dragover');
  });
  fileArea.addEventListener('drop', function(e){
    e.preventDefault();
    fileArea.classList.remove('dragover');

    // ドロップしたファイルの取得
    let files = e.dataTransfer.files;

    // 取得したファイルをinput[type=file]へ
    input.files = files;
    
    if(typeof files[0] !== 'undefined') {
        console.log('drop success');
        readImage();
    } else {
        console.log('drop error');
    }
  });
  
  tohome.addEventListener('click', returnFirstPage);

  g2pbtn.addEventListener('click', g2);

  tochange.addEventListener('click', changeImg);

  download.addEventListener('click', e => {
    const data = hiddenCanvas.toDataURL();
    const url = URL.createObjectURL(dataUriToBlob(data));
    download.href = url;
  });
  //iosのスクロース禁止
  document.addEventListener('touchmove', disableScroll, { passive: false });
  
     /*2021.1201: add*/
  window.addEventListener('resize', resize);
}
