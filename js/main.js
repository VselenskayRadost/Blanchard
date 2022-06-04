document.addEventListener('DOMContentLoaded', function(){
  // функция открытия бургер меню
  function burgerMenuOpen(){
    let body = document.querySelector('body');
    let html = document.querySelector('html');
    let burgerBtn = document.querySelector('.header__burger-btn');
    let burgerMenu = document.querySelector('.header__burger-menu');
    let burgerMenuClose = document.querySelector('.burger-menu__close-btn');

    burgerBtn.addEventListener('click', ()=>{
      burgerMenu.classList.add('burger-menu--is-open');
      body.classList.add('overflow--lock');
      html.classList.add('overflow--lock');
    });

    burgerMenuClose.addEventListener('click', ()=> {
      burgerMenu.classList.remove('burger-menu--is-open');
      body.classList.remove('overflow--lock');
      html.classList.remove('overflow--lock');
    });
  };

  // функция открытия поиска
  function searchOpen(){
    let searchBtn = document.querySelector('.header__search-btn-1024');
    let searchForm = document.querySelector('.header__search-container-1024');
    let searchFormClose = document.querySelector('.header__search-form-btn-close-1024');

    searchBtn.addEventListener('click', () =>{
      searchForm.classList.add('header__search--is-open');
    })


    searchFormClose.addEventListener('click', ()=>{
      searchForm.classList.remove('header__search--is-open');
    });
  };

  // плавный скролл
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function(event){
      event.preventDefault();

      let burgerMenu = document.querySelector('.header__burger-menu');
      let body = document.querySelector('body');
      let html = document.querySelector('html');

      // закрытие бургер меню при нажетии на ссылки и плавный скролл к секции
      if (burgerMenu.classList.contains('burger-menu--is-open')){
        burgerMenu.classList.remove('burger-menu--is-open');
        body.classList.remove('overflow--lock');
        html.classList.remove('overflow--lock');
      };

      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    });
  }


  burgerMenuOpen();
  searchOpen();
});
