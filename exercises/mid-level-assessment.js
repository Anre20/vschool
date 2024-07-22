//function that changes the paragraph when the page loads

const changeTextContent = (elementId, newText) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = newText;
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
    }
};
changeTextContent('paragraph', 'Dallas Sucks!');

//function for the button

const button = document.getElementById('changeButton');
button.addEventListener('click', function() {
    changeTextContent('heading', 'Fly Eagles Fly!');
});
