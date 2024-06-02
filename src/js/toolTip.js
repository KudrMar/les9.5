export default class ToolTip {

    showToolTip(message, element) {
        const tooltipElement = document.createElement('div');

        tooltipElement.classList.add('form-message');

        document.body.appendChild(tooltipElement);
        if (element != undefined && element != null) {
            const tooltipElementHeader = document.createElement('h3');
            tooltipElementHeader.classList.add('form-message-header');
            tooltipElementHeader.textContent = element.title;
            tooltipElement.appendChild(tooltipElementHeader);
        }
        const tooltipElementText = document.createElement('div');
        tooltipElementText.classList.add('form-message-text');
        tooltipElementText.textContent = message;
        tooltipElement.appendChild(tooltipElementText);
        if (element != undefined && element != null) {
            const { right, top, left, width } = element.getBoundingClientRect();

            tooltipElement.style.left = left + 'px';
            tooltipElement.style.top = top - tooltipElement.offsetHeight - 10 + 'px';
            tooltipElement.style.width = width + 'px'
        }
    }

    removeTooltip() {
        const tooltip = document.querySelector('.form-message');
        tooltip.remove();
    }
}