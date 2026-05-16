let t=document.querySelector(".switcher"),e=document.querySelector(".logo__img");document.querySelector(".helloing__text--part"),t.addEventListener("change",t=>{t.target.checked?(document.body.classList.add("dark"),e.classList.add("logo__img--dark")):(document.body.classList.remove("dark"),e.classList.remove("logo__img--dark"))});let u=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{init:()=>{document.querySelector(".game-id_4").innerHTML=`<h2 class="calculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}</h2>
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
        </div>`;let t=document.querySelector(".number__first"),e=document.querySelector(".numbe__second"),u=document.querySelector(".calculator__actions"),a=document.querySelector(".calculate"),c=document.querySelector(".result"),o="",n=0;u.addEventListener("click",t=>{document.querySelectorAll(".action").forEach(t=>{t.classList.remove("choose")}),t.target.classList.add("choose"),o=t.target.dataset.action}),a.addEventListener("click",u=>{n=0;let a=Number(t.value),l=Number(e.value);switch(console.log(a),o){case"add":c.textContent=n=a+l;break;case"mul":c.textContent=n=a*l;break;case"sub":c.textContent=n=a-l;break;case"div":0===l?c.textContent="На 0 ділити не можна":(n=a/l)%1==0?c.textContent=n:c.textContent=n.toFixed(2)}})},id:4,name:"Калькулятор",category:"numerical"},{init:()=>{document.querySelector(".game-id_5").innerHTML=`<h2 class="time-\u{441}alculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440} \u{447}\u{430}\u{441}\u{443}</h2>
        <div class="time-calculator__game">
          <div class="time-calculator__input-container">
              <input class="time-calculator__input" data-input type="number" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"/>
              <button class="time-calculator__button" data-button ></button>
          </div>
          <p class="time-calculator__result" data-result >0 \u{434}\u{43D}. 00:00:00</p>
        </div>`;let t=document.querySelector("[data-input]"),e=document.querySelector("[data-button]"),u=document.querySelector("[data-result]");e.addEventListener("click",()=>{let e=Number(t.value),a=Math.floor(e/86400),c=Math.floor((e%=86400)/3600),o=Math.floor((e%=3600)/60);e%=60;let n=t=>String(t).padStart(2,"0");u.textContent=`${a} \u{434}\u{43D}. ${n(c)}:${n(o)}:${n(e)}`})},id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}];document.querySelector("[data-games]").innerHTML=u.reduce((t,e)=>t+=`      
    <section id="game-id_${e.id}" class="section">
        <div class="container">
          <div class="game game-id_${e.id}">
          </div>
        </div>
      </section>`,""),u.forEach(t=>{t.init&&t.init()});
//# sourceMappingURL=Magic-coding__Project.536483a6.js.map
