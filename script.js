document.addEventListener('DOMContentLoaded', function () {
    const citySelect = document.getElementById('city');
    const areaSelect = document.getElementById('area');

    const areas = {
        varna: [
            "Център",
            "Колхозен пазар",
            "Владислав Варненчик",
            "Чайка",
            "Левски",
            "Лятно кино",
            "Младост",
            "Победа",
            "Траката",
            "Трошево",
            "Бриз"
        ],
        sofia: [
            "Дружба",
            "Студентски град",
            "Гео Милев",
            "Летище София",
            "Младост",
            "Люлин",
            "Витоша"
        ]
    };

    
    function updateAreas(city) {
        const selectedCityAreas = areas[city] || [];
        areaSelect.innerHTML = ''; 

        selectedCityAreas.forEach(area => {
            const option = document.createElement('option');
            option.value = area.toLowerCase().replace(' ', '-');
            option.textContent = area;
            areaSelect.appendChild(option);
        });
    }

    
    updateAreas(citySelect.value);

  
    citySelect.addEventListener('change', function () {
        updateAreas(this.value);
    });
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}


showSlide(slideIndex);



const submitButton = document.getElementById('submitButton');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');


submitButton.addEventListener('click', () => {
    modal.style.display = 'block'; 
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; 
});
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
