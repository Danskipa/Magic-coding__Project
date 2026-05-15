var e;let t=document.querySelector(".switcher"),a=document.querySelector(".logo__img");document.querySelector(".helloing__text--part"),t.addEventListener("change",e=>{e.target.checked?(document.body.classList.add("dark"),a.classList.add("logo__img--dark")):(document.body.classList.remove("dark"),a.classList.remove("logo__img--dark"))}),document.querySelector("[data-games]").innerHTML=(e=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{init:c,id:4,name:"Калькулятор",category:"numerical"},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}]).reduce((e,t)=>e+=`      
    <section id="game-id_${t.id}" class="section">
        <div class="container">
          <div class="game game-id_${t.id}">
          </div>
        </div>
      </section>`,""),e.forEach(e=>{e.init&&e.init()});let c=()=>{document.querySelector(".game-id_4").innerHTML=`<h2 class="calculator__title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}</h2>
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
        </div>`;let e=document.querySelector(".number__first"),t=document.querySelector(".numbe__second"),a=document.querySelector(".calculator__actions"),c=document.querySelector(".calculate"),u=document.querySelector(".result"),n="",o=0;a.addEventListener("click",e=>{document.querySelectorAll(".action").forEach(e=>{e.classList.remove("choose")}),e.target.classList.add("choose"),n=e.target.dataset.action}),c.addEventListener("click",a=>{o=0;let c=Number(e.value),i=Number(t.value);switch(console.log(c),n){case"add":u.textContent=o=c+i;break;case"mul":u.textContent=o=c*i;break;case"sub":u.textContent=o=c-i;break;case"div":0===i?u.textContent="На 0 ділити не можна":(o=c/i)%1==0?u.textContent=o:u.textContent=o.toFixed(2)}})};
//# sourceMappingURL=Magic-coding__Project.e99fc040.js.map
