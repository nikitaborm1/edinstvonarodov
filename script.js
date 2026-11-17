// Модальные окна
function openModal(id) {
    document.getElementById(id).classList.add('active');
    // Блокировка скролла фона
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.overflow = '';
}

// Закрытие по клику вне окна
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Валидация формы
function validateForm(event) {
    event.preventDefault();
    const fio = document.getElementById('fio').value.trim();
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value.trim();

    if (!fio || !dob || !address) {
        alert('Пожалуйста, заполните все поля формы!');
        return false;
    }
    
    // Простейшая проверка на наличие пробелов в ФИО (минимум 2 слова)
    if (fio.split(' ').length < 2) {
        alert('Пожалуйста, введите полное ФИО (Фамилия Имя).');
        return false;
    }

    alert(`Спасибо, ${fio}! Вы успешно зарегистрированы на мероприятие.`);
    closeModal('regModal');
    document.getElementById('regForm').reset();
    return true;
}

// Кнопка Вверх
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Слайдер с авторотацией
let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('.slide').length;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 25}%)`;
}

// Авторотация каждые 3 секунды
setInterval(nextSlide, 3000);
