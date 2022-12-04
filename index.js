function trimTextFieldCallback( event ) {
    const $textField = event.target;
    $textField.value = $textField.value.trim();
}



document.querySelectorAll('.js_text')
      .forEach(text => text.addEventListener('blur', trimTextFieldCallback));
