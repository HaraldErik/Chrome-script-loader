(function () {
    'use strict';

    // Create the GUI container
    const guiContainer = document.createElement('div');
    guiContainer.style.position = 'fixed';
    guiContainer.style.top = '50%';
    guiContainer.style.left = '50%';
    guiContainer.style.transform = 'translate(-50%, -50%)';
    guiContainer.style.backgroundColor = '#ffffff';
    guiContainer.style.borderRadius = '10px';
    guiContainer.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    guiContainer.style.padding = '20px';
    guiContainer.style.width = '300px';
    guiContainer.style.textAlign = 'center';
    guiContainer.style.zIndex = 10000;

    // Add a title
    const title = document.createElement('h3');
    title.textContent = 'Script Loader';
    title.style.marginBottom = '20px';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.color = '#333333';
    guiContainer.appendChild(title);

    // Add the button
    const loadButton = document.createElement('button');
    loadButton.textContent = 'Load Script';
    loadButton.style.padding = '10px 20px';
    loadButton.style.fontSize = '16px';
    loadButton.style.backgroundColor = '#007BFF';
    loadButton.style.color = '#ffffff';
    loadButton.style.border = 'none';
    loadButton.style.borderRadius = '5px';
    loadButton.style.cursor = 'pointer';
    loadButton.style.transition = 'background-color 0.3s';
    loadButton.addEventListener('mouseover', () => {
        loadButton.style.backgroundColor = '#0056b3';
    });
    loadButton.addEventListener('mouseout', () => {
        loadButton.style.backgroundColor = '#007BFF';
    });

    // Add button click event
    loadButton.addEventListener('click', function () {
        const scriptURL = 'https://raw.githubusercontent.com/HaraldErik/Chrome-script-loader/refs/heads/main/test%20functions.js';

        // Fetch and execute the script
        fetch(scriptURL)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error(`Failed to load script: ${response.statusText}`);
            })
            .then(scriptContent => {
                eval(scriptContent); // Execute the loaded script
                alert('Script loaded and executed successfully!');
                document.body.removeChild(guiContainer); // Remove the GUI
            })
            .catch(error => {
                console.error(error);
                alert('Failed to load the script.');
            });
    });

    guiContainer.appendChild(loadButton);

    // Add the GUI to the document
    document.body.appendChild(guiContainer);
})();
