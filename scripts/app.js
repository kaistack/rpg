const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "@#$%^&*()_+~|}{[]></-="
};

const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  }
];

function createPassword() {
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;

  if (!(upper || lower || number || symbol)) {
    alert("Please check at least one box!");
    return;
  }

  const passwordBox = document.getElementById("passwordBox");
  const length = document.getElementById("length").value;

  let password = "";
  let types = [];

  if (upper) types.push("upperCase");
  if (lower) types.push("lowerCase");
  if (number) types.push("number");
  if (symbol) types.push("symbol");

  const typeCount = types.length;
  const typeLength = Math.ceil(length / typeCount);

  for (let i = 0; i < typeCount; i++) {
    const currentType = keys[types[i]];

    for (let j = 0; j < typeLength && password.length < length; j++) {
      password += currentType[Math.floor(Math.random() * currentType.length)];
    }
  }

  passwordBox.innerHTML = password;
}

function copyPassword() {
  const textarea = document.createElement('textarea');
  const password = document.getElementById("passwordBox").innerText;
  if (!password) { return; }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
}
