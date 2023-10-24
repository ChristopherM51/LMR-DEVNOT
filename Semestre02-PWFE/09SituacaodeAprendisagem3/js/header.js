// Quando a página for carregada
document.addEventListener("DOMContentLoaded", function() {
    // Quando o usuário rolar a página
    window.addEventListener("scroll", function() {
        // Obtenha o elemento .menu02
        var menu02 = document.querySelector(".menu02");
        // Verifique a posição do menu em relação ao topo da página
        var menuPosition = menu02.offsetTop;
        // Verifique a posição do scroll da página
        var scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition >= menuPosition) {
            // Aplique a animação e a cor do menu
            menu02.style.animation = "showMenu 0.5s forwards infinite ease-in-out";
            menu02.style.backgroundColor = "blue";
        } else {
            // Aplique a cor do menu
            menu02.style.backgroundColor = "red";
        }
    });
});

// Quando o usuário passar o mouse em cima da div
menu02.addEventListener("mouseenter", function() {
    // Aplique a animação
    menu02.style.animation = "showMenu 0.5s forwards ease-in-out";
});

// Quando o usuário passar o mouse para fora da div
menu02.addEventListener("mouseleave", function() {
    // Remova a animação
    menu02.style.animation = "none";
});
