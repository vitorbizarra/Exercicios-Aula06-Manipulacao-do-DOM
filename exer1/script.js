const generateRandomHexColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
const alterBackgroundColor = (hexColor) => document.getElementById('content').style.backgroundColor = hexColor;

document.getElementById("btnAlterColor").addEventListener('click', () => alterBackgroundColor(generateRandomHexColor()))