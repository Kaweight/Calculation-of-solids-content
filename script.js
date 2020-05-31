const trayWeight = document.querySelector('.trayWeight');
const varnishMass = document.querySelector('.varnishMass');
const weightAfterIncubation = document.querySelector('.weightAfterIncubation');
const scoreZCS = document.querySelector('.scoreZCS');
const handleScoreZCS = document.querySelector('.handleScoreZCS');
const btnResetZCS = document.querySelector('.resetZCS');
const solidsContent = document.querySelector('.solidsContent');
const weight = document.querySelector('.weight');
const scoreVOC = document.querySelector('.scoreVOC');
const handleScoreVOC = document.querySelector('.handleScoreVOC');
const resetVOC = document.querySelector('.resetVOC');

const showScoreZCS = (e) => {
    e.preventDefault();
    const convertZCS = (weightAfterIncubation.value - trayWeight.value) / varnishMass.value;
    scoreZCS.textContent = `Zawartość ciał stałych wynosi: ${(convertZCS * 100).toFixed(1)} %`;
};

const handleResetZCS = (e) => {
    e.preventDefault();
    scoreZCS.textContent = "";
    document.getElementById("handleZCS").reset();
};

const showScoreVOC = (e) => {
    e.preventDefault();
    const convertVOC = (100 - solidsContent.value) * weight.value * 10;
    scoreVOC.textContent = `VOC = ${convertVOC.toFixed(1)} [g/l]`;
};

const handleResetVOC = (e) => {
    e.preventDefault();
    scoreVOC.textContent = "";
    document.getElementById("handleVOC").reset();
};

handleScoreZCS.addEventListener('click', showScoreZCS);
btnResetZCS.addEventListener('click', handleResetZCS);
handleScoreVOC.addEventListener('click', showScoreVOC);
resetVOC.addEventListener('click', handleResetVOC);