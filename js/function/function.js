/*display*/
function displayFirstPage() {
    fpg.style.display = "block";
    spg.style.display = "none";
}
function displaySecondPage() {
    fpg.style.display = "none";
    spg.style.display = "block";
}
function displayCvtCanvas() {
    camvasI.style.display = "none";
    camvasC.style.display = "block";
}
function displayInputCanvas() {
    camvasI.style.display = "block";
    camvasC.style.display = "none";
}
function displaySakura() {
    sakuraI.style.display = "block";
    dlI.style.display = "none";
}
function displayDl() {
    sakuraI.style.display = "none";
    dlI.style.display = "block";
}
 /*2021.1201: add*/
function resizeInput() {
    windowWidth = document.documentElement.clientWidth;
    if (windowWidth >= 700) {
        windowWeight = 'large';
        srcImg.height = 400;
    }
    else {
        windowWeight = 'small';
        srcImg.height = 200;
    }
}
 /*2021.1201: add*/
function resize() {
    windowWidth = document.documentElement.clientWidth;
    if (windowWidth >= 700 && windowWeight == 'small') {
        windowWeight = 'large';
        if (cvted) {
            g2Sub();
        }
        else {
            srcImg.height = 400;
        }
    }
    else if (windowWidth < 700 && windowWeight == 'large') {
        windowWeight = 'small';
        if (cvted) {
            g2Sub();
        }
        else {
            srcImg.height = 200;
        }
    }
}
////////////////////////////////////////////////////////////////////////////////
function readImage() {
    srcImg.src = URL.createObjectURL(input.files[0]);//file の受け渡し
    hiddenImg.src = URL.createObjectURL(input.files[0]);
    resizeInput(); /*2021.1201: add*/
    displaySecondPage();
    displayInputCanvas();
    displaySakura()
}
function returnFirstPage() {
    console.log('Return First Page?');
    let homeback = window.confirm('現在の内容は破棄されます。\nホームに戻りますか？');
    if (homeback) Init();
    else console.log('cancel return');
}
function changeImg() {
    console.log('change image?');
    let change = window.confirm('現在の内容は破棄されます。\n画像を変更しますか？');
    if (change) {
        Init();
        input.click();
    }
    else console.log('not change');
}
/*DOWNLOAD UNIT*/
function dataUriToBlob(dataUri) {
    const b64 = atob(dataUri.split(',')[1]);
    const u8 = Uint8Array.from(b64.split(''), e => e.charCodeAt());
    return new Blob([u8], { type: 'image/png' });
}
