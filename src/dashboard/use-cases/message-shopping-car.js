
export const showMessage = ( elementHtml, message ) => {
    const span = document.createElement('span');
        span.innerHTML = `${message}`;
        elementHtml.appendChild(span);
        setTimeout(() => {
            elementHtml.style.display = "none"
            elementHtml.style.background = "none"
        }, 5000);
}