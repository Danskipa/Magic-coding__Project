let e=document.querySelector(".modal"),u=document.querySelector(".switcher");document.querySelector(".helloing__text--part");let t=document.querySelector(".form__input"),n=document.querySelector(".helloing__text--part"),a=document.querySelector(".form__button"),l=document.querySelector(".seconde__modal"),c=document.querySelector(".close__button");document.querySelector(".logo__link--picture");let i=document.querySelector(".logo__img");u.addEventListener("change",e=>{e.target.checked?(document.body.classList.add("dark"),logoPickture.classList.add("logo__photo--dark"),i.src="./images/logo.svg"):(document.body.classList.remove("dark"),logoPickture.classList.remove("logo__photo--dark"),i.src="./images/logo_dark.svg")}),t.addEventListener("input",e=>{n.textContent=e.target.value}),a.addEventListener("click",e=>{a&&l.classList.remove("hidden")}),c.addEventListener("click",u=>{c&&(e.classList.add("hidden"),l.classList.add("hidden"))}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".game-id_2");e.innerHTML=`
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
  `;let u=e.querySelector(".guess-input"),t=e.querySelector(".guess-subtitle"),n=Math.floor(100*Math.random())+1;u.addEventListener("input",e=>{let u=Number(e.target.value);u===n?t.textContent=`\u{412}\u{456}\u{442}\u{430}\u{44E}, \u{432}\u{438} \u{432}\u{433}\u{430}\u{434}\u{430}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}! (${n})`:u>n?t.textContent="Занадто велике число":t.textContent="Занадто мале число"})});let o=[{init:()=>{let e=document.querySelector(".game-id_1");if(!e)return;e.innerHTML=`
    <section class="leap-year-game">
      <h2 class="leap-year-title">\u{41F}\u{435}\u{440}\u{435}\u{432}\u{456}\u{440} \u{432} \u{44F}\u{43A}\u{438}\u{439} \u{440}\u{456}\u{43A} \u{442}\u{438} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{438}\u{432}\u{441}\u{44F}</h2>
      <div class="leap-year-input-wrapper">
        <input class="leap-year-input" type="number" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{440}\u{456}\u{43A} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{436}\u{435}\u{43D}\u{43D}\u{44F}" />
      </div>
      <h3 class="leap-year-result"></h3>
    </section>
  `;let u=e.querySelector(".leap-year-input"),t=e.querySelector(".leap-year-result");u.addEventListener("input",e=>{let u=Number(e.target.value);if(0===u){t.textContent="";return}u%4==0&&u%100!=0||u%400==0?(t.textContent="Ви народилися у високосний рік!",t.style.color="green"):(t.textContent="Ви народилися не у високосний рік.",t.style.color="black")})},id:1,name:"Високосний калькулятор",category:"numerical"},,{init:void 0,id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{init:()=>{document.querySelector(".game-id_4").innerHTML=`<h2 class="calculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}</h2>
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
        </div>`;let e=document.querySelector(".number__first"),u=document.querySelector(".numbe__second"),t=document.querySelector(".calculator__actions"),n=document.querySelector(".calculate"),a=document.querySelector(".result"),l="",c=0;t.addEventListener("click",e=>{document.querySelectorAll(".action").forEach(e=>{e.classList.remove("choose")}),e.target.classList.add("choose"),l=e.target.dataset.action}),n.addEventListener("click",t=>{c=0;let n=Number(e.value),i=Number(u.value);switch(console.log(n),l){case"add":a.textContent=c=n+i;break;case"mul":a.textContent=c=n*i;break;case"sub":a.textContent=c=n-i;break;case"div":0===i?a.textContent="На 0 ділити не можна":(c=n/i)%1==0?a.textContent=c:a.textContent=c.toFixed(2)}})},id:4,name:"Калькулятор",category:"numerical"},{init:()=>{document.querySelector(".game-id_5").innerHTML=`<h2 class="time-\u{441}alculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440} \u{447}\u{430}\u{441}\u{443}</h2>
        <div class="time-calculator__game">
          <div class="time-calculator__input-container">
              <input class="time-calculator__input" data-input type="number" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"/>
              <button class="time-calculator__button" data-button ></button>
          </div>
          <p class="time-calculator__result" data-result >0 \u{434}\u{43D}. 00:00:00</p>
        </div>`;let e=document.querySelector("[data-input]"),u=document.querySelector("[data-button]"),t=document.querySelector("[data-result]");u.addEventListener("click",()=>{let u=Number(e.value),n=Math.floor(u/86400),a=Math.floor((u%=86400)/3600),l=Math.floor((u%=3600)/60);u%=60;let c=e=>String(e).padStart(2,"0");t.textContent=`${n} \u{434}\u{43D}. ${c(a)}:${c(l)}:${c(u)}`})},id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{init:()=>{document.querySelector(".game-id_8").innerHTML=`  <div class="biggest-num__container">
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
<p class="biggest-num__text">\u{41D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} - (<span class="biggest-num__text--part">\u{447}\u{438}\u{441}\u{43B}\u{43E}</span>)</p>      </div>`;let e=document.querySelector("#biggest-num__input--one"),u=document.querySelector("#biggest-num__input--two"),t=document.querySelector("#biggest-num__input--three"),n=document.querySelector(".biggest-num__text--part"),a=()=>{let a=[Number(e.value),Number(u.value),Number(t.value)],l=a[0];for(let e=0;e<a.length;e++)a[e]>l&&(l=a[e]);n.textContent=`${0===l?"число":l}`};e.addEventListener("input",a),u.addEventListener("input",a),t.addEventListener("input",a)},id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}];document.querySelector("[data-games]").innerHTML=o.reduce((e,u)=>e+=`      
    <section id="game-id_${u.id}" class="section">
        <div class="container">
          <div class="game game-id_${u.id}">
          </div>
        </div>
      </section>`,""),o.forEach(e=>{e.init&&e.init()});
//# sourceMappingURL=Magic-coding__Project.732fa090.js.map
