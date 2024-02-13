let nextDOM = document.getElementById('nextbtn');
let preDom= document.getElementById('prevbtn');
let carouselDom = document.querySelector('.coustom-carousel');
let listItemDom = document.querySelector('.coustom-carousel .list');
let thumbnailDom = document.querySelector('.coustom-carousel .thumbnail');
 
nextDOM.onclick =  function () {
    showSlider('next');
}
preDom.onclick= function() {
    showSlider('prev');
}
let timeRunning= 3000;
let timeAutoNext= 7000;
let runTimeout;
let runAutoRun = setTimeout(()=>{
    nextDOM.click();
},timeAutoNext);

function showSlider (type){
    let itemSlider = document.querySelectorAll('.coustom-carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.coustom-carousel .thumbnail .item')
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider [positionLastItem]);
        thumbnailDom.prepend(itemThumbnail [positionLastItem]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeout)
    runTimeout = setTimeout (()=>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)
    clearTimeout(runAutoRun);
    // runAutoRun = setTimeout(()=>{
    //     nextDOM.click();
    // },timeAutoNext)
}