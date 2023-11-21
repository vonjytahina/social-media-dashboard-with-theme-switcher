const theme_switch = document.querySelector('.toggle');
const toggle_switch = document.querySelector('.toggle-switch');
const container = document.querySelector('.container');

theme_switch.onclick = () => {
  const computedStyle = window.getComputedStyle(toggle_switch);
  const currentLeft = computedStyle.getPropertyValue('left');

  if (currentLeft == "12.5px") {
    toggle_switch.style.left = "75%"
    container.classList.add('light')
  } else {
    toggle_switch.style.left = "25%"
    container.classList.remove('light')
  }
};