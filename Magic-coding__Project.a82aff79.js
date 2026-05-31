var e="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},t={},u={},o=e.parcelRequire1ad7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in u){var o=u[e];delete u[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){u[e]=t},e.parcelRequire1ad7=o),o.register,Object.assign(o.i??={},{hVAk2:"arrow-check.d4bc1386.svg"});let r=document.querySelector("html"),a=document.querySelector(".modal"),s=document.querySelector(".switcher");document.querySelector(".helloing__text--part");let l=document.querySelector(".form__input"),n=document.querySelector(".helloing__text--part"),i=document.querySelector(".form__button"),c=document.querySelector(".seconde__modal"),d=document.querySelector(".close__button");document.querySelector(".logo__link--picture");let m=document.querySelector(".logo__link_photo--white"),_=document.querySelector(".logo__link_photo--dark");document.querySelectorAll(".game");let g=document.querySelector(".modal__form");s.addEventListener("change",e=>{e.target.checked?(r.style.setProperty("--colorCorrect","#ff0086"),r.style.setProperty("--colorIncorrect","#00ff48"),r.style.setProperty("--colorBgPrimary","#000000"),r.style.setProperty("--colorBgSecondary","#595959"),r.style.setProperty("--colorTextPrimary","#ffffff"),m.classList.add("dark_logo"),_.classList.add("dark_logo"),menuItems.forEach(e=>{e.classList.add("menu__item--dark")})):(r.style.setProperty("--colorCorrect","#039900"),r.style.setProperty("--colorIncorrect","#990000"),r.style.setProperty("--colorBgPrimary","#ffffff"),r.style.setProperty("--colorBgSecondary","#d9d9d9"),r.style.setProperty("--colorBgField","#d7d7d7"),r.style.setProperty("--colorBgSwitch","#7a7a7a"),r.style.setProperty("--colorBgChoose","#f1f1f1"),r.style.setProperty("--colorTextPrimary","#000000"),r.style.setProperty("--colorTextSecondary","#7e7e7e"),m.classList.remove("dark_logo"),_.classList.remove("dark_logo"),menuItems.forEach(e=>{e.classList.remove("menu__item--dark")}))}),l.addEventListener("input",e=>{n.textContent=e.target.value}),g.addEventListener("submit",e=>{e.preventDefault(),i&&c.classList.remove("hidden")}),d.addEventListener("click",e=>{d&&(a.classList.add("hidden"),c.classList.add("hidden"))}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".game-id_2");e.innerHTML=`
        <h2 class="guess-title">\u{412}\u{433}\u{430}\u{434}\u{430}\u{439} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{437}\u{430}\u{433}\u{430}\u{434}\u{430}\u{432} \u{43A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440}</h2>
        <div class="guess-box">
          <div class="guess-input-wrapper">
            <input
              class="guess-input"
              placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"
              id="number"
            />
          </div>
          <label for="number"></label>
          <h3 class="guess-subtitle"></h3>
        </div>
  `;let t=e.querySelector(".guess-input"),u=e.querySelector(".guess-subtitle"),o=Math.floor(100*Math.random())+1;t.addEventListener("input",e=>{let t=Number(e.target.value);t===o?u.textContent=`\u{412}\u{456}\u{442}\u{430}\u{44E}, \u{432}\u{438} \u{432}\u{433}\u{430}\u{434}\u{430}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}! (${o})`:t>o?u.textContent="Занадто велике число":u.textContent="Занадто мале число"})});let p=[{init:()=>{let e=document.querySelector(".game-id_1");e.innerHTML=`
      <h2 class="leap-year-title">\u{41F}\u{435}\u{440}\u{435}\u{432}\u{456}\u{440} \u{432} \u{44F}\u{43A}\u{438}\u{439} \u{440}\u{456}\u{43A} \u{442}\u{438} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{438}\u{432}\u{441}\u{44F}</h2>
      <div class="leap-year-box">
        <div class="leap-year-input-wrapper">
          <input class="leap-year-input" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{440}\u{456}\u{43A} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{436}\u{435}\u{43D}\u{43D}\u{44F}" />
        </div>
        <h3 class="leap-year-result"></h3>
      </div>
  `;let t=e.querySelector(".leap-year-input"),u=e.querySelector(".leap-year-result");t.addEventListener("input",e=>{let t=Number(e.target.value);if(0===t){u.textContent="";return}t%4==0&&t%100!=0||t%400==0?(u.textContent="Ви народилися у високосний рік!",u.style.color="green"):(u.textContent="Ви народилися не у високосний рік.",u.style.color="black")})},id:1,name:"Високосний калькулятор",category:"numerical"},{init:void 0,id:2,name:"Вгадай число",category:"numerical"},{init:()=>{let e=document.querySelector(".game-id_3"),t=0,u=0,o="",r=["rock","scissors","paper"];e.innerHTML=`
  <div class="container rps-container">
  <h2 class="rps-title">\u{41A}\u{430}\u{43C}\u{456}\u{43D}\u{44C} - \u{43D}\u{43E}\u{436}\u{438}\u{446}\u{456} - \u{43F}\u{430}\u{43F}\u{456}\u{440}</h2>
  <div class="rps-gameplay">
    <ul class="rps-list">
      <li class="rps-item">
        <button class="rps-button__option rock" data-choice="rock"></button>
      </li>
      <li class="rps-item">
        <button
          class="rps-button__option scissors"
          data-choice="scissors"
        ></button>
      </li>
      <li class="rps-item">
        <button class="rps-button__option paper" data-choice="paper"></button>
      </li>
    </ul>
    <ul class="rps-score">
      <li class="rps-item__score">\u{420}\u{430}\u{445}\u{443}\u{43D}\u{43E}\u{43A}:</li>
      <li class="rps-item__score" id="cpu-score">
        \u{41A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} - ${t}
      </li>
      <li class="rps-item__score" id="player-score">\u{412}\u{438} - ${u}</li>
    </ul>
  </div>
  <p class="rps-text">\u{417}\u{440}\u{43E}\u{431}\u{456}\u{442}\u{44C} \u{441}\u{432}\u{456}\u{439} \u{432}\u{438}\u{431}\u{456}\u{440}!</p>
  <button class="rps-button">\u{412}\u{430}\u{440}\u{456}\u{430}\u{43D}\u{442} \u{43A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440}\u{430}</button>
</div>
`;let a=e.querySelector(".rps-text"),s=e.querySelector("#cpu-score"),l=e.querySelector("#player-score"),n=e.querySelectorAll(".rps-button__option"),i=e.querySelector(".rps-button"),c=e.querySelectorAll(".rps-item"),d=e=>{o=e.target.dataset.choice,c.forEach(e=>e.classList.remove("active")),e.target.parentElement.classList.add("active")};i.addEventListener("click",e=>{let n=r[Math.floor(Math.random()*r.length)];"rock"===o&&"rock"===n?(a.textContent="Нічия в цьому раунді!",a.style.color="#000000"):"rock"===o&&"scissors"===n?(u++,a.textContent="Ви виграли раунд!",a.style.color="#039900"):"rock"===o&&"paper"===n&&(t++,a.textContent="Комп’ютер виграв раунд!",a.style.color="#990000"),"scissors"===o&&"scissors"===n?(a.textContent="Нічия в цьому раунді!",a.style.color="#000000"):"scissors"===o&&"paper"===n?(u++,a.textContent="Ви виграли раунд!",a.style.color="#039900"):"scissors"===o&&"rock"===n&&(t++,a.textContent="Комп’ютер виграв раунд!",a.style.color="#990000"),"paper"===o&&"paper"===n?(a.textContent="Нічия в цьому раунді!",a.style.color="#000000"):"paper"===o&&"rock"===n?(u++,a.textContent="Ви виграли раунд!",a.style.color="#039900"):"paper"===o&&"scissors"===n&&(t++,a.textContent="Комп’ютер виграв раунд!",a.style.color="#990000"),o="",s.textContent=`\u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} - ${t}`,l.textContent=`\u{412}\u{438} - ${u}`}),n.forEach(e=>{e.addEventListener("click",d)})},id:3,name:"Камінь-Ножиці-Папір",category:"game"},{init:()=>{document.querySelector(".game-id_4").innerHTML=`<h2 class="calculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}</h2>
        <div class="calculator__game">
          <input class="number number__first" type="number" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"/>
          <div class="calculator__actions">
            <button class="action" data-action="add">+</button>
            <button class="action" data-action="mul">*</button>
            <button class="action" data-action="sub">-</button>
            <button class="action" data-action="div">/</button>
          </div>
          <input class="number numbe__second" type="number" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"/>
          <button class="calculate">=</button>
          <p class="result">\u{420}\u{435}\u{437}\u{443}\u{43B}\u{44C}\u{442}\u{430}\u{442}</p>
        </div>`;let e=document.querySelector(".number__first"),t=document.querySelector(".numbe__second"),u=document.querySelector(".calculator__actions"),o=document.querySelector(".calculate"),r=document.querySelector(".result"),a="",s=0;u.addEventListener("click",e=>{document.querySelectorAll(".action").forEach(e=>{e.classList.remove("choose")}),e.target.classList.add("choose"),a=e.target.dataset.action}),o.addEventListener("click",u=>{s=0;let o=Number(e.value),l=Number(t.value);switch(console.log(o),a){case"add":r.textContent=s=o+l;break;case"mul":r.textContent=s=o*l;break;case"sub":r.textContent=s=o-l;break;case"div":0===l?r.textContent="На 0 ділити не можна":(s=o/l)%1==0?r.textContent=s:r.textContent=s.toFixed(2)}})},id:4,name:"Калькулятор",category:"numerical"},{init:()=>{document.querySelector(".game-id_5").innerHTML=`<h2 class="time-\u{441}alculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440} \u{447}\u{430}\u{441}\u{443}</h2>
        <div class="time-calculator__game">
          <div class="time-calculator__input-container">
              <input class="time-calculator__input" data-input type="number" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"/>
              <button class="time-calculator__button" data-button ></button>
          </div>
          <p class="time-calculator__result" data-result >0 \u{434}\u{43D}. 00:00:00</p>
        </div>`;let e=document.querySelector("[data-input]"),t=document.querySelector("[data-button]"),u=document.querySelector("[data-result]");t.addEventListener("click",()=>{let t=Number(e.value),o=Math.floor(t/86400),r=Math.floor((t%=86400)/3600),a=Math.floor((t%=3600)/60);t%=60;let s=e=>String(e).padStart(2,"0");u.textContent=`${o} \u{434}\u{43D}. ${s(r)}:${s(a)}:${s(t)}`})},id:5,name:"Калькулятор часу",category:"numerical"},{init:()=>{let e=document.querySelector(".game-id_6");e.innerHTML=`
    <h2 class="dinosaur__title">Google \u{434}\u{438}\u{43D}\u{43E}\u{437}\u{430}\u{432}\u{440}</h2>
    <div class="dinosaur__game">
      <div class="dinosaur"></div>
    </div>`;let t=e.querySelector(".dinosaur"),u=document.querySelector(".dinosaur__game");new class{constructor(e,t){this.dinosaur=e,this.gameArea=t,this.gameOver=!1,this.isJumping=!1,this.gameModalStart()}init(){document.addEventListener("keydown",e=>{"Space"!==e.code||this.gameOver||this.isJumping||(e.preventDefault(),this.jump())}),this.gameArea.addEventListener("mousedown",e=>{this.gameOver||this.isJumping||(e.preventDefault(),this.jump())}),this.renderObstacles(),this.checkCollision(),this.move()}move(){this.dinosaur.classList.add("move"),this.gameArea.classList.add("move"),this.gameOver||(this.dinosaur.style.animationPlayState="running",this.gameArea.style.animationPlayState="running")}jump(){this.isJumping=!0,this.dinosaur.classList.add("jump"),setTimeout(()=>{this.isJumping=!1,this.dinosaur.classList.remove("jump")},600)}randomCactuses(){let e=Math.floor(11*Math.random()),t=this.gameArea.querySelector(".cactus");e>=8?t.classList.add("cactuses"):e>=5&&e<=7?t.classList.add("cactus--one"):e>=2&&e<=4?t.classList.add("cactuses--two"):e<=1&&t.classList.add("cactuses--small")}renderObstacles(){let e=document.createElement("div");e.classList.add("cactus"),this.gameArea.appendChild(e),this.randomCactuses();let t=()=>{e.removeEventListener("animationend",t),e.remove(),this.gameOver||this.renderObstacles()};e.addEventListener("animationend",t)}checkCollision(){let e=()=>{if(!0===this.gameOver)return;let t=this.gameArea.querySelector(".cactus"),u=t.getBoundingClientRect(),o=this.dinosaur.getBoundingClientRect();o.right>u.left&&o.left<u.right&&o.bottom>u.top?this.endGame(t):requestAnimationFrame(e)};requestAnimationFrame(e)}endGame(e){this.dinosaur.style.animationPlayState="paused",this.gameArea.style.animationPlayState="paused",e.style.animationPlayState="paused",this.gameOver=!0,this.gameOverModal()}createModal(e,t,u){let o=`
      <div class="dinosaur__modal">
        <p class="dinosaur__message">${e}</p>
        <button class="dinosaur__start button">${t}</button>
      </div>`;this.gameArea.insertAdjacentHTML("beforeend",o),this.gameArea.querySelector(".dinosaur__modal").classList.add("show"),this.gameArea.querySelector(".dinosaur__start").addEventListener("click",u)}gameModalStart(){this.createModal("Зіграємо?","Почати гру",()=>{let e=this.gameArea.querySelector(".dinosaur__modal");e.classList.remove("show"),setTimeout(()=>{e.remove()},250),this.init()})}gameOverModal(){this.createModal("GAME OVER!","Спробувати знову",()=>this.restartGame())}restartGame(){this.gameArea.querySelector(".dinosaur__modal").remove(),this.gameArea.querySelector(".cactus").remove(),this.gameOver=!1,this.renderObstacles(),this.checkCollision(),this.move()}}(t,u)},id:6,name:"Google динозаврик",category:"game"},{init:()=>{document.querySelector(".game-id_7").innerHTML=`<h2 class="football__title">\u{424}\u{443}\u{442}\u{431}\u{43E}\u{43B}</h2>
        </article>
            <div class="field" data-field>
                <div class="ball" data-ball ></div>
            </div>`;let e=document.querySelector("[data-field]"),t=document.querySelector("[data-ball]");e.addEventListener("click",e=>{console.log(e);let u=e.offsetX-25,o=e.offsetY-25;t.style.left=u+"px",t.style.top=o+"px",t.classList.add("active"),setTimeout(()=>{t.classList.remove("active")},300)})},id:7,name:"Футбол",category:"game"},{init:()=>{document.querySelector(".game-id_8").innerHTML=`  <div class="biggest-num__container">
    <h2 class="biggest-num__title">\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} 3 \u{447}\u{438}\u{441}\u{43B}\u{430}</h2>
      <ul class="biggest-num__list">
      <li class="biggest-num__item">
        <label for="biggest-num__input--one">
          <input
            class="num biggest-num__input"
            type="text"
            id="biggest-num__input--one"
              placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"
          />
        </label>
      </li>
      <li class="biggest-num__item">
        <label for="biggest-num__input--two">
          <input
            class="num biggest-num__input"
            type="text"
            id="biggest-num__input--two"
              placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"
          />
        </label>
      </li>
      <li class="biggest-num__item">
        <label for="biggest-num__input--three">
          <input

            class="num biggest-num__input"
            type="text"
            id="biggest-num__input--three"
              placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"
          />
        </label>
      </li>
    </ul>
<p class="biggest-num__text">\u{41D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} - (<span class="biggest-num__text--part">\u{447}\u{438}\u{441}\u{43B}\u{43E}</span>)</p>      </div>`;let e=document.querySelector("#biggest-num__input--one"),t=document.querySelector("#biggest-num__input--two"),u=document.querySelector("#biggest-num__input--three"),o=document.querySelector(".biggest-num__text--part"),r=()=>{let r=[Number(e.value),Number(t.value),Number(u.value)],a=r[0];for(let e=0;e<r.length;e++)r[e]>a&&(a=r[e]);o.textContent=`${0===a?"число":a}`};e.addEventListener("input",r),t.addEventListener("input",r),u.addEventListener("input",r)},id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"},{init:()=>{let e;document.querySelector(".game-id_11").innerHTML=`
            <h2 class="tone__title">\u{412}\u{433}\u{430}\u{434}\u{430}\u{439} \u{43A}\u{43E}\u{43B}\u{456}\u{440}</h2>
            <div class="tone__game">
              <div class="tone__colors">
                <div class="tone__box tone__box--current"></div>
                <div class="tone__box tone__box--user">
                  <p class="similarity"></p>
                  <div class="tone__controls">
                      <input
                        id="r"
                        class="tone__range tone__range--red"
                        type="range"
                        min="0"
                        max="255"
                        step="1"
                      />
                      <input
                        id="g"
                        class="tone__range tone__range--green"
                        type="range"
                        min="0"
                        max="255"
                        step="1"
                      />
                      <input
                        id="b"
                        class="tone__range tone__range--blue"
                        type="range"
                        min="0"
                        max="255"
                        step="1"
                      />
                  </div>
                  <div class="tone__meta">
                    <button class="tone__btn btn__done" type="button">
                    </button>
                    <button class="tone__btn btn__next is__closed" type="button">
                    </button>
                  </div>
                </div>
              </div>
            </div>`;let t=document.querySelector(".tone__controls"),u=document.querySelector(".tone__box--user"),o=document.querySelector(".tone__box--current"),r=document.querySelector(".btn__done"),a=document.querySelector(".btn__next"),s=document.querySelector(".tone__meta"),l=document.querySelector(".similarity"),n=document.querySelectorAll(".tone__range"),i=[],c=[],d=()=>{let t=Math.floor(255*Math.random()),u=Math.floor(255*Math.random()),r=Math.floor(255*Math.random());i=[t,u,r],e=`rgb(${t}, ${u}, ${r})`,o.style.backgroundColor=e},m=()=>{let e=document.querySelector(".tone__range--red").value,t=document.querySelector(".tone__range--green").value,o=document.querySelector(".tone__range--blue").value;c=[e,t,o];let r=`rgb(${e}, ${t}, ${o})`;u.style.backgroundColor=r},_=0;d(),t.addEventListener("input",m),r.addEventListener("click",()=>{let t;m();var o=i,r=c;let a=0;for(let e=0;e<3;e++)a+=100-100*Math.abs(o[e]-r[e])/255;_=Math.floor(a/3),l.style.color=c[0]<167&&c[1]<167&&c[2]<167?"var(--colorBgPrimary)":"var(--colorTextPrimary)",l.textContent=`${_} %`,(t=document.createElement("div")).classList.add("box__reference"),t.style.backgroundColor=e,u.appendChild(t)}),a.addEventListener("click",()=>{d(),u.querySelector(".box__reference").remove(),l.textContent="",n.forEach(e=>{e.value=128}),u.style.backgroundColor="rgb(128, 128, 128)"}),s.addEventListener("click",()=>{r.classList.toggle("is__closed"),a.classList.toggle("is__closed"),t.classList.toggle("is__closed")})},id:11,name:"Вгадай колір",category:"game"}],y=document.querySelector("[data-games]"),h=(e,t)=>{t.innerHTML=e.reduce((e,t)=>e+=`      
    <section id="game-id_${t.id}" class="section">
        <div class="container">
          <div class="game game-id_${t.id}">
          </div>
        </div>
      </section>`,""),e.forEach(e=>{e.init&&e.init()})};h(p,y),document.querySelectorAll(".section");let v=document.querySelectorAll(".menu__item");document.querySelectorAll(".menu__text");let b=e=>{let t=e.currentTarget.dataset.category;h(p.filter(e=>e.category===t),y)};v.forEach(e=>{e.addEventListener("click",b)});let S=document.querySelector(".footer-form"),f=document.querySelector("[data-modal]"),q=document.querySelector("[data-modal-close]");console.log("Форма:",S),console.log("Бекдроп:",f),console.log("Кнопка закриття:",q),S.addEventListener("submit",e=>{e.preventDefault(),f.classList.remove("is-hidden"),S.reset()}),q.addEventListener("click",e=>{e.preventDefault(),f.classList.add("is-hidden")});
//# sourceMappingURL=Magic-coding__Project.a82aff79.js.map
