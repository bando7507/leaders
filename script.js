const link = document.querySelectorAll('.link')

link.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('active')) {
            return false
        }
        const el = document.querySelector('.active')
        el.classList.remove('active')
        element.classList.add('active')
    })
});