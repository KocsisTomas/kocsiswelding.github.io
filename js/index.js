//removes unnecessary spaces in the input field
function trimTextFieldCallback( event ) {
    const $textField = event.target;
    $textField.value = $textField.value.trim();
}

document.querySelectorAll('.js_text')
      .forEach(text => text.addEventListener('blur', trimTextFieldCallback));

//in mobile view, it is closed by clicking on the navigation
document.querySelector('.js-navlist').addEventListener("click", () => {
    document.querySelector('.js-checkbox').checked = false;
})
