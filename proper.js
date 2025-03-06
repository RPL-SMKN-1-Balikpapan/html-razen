// active
const navbarnavv = document.querySelector
('.navnav');

document.querySelector('#option').
onclick = () => {

    navbarnavv.classList.toggle('active');
    
};

document.getElementById("search-icon").addEventListener("click",function() {
        let searchInput = document.getElementById("search-input");
        searchInput.classList.toggle("active")
        if (searchInput.classList.contains("active")) {
            searchInput.focus(); // Fokus ke input setelah muncul
        } else {
            searchInput.blur(); // Hilangkan fokus saat disembunyikan
        }
    })