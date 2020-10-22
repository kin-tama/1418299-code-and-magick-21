'use strict';
// показываем "setup"

let userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
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
