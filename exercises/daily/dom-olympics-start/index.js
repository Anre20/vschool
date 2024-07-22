const header = document.createElement("header");
header.id = "header";

const headerText = document.createElement("strong");
headerText.textContent = "Javascript Made This!";

header.appendChild(headerText);

document.body.prepend(header);

const subheader = document.createElement("h6");

const nameSpan = document.createElement("span");
nameSpan.textContent = "Anre";
nameSpan.style.color = "blue";

const remainingSubheaderText = document.createTextNode(" wrote the Javascript");

subheader.append(nameSpan, remainingSubheaderText);

header.after(subheader);

const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function() {
    document.getElementById('input').value = '';

    const messageBoxes = document.querySelectorAll('.message');
    messageBoxes.forEach(function(messageBox) {
        messageBox.textContent = '';
    });
});

const themeDropdown = document.getElementById('theme-drop-down');

themeDropdown.addEventListener('change', function() {
    const selectedTheme = themeDropdown.value;

    const messageBoxes = document.querySelectorAll('.message');

    messageBoxes.forEach(function(messageBox) {
        if (selectedTheme === 'theme-one') {
            messageBox.style.backgroundColor = 'lightblue';
        } else if (selectedTheme === 'theme-two') {
            messageBox.style.backgroundColor = 'red';
        }
    });
});
// Array of new words for the conversation
const newWords = [
    "Who do you think the Eagles will draft?",
    "I don't know but I hope a corner.",
    "Well if they want a corner they shout just trade for Patrick Surtain II!",
    "I agree, but he might be too expensive.",
  ];


  function changeConversation() {
    const messageBoxes = document.querySelectorAll('.message');

    messageBoxes.forEach(function(messageBox, index) {
      const newWord = newWords[index % newWords.length];

      messageBox.textContent = newWord;
    });
  }

  setInterval(changeConversation, 3000);
