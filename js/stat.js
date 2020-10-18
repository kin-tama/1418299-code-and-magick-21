'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_SHADOW = "rgba(0, 0, 0, 0.7)";
const COLUMN_WIDTH = 40;
const COLUMN_X = CLOUD_X + 40;
const COLUMN_Y = CLOUD_Y + 230;
const NAME_Y = 265;
const GAP = 50;
let barHeight = -150;

const renderCloud = function (ctx, colour, x, y) {
  ctx.fillStyle = CLOUD_SHADOW;
  ctx.fillRect(x + 10, y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = colour;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (array) {
  let maxElement = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, "white", 100, 10);
  ctx.fillStyle = "black";
  ctx.font = "16px PT Mono";

  ctx.fillText(
      "Ура, вы победили!",
      CLOUD_X + 20,
      CLOUD_Y + 30
  );

  ctx.fillText(
      "Список результатов ниже:",
      CLOUD_X + 20,
      CLOUD_Y + 50
  );

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {

    ctx.fillText(
        Math.round(times[i]),
        COLUMN_X + (COLUMN_WIDTH + GAP) * i,
        CLOUD_HEIGHT + barHeight * (times[i] / maxTime) - 40
    );

    if (players [i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      let randomColor = (Math.round((Math.random()) * 100)) + "%";
      ctx.fillStyle = "hsl(245, 40%, " + randomColor + ")";
    }

    ctx.fillRect(
        COLUMN_X + (COLUMN_WIDTH + GAP) * i,
        COLUMN_Y,
        COLUMN_WIDTH,
        barHeight * (times[i] / maxTime));

    ctx.fillStyle = "black";

    ctx.fillText(
        players[i],
        COLUMN_X + (COLUMN_WIDTH + GAP) * i,
        NAME_Y);
  }
};
