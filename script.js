const emojis = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣',
    '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '😘',
    '😋', '😎', '😏', '😒', '😞', '😔', '😟', '😕',
    '🙁', '☹️', '😢', '😭', '😤', '😠', '😡', '🤬',
    '🤯', '😳', '😵', '😱', '😨', '😰', '😢', '😥',
    '🥺', '😪', '😴', '💤', '😮', '😲', '😦', '😧',
    '😈', '👿', '💀', '☠️', '🤖', '👽', '💩', '👻',
    '💋', '💌', '💘', '❤️', '💓', '💔', '💕', '💖',
    '💗', '💙', '💚', '💛', '💜', '🧡', '🖤', '💝',
    '💞', '💟', '❣️', '💌', '🙀', '😿', '😾', '🙈',
    '🙉', '🙊', '💪', '👍', '👎', '👌', '✊', '🤟',
    '✌️', '🤞', '🤘', '🤙', '👈', '👉', '👆', '👇',
    '👊', '✋', '🤚', '🖐️', '🖖', '👋', '🤟', '✍️',
    '👏', '👐', '🙌', '🤲', '🙏', '🤝', '👂', '👃',
    '🧠', '🦷', '🦴', '👀', '👁️', '👅', '👄', '👶',
    '🧒', '👦', '👧', '🧑', '👨', '👩', '🧓', '👴',
    '👵', '🙍', '🙎', '🙅', '🙆', '💁', '🙋', '🙇',
    '🤦', '🤷', '💆', '💇', '🚶', '🏃', '💃', '🕺',
    '🕴️', '👯', '🧖', '🧘', '🛀', '🛌', '👭', '👫',
    '👬', '👨‍👩‍👧', '👩‍👩‍👦', '👨‍👨‍👧', '👩‍👩‍👧‍👦', '👨‍👨‍👧‍👦', '👩‍👩‍👦‍👦', '👨‍👨‍👦‍👦',
];

const emojis1 = ["🐮", "🐷",];
const emojis2 = ["🐍", "🦎", "🦆", "🦢"];
const emojis3 = ['👀', '👁️', '👅', '👄', '🧠', '🦷'];
const emojis4 = ['😀', '🐶', '🐱', '🐰', '🦄', '🐢', '🐍', '🐙'];
const emojis5 = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😍', '😘',];
const emojis6 = ['🍎', '🍌', '🍒', '🍇', '🍓', '🍍', '🥝', '🍊', '💟', '👄', '💘', '👽'];
const emojis7 = ['✌️', '🤞', '🤘', '🤙', '👈', '👉', '👆', '👇', '🙏', '🤝', '👂', '👃', '👊', '✋', '🤚'];
const emojis8 = ['💘', '❤️', '💓', '💔', '💕', '💖', '💗', '💙', '💚', '💛', '💜', '🧡', '🖤', '💝', '💞', '💌'];
const emojis9 = ['🤦', '🤷', '💆', '💇', '🚶', '🏃', '💃', '🕺', '🕴️', '👯', '🧖', '🧘', '🛀', '🛌', '👭', '👫', '👨‍👨‍👧‍👦', '👩‍👩‍👦‍👦', '👨‍👨‍👦‍👦'];
const emojis10 = ['😈', '👿', '💀', '☠️', '🤖', '👽', '💩', '👻', '🧑', '🧖'];
const emojis11 = ['💙', '💚', '💛', '💜', '🧡', '🖤', '💝', '👵', '👬', '🛀', '👁️', '🦴'];
const emojis12 = ['😴', '💤', '😮', '🧠', '🦷', '🙎', '🙅', '🙆', '💁', '🙋', '🙇', '🧒', '👦', '👧',];


const cards = [[...emojis1, ...emojis1], [...emojis2, ...emojis2], [...emojis3, ...emojis3], [...emojis4, ...emojis4]
    , [...emojis5, ...emojis5], [...emojis6, ...emojis6], [...emojis7, ...emojis7],
[...emojis8, ...emojis8], [...emojis9, ...emojis9], [...emojis10, ...emojis10], [...emojis11, ...emojis11], [...emojis12, ...emojis12]];
let flippedCards = [], matchedPairs = 0, pairsNum = 0,
    currentLevel = 1, loginUser = "";

let myButton = document.getElementById("createEvent");







// FUNCTIONS


function login() {
    const userName = document.getElementById("theUserNameId").value;
    const password = document.getElementById("theUserPasswordId").value;
    loginUser = userName;
    console.log(loginUser);

    const userExist = localStorage.getItem(userName) !== null;

    if (!userExist) {
        let obj = {
            userName: userName,
            password: password,
            points: 0,
            stage: 1,
        };
        let jsonObj = JSON.stringify(obj);
        localStorage.setItem(userName, jsonObj);
        alert("!המשתמש נרשם בהצלחה");
    } else {
        let getJsonFromStorage = localStorage.getItem(userName);
        let parseObj = JSON.parse(getJsonFromStorage);
        const userNameAndpasswordMatch = password === parseObj.password;
        if (userNameAndpasswordMatch) {
            document.getElementById('wrapper').style.display = "none";
            document.getElementById('helo').innerText = loginUser;

            createLevel();
        }
        else {
            alert("!שם משתמש או סיסמא לא נכונים");
        }
    }
    document.getElementById("theUserNameId").value = "";
    document.getElementById("theUserPasswordId").value = "";
}

myButton.addEventListener("click", login);


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(emoji) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.textContent = emoji;
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardElement.appendChild(cardInner);
    cardElement.addEventListener('click', () => flipCard(cardElement));
    return cardElement;
}

function flipCard(cardElement) {
    if (!cardElement.classList.contains('flipped') && flippedCards.length < 2) {
        cardElement.classList.add('flipped');
        flippedCards.push(cardElement);

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    }
}

function checkForMatch() {
    if (flippedCards[0].querySelector('.card-back').textContent === flippedCards[1].querySelector('.card-back').textContent) {
        flippedCards[0].classList.add('hidden');
        flippedCards[1].classList.add('hidden');
        matchedPairs++;
        score += 10;
        JSONparse.points = score;

        scoreElement.textContent = score;

        if (matchedPairs === pairsNum) {

            document.getElementById('game-container').style.gridTemplateColumns = 'repeat(4, 120px)';



            const winnerAnounce = document.createElement("div");
            winnerAnounce.classList.add('winner');

            const textAnounce = document.createElement("div");
            textAnounce.classList.add('text');
            textAnounce.innerText = "!!! כל הכבוד"

            const icons = document.createElement("div");
            icons.classList.add('icons');

            const back = document.createElement("div");
            back.classList.add('backToLevels');
            back.innerText = "⇦";
            back.addEventListener('click', createLevel);

            icons.appendChild(back);

            winnerAnounce.appendChild(textAnounce);
            winnerAnounce.appendChild(icons);


            document.getElementById('game-container').appendChild(winnerAnounce);

            if (level === currentLevel) {

                level++;
                JSONparse.stage = level;

            }
            updateDate();

            matchedPairs = 0;
            pairsNum = 0;
        }
    } else {
        flippedCards.forEach(card => card.classList.remove('flipped'));
    }

    flippedCards = [];
}

function updateDate() {

    let objToJSON = JSON.stringify(JSONparse);
    localStorage.setItem(loginUser, objToJSON);

}

function initializeGame(cards, num) {

    currentLevel = num;
    const container = document.querySelector('.contain-levels');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    if (num > 3) {
        document.getElementById('game-container').style.gridTemplateColumns = 'repeat(8, 120px)';
    }


    shuffle(cards);
    pairsNum = Math.floor(cards.length / 2)
    const gameContainer = document.getElementById('game-container');
    cards.forEach(emoji => {
        const cardElement = createCard(emoji);
        gameContainer.appendChild(cardElement);
    });
}

let JSONparse, score
const scoreElement = document.getElementById('score');

function createLevel() {

    const user = localStorage.getItem(loginUser);
    JSONparse = JSON.parse(user);

    score = JSONparse.points;
    level = JSONparse.stage;
    scoreElement.textContent = score;

    const container = document.querySelector('.game-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < cards.length; i++) {
        let isLock = i >= level;

        const levelElement = document.createElement('div');
        levelElement.classList.add('level');
        levelElement.textContent = (i + 1) + " שלב ";
        levelElement.addEventListener('click', () => initializeGame(cards[i], (i + 1)));
        const levelContainer = document.createElement('div');
        levelContainer.classList.add('levelContainer');
        levelContainer.id = 'level-' + (i + 1);
        levelContainer.innerText = "lock"
        document.getElementById('levels').appendChild(levelElement);
        levelElement.appendChild(levelContainer);
        if (!isLock) {
            levelElement.style.zIndex = 1;
            levelContainer.style.display = "none";
        }
    }
}
