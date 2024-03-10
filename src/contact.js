function renderContact(body) {
    const main = document.createElement("main");
    const mainHeading = document.createElement("h2");
    mainHeading.textContent = "Contact Information";
    main.appendChild(mainHeading);
    const contactInfo = document.createElement("p");
    contactInfo.innerHTML = "Email: info@example.com<br>Phone: 123-456-7890<br>Address: 123 Main Street, City, Country";
    main.appendChild(contactInfo);
    body.appendChild(main);
}

export { renderContact };
