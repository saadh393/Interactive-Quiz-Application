document.querySelector('.floatingBtn').addEventListener('click', function(){
    this.classList.remove("floatingBtn")
}, true)

document.querySelector('.miniPlayer .close').addEventListener('click', function(){
    document.querySelector('.miniPlayer').classList.add("floatingBtn")
    console.log("Clicked")
}, true)