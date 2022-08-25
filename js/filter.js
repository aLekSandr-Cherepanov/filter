function app() {
    const button = document.querySelectorAll('.button')

    button.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.dataset.filter)
        })
    });
}

app()