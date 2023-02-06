const checkbox = document.getElementById("checkbox");

const toggle = document.getElementById("toggle");

const basicAnnual = document.getElementById("basic");

if (checkbox.checked === "true") {
    toggle.style.left = "5px";
} else {
    toggle.style.right = "5px";
}