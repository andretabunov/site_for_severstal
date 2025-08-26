const scenes = {
    intro1: {
        text: "Одним ранним утром ты пришёл на завод.",
        next: "intro2",
        bg: "img/scene/1755848547.png",
        heroLeft: "img/characters/rabotuaga.png",
        soundEffect: "audio/short/shagi.mp3",
        bgAudio: "audio/music/zvuki-zavoda.mp3"
    },
    intro2: {
        text: "Поприветсвовал своего коллегу — своего лучшего друга, Серёгу.",
        next: "intro3",
        heroRight: "img/characters/serega.png",
    },
    intro3: {
        text: "Ты пришёл в свой цех, начал работать на токарном станке",
        next: "intro4",
        bg: "img/scene/stanok16x9.png",
        heroLeft: "img/characters/rabotuaga.png",
        heroRight: "", // - пусто
        soundEffect: "audio/short/tokarni(9s).mp3",
    },
    intro4: {
        text: "После обеда ты вернулся к станку, и вдруг почувствовал резкий запах дыма и гари",
        next: "intro5",
        soundEffect: "NaN"
    },
    intro5: {
        text: "Осмотрелся, и вдруг увидел столб дыма в цехе.",
        next: "intro6",
        bg: "img/scene/pojar.png",
        heroLeft: "img/characters/rabotuaga.png",
        bgAudio: "audio/music/trevoznuaya.mp3"
    },
    intro6: {
        text: "Что же ты будешь делать?",
        choices: [
            { text: "Включу пожарную сигнализацию", next: "activateSignalization1" },
            { text: "Попытаюсь выянить причину не поднимая тревогу", next: "findingСause", damage: 20 }
        ],
        soundEffect: "",
        bgAudio: ""
    },
    // Левая ветка
    activateSignalization1: {
        text: "Быстро включаешь извещатель и зовёшь коллег",
        next: "activateSignalization2",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    activateSignalization2: {
        text: "Что делать дальше?",
        choices: [
            {text: "Хватаю огнетушитель", next: "fireExtinguisher1"},
            {text: "Организую эвакуацию, жду пожарных", next: "evacuation"}
        ],
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    evacuation: {
        text: "Выводишь всех людей, следишь, чтобы все выбежали",
        next: "salvation1",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    fireExtinguisher1: {
        text: "Огонь немного уменьшается, но дым нарастает",
        next: "fireExtinguisher2",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    fireExtinguisher2: {
        text: "О нет! огнетушитель пуст! Что же мне делать?",
        choices: [
            {text: "Искать другой огнетушитель", next: "fireExtinguisher1"},
            {text: "Прячусь и жду помощи", next: "hidding"}
        ],
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    hidding: {
        text: "Что же делать если дым усиливается?",
        choices: [ 
            {text: "Беру маску/ткань и направляюсь к выходу", next: "salvation1"}, 
            {text: "Паникую", next: "death1"} 
        ],
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    // Правая ветка
    findingСause: {
        text: "Теряешь время, огонь распространяется!",
        next: "panicInWorkShop1",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    panicInWorkShop1: {
        text: "Огонь увеличивается, начинается паника в цехе!",
        next: "helpingColleague",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    helpingColleague: {
        text: "Коллега не может встать",
        choices: [
            {text: "Помогаю выбраться", next: "panicInWorkShop2"},
            {text: "Оставляю и бегу", next: "lossInDark"}
        ],
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    panicInWorkShop2: {
        text: "Стажёры в цехе в панике, надо им помочь.",
        choices: [
            {text: "Помочь им выбраться через эвакуационный выход", next: "exitBlocked"},
            {text: "Паниковать и не понимать что делать", next: "lossInDark"}
        ],
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    exitBlocked: {
        text: "О нет! Этот выход заблокирован",
        choices: [
            {text: "Искать другой эвакуационный выход", next: "salvation1"},
            {text: "Паниковать", next: "death1"}
        ],
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    lossInDark: {
        text: "Ты потерялся во тьме и дыму",
        next: "death1",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },



    // Спасение
    salvation1: {
        text: "Выходишь на свежий воздух",
        next: "salvation2",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    salvation2: {
        text: "Ты спасён!",
        next: "salvation3",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    salvation3: {
        text: "На улице ты сообщаешь руководителю, встречаешь пожарных",
        next: "salvation4",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    salvation4: {
        text: "Пожарные тушат огонь.",
        next: "salvation5",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    salvation5: {
        text: "Группа в безопастности — ПОБЕДА!",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    // Смерть
    death1: {
        text: "Ты теряешь ориентацию, задыхаешься",
        next: "smertVnishite2",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    death2: {
        text: "Ты потерял сознание от дыма",
        next: "smertVnishite3",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    death3: {
        text: "Тебя спасли медики которые приехали на вызов",
        next: "smertVnishite4",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    },
    death4: {
        text: "Ты получил штраф на грубое нарушение ТБ(плохая концовка)",
        bg: "",
        heroLeft: "",
        heroRight: "",
        soundEffect: "",
        bgAudio: ""
    }
    
}

let currentScene = "intro1";
let bgAudio = new Audio();
let currentSoundEffect = new Audio();
currentSoundEffect.volume = 0.2;
let HP = 100;
let skipScene = false;
bgAudio.loop = true;

async function ShowScene(sceneName){
    const scene = scenes[sceneName];
    choices.innerHTML = "";

    if(scene.damage) ApplyDamage(scene.damage);

    if(scene.next) AddNextButton(scene)

    else if(scene.choices) AddChoices(scene);

    if(scene.bg) SetBgImage(scene.bg);

    if(scene.heroLeft || scene.heroRight) SetCharacters(image, scene);
    
    const text = document.getElementById("text");

    if(scene.bgAudio) SetBgAudio(scene.bgAudio);

    if(scene.soundEffect) PlaysoundEffect(scene.soundEffect);

    await DisplayText(text, scene.text, choices);
}   

function AddNextButton(scene){
    const btn = document.createElement("button");
    btn.className = "dalee-btn";
    btn.textContent = "Продолжить...";
    btn.onclick = () => ShowScene(scene.next);
    btn.disabled = true;
    choices.appendChild(btn);
}


function AddChoices(scene){
    scene.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "choices-btn";
        btn.textContent = choice.text;
        btn.onclick = () => {
            if(choice.damage) ApplyDamage(choice.damage);
            currentScene = choice.next;
            ShowScene(choice.next);
        }
        btn.disabled = true;
        choices.appendChild(btn);
    });
}


function SetCharacters(image,scene){
    if(scene.heroLeft == "" || scene.heroLeft){
        Array.from(document.getElementsByClassName("hero-left")).forEach(element => {element.remove()})
        if(scene.heroLeft !== ""){ 
            const hero = document.createElement("img");
            hero.src = scene.heroLeft;
            hero.className = "hero-left";
            image.appendChild(hero);
        }
    }
    if(scene.heroRight == "" || scene.heroRight){
        Array.from(document.getElementsByClassName("hero-right")).forEach(element => {element.remove()})
        if(scene.heroRight !== ""){ 
            const hero = document.createElement("img");
            hero.src = scene.heroRight;
            hero.className = "hero-right";
            image.appendChild(hero);
        }
    }
}


function StartGame(){
    document.getElementById("enabledInteractive").style.display = "none";
    document.getElementById("header").style.paddingBottom = "20px";

    document.getElementById("interactive").style.display = "";

    ShowScene(currentScene, document.getElementById("choices"))
}


function ApplyDamage(damage){
    HP -= damage;
    if(HP < 0) HP = 0;
    UpdateHPBar();

    if(HP === 0){
        document.getElementById("interactive").style.display = "none";
        document.getElementById("enabledInteractive").style.display = "";
        document.getElementById("lossText").style.display = "";

    }
}


function UpdateHPBar(){
    const hpBar = document.getElementById("hp-fill");
    const hpText = document.getElementById("hp-text");

    hpBar.style.width = `${HP}%`;
    hpText.textContent = HP.toString();
}


function PlaysoundEffect(src){
    currentSoundEffect.pause();
    if(src !== "NaN"){
        currentSoundEffect = new Audio(src);
        currentSoundEffect.volume = 0.8;
        currentSoundEffect.play()
    }
}


function SetBgAudio(src){
    if(bgAudio.src !== src){
        bgAudio2 = new Audio(src);
        bgAudio2.loop = true;
        bgAudio2.play();
        for (let i = 0; i <= 0.3; i += 0.00005) {
            bgAudio.volume = 0.3 - i;
            bgAudio2.volume = i;
        }
        bgAudio.pause();
        bgAudio = bgAudio2;
    }
}

function SetBgImage(url) {
    const image = document.getElementById('image'); 
    const img = new Image();
  
    img.onload = function() {
        const imgWidth = this.naturalWidth;
        const imgHeight = this.naturalHeight;
    
        const maxWidth = image.parentElement?.offsetWidth || imgWidth;
        const maxHeight = image.parentElement?.offsetHeight || imgHeight;

        const scale = Math.min(
          maxWidth / imgWidth,
          maxHeight / imgHeight,
          1
        );

        const finalWidth = imgWidth * scale;
        const finalHeight = imgHeight * scale;

        image.style.width = finalWidth + 'px';
        image.style.height = finalHeight + 'px';

        image.style.backgroundImage = `url(${url})`;
    };
  
    img.src = url;
}

async function DisplayText(element,text, choices){
    element.textContent = "";
    skipScene = false;
    for(const char of text){
        if (skipScene) {
            element.textContent = text;
            break;
        }
        else {
            element.textContent += char;
            await Sleep(30)    
        }
    }
    choices.querySelectorAll("*").forEach(element => {
        element.disabled = false;
    });
    return true;
}

function Sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("resize", () => {
    if(scenes[currentScene].bg) SetBgImage(scenes[currentScene].bg);
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') skipScene = true;
});