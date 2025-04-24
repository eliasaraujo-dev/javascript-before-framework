// const menu = {
//     class: ".main",
//     active() {
//         const menuElement = document.querySelector(this.class);
//         menuElement.classList.add("ativo");
//     }
// };

// const body = document.querySelector("body");
// body.classList.add("js");

const menu = {
    class: ".main", // Property
    activate() {
        const mainElement = document.querySelector(this.class);
        console.log(mainElement);
    }
};

menu.activate();
