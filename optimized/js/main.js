window.onload = function (event) {
    // Check WebP Support
    if (canUseWebP()) {
        document.documentElement.classList.add('webp-support');
    }

    // Scroll to First Section
    const scrollBtn = document.getElementsByClassName('scroll-down-button')[0];
    addClickHandlerScrollSection(scrollBtn, 'services', false);

    // Scroll to appropriate Section
    const navLinks = document.querySelectorAll("header nav ul li a");
    for (const link of navLinks) {
        addClickHandlerScrollSection(link, null, true);
    }

    // Scroll back up on logo click
    document.querySelector('a.logo').addEventListener("click", function (e) {
        e.preventDefault();
        scroll({
            top: 0,
            behavior: "smooth"
        });
    });
}

function canUseWebP() {
    var elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // very old browser like IE 8, canvas not supported
    return false;
}

function addClickHandlerScrollSection(elem, sectionID, isNavLink) {
    elem.addEventListener("click", function (e) {
        e.preventDefault();

        let offsetTop = 0;
        if (isNavLink) {
            const href = this.getAttribute("href");
            offsetTop = document.querySelector(href).offsetTop;
        } else {
            offsetTop = document.getElementById(sectionID).offsetTop;
        }

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });
}