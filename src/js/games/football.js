export const initFootball = () => {
    const gameContainer = document.querySelector('.game-id_7');

    const gameHTML = `<h2 class="football__title">Футбол</h2>
        </article>
            <div class="field" data-field>
                <div class="ball" data-ball ></div>
            </div>`;
    gameContainer.innerHTML = gameHTML;

    //logic
    const field = document.querySelector("[data-field]")
    const ball = document.querySelector("[data-ball]")

    field.addEventListener("click", (event) => {
        console.log(event)
        const x = event.offsetX - 25;
        const y = event.offsetY - 25;
        ball.style.left = x + "px"
        ball.style.top = y + "px"
        ball.classList.add("active");

        timeSpin(() => {
            ball.classList.remove("active");
        }, 300);
    }

    );

};