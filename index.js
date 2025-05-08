const btn = document.querySelector('.hamburger')
    const nav = document.querySelector('.nav-mobile')

    btn.addEventListener('click', () => {
      if (nav.classList.contains('off')){
        nav.classList.replace('off', 'on')
        btn.firstElementChild.setAttribute('src', '/assets/close.svg')
      } else {
        nav.classList.replace('on', 'off')
        btn.firstElementChild.setAttribute('src', '/assets/hamburger.svg')
      }
    })