var e="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},t={},u={},s=e.parcelRequire1ad7;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in u){var s=u[e];delete u[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){u[e]=t},e.parcelRequire1ad7=s),s.register,Object.assign(s.i??={},{hVAk2:"arrow-check.d4bc1386.svg"});let i=document.querySelector("html"),n=document.querySelector(".backdrop__header"),o=document.querySelector(".switcher");document.querySelector(".helloing__text--part");let a=document.querySelector(".form__input"),l=document.querySelector(".helloing__text--part");document.querySelector(".form__button");let r=document.querySelector(".seconde__backdrop__header"),c=document.querySelectorAll(".close__button"),d=document.querySelector(".logo__link_photo--white"),m=document.querySelector(".logo__link_photo--dark"),_=document.querySelector(".footer__logo__link_photo--white"),p=document.querySelector(".footer__logo__link_photo--dark");document.querySelectorAll(".game");let g=document.querySelector(".modal__form"),y=document.querySelector(".modal__photo--seconde");document.querySelector(".modals");let b=e=>{y.classList.add("hidden"),n.classList.add("hidden"),r.classList.add("hidden")};o.addEventListener("change",e=>{e.target.checked?(i.style.setProperty("--colorBgMain","#111111"),i.style.setProperty("--colorCorrect","#FC66FF"),i.style.setProperty("--colorIncorrect","#66FFFF"),i.style.setProperty("--colorBgPrimary","#1a1a1a"),i.style.setProperty("--colorBgSecondary","#262626"),i.style.setProperty("--colorBgField","#282828"),i.style.setProperty("--colorBgSwitch","#858585"),i.style.setProperty("--colorBgChoose","#0E0E0E"),i.style.setProperty("--colorTextPrimary","#ffffffb9"),i.style.setProperty("--colorTextSecondary","#818181"),i.style.setProperty("--colorBgRPS","#282828"),d.classList.add("dark_logo"),m.classList.add("dark_logo"),_.classList.add("dark_logo"),p.classList.add("dark_logo")):(i.style.setProperty("--colorBgMain","#eeeeee"),i.style.setProperty("--colorCorrect","#039900"),i.style.setProperty("--colorIncorrect","#990000"),i.style.setProperty("--colorBgPrimary","#ffffff"),i.style.setProperty("--colorBgSecondary","#d9d9d9"),i.style.setProperty("--colorBgField","#d7d7d7"),i.style.setProperty("--colorBgSwitch","#7a7a7a"),i.style.setProperty("--colorBgChoose","#f1f1f1"),i.style.setProperty("--colorTextPrimary","#000000"),i.style.setProperty("--colorTextSecondary","#7e7e7e"),d.classList.remove("dark_logo"),m.classList.remove("dark_logo"),_.classList.remove("dark_logo"),p.classList.remove("dark_logo"))}),a.addEventListener("input",e=>{l.textContent=e.target.value}),g.addEventListener("submit",e=>{e.preventDefault(),r.classList.remove("hidden")}),c.forEach(e=>{e.addEventListener("click",b)}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".game-id_2");e.innerHTML=`
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
  `;let t=e.querySelector(".guess-input"),u=e.querySelector(".guess-subtitle"),s=Math.floor(100*Math.random())+1;t.addEventListener("input",e=>{let t=Number(e.target.value);t===s?u.textContent=`\u{412}\u{456}\u{442}\u{430}\u{44E}, \u{432}\u{438} \u{432}\u{433}\u{430}\u{434}\u{430}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}! (${s})`:t>s?u.textContent="Занадто велике число":u.textContent="Занадто мале число"})});let v=[{init:()=>{let e=document.querySelector(".game-id_1");e.innerHTML=`
      <h2 class="leap-year-title">\u{41F}\u{435}\u{440}\u{435}\u{432}\u{456}\u{440} \u{432} \u{44F}\u{43A}\u{438}\u{439} \u{440}\u{456}\u{43A} \u{442}\u{438} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{438}\u{432}\u{441}\u{44F}</h2>
      <div class="leap-year-box">
        <div class="leap-year-input-wrapper">
          <input class="leap-year-input" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{440}\u{456}\u{43A} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{436}\u{435}\u{43D}\u{43D}\u{44F}" />
        </div>
        <h3 class="leap-year-result"></h3>
      </div>
  `;let t=e.querySelector(".leap-year-input"),u=e.querySelector(".leap-year-result");t.addEventListener("input",e=>{let t=Number(e.target.value);if(0===t){u.textContent="";return}t%4==0&&t%100!=0||t%400==0?(u.textContent="Ви народилися у високосний рік!",u.style.color="green"):(u.textContent="Ви народилися не у високосний рік.",u.style.color="black")})},id:1,name:"Високосний калькулятор",category:"numerical"},{init:void 0,id:2,name:"Вгадай число",category:"numerical"},{init:()=>{let e=document.querySelector(".game-id_3"),t=0,u=0,s="",i=["rock","scissors","paper"];e.innerHTML=`
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
`;let n=e.querySelector(".rps-text"),o=e.querySelector("#cpu-score"),a=e.querySelector("#player-score"),l=e.querySelectorAll(".rps-button__option"),r=e.querySelector(".rps-button"),c=e=>{s=e.target.dataset.choice,l.forEach(e=>e.classList.remove("rps-button__option--active")),e.target.classList.add("rps-button__option--active")};r.addEventListener("click",e=>{let l=i[Math.floor(Math.random()*i.length)];"rock"===s&&"rock"===l?(n.textContent="Нічия в цьому раунді!",n.style.color="#000000"):"rock"===s&&"scissors"===l?(u++,n.textContent="Ви виграли раунд!",n.style.color="#039900"):"rock"===s&&"paper"===l&&(t++,n.textContent="Комп’ютер виграв раунд!",n.style.color="#990000"),"scissors"===s&&"scissors"===l?(n.textContent="Нічия в цьому раунді!",n.style.color="#000000"):"scissors"===s&&"paper"===l?(u++,n.textContent="Ви виграли раунд!",n.style.color="#039900"):"scissors"===s&&"rock"===l&&(t++,n.textContent="Комп’ютер виграв раунд!",n.style.color="#990000"),"paper"===s&&"paper"===l?(n.textContent="Нічия в цьому раунді!",n.style.color="#000000"):"paper"===s&&"rock"===l?(u++,n.textContent="Ви виграли раунд!",n.style.color="#039900"):"paper"===s&&"scissors"===l&&(t++,n.textContent="Комп’ютер виграв раунд!",n.style.color="#990000"),s="",o.textContent=`\u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} - ${t}`,a.textContent=`\u{412}\u{438} - ${u}`}),l.forEach(e=>{e.addEventListener("click",c)})},id:3,name:"Камінь-Ножиці-Папір",category:"game"},{init:()=>{document.querySelector(".game-id_4").innerHTML=`<h2 class="calculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}</h2>
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
        </div>`;let e=document.querySelector(".number__first"),t=document.querySelector(".numbe__second"),u=document.querySelector(".calculator__actions"),s=document.querySelector(".calculate"),i=document.querySelector(".result"),n="",o=0;u.addEventListener("click",e=>{document.querySelectorAll(".action").forEach(e=>{e.classList.remove("choose")}),e.target.classList.add("choose"),n=e.target.dataset.action}),s.addEventListener("click",u=>{o=0;let s=Number(e.value),a=Number(t.value);switch(console.log(s),n){case"add":i.textContent=o=s+a;break;case"mul":i.textContent=o=s*a;break;case"sub":i.textContent=o=s-a;break;case"div":0===a?i.textContent="На 0 ділити не можна":(o=s/a)%1==0?i.textContent=o:i.textContent=o.toFixed(2)}})},id:4,name:"Калькулятор",category:"numerical"},{init:()=>{document.querySelector(".game-id_5").innerHTML=`<h2 class="time-\u{441}alculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440} \u{447}\u{430}\u{441}\u{443}</h2>
        <div class="time-calculator__game">
          <div class="time-calculator__input-container">
              <input class="time-calculator__input" data-input type="number" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"/>
              <button class="time-calculator__button" data-button ></button>
          </div>
          <p class="time-calculator__result" data-result >0 \u{434}\u{43D}. 00:00:00</p>
        </div>`;let e=document.querySelector("[data-input]"),t=document.querySelector("[data-button]"),u=document.querySelector("[data-result]");t.addEventListener("click",()=>{let t=Number(e.value),s=Math.floor(t/86400),i=Math.floor((t%=86400)/3600),n=Math.floor((t%=3600)/60);t%=60;let o=e=>String(e).padStart(2,"0");u.textContent=`${s} \u{434}\u{43D}. ${o(i)}:${o(n)}:${o(t)}`})},id:5,name:"Калькулятор часу",category:"numerical"},{init:()=>{let e=document.querySelector(".game-id_6");e.innerHTML=`
    <h2 class="dinosaur__title">Google \u{434}\u{438}\u{43D}\u{43E}\u{437}\u{430}\u{432}\u{440}</h2>
    <div class="dinosaur__game">
      <div class="dinosaur"></div>
    </div>`;let t=e.querySelector(".dinosaur"),u=document.querySelector(".dinosaur__game");new class{constructor(e,t){this.dinosaur=e,this.gameArea=t,this.gameOver=!1,this.isJumping=!1,this.gameModalStart()}init(){document.addEventListener("keydown",e=>{"Space"!==e.code||this.gameOver||this.isJumping||(e.preventDefault(),this.jump())}),this.gameArea.addEventListener("mousedown",e=>{this.gameOver||this.isJumping||(e.preventDefault(),this.jump())}),this.renderObstacles(),this.checkCollision(),this.move()}move(){this.dinosaur.classList.add("move"),this.gameArea.classList.add("move"),this.gameOver||(this.dinosaur.style.animationPlayState="running",this.gameArea.style.animationPlayState="running")}jump(){this.isJumping=!0,this.dinosaur.classList.add("jump"),setTimeout(()=>{this.isJumping=!1,this.dinosaur.classList.remove("jump")},600)}randomCactuses(){let e=Math.floor(11*Math.random()),t=this.gameArea.querySelector(".cactus");e>=8?t.classList.add("cactuses"):e>=5&&e<=7?t.classList.add("cactus--one"):e>=2&&e<=4?t.classList.add("cactuses--two"):e<=1&&t.classList.add("cactuses--small")}renderObstacles(){let e=document.createElement("div");e.classList.add("cactus"),this.gameArea.appendChild(e),this.randomCactuses();let t=()=>{e.removeEventListener("animationend",t),e.remove(),this.gameOver||this.renderObstacles()};e.addEventListener("animationend",t)}checkCollision(){let e=()=>{if(!0===this.gameOver)return;let t=this.gameArea.querySelector(".cactus"),u=t.getBoundingClientRect(),s=this.dinosaur.getBoundingClientRect();s.right>u.left&&s.left<u.right&&s.bottom>u.top?this.endGame(t):requestAnimationFrame(e)};requestAnimationFrame(e)}endGame(e){this.dinosaur.style.animationPlayState="paused",this.gameArea.style.animationPlayState="paused",e.style.animationPlayState="paused",this.gameOver=!0,this.gameOverModal()}createModal(e,t,u){let s=`
      <div class="dinosaur__modal">
        <p class="dinosaur__message">${e}</p>
        <button class="dinosaur__start button">${t}</button>
      </div>`;this.gameArea.insertAdjacentHTML("beforeend",s),this.gameArea.querySelector(".dinosaur__modal").classList.add("show"),this.gameArea.querySelector(".dinosaur__start").addEventListener("click",u)}gameModalStart(){this.createModal("Зіграємо?","Почати гру",()=>{let e=this.gameArea.querySelector(".dinosaur__modal");e.classList.remove("show"),setTimeout(()=>{e.remove()},250),this.init()})}gameOverModal(){this.createModal("GAME OVER!","Спробувати знову",()=>this.restartGame())}restartGame(){this.gameArea.querySelector(".dinosaur__modal").remove(),this.gameArea.querySelector(".cactus").remove(),this.gameOver=!1,this.renderObstacles(),this.checkCollision(),this.move()}}(t,u)},id:6,name:"Google динозаврик",category:"game"},{init:()=>{document.querySelector(".game-id_7").innerHTML=`<h2 class="football__title">\u{424}\u{443}\u{442}\u{431}\u{43E}\u{43B}</h2>
        </article>
            <div class="field" data-field>
                <div class="ball" data-ball ></div>
            </div>`;let e=document.querySelector("[data-field]"),t=document.querySelector("[data-ball]");e.addEventListener("click",e=>{console.log(e);let u=e.offsetX-25,s=e.offsetY-25;t.style.left=u+"px",t.style.top=s+"px",t.classList.add("active"),setTimeout(()=>{t.classList.remove("active")},300)})},id:7,name:"Футбол",category:"game"},{init:()=>{document.querySelector(".game-id_8").innerHTML=`  <div class="biggest-num__container">
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
<p class="biggest-num__text">\u{41D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} - (<span class="biggest-num__text--part">\u{447}\u{438}\u{441}\u{43B}\u{43E}</span>)</p>      </div>`;let e=document.querySelector("#biggest-num__input--one"),t=document.querySelector("#biggest-num__input--two"),u=document.querySelector("#biggest-num__input--three"),s=document.querySelector(".biggest-num__text--part"),i=()=>{let i=[Number(e.value),Number(t.value),Number(u.value)],n=i[0];for(let e=0;e<i.length;e++)i[e]>n&&(n=i[e]);s.textContent=`${0===n?"число":n}`};e.addEventListener("input",i),t.addEventListener("input",i),u.addEventListener("input",i)},id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{init:()=>{let e=document.querySelector(".game-id_10");e.innerHTML=`
   <h3 class="scientists-title">\u{41E}\u{431}\u{435}\u{440}\u{438} \u{432}\u{447}\u{435}\u{43D}\u{43E}\u{433}\u{43E}/\u{438}\u{445}</h3>

     <ul class="scientists-cards">
       <li class="scientists-card-item"><div class="scientist-name">Albert Einstein 1879-1955</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Isaac Newton 1643-1727</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Galileo Galilei 1564-1642</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Marie Curie 1867-1934</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Nicolaus Copernicus 1473-1543</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Charles Darwin 1809-1882</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Stephen Hawking 1942-2018</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Carl Sagan 1934-1996</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Ada Lovelace 1815-1852</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Alan Turing 1912-1954</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Sofia Kovalevskaya 1850-1891</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Michael Faraday 1791-1867</div></li>
     </ul>

     <ul class="scientists-tasks">
       <li class="scientists-item"><button id="btn-born19" class="scientists-btn">\u{42F}\u{43A}\u{456} \u{432}\u{447}\u{435}\u{43D}\u{456} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{438}\u{43B}\u{438}\u{441}\u{44F} \u{432} 19 \u{441}\u{442}.</button></li>
       <li class="scientists-item"><button id="btn-sortAlphabet" class="scientists-btn">\u{412}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{443}\u{432}\u{430}\u{442}\u{438} \u{437}\u{430} \u{430}\u{43B}\u{444}\u{430}\u{432}\u{456}\u{442}\u{43E}\u{43C}</button></li>
       <li class="scientists-item"><button id="btn-sortLifespan" class="scientists-btn">\u{412}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{443}\u{432}\u{430}\u{442}\u{438} \u{432}\u{447}\u{435}\u{43D}\u{438}\u{445} \u{437}\u{430} \u{43A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44E} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{442}\u{438}\u{445} \u{440}\u{43E}\u{43A}\u{456}\u{432}</button></li>
       <li class="scientists-item"><button id="btn-latestBorn" class="scientists-btn">\u{417}\u{43D}\u{430}\u{439}\u{442}\u{438} \u{432}\u{447}\u{435}\u{43D}\u{43E}\u{433}\u{43E}, \u{44F}\u{43A}\u{438}\u{439} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{438}\u{432}\u{441}\u{44F} \u{43D}\u{430}\u{439}\u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435}</button></li>
       <li class="scientists-item"><button id="btn-einstein" class="scientists-btn">\u{417}\u{43D}\u{430}\u{439}\u{442}\u{438} \u{440}\u{456}\u{43A} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{436}\u{435}\u{43D}\u{43D}\u{44F} Albert Einstein</button></li>
       <li class="scientists-item"><button id="btn-lastNameC" class="scientists-btn">\u{417}\u{43D}\u{430}\u{439}\u{442}\u{438} \u{432}\u{447}\u{435}\u{43D}\u{438}\u{445}, \u{43F}\u{440}\u{456}\u{437}\u{432}\u{438}\u{449}\u{430} \u{44F}\u{43A}\u{438}\u{445} \u{43F}\u{43E}\u{447}\u{438}\u{43D}\u{430}\u{44E}\u{442}\u{44C}\u{441}\u{44F} \u{43D}\u{430} \u{201C}\u{421}\u{201D}</button></li>
       <li class="scientists-item"><button id="btn-removeA" class="scientists-btn">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438} \u{432}\u{441}\u{456}\u{445} \u{432}\u{447}\u{435}\u{43D}\u{438}\u{445}, \u{456}\u{43C}\u{2019}\u{44F} \u{44F}\u{43A}\u{438}\u{445} \u{43F}\u{43E}\u{447}\u{438}\u{43D}\u{430}\u{454}\u{442}\u{44C}\u{441}\u{44F} \u{43D}\u{430} \u{201C}\u{410}\u{201D}</button></li>
       <li class="scientists-item"><button id="btn-longShort" class="scientists-btn">\u{417}\u{43D}\u{430}\u{439}\u{442}\u{438} \u{432}\u{447}\u{435}\u{43D}\u{43E}\u{433}\u{43E}, \u{44F}\u{43A}\u{438}\u{439} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432} \u{43D}\u{430}\u{439}\u{434}\u{43E}\u{432}\u{448}\u{435} \u{456} \u{43D}\u{430}\u{439}\u{43C}\u{435}\u{43D}\u{448}\u{435}</button></li>
       <li class="scientists-item"><button id="btn-sameInitials" class="scientists-btn">1. \u{417}\u{43D}\u{430}\u{439}\u{442}\u{438} \u{432}\u{447}\u{435}\u{43D}\u{438}\u{445}, \u{432} \u{44F}\u{43A}\u{438}\u{445} \u{441}\u{43F}\u{456}\u{432}\u{43F}\u{430}\u{434}\u{430}\u{44E}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{448}\u{456} \u{43B}\u{456}\u{442}\u{435}\u{440}\u{438} \u{456}\u{43C}\u{435}\u{43D}\u{456} \u{456} \u{43F}\u{440}\u{456}\u{437}\u{432}\u{438}\u{449}\u{430}</button></li>
     </ul>
  `;let t=e.querySelector(".scientists-cards"),u=()=>Array.from(t.querySelectorAll(".scientists-card-item")),s=e=>{let t=e.slice(e.length-9);return(t[0]+t[1]+t[2]+t[3])*1},i=e=>{let t,u,i;return u=(t=e.slice(e.length-9))[5],i=t[6],(u+i+t[7]+t[8])*1-s(e)};e.querySelector("#btn-born19").addEventListener("click",()=>{let e=u().filter(e=>{let t=s(e.textContent);return t>=1801&&t<=1900});t.innerHTML="",e.forEach(e=>t.appendChild(e))}),e.querySelector("#btn-sortAlphabet").addEventListener("click",()=>{let e=u().sort((e,t)=>e.textContent.localeCompare(t.textContent));t.innerHTML="",e.forEach(e=>t.appendChild(e))}),e.querySelector("#btn-sortLifespan").addEventListener("click",()=>{let e=u().sort((e,t)=>i(t.textContent)-i(e.textContent));t.innerHTML="",e.forEach(e=>t.appendChild(e))}),e.querySelector("#btn-latestBorn").addEventListener("click",()=>{let e=u(),i=e[0];e.forEach(e=>{s(e.textContent)>s(i.textContent)&&(i=e)}),t.innerHTML="",t.appendChild(i)}),e.querySelector("#btn-einstein").addEventListener("click",()=>{let e=u(),s=null;e.forEach(e=>{-1!==e.textContent.indexOf("Albert Einstein")&&(s=e)}),null!==s&&(t.innerHTML="",t.appendChild(s))}),e.querySelector("#btn-lastNameC").addEventListener("click",()=>{u().forEach(e=>{"C"!==e.textContent.split(" ")[1][0]&&e.remove()})}),e.querySelector("#btn-removeA").addEventListener("click",()=>{u().forEach(e=>{"A"===e.textContent.split(" ")[0][0]&&e.remove()})}),e.querySelector("#btn-longShort").addEventListener("click",()=>{let e=u(),s=e[0],n=e[0];e.forEach(e=>{let t=i(e.textContent);t>i(s.textContent)&&(s=e),t<i(n.textContent)&&(n=e)}),t.innerHTML="",t.appendChild(s),t.appendChild(n)}),e.querySelector("#btn-sameInitials").addEventListener("click",()=>{u().forEach(e=>{let t=e.textContent.split(" ");t[0][0]!==t[1][0]&&e.remove()})})},id:10,name:"Вчений",category:"acquaintance"},{init:()=>{let e;document.querySelector(".game-id_11").innerHTML=`
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
            </div>`;let t=document.querySelector(".tone__controls"),u=document.querySelector(".tone__box--user"),s=document.querySelector(".tone__box--current"),i=document.querySelector(".btn__done"),n=document.querySelector(".btn__next"),o=document.querySelector(".tone__meta"),a=document.querySelector(".similarity"),l=document.querySelectorAll(".tone__range"),r=[],c=[],d=()=>{let t=Math.floor(255*Math.random()),u=Math.floor(255*Math.random()),i=Math.floor(255*Math.random());r=[t,u,i],e=`rgb(${t}, ${u}, ${i})`,s.style.backgroundColor=e},m=()=>{let e=document.querySelector(".tone__range--red").value,t=document.querySelector(".tone__range--green").value,s=document.querySelector(".tone__range--blue").value;c=[e,t,s];let i=`rgb(${e}, ${t}, ${s})`;u.style.backgroundColor=i},_=0;d(),t.addEventListener("input",m),i.addEventListener("click",()=>{let t;m();var s=r,i=c;let n=0;for(let e=0;e<3;e++)n+=100-100*Math.abs(s[e]-i[e])/255;_=Math.floor(n/3),a.style.color=c[0]<167&&c[1]<167&&c[2]<167?"var(--colorBgPrimary)":"var(--colorTextPrimary)",a.textContent=`${_} %`,(t=document.createElement("div")).classList.add("box__reference"),t.style.backgroundColor=e,u.appendChild(t)}),n.addEventListener("click",()=>{d(),u.querySelector(".box__reference").remove(),a.textContent="",l.forEach(e=>{e.value=128}),u.style.backgroundColor="rgb(128, 128, 128)"}),o.addEventListener("click",()=>{i.classList.toggle("is__closed"),n.classList.toggle("is__closed"),t.classList.toggle("is__closed")})},id:11,name:"Вгадай колір",category:"game"}],h=document.querySelector("[data-games]"),E=(e,t)=>{t.innerHTML=e.reduce((e,t)=>e+=`      
    <section id="game-id_${t.id}" class="section">
        <div class="container">
          <div class="game game-id_${t.id}">
          </div>
        </div>
      </section>`,""),e.forEach(e=>{e.init&&e.init()})};E(v,h),document.querySelectorAll(".section");let S=document.querySelectorAll(".menu__item");document.querySelectorAll(".menu__text");let C=e=>{let t=e.currentTarget.dataset.category;E(v.filter(e=>e.category===t),h)};S.forEach(e=>{e.addEventListener("click",C)});let f=document.querySelector(".footer-form"),q=document.querySelector("[data-modal]"),L=document.querySelector("[data-modal-close]");console.log("Форма:",f),console.log("Бекдроп:",q),console.log("Кнопка закриття:",L),f.addEventListener("submit",e=>{e.preventDefault(),q.classList.remove("is-hidden"),f.reset()}),L.addEventListener("click",e=>{e.preventDefault(),q.classList.add("is-hidden")});
//# sourceMappingURL=Magic-coding__Project.0993c379.js.map
