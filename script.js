
// Context Menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Changing text color
var textElement = document.querySelectorAll('.color-franquicia');

function changeColor(element) {
    element.classList.toggle("white");
}

textElement.forEach(function(element) {
    setInterval(function() {
        changeColor(element);
    }, 1000);
});

// Collapse Navbar toggler
const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            const navbarCollapse = new bootstrap.Collapse(document.querySelector('.navbar-collapse'));
            document.addEventListener('DOMContentLoaded', function() {
                navbarCollapse.hide();
            });
            navbarCollapse.hide();
        }
    });
});

// SnowFlakes
const innerWidthSF = window.innerWidth;
let numSnowflakes;

if (innerWidthSF < 540) {
    numSnowflakes = 15 
} else {
    numSnowflakes = 50
}
 
const snowflakeImages = ['images/snowflake1.svg', 'images/snowflake2.svg', 'images/snowflake3.svg', 'images/snowflake4.svg', 'images/snowflake5.svg', 'images/snowflake6.svg'];

const container = document.getElementById('snowflakes-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.backgroundImage = `url(${snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)]})`;
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';

    const size = Math.floor(Math.random() * (96 - 32 + 1)) + 32;
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    snowflake.style.setProperty('--rotation', Math.random() * 720 - 360 + 'deg');

    container.appendChild(snowflake);
}

let snowflakeCount = 0;
const interval = setInterval(() => {
    if (snowflakeCount < numSnowflakes) {
        createSnowflake();
        snowflakeCount++;
    } else {
        clearInterval(interval);
    }
}, 400);


// Botón WhatsApp
function sendMessage(element) {
    const phoneNumber = "5493512895876";
    let isMobile;
    let text;

    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("mobile") || userAgent.includes("android")) {
        isMobile = true
    } else {
        isMobile = false
    }

    if (element.classList.contains('wa-franquicia')) {
        text = "¡Hola! Estuve visitando su página web, y estoy interesado acerca de las franquicias de la empresa. ¿Podrías ofrecerme más información al respecto?";
    } else {
        text = "¡Hola! Estuve visitando su página web, y estoy interesado en los productos que tiene en la venta. ¿Podrías darme más información?";
    }

    let url;
    if (isMobile) {
        url = `whatsapp://send?text=${text}&phone=${phoneNumber}`;
    } else {
        url = `https://api.whatsapp.com/send?text=${text}&phone=${phoneNumber}`;
    }

    window.open(url, '_blank');
}

function sendFranquicia(element) {
    const phoneNumber = "5493512127826";
    let isMobile;
    let text;

    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("mobile") || userAgent.includes("android")) {
        isMobile = true
    } else {
        isMobile = false
    }

    text = "¡Hola! Estuve visitando su página web, y estoy interesado en los productos que tiene en la venta. ¿Podrías darme más información?";


    let url;
    if (isMobile) {
        url = `whatsapp://send?text=${text}&phone=${phoneNumber}`;
    } else {
        url = `https://api.whatsapp.com/send?text=${text}&phone=${phoneNumber}`;
    }

    window.open(url, '_blank');
}