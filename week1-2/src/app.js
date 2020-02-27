const checkHeader = () => {
    console.log("se movio");
    let position = Math.round(window.scrollY);

    if(position > 1 ){
        document.querySelector('header').classList.add('movinn');
        document.querySelector('.logo a').classList.add('negro')
    }else {
        document.querySelector('header').classList.remove('movinn');
    }
}

window.addEventListener('scroll',checkHeader)