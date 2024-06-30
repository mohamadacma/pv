document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    const seriesList = document.getElementById('seriesList');
    const exampleSeries = ['Breaking Bad', 'Game of Thrones', 'Stranger Things', 'The Crown', 'Black Mirror'];
    exampleSeries.forEach(series => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = series;
        seriesList.appendChild(li);
    });


    const bookshelf = document.getElementById('bookshelf');
    for (let i = 0; i < 4; i++) {
        const book = document.createElement('div');
        book.className = 'col-3 mb-3';
        book.innerHTML = `<div class="bg-secondary text-white text-center py-5">Book ${i+1}</div>`;
        bookshelf.appendChild(book);
    }
});