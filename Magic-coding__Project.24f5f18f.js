let e=document.querySelector(".switcher"),u=document.querySelector(".logo__img");document.querySelector(".helloing__text--part"),e.addEventListener("change",e=>{e.target.checked?(document.body.classList.add("dark"),u.classList.add("logo__img--dark")):(document.body.classList.remove("dark"),u.classList.remove("logo__img--dark"))}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".game-id_2");e.innerHTML=`
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
  `;let u=e.querySelector(".guess-input"),t=e.querySelector(".guess-subtitle"),a=Math.floor(100*Math.random())+1;u.addEventListener("input",e=>{let u=Number(e.target.value);u===a?t.textContent=`\u{412}\u{456}\u{442}\u{430}\u{44E}, \u{432}\u{438} \u{432}\u{433}\u{430}\u{434}\u{430}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}! (${a})`:u>a?t.textContent="Занадто велике число":t.textContent="Занадто мале число"})});let t=[{id:1,name:"Високосний калькулятор",category:"numerical"},{init:void 0,id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{init:()=>{document.querySelector(".game-id_4").innerHTML=`<h2 class="calculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}</h2>
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
        </div>`;let e=document.querySelector(".number__first"),u=document.querySelector(".numbe__second"),t=document.querySelector(".calculator__actions"),a=document.querySelector(".calculate"),c=document.querySelector(".result"),n="",o=0;t.addEventListener("click",e=>{document.querySelectorAll(".action").forEach(e=>{e.classList.remove("choose")}),e.target.classList.add("choose"),n=e.target.dataset.action}),a.addEventListener("click",t=>{o=0;let a=Number(e.value),l=Number(u.value);switch(console.log(a),n){case"add":c.textContent=o=a+l;break;case"mul":c.textContent=o=a*l;break;case"sub":c.textContent=o=a-l;break;case"div":0===l?c.textContent="На 0 ділити не можна":(o=a/l)%1==0?c.textContent=o:c.textContent=o.toFixed(2)}})},id:4,name:"Калькулятор",category:"numerical"},{init:()=>{document.querySelector(".game-id_5").innerHTML=`<h2 class="time-\u{441}alculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440} \u{447}\u{430}\u{441}\u{443}</h2>
        <div class="time-calculator__game">
          <div class="time-calculator__input-container">
              <input class="time-calculator__input" data-input type="number" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"/>
              <button class="time-calculator__button" data-button ></button>
          </div>
          <p class="time-calculator__result" data-result >0 \u{434}\u{43D}. 00:00:00</p>
        </div>`;let e=document.querySelector("[data-input]"),u=document.querySelector("[data-button]"),t=document.querySelector("[data-result]");u.addEventListener("click",()=>{let u=Number(e.value),a=Math.floor(u/86400),c=Math.floor((u%=86400)/3600),n=Math.floor((u%=3600)/60);u%=60;let o=e=>String(e).padStart(2,"0");t.textContent=`${a} \u{434}\u{43D}. ${o(c)}:${o(n)}:${o(u)}`})},id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}];document.querySelector("[data-games]").innerHTML=t.reduce((e,u)=>e+=`      
    <section id="game-id_${u.id}" class="section">
        <div class="container">
          <div class="game game-id_${u.id}">
          </div>
        </div>
      </section>`,""),t.forEach(e=>{e.init&&e.init()});
//# sourceMappingURL=Magic-coding__Project.24f5f18f.js.map
