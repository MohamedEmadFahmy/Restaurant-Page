function renderHome(body){

        const main = document.createElement("main");
        const mainContent = document.createElement("p");
        mainContent.textContent = "This is the home page content. Welcome to our website!";
        main.appendChild(mainContent);
        body.appendChild(main);
    
        const footer = document.createElement("footer");
        const footerText = document.createElement("p");
        footerText.textContent = "\u00A9 2024 Your Website Name. All rights reserved.";
        footer.appendChild(footerText);
        body.appendChild(footer);
        // alert("Home page loaded");
}

export {renderHome};