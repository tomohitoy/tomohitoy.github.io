const submitButton = document.getElementById('submitButton');
const numberA = document.getElementById('numberA');
const numberB = document.getElementById('numberB');
const numberC = document.getElementById('numberC');
const endButton = document.getElementById('endButton');
const resultTable = document.getElementById('resultTable');
let tableRowNum = 0;

submitButton.addEventListener('click', () => {
  if(isNumber(numberA.value) && isNumber(numberB.value) && isNumber(numberC.value)){
    tableRowNum++;
    if ((numberA.value < numberB.value) && (numberB.value < numberC.value)) {
      resultTable.insertAdjacentHTML('beforeend', `<tr class="table-body"><td width="8%">${tableRowNum}</td><td width="50%">${numberA.value}, ${numberB.value}, ${numberC.value}</td><td width="42%">従っている（＋）</td></tr>`);
    } else {
      resultTable.insertAdjacentHTML('beforeend', `<tr class="table-body"><td width="8%">${tableRowNum}</td><td width="50%">${numberA.value}, ${numberB.value}, ${numberC.value}</td><td width="42%">従っていない（ー）</td></tr>`);

    }
    numberA.value = '';
    numberB.value = '';
    numberC.value = '';
  } else {
    alert('半角数字を入力してください');
  }
});


endButton.addEventListener('click',() => {
  alert('2,4,6の３つの数が従っている規則性は「左の数より右の数のほうが大きい」でした！');
});

const isNumber = (val) =>{
  let regex = new RegExp(/^[-+]?[0-9]+(\.[0-9]+)?$/);
  return regex.test(val);
}




