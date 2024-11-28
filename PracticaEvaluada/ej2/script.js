const form = document.querySelector('form'); // Selección del formulario

function evento(event) {
    // Prevenir el envío del formulario inicialmente para controlar las excepciones
    event.preventDefault();

    // Obtener referencias a los campos y errores
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordHint = document.getElementById('passwordHint');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const passwordHintError = document.getElementById('passwordHintError');

    // Expresión regular para validar contraseña
    const passwordRegex = /^[A-Z][A-Za-z\d]{5,}$/;

    // Reiniciar mensajes de error por si hay alguno anterior
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    passwordHintError.textContent = '';

    // Validar contraseña
    if (!passwordRegex.test(password.value)) {
        passwordError.textContent =
            'La contraseña debe empezar por una letra mayúscula, tener un mínimo de 6 caracteres y contener al menos un dígito.';
        password.focus();
        password.select();
        return; // Detener la validación si hay error
    }

    // Validar confirmación de contraseña
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent =
            'Las contraseñas no coinciden. Vuelve a intentarlo.';
        password.focus();
        password.select();
        return; // Detener la validación si hay error
    }

    // Validar indicio de contraseña
    if (passwordHint.value.includes(password.value)) {
        passwordHintError.textContent =
            'El indicio de contraseña no puede contener la contraseña.';
        passwordHint.focus();
        passwordHint.select();
        return; // Detener la validación si hay error
    }

    // Si todo es válido, enviar el formulario
    alert('Formulario enviado correctamente.');
    form.submit();
}

// Asignar el evento al formulario
form.addEventListener('submit', evento);
