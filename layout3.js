var main, star, i, image, counter, firstBox, imagePlus, box, lastName = "shabo",
    color = ["#fbc0fc", "#f39df5", "#03fcbe", "#bc85f2", "#faaaed",
        "#3febe4", "#6ed1f5", "#dfc0fc", "#d0a8f7", "#fa91e9",
        "#30aedb", "#35c0f2", "#03fcca", "#03fcdf", "#eba7fc",
        "#03fcf0", "#03e7fc", "#03cafc", "#03befc", "#00e5ff",
        "#54c3ff", "#abe1ff", "#8bf0ec", "#f284f5", "#f783d6",
        "#a8f0d5", "#d6b9f0", "#e1b9f0", "#e4bff2", "#da9ffc",
        "#e6c5fc", "#d19af5", "#bbfaed", "#bbfafa", "#b3d3f5",
        "#c1b4f0", "#dbb4f0", "#f6a5fa", "#f5a2e3", "#ffb0ee"
    ],
    svg = ["in-love", "cute", "laughing"];

function createBox() {
    box = document.createElement("div");
    main.appendChild(box);
    box.className = "box";
    box.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
    box.oldColor = box.style.backgroundColor;
    box.boxNumber = i;
    addImage(box);
    if (i != 0)
        box.onclick = clickBox;
    if ((i + 1) % 3 == 0)
        addStar();
    i++;
    return box;
}


function addImage(bb) {
    if (bb.boxNumber == 0) return;
    image = document.createElement("div");
    bb.image = image;
    bb.appendChild(image);
    image.className = "boxImage";
    bb.image.style.backgroundImage = "url(images/" + svg[Math.floor(Math.random() * svg.length)] + ".svg)";
}

function createFirstBox() {
    // main.innerHTML = "<div class=box> <div class=imagePlus></div></div>";
    firstBox = createBox();
    imagePlus = document.createElement("div");
    firstBox.appendChild(imagePlus);
    imagePlus.className = "imagePlus";
    imagePlus.onclick = function() {
        createBox();
    };
}

function lastNameBox() {
    return (lastName.length * 2)
}

function clickBox() {

    if (this.image.style.visibility == "visible") {
        this.style.backgroundColor = this.oldColor;
        this.image.style.visibility = "hidden";
        if ((this.boxNumber + 1) % 3 == 0)
            this.star.style.backgroundImage = "url(images/whiteStar.svg)";

    } else {
        this.style.backgroundColor = "rgb(255, 255, 255)";
        this.image.style.visibility = "visible";
        if ((this.boxNumber + 1) % 3 == 0)
            this.star.style.backgroundImage = "url(images/colorStar.svg)";
    }

}

function addStar() {
    star = document.createElement("div");
    box.star = star;
    box.appendChild(star);
    star.className = "star";
}


function createAllBoxs() {
    counter = lastNameBox();
    for (i = 0; i < counter;) {
        if (i == 0)
            createFirstBox();

        box = createBox(); // increase i by one (i++)
    }
}

window.onload = function createBox() {
    main = document.getElementById("boxList");
    createAllBoxs();
}