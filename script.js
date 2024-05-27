const gallery = document.getElementById("slider");
const left = document.getElementsByClassName("left")[0];
const right = document.getElementsByClassName("right")[0];
const images = 6;
const imagesPath = "images/";
let selected = 0;

left.classList.add("disabled");

function init() {
    for (let i = 0; i < images; i++) {
        const imageWrapper = document.createElement("div");
        imageWrapper.id = `image_${i}`;
        imageWrapper.classList.add("wrapper");
        if (i === selected) {
            imageWrapper.classList.add("selected");
        }
        const image = document.createElement("img");
        image.src = `${imagesPath}image_${i + 1}.png`;
        imageWrapper.appendChild(image);
        gallery.appendChild(imageWrapper);
    }
}

function handleSelection() {
    const imageWrappers = document.getElementsByClassName("wrapper");
    for (let i = 0; i < imageWrappers.length; i++) {
        const img = imageWrappers[i];
        img.classList.toggle("selected", img.id === `image_${selected}`);
    }
}

right.onclick = function () {
    selected = (selected + 1) % images;
    handleSelection();
};

left.onclick = function () {
    selected = (selected - 1 + images) % images;
    handleSelection();
};

init();


// JavaScript code for dynamically adding content to the infoboxes

const infoboxesContainer = document.querySelector(".infoboxes");

const infoData = [
    { title: "> 3 days", text: "DELIVERY TIME" },
    { title: "DDOS", text: "PROTECTED" },
    { title: "100%", text: "SEO FRIENDLY" },
    { title: "Unbeatable", text: "PAGE SPEEDS" }
];

function createInfobox(title, text) {
    const infobox = document.createElement("div");
    infobox.classList.add("infobox");

    const titleElem = document.createElement("h5");
    titleElem.textContent = title;
    const textElem = document.createElement("p");
    textElem.textContent = text;

    infobox.appendChild(titleElem);
    infobox.appendChild(textElem);

    return infobox;
}

infoData.forEach(data => {
    const infobox = createInfobox(data.title, data.text);
    infoboxesContainer.appendChild(infobox);
});

