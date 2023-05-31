let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let year = document.querySelector('#date');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

const theme = localStorage.getItem("theme")

if (theme == "light") {
    document.body.classList.remove('active');
    themeToggler.classList.remove('fa-sun');


} else if (theme == "dark") {
    document.body.classList.add('active');
    themeToggler.classList.add('fa-sun');

}
themeToggler.onclick = () => {

    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        localStorage.setItem("theme", "dark")

        document.body.classList.add('active');
    } else {
        localStorage.setItem("theme", "light")

        document.body.classList.remove('active');
    }
}

const date = new Date().getFullYear()
year.innerHTML = `&copy; ${date} | all rights reserved`;