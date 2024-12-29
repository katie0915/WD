
document.addEventListener('DOMContentLoaded', function () {
    var experience1 = document.querySelector('.experience');
    var okno1 = document.querySelector('.okno1');
    var experience2 = document.querySelector('.experience2');
    var okno2 = document.querySelector('.okno2');

    experience1.addEventListener('click', function () {
        okno1.style.display = 'block';
        okno2.style.display = 'none'; // Добавлено для скрытия другого окна
    });

    okno1.addEventListener('click', function () {
        okno1.style.display = 'none';
    });

    experience2.addEventListener('click', function () {
        okno2.style.display = 'block';
        okno1.style.display = 'none'; // Скрыть другое окно
    });

    okno2.addEventListener('click', function () {
        okno2.style.display = 'none';
    });
});
