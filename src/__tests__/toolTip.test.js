
import ToolTip from'../js/toolTip.js';

const tooltipFactory = new ToolTip;

test('Create ToolTip', () => {

  tooltipFactory.showToolTip("And here's some amazing content. It's very engaging. Right?");
  const expectedForm = document.querySelector('.form-message');
  expect(expectedForm).not.toBeNull();
});