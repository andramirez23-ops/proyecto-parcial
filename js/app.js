const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".card");

const noResults = document.getElementById("noResults");

const themeToggle = document.getElementById("themeToggle");


// =========================
// FILTRO DINÁMICO
// =========================

searchInput.addEventListener("keyup", () => {

    const searchText =
        searchInput.value.toLowerCase();

    let visibleCards = 0;

    cards.forEach(card => {

        const title =
            card.querySelector("h2")
            .textContent
            .toLowerCase();

        const description =
            card.querySelector("p")
            .textContent
            .toLowerCase();

        if(
            title.includes(searchText) ||
            description.includes(searchText)
        ){

            card.style.display = "block";

            visibleCards++;

        }else{

            card.style.display = "none";

        }

    });

    if(visibleCards === 0){

        noResults.classList.remove("hidden");

    }else{

        noResults.classList.add("hidden");

    }

});


// =========================
// DARK MODE
// =========================

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(
        document.body.classList.contains("dark-mode")
    ){

        themeToggle.textContent =
            "☀️ Modo Claro";

    }else{

        themeToggle.textContent =
            "🌙 Modo Oscuro";

    }

});


// =========================
// REVEAL SCROLL
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card => {

    observer.observe(card);

});