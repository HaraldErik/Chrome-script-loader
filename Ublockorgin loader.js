window.addEventListener("keyup", event => {
    // Check for the keybind: Ctrl + Backtick
    if (event.ctrlKey && event.which === 192) {
        const scriptURL = 'https://raw.githubusercontent.com/HaraldErik/Chrome-script-loader/refs/heads/main/Script%20loader.js';
        
        // Confirm action with the user
        if (confirm(`Load and execute script from:\n${scriptURL}?`)) {
            fetch(scriptURL)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch script: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(scriptContent => {
                    // Execute the script
                    eval(scriptContent);
                    alert('Script successfully loaded and executed!');
                })
                .catch(error => {
                    console.error(error);
                    alert('Failed to load the script.');
                });
        }
    }
});
