let animationClass = document.querySelectorAll('.animation');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('scroll-animations')
        } 
        else {
            entry.target.classList.remove('scroll-animation')
        }
    })
}, 
    { threshold: 0.5
    });


for(let i=0; i < animationClass.length;  i++){
    const elements = animationClass[i];

    observer.observe(elements);
}