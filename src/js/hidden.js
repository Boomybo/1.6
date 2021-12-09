var brandOpenBtn = document.getElementById('brand-more-btn');
var brandCloseBtn = document.getElementById('brand-close-btn');
var brandCollection = document.querySelectorAll(".brands-card--hidden");

var sortOpenBtn = document.getElementById('sort-more-btn');
var sortCloseBtn = document.getElementById('sort-close-btn');
var sortCollection = document.querySelectorAll(".sort-card--hidden");

console.log(sortCollection)


let openAll = function (btn, collection, closeBtn){
    btn.addEventListener('click', function () {
        for (let i = 0; i < collection.length; i++){
            collection[i].classList.remove("brands-card--hidden","sort-card--hidden")
        }
        btn.classList.add("more__open-btn--hidden");
        closeBtn.classList.remove("more__close-btn--hidden")
    })
}

let closeAll = function (btn, collection,closeBtn) {
    closeBtn.addEventListener('click', function () {
        for (let i = 0; i < collection.length; i++){
            collection[i].classList.add("brands-card--hidden","sort-card--hidden")
        }
        btn.classList.remove("more__open-btn--hidden");
        closeBtn.classList.add("more__close-btn--hidden")
    })
}

openAll(brandOpenBtn,brandCollection,brandCloseBtn)
closeAll(brandOpenBtn,brandCollection,brandCloseBtn)


openAll(sortOpenBtn,sortCollection,sortCloseBtn)
closeAll(sortOpenBtn,sortCollection,sortCloseBtn)
