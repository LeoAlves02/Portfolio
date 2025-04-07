document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "Olá, eu sou o ";
    const nameText = "Leonardo";
    const typingElement = document.getElementById("typing");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            let nameSpan = document.createElement("span");
            nameSpan.classList.add("purple");
            typingElement.appendChild(nameSpan);
            typeName(nameSpan, 0);
        }
    }

    function typeName(span, nameIndex) {
        if (nameIndex < nameText.length) {
            span.innerHTML += nameText.charAt(nameIndex);
            setTimeout(() => typeName(span, nameIndex + 1), 100);
        } else {
            typingElement.style.borderRight = "none"; // Remove o cursor após digitação
        }
    }

    type();
});

