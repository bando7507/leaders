// const navToggler = document.querySelector(".btn");

// const nav = document.querySelector(".nav")

// navToggler.addEventListener("click", () => {
//     nav.classList.toggle('open')
// });


const navToggler = document.querySelector(".btn");
navToggler.addEventListener("click", navToggle);

function navToggle() {
    // navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    console.log(nav)
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        nav.style.maxHeight = nav.scrollHeight + "px";

    } else {
        nav.removeAttribute("style");
    }

}
/////////////////////////////////////////


const link = document.querySelectorAll('.link')

link.forEach((el) => {
    el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
            return false
        }
        const ele = document.querySelector('.active')
        ele.classList.remove('active')
        el.classList.add('active')
    })
})

////////////////////////////////////////
const ratio = .1
var options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

var callback = function(entries, observer) {
    entries.forEach(entry => {
        // console.log(entry.intersectionRatio)
        //   entry.intersectionRatio
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('release-show')
            observer.unobserve(entry.target)
        }

    });
};




var observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector('.release'))