let imgBox= document.querySelector('.img-box');
let imgWrap= document.querySelector('.img-wrap');
let originalImg= document.querySelector('#originalImg');
let line= document.querySelector('#line');

let leftSpace= imgBox.offsetLeft;

originalImg.style.width= imgBox.offsetWidth +"px";

imgBox.onmousemove = function(e){
    console.log("Hello");
    let boxWidth = (e.pageX-leftSpace)+"px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}