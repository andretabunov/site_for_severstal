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
        heroRight: "img/characters/serega.png"
    },
    intro3: {
        text: "Ты пришёл в свой цех, начал изготавливать деталь на токарном станке",
        next: "intro4",
        bg: "img/scene/stanok16x9.png",
        heroLeft: "img/characters/rabotuaga.png",
        heroRight: "NaN",
        soundEffect: "audio/short/tokarni(9s).mp3"
    },
    intro4: {
        text: "После обеда ты вернулся к станку, и вдруг почувствовал резкий запах дыма и гари",
        next: "intro5",
        soundEffect: "NaN"
    },
    intro5: {
        text: "Осмотрелся, и вдруг увидел столб дыма в цехе.",
        next: "intro6",
        bg: "img/scene/pojar1.png",
        heroLeft: "img/characters/schok.png",
        bgAudio: "audio/music/trevoznuaya.mp3"
    },
    intro6: {
        text: "Что же ты будешь делать?",
        choices: [
            { text: "Включу пожарную сигнализацию", next: "activateSignalization1" },
            { text: "Попытаюсь выянить причину не поднимая тревогу", next: "findingСause", damage: 20 }
        ]
    },
    // Левая ветка
    activateSignalization1: {
        text: "Быстро включаешь извещатель и зовёшь коллег",
        next: "activateSignalization2",
        heroLeft: "img/characters/rabotuaga.png",
        heroRight: "img/characters/knopka.png",
        soundEffect: "audio/short/promyishlennaya-signalizatsiya.mp3"
    },
    activateSignalization2: {
        text: "Что делать дальше?",
        choices: [
            {text: "Хватаю огнетушитель", next: "fireExtinguisher1", damage: 15},
            {text: "Организую эвакуацию, жду пожарных", next: "evacuation"}
        ],
        heroRight: "NaN"
    },
    evacuation: {
        text: "Выводишь всех людей, следишь, чтобы все выбежали",
        next: "salvation1",
        bg: "img/scene/runningWorkers.png",
        soundEffect: "audio/short/runningWorkers.mp3"

    },
    fireExtinguisher1: {
        text: "Огонь немного уменьшается, но дым нарастает",
        next: "fireExtinguisher2",
        heroRight: "img/characters/fireExtinguisher.png",
        soundEffect: "audio/short/fire-extinguisher.mp3"
    },
    fireExtinguisher2: {
        text: "О нет! огнетушитель пуст! Что же мне делать?",
        choices: [
            {text: "Искать другой огнетушитель", next: "fireExtinguisher1"},
            {text: "Прячусь и жду помощи", next: "hidding", damage: 10}
        ],
        heroRight: "NaN",
        soundEffect: "audio/short/fire-extinguisher-end.mp3"
    },
    hidding: {
        text: "Что же делать если дым усиливается?",
        choices: [ 
            {text: "Беру маску/ткань и направляюсь к выходу", next: "salvation1"}, 
            {text: "Паникую", next: "death1", damage: 40} 
        ],
        bg: "img/scene/pojar2.png",
        heroLeft: "img/characters/schok.png"
    },
    // Правая ветка
    findingСause: {
        text: "Ты только теряешь время, огонь распространяется всё быстрее!",
        next: "panicInWorkShop1",
        damage: 20
    },
    panicInWorkShop1: {
        text: "Огонь увеличивается, начинается паника в цехе!",
        next: "panicInWorkShop2"
    },
    panicInWorkShop2: {
        text: "В воздухе очень много дыма, тебе тяжело дышать.",
        next: "helpingColleague1",
        damage: 20
    },
    helpingColleague1: {
        text: "И вдруг ты замечаешь что, коллега не может встать",
        choices: [
            {text: "Помочь выбраться", next: "helpingColleague2"},
            {text: "Оставить коллегу и бежать", next: "lossInDark", damage: 30}
        ]
    },
    helpingColleague2: {
        text: "Ты подаёшь руку коллеге и помогаешь встать, вы бежите на выход",
        next: "panicInWorkShop3"
    },
    panicInWorkShop3: {
        text: "Стажёры в цехе в панике, надо им помочь.",
        choices: [
            {text: "Помочь им выбраться через эвакуационный выход", next: "exitBlocked"},
            {text: "Паниковать и не знать что делать, ведь ты не ходил на занятие по технике безопастности", next: "lossInDark", damage: 40}
        ]
    },
    exitBlocked: {
        text: "О нет! Этот выход заблокирован",
        choices: [
            {text: "Искать другой эвакуационный выход", next: "salvation1"},
            {text: "Паниковать", next: "death1"}
        ],
    },
    lossInDark: {
        text: "Ты потерялся во тьме и дыму",
        next: "death1"
    },



    // Спасение
    salvation1: {
        text: "Выходишь на свежий воздух",
        next: "salvation2",
        bg: "img/scene/spasenie.png",
        heroLeft: "NaN",
        heroRight: "NaN",
        bgAudio: "audio/music/starborn.mp3"
    },
    salvation2: {
        text: "Ты спасён!",
        next: "salvation3"
    },
    salvation3: {
        text: "На улице ты сообщаешь руководителю, встречаешь пожарных",
        next: "salvation4"
    },
    salvation4: {
        text: "Пожарные тушат огонь.",
        next: "salvation5"
    },
    salvation5: {
        text: "Группа в безопастности — ПОБЕДА!",
    },
    // Смерть
    death1: {
        text: "Ты теряешь ориентацию, задыхаешься",
        next: "death2",
        bg: "img/characters/sittingInFire.png",
        heroLeft: "NaN",
        heroRight: "NaN"
    },
    death2: {
        text: "Ты потерял сознание от дыма",
        next: "death3"
    },
    death3: {
        text: "Тебя спасли медики которые приехали на вызов",
        next: "death4"
    },
    death4: {
        text: "Ты получил штраф на грубое нарушение ТБ(плохая концовка)",
    }
    
}

let currentScene = "intro1";
let bgAudio = new Audio();
bgAudio.loop = true;
musicToggle = true;
let currentSoundEffect = new Audio();
soundToggle = true;
currentSoundEffect.volume = 0.2;
let HP = 100;
let skipScene = false;

async function ShowScene(sceneName){
    currentScene = sceneName;
    const scene = scenes[sceneName];
    choices.innerHTML = "";

    if(scene.damage) ApplyDamage(scene.damage);

    if(scene.next) AddNextButton(scene)

    else if(scene.choices) AddChoices(scene);

    if(scene.bg) SetBgImage(scene.bg);

    if(scene.heroLeft || scene.heroRight) SetCharacters(image, scene);

    if(scene.bgAudio && musicToggle) SetBgAudio(scene.bgAudio);

    if(scene.soundEffect && soundToggle) PlaysoundEffect(scene.soundEffect);

    const text = document.getElementById("text");

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
    if(scene.heroLeft === "NaN" || scene.heroLeft){
        Array.from(document.getElementsByClassName("hero-left")).forEach(element => {element.remove()})
        if(scene.heroLeft !== "NaN"){ 
            const hero = document.createElement("img");
            hero.src = scene.heroLeft;
            hero.className = "hero-left";
            image.appendChild(hero);
        }
    }
    if(scene.heroRight === "NaN" || scene.heroRight){
        Array.from(document.getElementsByClassName("hero-right")).forEach(element => {element.remove()})
        if(scene.heroRight !== "NaN"){ 
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
    document.getElementById("hp-bar").style.display = "";

    ShowScene(currentScene, document.getElementById("choices"))
}


function ApplyDamage(damage){
    HP -= damage;
    if(HP < 0) HP = 0;
    UpdateHPBar();

    if(HP === 0){
        currentScene = "death1";
        ShowScene(currentScene);
        skipScene = true;
    } 
}


function UpdateHPBar(){
    const hpBar = document.getElementById("hp-fill");
    const hpText = document.getElementById("hp-text");

    hpBar.style.width = `${HP}%`;
    hpText.textContent = HP.toString();
    hpBar.style.background = HP > 60 ? "#70ff29" : HP > 30 ? "#ffa929" : "#ff2929"
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
    
        const parentWidth = image.parentElement?.offsetWidth || imgWidth;
        const parentHeight = image.parentElement?.offsetHeight || imgHeight;

        const targetWidth = parentWidth * 0.6;

        const scale = targetWidth / imgWidth;
        const targetHeight = imgHeight * scale;

        image.style.width = targetWidth + 'px';
        image.style.height = targetHeight + 'px';

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

document.getElementById("theme-btn").onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        this.textContent = "🌞";
        document.getElementById("logo").src = "img/base/logo_black.png";
    } else {
        this.textContent = "🌙"; 
        document.getElementById("logo").src = "img/base/logo_blue.png";
    }
};

document.getElementById("music-btn").onclick = function() {
    musicToggle = !musicToggle;
    this.querySelector('img').src = musicToggle ? "img/base/music-icon.png" : "img/base/no-music-icon.png";
    if(!musicToggle) bgAudio.pause();
    else if(musicToggle && scenes[currentScene]) {
        SetBgAudio(scenes[currentScene].bgAudio);
    }
};

document.getElementById("sound-btn").onclick = function() {
    soundToggle = !soundToggle;
    this.querySelector('img').src = soundToggle ? "img/base/sound-icon.png" : "img/base/no-sound-icon.png";
    currentSoundEffect.pause();
};

window.addEventListener("resize", () => {
    if(scenes[currentScene].bg) SetBgImage(scenes[currentScene].bg);
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') skipScene = true;
});


const RemoveHint = function(e) {
    if (e.code === 'Space') { document.getElementById("hint").remove(); document.removeEventListener("keydown", RemoveHint); }
}
document.addEventListener('keydown', RemoveHint);