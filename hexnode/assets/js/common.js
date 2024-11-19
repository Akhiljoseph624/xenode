window.addEventListener('scroll', () => {
    const header = document.querySelector('.sticky-header');
    const logo = document.querySelector('.logo');
    if (window.scrollY > 100) {
        header.classList.add('white-bg');
        logo.classList.add('white-txt');
    } else {
        header.classList.remove('white-bg');
        logo.classList.remove('white-txt');
    }
});

const form = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const error = document.getElementById('error');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    if (email === '' || !isValidEmail(email)) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        alert('Form submitted successfully!');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function openadsitem(kioskName, button) {
    var i;
    var x = document.getElementsByClassName("adsitem");
    var btns = document.getElementsByClassName("adsitem-btn");
    
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    
    for (i = 0; i < btns.length; i++) {
      btns[i].classList.remove("active");
    }
    document.getElementById(kioskName).style.display = "block";  
    button.classList.add("active");
  }

function openOffer(evt, cityName) {
    var i, additionalcontent, contentlinks;
    
    additionalcontent = document.getElementsByClassName("additionalcontent");
    for (i = 0; i < additionalcontent.length; i++) {
        additionalcontent[i].style.display = "none";
    }
    
    contentlinks = document.getElementsByClassName("contentlinks");
    for (i = 0; i < contentlinks.length; i++) {
        contentlinks[i].className = contentlinks[i].className.replace(" active", "");
        let paragraphs = contentlinks[i].querySelectorAll("p");
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.add("hidden");
        });
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    let selectedParagraphs = evt.currentTarget.querySelectorAll("p");
    selectedParagraphs.forEach(function(paragraph) {
        paragraph.classList.remove("hidden");
    });
}

document.getElementById("defaultOpen").click();

const dataOnElements = document.querySelectorAll('.data-on');

const customTopValues = ['15%', '75%', '40%', '80%', '45%']; 

dataOnElements.forEach((element, index) => {
  if (customTopValues[index]) {
    element.style.top = customTopValues[index];
  }
});


document.addEventListener("DOMContentLoaded", () => {
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    const items = document.querySelectorAll(".choose-xenode");
    let currentIndex = 0;
    let autoPlayInterval;

    function updateArrows() {
        leftArrow.classList.toggle("disabled", currentIndex === 0);
        rightArrow.classList.toggle("disabled", currentIndex === items.length - 1);
    }

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle("hidden", i !== index);
        });
        updateArrows();
    }

    function nextItem() {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        showItem(currentIndex);
    }

    function prevItem() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1; 
        }
        showItem(currentIndex);
    }

    leftArrow.addEventListener("click", () => {
        clearInterval(autoPlayInterval);
        prevItem();
        startAutoPlay();
    });

    rightArrow.addEventListener("click", () => {
        clearInterval(autoPlayInterval); 
        nextItem();
        startAutoPlay(); 
    });

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextItem, 20000); 
    }
    showItem(currentIndex);
    startAutoPlay();
});


const carousel = document.querySelector('.logo-carousel');

carousel.addEventListener('mouseenter', () => {
  carousel.style.animationPlayState = 'paused';
});
carousel.addEventListener('mouseleave', () => {
  carousel.style.animationPlayState = 'running';
});



var acc = document.getElementsByClassName("accordion");
var i;

function closeAllPanels() {
  for (i = 0; i < acc.length; i++) {
    acc[i].classList.remove("active");
    acc[i].nextElementSibling.style.display = "none";
  }
}

if (acc.length > 0) {
  acc[0].classList.add("active");
  acc[0].nextElementSibling.style.display = "block";
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    closeAllPanels();
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
