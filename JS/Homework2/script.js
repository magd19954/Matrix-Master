document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("my-form");
    const body = document.body;
    const itemsList = document.querySelector(".items");
    const lastItem = itemsList.lastElementChild;

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        form.style.backgroundColor = "red";
        body.classList.add("bg-dark", "text-light");

        if (lastItem) {
            const helloElement = document.createElement("h1");
            helloElement.textContent = "Hello";
            helloElement.classList.add( "text-black", "bg-white");
            lastItem.replaceWith(helloElement);
        }
    });
});
