

document.addEventListener('click', () => {
    const pTag = document.querySelector('p');
    pTag.classList.add('red');
})

$('p').click(() => {
    $(this).addClass('active')
})