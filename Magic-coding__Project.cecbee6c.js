document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".game-id_2");e.innerHTML=`
    <section class="guess-number">
      <div class="container">
        <h2 class="guess-title">\u{412}\u{433}\u{430}\u{434}\u{430}\u{439} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{437}\u{430}\u{433}\u{430}\u{434}\u{430}\u{432} \u{43A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440}</h2>
        <div class="guess-box">
          <div class="guess-input-wrapper">
            <input
              class="guess-input"
              placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"
              id="number"
              type="number"
            />
          </div>
          <label for="number"></label>
          <h3 class="guess-subtitle"></h3>
        </div>
      </div>
    </section>
  `;let t=e.querySelector(".guess-input"),u=e.querySelector(".guess-subtitle"),s=Math.floor(100*Math.random())+1;t.addEventListener("input",e=>{let t=Number(e.target.value);t===s?u.textContent=`\u{412}\u{456}\u{442}\u{430}\u{44E}, \u{432}\u{438} \u{432}\u{433}\u{430}\u{434}\u{430}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}! (${s})`:t>s?u.textContent="Занадто велике число":u.textContent="Занадто мале число"})});let e=[{init:()=>{let e=document.querySelector(".game-id_1");if(!e)return;e.innerHTML=`
    <section class="leap-year-game">
      <h2 class="leap-year-title">\u{41F}\u{435}\u{440}\u{435}\u{432}\u{456}\u{440} \u{432} \u{44F}\u{43A}\u{438}\u{439} \u{440}\u{456}\u{43A} \u{442}\u{438} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{438}\u{432}\u{441}\u{44F}</h2>
      <div class="leap-year-box">
        <div class="leap-year-input-wrapper">
          <input class="leap-year-input" type="number" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{440}\u{456}\u{43A} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{436}\u{435}\u{43D}\u{43D}\u{44F}" />
        </div>
        <h3 class="leap-year-result"></h3>
      </div>
    </section>
  `;let t=e.querySelector(".leap-year-input"),u=e.querySelector(".leap-year-result");t.addEventListener("input",e=>{let t=Number(e.target.value);if(0===t){u.textContent="";return}t%4==0&&t%100!=0||t%400==0?(u.textContent="Ви народилися у високосний рік!",u.style.color="green"):(u.textContent="Ви народилися не у високосний рік.",u.style.color="black")})},id:1,name:"Високосний калькулятор",category:"numerical"},,{init:void 0,id:2,name:"Вгадай число",category:"numerical"},{init:()=>{let e=document.querySelector(".game-id_3"),t=0,u=0,s="",a=["rock","scissors","paper"];e.innerHTML=`
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
`;let r=e.querySelector(".rps-text"),o=e.querySelector("#cpu-score"),l=e.querySelector("#player-score"),i=e.querySelectorAll(".rps-button__option"),n=e.querySelector(".rps-button"),c=e=>{s=e.target.dataset.choice};n.addEventListener("click",e=>{let i=a[Math.floor(Math.random()*a.length)];"rock"===s&&"rock"===i?(r.textContent="Нічия в цьому раунді!",r.style.color="#000000"):"rock"===s&&"scissors"===i?(u++,r.textContent="Ви виграли раунд!",r.style.color="#039900"):"rock"===s&&"paper"===i&&(t++,r.textContent="Комп’ютер виграв раунд!",r.style.color="#990000"),"scissors"===s&&"scissors"===i?(r.textContent="Нічия в цьому раунді!",r.style.color="#000000"):"scissors"===s&&"paper"===i?(u++,r.textContent="Ви виграли раунд!",r.style.color="#039900"):"scissors"===s&&"rock"===i&&(t++,r.textContent="Комп’ютер виграв раунд!",r.style.color="#990000"),"paper"===s&&"paper"===i?(r.textContent="Нічия в цьому раунді!",r.style.color="#000000"):"paper"===s&&"rock"===i?(u++,r.textContent="Ви виграли раунд!",r.style.color="#039900"):"paper"===s&&"scissors"===i&&(t++,r.textContent="Комп’ютер виграв раунд!",r.style.color="#990000"),o.textContent=`\u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} - ${t}`,l.textContent=`\u{412}\u{438} - ${u}`}),i.forEach(e=>{e.addEventListener("click",c)})},id:3,name:"Камінь-Ножиці-Папір",category:"game"},{init:()=>{document.querySelector(".game-id_4").innerHTML=`<h2 class="calculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}</h2>
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
        </div>`;let e=document.querySelector(".number__first"),t=document.querySelector(".numbe__second"),u=document.querySelector(".calculator__actions"),s=document.querySelector(".calculate"),a=document.querySelector(".result"),r="",o=0;u.addEventListener("click",e=>{document.querySelectorAll(".action").forEach(e=>{e.classList.remove("choose")}),e.target.classList.add("choose"),r=e.target.dataset.action}),s.addEventListener("click",u=>{o=0;let s=Number(e.value),l=Number(t.value);switch(console.log(s),r){case"add":a.textContent=o=s+l;break;case"mul":a.textContent=o=s*l;break;case"sub":a.textContent=o=s-l;break;case"div":0===l?a.textContent="На 0 ділити не можна":(o=s/l)%1==0?a.textContent=o:a.textContent=o.toFixed(2)}})},id:4,name:"Калькулятор",category:"numerical"},{init:()=>{document.querySelector(".game-id_5").innerHTML=`<h2 class="time-\u{441}alculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440} \u{447}\u{430}\u{441}\u{443}</h2>
        <div class="time-calculator__game">
          <div class="time-calculator__input-container">
              <input class="time-calculator__input" data-input type="number" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"/>
              <button class="time-calculator__button" data-button ></button>
          </div>
          <p class="time-calculator__result" data-result >0 \u{434}\u{43D}. 00:00:00</p>
        </div>`;let e=document.querySelector("[data-input]"),t=document.querySelector("[data-button]"),u=document.querySelector("[data-result]");t.addEventListener("click",()=>{let t=Number(e.value),s=Math.floor(t/86400),a=Math.floor((t%=86400)/3600),r=Math.floor((t%=3600)/60);t%=60;let o=e=>String(e).padStart(2,"0");u.textContent=`${s} \u{434}\u{43D}. ${o(a)}:${o(r)}:${o(t)}`})},id:5,name:"Калькулятор часу",category:"numerical"},{init:()=>{let e=document.querySelector(".game-id_6");e.innerHTML=`
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
<p class="biggest-num__text">\u{41D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} - (<span class="biggest-num__text--part">\u{447}\u{438}\u{441}\u{43B}\u{43E}</span>)</p>      </div>`;let e=document.querySelector("#biggest-num__input--one"),t=document.querySelector("#biggest-num__input--two"),u=document.querySelector("#biggest-num__input--three"),s=document.querySelector(".biggest-num__text--part"),a=()=>{let a=[Number(e.value),Number(t.value),Number(u.value)],r=a[0];for(let e=0;e<a.length;e++)a[e]>r&&(r=a[e]);s.textContent=`${0===r?"число":r}`};e.addEventListener("input",a),t.addEventListener("input",a),u.addEventListener("input",a)},id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}],t=document.querySelector("html"),u=document.querySelector(".modal"),s=document.querySelector(".switcher");document.querySelector(".helloing__text--part");let a=document.querySelector(".form__input"),r=document.querySelector(".helloing__text--part"),o=document.querySelector(".form__button"),l=document.querySelector(".seconde__modal"),i=document.querySelector(".close__button");document.querySelector(".logo__link--picture");let n=document.querySelector(".logo__link_photo--white"),c=document.querySelector(".logo__link_photo--dark"),d=document.querySelectorAll(".menu__item");document.querySelectorAll(".game");let m=document.querySelectorAll(".section"),p=document.querySelector(".modal__form");s.addEventListener("change",e=>{e.target.checked?(t.style.setProperty("--colorCorrect","#ff0086"),t.style.setProperty("--colorIncorrect","#00ff48"),t.style.setProperty("--colorBgPrimary","#000000"),t.style.setProperty("--colorBgSecondary","#595959"),t.style.setProperty("--colorTextPrimary","#ffffff"),n.classList.add("dark_logo"),c.classList.add("dark_logo"),d.forEach(e=>{e.classList.add("menu__item--dark")})):(t.style.setProperty("--colorCorrect","#039900"),t.style.setProperty("--colorIncorrect","#990000"),t.style.setProperty("--colorBgPrimary","#ffffff"),t.style.setProperty("--colorBgSecondary","#d9d9d9"),t.style.setProperty("--colorBgField","#d7d7d7"),t.style.setProperty("--colorBgSwitch","#7a7a7a"),t.style.setProperty("--colorBgChoose","#f1f1f1"),t.style.setProperty("--colorTextPrimary","#000000"),t.style.setProperty("--colorTextSecondary","#7e7e7e"),n.classList.remove("dark_logo"),c.classList.remove("dark_logo"),d.forEach(e=>{e.classList.remove("menu__item--dark")}))}),a.addEventListener("input",e=>{r.textContent=e.target.value}),p.addEventListener("submit",e=>{e.preventDefault(),o&&l.classList.remove("hidden")}),i.addEventListener("click",e=>{i&&(u.classList.add("hidden"),l.classList.add("hidden"))}),document.querySelectorAll(".menu__text");let g=t=>{let u=t.currentTarget.dataset.category;m.forEach((t,s)=>{e[s].category===u?t.style.display="block":t.style.display="none"})};d.forEach(e=>{e.addEventListener("click",g)}),document.querySelector("[data-games]").innerHTML=e.reduce((e,t)=>e+=`      
    <section id="game-id_${t.id}" class="section">
        <div class="container">
          <div class="game game-id_${t.id}">
          </div>
        </div>
      </section>`,""),e.forEach(e=>{e.init&&e.init()});let y=document.querySelector(".footer-form"),_=document.querySelector("[data-modal]"),h=document.querySelector("[data-modal-close]");console.log("Форма:",y),console.log("Бекдроп:",_),console.log("Кнопка закриття:",h),y.addEventListener("submit",e=>{e.preventDefault(),_.classList.remove("is-hidden"),y.reset()}),h.addEventListener("click",e=>{e.preventDefault(),_.classList.add("is-hidden")});
//# sourceMappingURL=Magic-coding__Project.cecbee6c.js.map
