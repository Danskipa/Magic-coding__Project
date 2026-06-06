export const initOurTeam = () => {
  const gameContainer = document.querySelector('.game-id_9');
  //==========================
  const gameHTML = `
  <h2 class="swiper__title">Наша команда</h2>
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <div class="content content__danya">
        <div class="content__photo content__photo--danya">
        </div>
        <p class="content__name">Даня</p>
        <p class="content__worked">Лідер нашої команди</p>
      </div>
    </div>

    <div class="swiper-slide">
      <div class="content content">
        <div class="content__photo content__photo--ann">
        </div>
        <p class="content__name">Анна</p>
        <p class="content__worked">Наш скрам майстер</p>
      </div>
    </div>

    <div class="swiper-slide">
      <div class="content">
        <div class="content__photo content__photo--filip">
        </div>
        <p class="content__name">Філіп</p>
        <p class="content__worked">Звичайний розробник</p>
      </div>
    </div>

    <div class="swiper-slide">
      <div class="content content">
        <div class="content__photo content__photo--Artem">
        </div>
        <p class="content__name">Артем</p>
        <p class="content__worked">Звичайний розробник</p>
      </div>
    </div>

    <div class="swiper-slide">
      <div class="content">
        <div class="content__photo content__photo--andrew">

        </div>
        <p class="content__name">Андрій</p>
        <p class="content__worked">Звичайний розробник</p>
      </div>
    </div>

    <div class="swiper-slide">
      <div class="content content">
        <div class="content__photo content__photo--vlad">
        </div>
        <p class="content__name ">Влад</p>
        <p class="content__worked">Звичайний "розробник"</p>
      </div>
    </div>
  </div>

  <div class="swiper-button-prev swiper-button" id="swiper-button-prev" data-swiper="left"></div>
  <div class="swiper-button-next swiper-button" id="swiper-button-next" data-swiper="right"></div>
  <div class="swiper-pagination"></div>
</div>
    `;
  gameContainer.innerHTML = gameHTML;
  const swiper = new Swiper('.swiper', {
    effect: 'creative',

    creativeEffect: {
      prev: {
        translate: ['-80%', 0, 0],
        scale: 0.5,
      },
      next: {
        translate: ['80%', 0, 0],
        scale: 0.5,
      },
    },

    loop: true,
    slidesPerView: 3,
    centeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
  });
  const switcher = document.querySelector('.switcher');
  const swiperButtonLeft = document.querySelector(`[data-swiper="left"]`);
  const swiperButtonRight = document.querySelector(`[data-swiper="right"]`);
  const handleSwitcher = event => {
    if (event.target.checked) {
      swiperButtonLeft.classList.add('dark');
      swiperButtonRight.classList.add('dark');
    } else {
      swiperButtonLeft.classList.remove('dark');
      swiperButtonRight.classList.remove('dark');
    }
  };
  switcher.addEventListener('change', handleSwitcher);
};
