const modal = document.getElementById('modal');
document.getElementById('open').addEventListener('click', function (){
    modal.classList.add('show-modal');
})

document.getElementById('close').addEventListener('click', function (){
    modal.classList.remove('show-modal');
})

window.addEventListener('click', function (e){
    e.target === modal ? modal.classList.remove('show-modal') : false;
})
