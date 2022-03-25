var defaultHistory = document.querySelector('.header-search-history');

defaultHistory.onmousedown = function(e) {
    e.preventDefault();
}
var from_1 = document.querySelector('.methor-1');

var clickjoin = document.querySelector('.header_itemm');
var from_2 = document.querySelector('.methor-2');
const active_product = document.querySelectorAll('.navication__select')
var ArrayAS = []

for (var i of active_product) {
    ArrayAS.push(i)
}
ArrayAS.map(function(i) {
    i.onclick = function() {
        i.classList.add('navication__select--item')
        i.classList.add('active')
    }
})
var clickmodal = document.querySelector('.inter-cpu-ed ');
var modal = document.querySelector('.modal');

clickmodal.onclick = function(e) {
    modal.classList.add("open")
    from_1.classList.add("open")
    from_2.classList.remove("open")
}
var remove = document.querySelector('.modal-overlay');
remove.onclick = function(e) {
    modal.classList.remove("open")
}
var foaMy = document.querySelector('.form-1')
console.log(foaMy)
foaMy.onclick = function(e) {
    e.stopPropagation();

}


clickjoin.onclick = function(e) {
    modal.classList.add("open")
    from_2.classList.add("open")
    from_1.classList.remove("open")
}
from_1.onclick = function(e) {
    e.stopPropagation();
}
from_2.onclick = function(e) {
    e.stopPropagation();
}
var next_join = document.querySelector('.juyg');
next_join.onclick = function(e) {
    e.preventDefault()
    from_1.classList.remove('open')
    from_2.classList.add('open')
}
var next_run = document.querySelector('.cloang');

next_run.onclick = function(e) {
    e.preventDefault()
    from_1.classList.add("open")
    from_2.classList.remove("open")
}
var closeModal_1 = document.querySelector('.methor-1');
closeModal_1.onclick = function(e) {
    e.preventDefault()
    showModal.classList.remove('open')
}
var closeModal_2 = document.querySelector('.methor-2');
closeModal_2.onclick = function(e) {
    e.preventDefault()
    showModal.classList.remove('open')
}