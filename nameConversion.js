const inputElement = document.getElementById("text");
const btnElement = document.getElementById("convert-btn");

// listening input event of inputElement 
inputElement.addEventListener("input", function (e) {
    //fetching value from event
    const inputValue = e.target.value

    // listening click event of btnElement 
    btnElement.addEventListener("click", function () {
        //camel case
        document.getElementById("camel-case").innerText = inputValue.toCamelCase()

        //pascal case
        document.getElementById("pascal-case").innerText = inputValue.toPascalCase()

        //snake case
        document.getElementById("snake-case").innerText = inputValue.toSnakeCase()

        //screaming snake case
        document.getElementById("screaming-snake-case").innerText = inputValue.toScreamingSnakeCase()

        //kebab case
        document.getElementById("kebab-case").innerText = inputValue.toKebabCase()

        //screaming kebab case
        document.getElementById("screaming-kebab-case").innerText = inputValue.toScreamingKebabCase()
    })
})
