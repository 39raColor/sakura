let windowWidth; /*2021.1201: add*/
let windowWeight; /*2021.1201: add*/
let cvted = 0; /*2021.1201: add*/
/*1ページ目 -item*/
let fpg = document.getElementById('firstPage');
/*1ページ目 -button*/
let input = document.getElementById('inputFile'); //画像読み込みによって起動
let fileArea = document.getElementById('firstPage'); //画像読み込みによって起動
////////////////////////////////////////////////////////////////////////////////
/*2ページ目 -item*/
let spg = document.getElementById('secondPage');

let camvasI = document.getElementById('inputCanvas');
let srcImg = document.getElementById('showSrcImg');
let hiddenImg = document.getElementById('hiddenSrcImg');

let camvasC = document.getElementById('cvtCanvas');
let cvtImg = document.getElementById('showCvtImg');
let hiddenCanvas = document.getElementById('hiddenCvtImg');
/*2ページ目 -button*/
/*icon*/
let homeI = document.getElementById('homeIcon');
let sakuraI = document.getElementById('sakuraIcon');
let dlI = document.getElementById('dlIcon');
let changeI = document.getElementById('changeIcon');
/*隠れボタン*/
let g2pbtn = document.getElementById('cvtBtn');
let tohome = document.getElementById('homeBtn'); //ホームボタン
let tochange = document.getElementById('changeBtn'); //画像変更ボタン
let dl = document.getElementById('download');
