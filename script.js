let containerDiv=document.createElement('div');
containerDiv.setAttribute('class','container');
containerDiv.setAttribute('class','border');

let h=document.createElement('h2');
h.textContent='Calculator';
h.style.textAlign='center';
containerDiv.appendChild(h);

//row 1 input text box
let rowdiv1=document.createElement('div');
rowdiv1.setAttribute('class','row');

let coldiv=document.createElement('div');
coldiv.setAttribute('class','col');

let inputtext=document.createElement('input');
inputtext.setAttribute('type','text');
inputtext.setAttribute('class','form-control');
inputtext.setAttribute('id','result');

coldiv.appendChild(inputtext);
rowdiv1.appendChild(coldiv);
containerDiv.appendChild(rowdiv1)

// row 2 
let rowdiv2=document.createElement('div');
rowdiv2.setAttribute('class','row');

let col21=document.createElement('div');
col21.setAttribute('class','col');
let b21=document.createElement('button');
b21.textContent='c';
b21.addEventListener('click',handleClearClick);
col21.appendChild(b21);
rowdiv2.appendChild(col21);

let col22=document.createElement('div');
col22.setAttribute('class','col');
let b22=document.createElement('button');
b22.setAttribute('class','fa-solid fa-arrow-left');
b22.addEventListener('click',handleClearClick);
col22.appendChild(b22);
rowdiv2.appendChild(col22);

let col23=document.createElement('div');
col23.setAttribute('class','col');
let b23=document.createElement('button');
b23.textContent='.';
b23.addEventListener('click',handleNumberClick);
col23.appendChild(b23);
rowdiv2.appendChild(col23);

let col24=document.createElement('div');
col24.setAttribute('class','col');
let b24=document.createElement('button');
b24.textContent='*';
b24.addEventListener('click',handleOperatorClick);
col24.appendChild(b24);
rowdiv2.appendChild(col24);

// row 3
let rowdiv3=document.createElement('div');
rowdiv3.setAttribute('class','row');

let col31=document.createElement('div');
col31.setAttribute('class','col');
let b31=document.createElement('button');
b31.textContent='7';
b31.addEventListener('click',handleNumberClick);
col31.appendChild(b31);
rowdiv3.appendChild(col31);

let col32=document.createElement('div');
col32.setAttribute('class','col');
let b32=document.createElement('button');
b32.textContent='8';
b32.addEventListener('click',handleNumberClick);
col32.appendChild(b32);
rowdiv3.appendChild(col32);

let col33=document.createElement('div');
col33.setAttribute('class','col');
let b33=document.createElement('button');
b33.textContent='9';
b33.addEventListener('click',handleNumberClick);
col33.appendChild(b33);
rowdiv3.appendChild(col33);

let col34=document.createElement('div');
col34.setAttribute('class','col');
let b34=document.createElement('button');
b34.textContent='/';
b34.addEventListener('click',handleOperatorClick);
col34.appendChild(b34);
rowdiv3.appendChild(col34);

//row 4
let rowdiv4=document.createElement('div');
rowdiv4.setAttribute('class','row');

let col41=document.createElement('div');
col41.setAttribute('class','col');
let b41=document.createElement('button');
b41.textContent='4';
b41.addEventListener('click',handleNumberClick);
col41.appendChild(b41);
rowdiv4.appendChild(col41);

let col42=document.createElement('div');
col42.setAttribute('class','col');
let b42=document.createElement('button');
b42.textContent='5';
b42.addEventListener('click',handleNumberClick);
col42.appendChild(b42);
rowdiv4.appendChild(col42);

let col43=document.createElement('div');
col43.setAttribute('class','col');
let b43=document.createElement('button');
b43.textContent='6';
b43.addEventListener('click',handleNumberClick);
col43.appendChild(b43);
rowdiv4.appendChild(col43);

let col44=document.createElement('div');
col44.setAttribute('class','col');
let b44=document.createElement('button');
b44.textContent='-';
b44.addEventListener('click',handleOperatorClick);
col44.appendChild(b44);
rowdiv4.appendChild(col44);

//row 5
let rowdiv5=document.createElement('div');
rowdiv5.setAttribute('class','row');

let col51=document.createElement('div');
col51.setAttribute('class','col');
let b51=document.createElement('button');
b51.textContent='1';
b51.addEventListener('click',handleNumberClick);
col51.appendChild(b51);
rowdiv5.appendChild(col51);

let col52=document.createElement('div');
col52.setAttribute('class','col');
let b52=document.createElement('button');
b52.textContent='2';
b52.addEventListener('click',handleNumberClick);
col52.appendChild(b52);
rowdiv5.appendChild(col52);

let col53=document.createElement('div');
col53.setAttribute('class','col');
let b53=document.createElement('button');
b53.textContent='3';
b53.addEventListener('click',handleNumberClick);
col53.appendChild(b53);
rowdiv5.appendChild(col53);

let col54=document.createElement('div');
col54.setAttribute('class','col');
let b54=document.createElement('button');
b54.textContent='+';
b54.addEventListener('click',handleOperatorClick);
col54.appendChild(b54);
rowdiv5.appendChild(col54);

//row 6
let rowdiv6=document.createElement('div');
rowdiv6.setAttribute('class','row');

let col61=document.createElement('div');
col61.setAttribute('class','col-3');
let b61=document.createElement('button');
b61.textContent='0';
b61.addEventListener('click',handleNumberClick);
col61.appendChild(b61);
rowdiv6.appendChild(col61);

let col62=document.createElement('div');
col62.setAttribute('class','col-3');
let b62=document.createElement('button');
b62.textContent='00';
b62.addEventListener('click',handleNumberClick);
col62.appendChild(b62);
rowdiv6.appendChild(col62);

let col63=document.createElement('div');
col63.setAttribute('class','col-6');
col63.setAttribute('id','c63');
let b63=document.createElement('button');
b63.textContent='=';
b63.addEventListener('click',handleEqualClick);
col63.appendChild(b63);
rowdiv6.appendChild(col63);


containerDiv.appendChild(rowdiv2);
containerDiv.appendChild(rowdiv3);
containerDiv.appendChild(rowdiv4);
containerDiv.appendChild(rowdiv5);
containerDiv.appendChild(rowdiv6);
document.body.appendChild(containerDiv);

let expression = '';

// Event handler for number button clicks
function handleNumberClick() {
  let number = this.textContent;
  expression += number;
  result.value = expression;
}

// Event handler for operator button clicks
function handleOperatorClick() {
  let operator = this.textContent;
  expression += ' ' + operator + ' ';
  result.value = expression;
}

// Event handler for equal button click
function handleEqualClick() {
  try {
    let equal = eval(expression);
    result.value = equal;
  } catch (error) {
    result.value = 'Error';
  }
}

// Event handler for clear button click
function handleClearClick() {
  expression = '';
  result.value = '';
}



