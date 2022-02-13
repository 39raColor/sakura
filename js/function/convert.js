function dsizeImg(src, hiddenSrc){
  let height = hiddenSrc.rows;
  let width = hiddenSrc.cols;
  let spectr = height/width;
  let sh; /*2021.1201: add*/
  if (windowWeight == 'large') { /*2021.1201: add*/
    sh = 400;
  }
  else if(windowWeight == 'small') { /*2021.1201: add*/
    sh = 200;
  }
  let dsize = new cv.Size(sh/spectr, sh); /*2021.1201: change*/
  cv.resize(src, src, dsize, 0, 0, cv.INTER_AREA);
  if(spectr<1){
    if(width > 2048){
      let dsize = new cv.Size(2048, 2048*spectr);
      cv.resize(hiddenSrc, hiddenSrc, dsize, 0, 0, cv.INTER_AREA);
    }
  }
  else if(height>2048){
    let dsize = new cv.Size(2048/spectr, 2048);
    cv.resize(hiddenSrc, hiddenSrc, dsize, 0, 0, cv.INTER_AREA);
  }
  return src, hiddenSrc;
}
///////////////////////////////////////////////////////////////////////
function convImg_G2P(img) {
  let dst = img.clone();
  let height = img.rows;
  let width = img.cols;
  let idx_c;
  let idx_g;
  let ry;
  let rx;
  for (let y=0; y<height; y++){
    for (let x=0; x<width; x++){
      let pixel = dst.ucharPtr(y,x);
      ry = img.ucharPtr(y,x)[2]; //ソースの青チャンネル
      rx = img.ucharPtr(y,x)[1]; //ソースの緑チャンネル
      idx_g = rx + ry * 256;
      pixel[0] = r_gray[idx_g];
      pixel[1] = g_gray[idx_g];
      pixel[2] = b_gray[idx_g];
    }
  }
  return dst;
}
////////////////////////////////////////////////////////////////////////////////
function g2() {
  let src = cv.imread(srcImg);
  let hiddenSrc = cv.imread(hiddenImg);
  src, hiddenSrc = dsizeImg(src, hiddenSrc);
  let dst
  dst = convImg_G2P(src);
  cv.imshow('showCvtImg', dst);
  src.delete();
  dst.delete();
  let hiddenDst
  hiddenDst = convImg_G2P(hiddenSrc);
  cv.imshow('hiddenCvtImg', hiddenDst);
  hiddenSrc.delete();
  hiddenDst.delete();

  displayCvtCanvas();
  displayDl();
  cvted = 1; /*2021.1201: add*/
}
  /*2021.1201: add*/
function g2Sub() {
  let src2 = cv.imread(srcImg);
  let hsrc2 = cv.imread(hiddenImg)
  let g2subH = hsrc2.rows;
  let g2subW = hsrc2.cols;
  let spc =  g2subH/g2subW;
  let sh2
  if (windowWeight == 'large') {
    sh2 = 400;
  }
  else if(windowWeight == 'small') {
    sh2 = 200;
  }
  let dsize2 = new cv.Size(sh2/spc, sh2);
  cv.resize(src2, src2, dsize2, 0, 0, cv.INTER_AREA);
  let dst2
  dst2 = convImg_G2P(src2);
  cv.imshow('showCvtImg', dst2);
  src2.delete();
  dst2.delete();
}
