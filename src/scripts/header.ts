const items = document.querySelectorAll(".navbar-li");
const showMenu = document.querySelector("#showMenu");
const showMenuBtn = document.querySelector(".showMenuBtn");
const layerWhite = document.querySelector("#layerWhite");
const plusMenu = document.querySelector("#plusMenu");

// Variables de Logos Corregidas (seg?n la estructura de ID del HTML arriba)
const logoBlack = document.querySelector("#logo-black");
const logoWhite = document.querySelector("#logo-white");

const showBlackLogo = () => {
    logoWhite?.classList.add("logo-hidden");
    logoWhite?.classList.remove("logo-visible");
    logoBlack?.classList.add("logo-visible");
    logoBlack?.classList.remove("logo-hidden");
};

const showWhiteLogo = () => {
    logoBlack?.classList.add("logo-hidden");
    logoBlack?.classList.remove("logo-visible");
    logoWhite?.classList.add("logo-visible");
    logoWhite?.classList.remove("logo-hidden");
};

const setPlusIcon = (useBlack: any) => {
    if (!(plusMenu instanceof HTMLImageElement)) return;
    plusMenu.classList.add("cross-fade-out");

    requestAnimationFrame(() => {
        plusMenu.src = useBlack
            ? "svg/plus-svgrepo-com.svg"
            : "svg/plus-svgrepo-com-wh.svg";

        requestAnimationFrame(() => {
            plusMenu.classList.remove("cross-fade-out");
        });
    });
};

function updateHiddenItems() {
    const scroll = window.scrollY;
    const hideCount = Math.floor(scroll / 10);

    items.forEach((el, index) => {
        if (index < hideCount) {
            el.classList.add("hidden-li");
        } else {
            el.classList.remove("hidden-li");
        }
    });
    if (hideCount > 0) {
        showMenuBtn?.classList.add("plusAnimationIn");
        showMenuBtn?.classList.remove("plusAnimationOut");
    } else {
        showMenuBtn?.classList.remove("plusAnimationIn");
        showMenuBtn?.classList.add("plusAnimationOut");
    }
}

function detectarPosicionComponente(selector: any) {
    const elemento = document.querySelector(selector);
    if (!elemento) return;
}

// Evento scroll
document.addEventListener("scroll", updateHiddenItems);

// Detecta al recargar la p?gina
window.addEventListener("load", () => {
    updateHiddenItems();
    detectarPosicionComponente(".navbar");
});

showMenu?.addEventListener("click", () => {
    if (!layerWhite) return;
    const isOpen = !layerWhite.classList.contains("hidden");

    items.forEach((el) => el.classList.toggle("hidden-li"));

    // El icono del men? cambia de color y figura con fade
    setPlusIcon(!isOpen);

    showMenuBtn?.classList.toggle("rotate45");
    showMenuBtn?.classList.toggle("changeColor");
    showMenuBtn?.classList.toggle("open");

    const top = document.querySelector(".triangle-top");
    const bottom = document.querySelector(".triangle-bottom");

    if (!top || !bottom) {
        // Manejo de visibilidad simple si no hay elementos de transici?n
        if (!isOpen) {
            layerWhite.classList.remove("hidden");
            showBlackLogo();
            setPlusIcon(true);
        } else {
            showWhiteLogo();
            setPlusIcon(false);
            setTimeout(() => {
                layerWhite.classList.add("hidden");
            }, 500);
        }
        return;
    }

    if (!isOpen) {
        // === OPEN MENU (Fondo blanco) ===
        layerWhite.classList.remove("hidden");

        top.classList.remove("out");
        bottom.classList.remove("out");

        // OCULTAR logo BLANCO, MOSTRAR logo NEGRO
        showBlackLogo();
        setPlusIcon(true);

        // Aplica animaci?n de entrada (vertical invertida)
        top.classList.add("in");
        bottom.classList.add("in");
    } else {
        // === CLOSE MENU (Fondo oscuro) ===
        top.classList.remove("in");
        bottom.classList.remove("in");

        // Aplica animaci?n de salida (vertical invertida, saliendo)
        top.classList.add("out");
        bottom.classList.add("out");

        // MOSTRAR logo BLANCO, OCULTAR logo NEGRO
        showWhiteLogo();
        setPlusIcon(false);

        // Esperar fin de animaci?n para ocultar
        setTimeout(() => {
            layerWhite.classList.add("hidden");
        }, 600); // Debe coincidir con la duraci?n de la animaci?n de salida (0.6s)
    }
});