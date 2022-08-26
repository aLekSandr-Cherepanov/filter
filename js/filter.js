function app() {
    const button = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.card')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            if (isItemFiltered) {
                item.classList.add('hide')
            }
        })
    }

    button.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;
            filter(currentCategory, cards)
        })
    });
}

app()