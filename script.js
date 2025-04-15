// wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the buttons by their IDs and assign them to variables
    const changeBtn = document.getElementById('changeBtn');
    const cssBtn = document.getElementById('cssBtn');
    const addBtn = document.getElementById('addBtn');
    const removeBtn = document.getElementById('removeBtn');

    // add event listeners to the buttons
    changeBtn.addEventListener('click', changeText);
    cssBtn.addEventListener('click', modifyCSS);
    addBtn.addEventListener('click', addElement);
    removeBtn.addEventListener('click', removeElement);

    // change the text of the heading when the button is clicked
    function changeText() {
        document.getElementById('title').textContent = "Clicked and changed the heading";
    }

    // change the CSS of the paragraph when the button is clicked
    function modifyCSS() {
        const par = document.getElementById('par');
        par.style.backgroundColor = "darkblue";
        par.style.color = "#fff";
        par.style.padding = "5px";
        par.style.borderRadius = "5px";
    }

    // add a new paragraph when the button is clicked
    function addElement() {
        const container = document.getElementById('container');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = "This is the newly added paragraph.";
        newParagraph.id = "NewlyAdded";
        container.appendChild(newParagraph);
    }

    // remove the newly added paragraph when the button is clicked
    // and alert the user
    function removeElement() {
        const paragraph = document.getElementById('NewlyAdded');
        if (paragraph) {
            paragraph.remove();
            alert("Hello! The newly added paragraph has been removed!");
        }
    }
});
