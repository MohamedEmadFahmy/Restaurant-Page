import ManeImage from "./imgs/mane.jpeg";

function renderMenu(body){
    const main = document.createElement("main");
    const mainHeading = document.createElement("h2");
    mainHeading.textContent = "Menu Items";
    main.appendChild(mainHeading);
    const itemList = document.createElement("ul");
    const items = ["Item 1", "Item 2", "Item 3"];
    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        itemList.appendChild(listItem);
    });
    main.appendChild(itemList);
    body.appendChild(main);
    
    const myIcon = new Image();
    myIcon.src = ManeImage;

    body.appendChild(myIcon);
}

export {renderMenu};
