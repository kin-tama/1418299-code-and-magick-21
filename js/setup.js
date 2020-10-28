'use strict';
// показываем "setup"

let userDialog = document.querySelector('.setup');
document.querySelector('.setup-similar').classList.remove('hidden');

// нашли куда вставлять
let similarListElement = document.querySelector('.setup-similar-list');

// нашли что вставлять
let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// функция-рандомайзер
const getRandomInteger = function (min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

// генератор массива колдунов-объектов

const WIZARD_NAMES = ["Иван ", "Хуан Себастьян ", "Мария ", "Кристоф ", "Виктор ", "Юлия ", "Люпита ", "Вашингтон "];
const FAMILY_NAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
const COAT_COLORS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
const EYE_COLORS = ["black", "red", "blue", "yellow", "green"];
const FIREBALL_COLORS = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

let wizards = [];

for (let i = 0; i < 4; i++) {
  wizards[i] = {
    name: WIZARD_NAMES[getRandomInteger(0, 7)] + FAMILY_NAMES[getRandomInteger(0, 7)],
    coatColor: COAT_COLORS[getRandomInteger(0, 5)],
    eyesColor: EYE_COLORS[getRandomInteger(0, 4)]
  };
}

// добавление в шаблон колдунов

for (let i = 0; i < wizards.length; i++) {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}

// module4-task1
// ниже блок по открыванию-закрыванию формы
const setupCloseButton = document.querySelector(".setup-close");
const setupOpenIcon = document.querySelector(".setup-open-icon");

const closeOnEsc = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    userDialog.classList.add('hidden');
  }
};

const closeOnEnter = function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    userDialog.classList.add('hidden');
  }
};

let openSetup = function () {
  userDialog.classList.remove("hidden");
  document.addEventListener('keydown', closeOnEsc);
  setupCloseButton.addEventListener('keydown', closeOnEnter);
};

let closeSetup = function () {
  userDialog.classList.add("hidden");
  document.removeEventListener('keydown', closeOnEsc);
  setupCloseButton.removeEventListener('keydown', closeOnEnter);
};

setupOpenIcon.addEventListener("click", function () {
  openSetup();
});

setupOpenIcon.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    openSetup();
  }
});

setupCloseButton.addEventListener("click", function () {
  closeSetup();
});

// ниже блок смене цвета колдуна

const wizardCoat = document.querySelector(".setup-wizard .wizard-coat");
const wizardEyes = document.querySelector(".wizard-eyes");
const wizardFireball = document.querySelector(".setup-fireball-wrap");

// функция смены цвета пальта
const changeCoatColor = function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomInteger(0, COAT_COLORS.length)];
  document.querySelector("#s-coat-color").value = wizardCoat.style.fill;
};

// функция смены цвета глаз
const changeEyeColor = function () {
  wizardEyes.style.fill = EYE_COLORS[getRandomInteger(0, EYE_COLORS.length)];
  document.querySelector("#s-eyes-color").value = wizardEyes.style.fill;
};

// функция смены цвета шара
const changeFireballColor = function () {
  wizardFireball.style.backgroundColor = FIREBALL_COLORS[getRandomInteger(0, FIREBALL_COLORS.length)];
  wizardFireball.querySelector("input").value = wizardFireball.style.backgroundColor;
};

// обработчики

wizardCoat.addEventListener("click", function () {
  changeCoatColor();
});

wizardFireball.addEventListener("click", function () {
  changeFireballColor();
});

wizardEyes.addEventListener("click", function () {
  changeEyeColor();
});
