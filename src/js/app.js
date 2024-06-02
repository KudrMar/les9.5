import '../css/style.css';
import ToolTip from'./toolTip.js';

const form = document.querySelector('.btn');
const tooltipFactory = new ToolTip;

form.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.toggle('toolTipVisible');
    if (form.classList.contains('toolTipVisible')) {
        tooltipFactory.showToolTip("And here's some amazing content. It's very engaging. Right?", form);
    } else {
        tooltipFactory.removeTooltip();
    }
}
);