// ---------- Define some things useful ----------

const Word = document.getElementById('word');
const WrongLetters = document.getElementById('wrong-letters');
const PopupContainer = document.getElementById('popup-container');
const NotificationContainer = document.getElementById('notification-container');
const FinalMessage = document.getElementById('final-message');
const WrongBoard = document.getElementById('wrong-board')

// ---------- Array of word (370 Words) ----------

const Words = [
    'astronaut', 'apple', 'attractive', 'amazing', 'accelerator', 'abilities', 'april', 'attempt', 'accent', 'amsterdam', 'armenia',
    'bee', 'butter', 'better', 'butterfly', 'behind', 'back', 'babies', 'backend', 'banana', 'biscuit', 'bike', 'bite', 'breath', 'berlin', 'bielorussia',
    'cabbage', 'calories', 'cat', 'calculate', 'call', 'caramel', 'coffee', 'campfire', 'cube', 'chocolate', 'coconut', 'celestial', 'canberra', 'croatia',
    'destruction', 'dactylography', 'dictatorship', 'desert', 'dab', 'devil', 'dices', 'duck', 'daylight', 'desynchronizing', 'dublin', 'denmark',
    'eraser', 'esthetic', 'eagles', 'ebonist', 'elkhounds', 'electrification', 'elephant', 'earthquake', 'eyes', 'example', 'erevan', 'egypt',
    'find', 'feather', 'fantastic', 'fingers', 'float', 'further', 'fabulous', 'fabricable', 'familiarity', 'fashionability', 'freetown', 'france',
    'gun', 'grab', 'god', 'galaxy', 'gadgets', 'gloves', 'galvanized', 'garbages', 'gastronomy', 'goalkeeper', 'gazpacho', 'guatemala', 'georgia',
    'hundred', 'hint', 'hello', 'how', 'hot', 'hockey', 'healed', 'hangman', 'hamlet', 'hammer', 'handbag', 'harmony', 'heliographical', 'helsinki', 'honduras',
    'icecube', 'ice', 'indonesian', 'into', 'incredible', 'iceberg', 'ibuprofen', 'iconoclast', 'imperial', 'idealistic', 'impulsions', 'islamabad', 'iceland',
    'jab', 'jac', 'jag', 'jak', 'jam', 'jar', 'jacket', 'joker', 'jackpot', 'jailbreak', 'Jupiter', 'judgment', 'juxtaposed', 'jungle', 'jerusalem', 'jamaica',
    'kingdom', 'kangaroo', 'koala', 'karaoke', 'kitchen', 'knives', 'kidnapping', 'kreutzers', 'krakowiak', 'kiloliters', 'kriegspiel', 'kiev', 'kuwait',
    'light', 'letters', 'literature', 'lime', 'line', 'labradorite', 'lactose', 'ladder', 'liquids', 'lion', 'lyrics', 'luckier', 'lithium', 'liquefaction', 'ljubljana', 'liechtenstein',
    'metronome', 'monk', 'magnet', 'mirror', 'macaroni', 'macabre', 'magenta', 'macaronically', 'meitnerium', 'microscopic', 'mezlocillin', 'myelencephalons', 'monaco', 'montenegro',
    'never', 'night', 'nacre', 'nausea', 'native', 'narrator', 'naturist', 'nickname', 'navigators', 'necklaces', 'nostalgies', 'nameabilities', 'nymphaeaceous', 'nicosie', 'nicaragua',
    'onions', 'oases', 'oasis', 'obsolete', 'osmium', 'otoscope', 'outbrain', 'oxygen', 'optionnal', 'ozostomias', 'obfuscation', 'oceanographic', 'objects', 'ottawa', 'oman',
    'pirates', 'parrot', 'parody', 'physical', 'phone', 'paralympic', 'paintings', 'pannels', 'potatoes', 'pencil', 'perplexity', 'perspective', 'paris', 'paraguay',
    'question', 'quarter', 'quickly', 'quit', 'quotient', 'qualification', 'quadcopter', 'quartz', 'quicksand', 'quotation', 'questionary', 'quadraphonic', 'quito', 'qatar',
    'round', 'road', 'race', 'rob', 'rabbit', 'radian', 'roentgenium', 'rainbow', 'rank', 'runaway', 'rituals', 'rythm', 'regularity', 'research', 'reykjavik', 'rwanda',
    'snake', 'sunlight', 'simple', 'shower', 'schema', 'shake', 'saffron', 'shine', 'skull', 'shadowing', 'soldiers', 'sacrificial', 'serializing', 'sad', 'skopje', 'somalia',
    'times', 'tank', 'tame', 'table', 'tails', 'talent', 'thanked', 'theorem', 'tomatoes', 'tools', 'tactician', 'teaching', 'tennessine', 'telegraphist', 'tallinn', 'tajikistan',
    'ultimate', 'under', 'upper', 'umbrella', 'useless', 'urban', 'underscore', 'usernames', 'unununium', 'ubiquitousness', 'unacceptable', 'ultraviolets', 'ukraine', 'uruguay',
    'violet', 'very', 'vacation', 'vault', 'vaunt', 'vacuum', 'vacuolar', 'valvelet', 'velocity', 'villagers', 'victorious', 'vitality', 'vein', 'vaduz', 'vanuatu',
    'wretched', 'with', 'witch', 'wine', 'welcome', 'wonderful', 'wool', 'whole', 'wrap', 'wacked', 'whitelist', 'wasteland', 'weapons', 'wearable', 'wellington', 'wurttemberg',
    'xenon', 'xeroses', 'xanthic', 'xanthans', 'xanthene', 'xenoblast', 'xanthomas', 'xenocrysts', 'xanthophyl', 'xylographical', 'xanthosiderites',
    'yack', 'yacht', 'year', 'yearly', 'yautia', 'yatter', 'yapoks', 'yarovize', 'yahooism', 'yuckiest', 'yummiest', 'yardmasters', 'yellowhammer', 'yamoussoukro', 'yemen',
    'zaps', 'zap', 'zaire', 'zaddy', 'zaffer', 'zagged', 'zigzag', 'zeroth', 'zygoma', 'zymase', 'zinnia', 'zoographer', 'zealotries', 'zaratites', 'zagreb', 'zimbabwe'
]

const correctArray = [];
const wrongArray = [];
const alreadyPressed = [];
const wrongGuesses = 6

// ---------- Functions - Fonctionalities ----------

function Day() {
    document.body.className = 'day_theme';
}

function Night() {
    document.body.className = 'night_theme';
}

// function AddScore() {
//     var value = parseInt(document.getElementById('score').value);
//     var hvalue = parseInt(document.getElementById('score_hundred').value);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     if (value === 100) {
//         hvalue++
//         document.getElementById('score').value = 0;
//         document.getElementById('score_hundred').value = hvalue
//     } else {
//         document.getElementById('score').value = get('score').find(x => x.includes('score'))[1]
//     }
// }

function Close_HowToPlay() {
    close()
}

// ---------- Functions - Game (With Wrong Letters) ----------

let Selected_Word = Words[Math.floor(Math.random() * Words.length)]
let OutWord = Selected_Word.replace(/[^\s]/g, '_')
Word.innerText = `${OutWord.split('').join(' ')}`

let isWordFound = false
let tries = [];
let fails = 0;
let won = false

window.addEventListener('keydown', (e) => {
    console.log(Selected_Word)

    let letter = e.key.toLocaleLowerCase()
    if (isWordFound) return;
    
    if (e.key.length !== 1) return;
    const Letter = (e.key >= 'a' && e.key <= 'z');
    if (!Letter) return;

    if (tries.includes(letter)) {
        return showNotification()
    } else tries.push(letter)

    let containsLetter = false;
    let i = 0
    for (let c of Selected_Word) {
        if (c == letter) {
            OutWord = OutWord.substring(0, i) + letter + OutWord.substring(i + 1)
            containsLetter = true;
        }
        i++
    }

    Word.innerText = `${OutWord.split('').join(' ')}`

    if (!containsLetter) {
        fails++
        if (fails === 6) {
            isWordFound = true

            FinalMessage.textContent = `You lost, the word was "${Selected_Word}"`
            PopupContainer.style.display= 'flex';
            WrongBoard.style.display = 'none';

            // return window.location.href = `${window.location.origin + window.location.pathname}?score=${(parseInt(getScore('score')) % 100 || 0)}`
        }
        else {
            document.querySelector(`.boxes.${['one', 'two', 'three', 'four', 'five', 'six'][fails - 1]} > div`).textContent = letter
            document.querySelector(`.coco.coconut${fails}`).src = 'Images/Opened_Coconut.png'
        }
    }

    if (OutWord == Selected_Word) {
        isWordFound = true
        
        FinalMessage.innerHTML = 'Congratulations, you found the word !'
        won = true
        PopupContainer.style.display= 'flex';
        WrongBoard.style.display = 'none';
    }
})

function showNotification() {
    NotificationContainer.classList.add('show');

    setTimeout(() => {
        NotificationContainer.classList.remove('show');
    }, 2000);
}

const getScore = (type) => new URLSearchParams(window.location.search).get(type)

document.getElementById('play-again').addEventListener('click', () => {
    window.location.href = `${window.location.origin + window.location.pathname}?score=${(parseInt(getScore('score')) % 100 || 0) + (won ? 1 : 0)}`
})

document.getElementById('score').value = parseInt(getScore('score')) % 100 || 0
document.getElementById('score_hundred').value = (parseInt(getScore('score')) - score) / 100 || 0