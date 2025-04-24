/*Hodaya Hasan 206451965 Talya Zazon 325269645*/

let fromBase = null;
let toBase = null;

const baseMap = {
  Binary: 2,
  Decimal: 10,
  Octal: 8,
  Hex: 16
};

function selectFrom(base) {
  fromBase = base;
  highlightSelected('FROM', base);
}

function selectTo(base) {
  toBase = base;
  highlightSelected('TO', base);
}

function highlightSelected(section, base) {
  const buttons = document.querySelectorAll(`#${section} ~ .buttons button`);
  buttons.forEach(btn => {
    btn.classList.remove('selected');
    if (btn.id === base) {
      btn.classList.add('selected');
    }
  });
}

function validateInput(input, base) {
  const validChars = {
    2: '01',
    8: '01234567',
    10: '0123456789',
    16: '0123456789abcdefABCDEF'
  };

  for (let i = 0; i < input.length; i++) {
    if (!validChars[base].includes(input[i])) {
      return false;
    }
  }
  return true;
}

document.getElementById('boxnum').addEventListener('input', () => {
  const input = document.getElementById('boxnum').value.trim();

  if (!fromBase) {
    return;
  }

  if (!validateInput(input, baseMap[fromBase])) {
    document.getElementById('RESULTE').innerHTML = `<h4 style="color:red;">Error: the input is incorrect for base ${fromBase}</h4>`;
  } else {
    document.getElementById('RESULTE').innerHTML = `<h4>RESULT:</h4>`;
  }
});

document.querySelector('.Convert').addEventListener('click', () => {
  const input = document.getElementById('boxnum').value.trim();

  if (!fromBase || !toBase) {
    alert("Choose both FROM and TO bases.");
    return;
  }


  const decimalValue = parseInt(input, baseMap[fromBase]);

  let result;
  if (toBase === "BinaryTO") {
    result = decimalValue.toString(2);
  } else if (toBase === "DecimalTO") {
    result = decimalValue.toString(10); 
  } else if (toBase === "OctalTO") {
    result = decimalValue.toString(8); 
  } else if (toBase === "HexTO") {
    result = decimalValue.toString(16).toUpperCase(); 
  }

 
  document.getElementById('RESULTE').innerHTML = `<h4>RESULT: ${result}</h4>`;
});
