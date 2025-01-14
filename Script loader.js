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
    guiContainer.style.padding = '0'; // Padding is handled by children
    guiContainer.style.width = '300px';
    guiContainer.style.textAlign = 'center';
    guiContainer.style.zIndex = 10000;
    guiContainer.style.cursor = 'default';

    // Create a header for dragging
    const header = document.createElement('div');
    header.style.backgroundColor = '#007BFF';
    header.style.color = '#ffffff';
    header.style.padding = '10px';
    header.style.borderTopLeftRadius = '10px';
    header.style.borderTopRightRadius = '10px';
    header.style.cursor = 'grab';
    header.style.userSelect = 'none';
    header.textContent = 'Script Loader';
    guiContainer.appendChild(header);

    // Add the button
    const loadButton = document.createElement('button');
    loadButton.textContent = 'Load Script';
    loadButton.style.margin = '20px 0';
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

    // Add dragging functionality
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - guiContainer.getBoundingClientRect().left;
        offsetY = e.clientY - guiContainer.getBoundingClientRect().top;
        header.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const left = e.clientX - offsetX;
            const top = e.clientY - offsetY;
            guiContainer.style.left = `${left}px`;
            guiContainer.style.top = `${top}px`;
            guiContainer.style.transform = 'none'; // Disable centering when moved
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            header.style.cursor = 'grab';
        }
    });

    // Add the GUI to the document
    document.body.appendChild(guiContainer);
})();
