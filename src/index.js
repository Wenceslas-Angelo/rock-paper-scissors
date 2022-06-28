const allHands = document.querySelectorAll('.hand');
const handsContainer = document.querySelector('.hands');
const choicesContainer = document.querySelector('.choices');
const playBtn = document.querySelector('.play');
const resultUserChoice = document.querySelector('.user-choice img');
const resultComputerChoice = document.querySelector('.computer-choice img');
const resultTxt = document.querySelector('.result h2');
const scoreTxt = document.querySelector('.score');
const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.rules');
const btnCloseModal = document.querySelector('.times-image');
let score = 0;

playBtn.addEventListener('click', () => {
  choicesContainer.classList.remove('active');
  handsContainer.classList.add('active');
});

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const indexChoice = Math.floor(Math.random() * choices.length);
  return choices[indexChoice];
};

const win = (userChoice, computerChoice) => {
  score += 1;
  scoreTxt.innerHTML = score;
  resultComputerChoice.src = `./../images/${computerChoice}.png`;
  resultUserChoice.src = `./../images/${userChoice}.png`;
  resultTxt.innerHTML = 'You win';
  resultTxt.style.color = 'green';
};

const lose = (userChoice, computerChoice) => {
  score -= 1;
  scoreTxt.innerHTML = score;
  resultComputerChoice.src = `./../images/${computerChoice}.png`;
  resultUserChoice.src = `./../images/${userChoice}.png`;
  resultTxt.innerHTML = 'You lose';
  resultTxt.style.color = 'red';
};

const moveEquales = (userChoice, computerChoice) => {
  resultComputerChoice.src = `./../images/${computerChoice}.png`;
  resultUserChoice.src = `./../images/${userChoice}.png`;
  resultTxt.innerHTML = 'It is a tie';
  resultTxt.style.color = 'white';
};

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  const versus = `${userChoice} vs ${computerChoice}`;

  switch (versus) {
    case 'rock vs scissors':
    case 'paper vs rock':
    case 'scissors vs paper':
      win(userChoice, computerChoice);
      break;
    case 'rock vs paper':
    case 'paper vs scissors':
    case 'scissors vs rock':
      lose(userChoice, computerChoice);
      break;
    case 'rock vs rock':
    case 'paper vs paper':
    case 'scissors vs scissors':
      moveEquales(userChoice, computerChoice);
      break;
    default:
      break;
  }
};

function getUserChoice() {
  handsContainer.classList.remove('active');
  choicesContainer.classList.add('active');
  game(this.classList[1]);
}

allHands.forEach((hand) => {
  hand.addEventListener('click', getUserChoice);
});

const showModal = (value) => {
  modal.style.left = value;
};

btnOpenModal.addEventListener('click', () => {
  showModal(0);
});

btnCloseModal.addEventListener('click', () => {
  showModal('-150%');
});
