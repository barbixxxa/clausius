function calculate_passwd_entropy() {
    var password = document.getElementById("input-password").value;
    var length = password.length;
    var passCharac = []
    var text = "Your password contains: <ul>"

    var lowerCase = 0, upperCase = 0, numbers = 0, specialChars = 0, specialCharsPlus = 0, space = 0, others = 0, chars = 0;

    for (var i = 0; i < length; i++) {
        var c = password.charAt(i);

        if (lowerCase == 0 && 'abcdefghijklmnopqrstuvwxyz'.indexOf(c) >= 0) {
            chars += 26;
            lowerCase = 1;
        }
        if (upperCase == 0 && 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(c) >= 0) {
            chars += 26;
            upperCase = 1;
        }
        if (numbers == 0 && '0123456789'.indexOf(c) >= 0) {
            chars += 10;
            numbers = 1;
        }
        if (specialChars == 0 && '!@#$%^&*()'.indexOf(c) >= 0) {
            chars += 10;
            specialChars = 1;
        }
        if (specialCharsPlus == 0 && "`~-_=+[{]}\\|;:'\",<.>/?".indexOf(c) >= 0) {
            chars += 22;
            specialCharsPlus = 1;
        }
        if (space == 0 && c == ' ') {
            chars += 1;
            space = 1;
        }
        if (others == 0 && (c < ' ' || c > '~')) {
            chars += 32 + 128;
            others = 1;
        }
    }

    text += '<li><b><u>Entropy: ' + (Math.round(Math.log2(Math.pow(chars, length)) * 100) / 100) + '</u></li><li>Charset Size: ' + chars +
        '</li><li>Length: ' + length + '</li></b>';


    if (lowerCase > 0) {
        passCharac.push('Lower Case Latin Alphabet (a-z)');
    }
    if (upperCase > 0) {
        passCharac.push('Upper Case Latin Alphabet (A-Z)');
    }
    if (numbers > 0) {
        passCharac.push('Numbers (0-9)');
    }
    if (specialChars > 0) {
        passCharac.push('Symbols (!@#$%()^&*)');
    }
    if (specialCharsPlus > 0) {
        passCharac.push("Special Chars (`~-_=+[{]}\\|;:'\",<.>/?)");
    }
    if (space > 0) {
        passCharac.push("Space (' ')");
    }
    if (others > 0) {
        passCharac.push("Others");
    }

    passCharac.forEach(function f(v) {
        text += "<li>" + v + "</li>";
    });
    text += "</ul>";

    document.getElementById("password-response").innerHTML = text;
}

function show_password() {
    var inputPassword = document.getElementById("input-password");
    var checkbox = document.getElementById("checkbox-password");

    if (checkbox.checked) {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
}

function calculate_entropy() {
    var text = ''
    var chars = 0
    var length = document.getElementById("input-entropy-lenght")
    var lowercaseCheckbox = document.getElementById("checkbox-entropy-lowchar")
    var uppercaseCheckbox = document.getElementById("checkbox-entropy-upperchar")
    var digitCheckbox = document.getElementById("checkbox-entropy-digit")
    var specialCheckbox = document.getElementById("checkbox-entropy-special")
    var specialPlusCheckbox = document.getElementById("checkbox-entropy-specialPlus")
    var spaceCheckbox = document.getElementById("checkbox-entropy-space")

    if (lowercaseCheckbox.checked) {
        chars += 26;
    }
    if (uppercaseCheckbox.checked) {
        chars += 26;
    }
    if (digitCheckbox.checked) {
        chars += 10;
    }
    if (specialCheckbox.checked) { //'!@#$%^&*()'
        chars += 10;
    }
    if (specialPlusCheckbox.checked) { //"`~-_=+[{]}\\|;:'\",<.>/?"
        chars += 22;
    }
    if (spaceCheckbox.checked) {
        chars += 1;
    }
    /*if (others == 0 && (c < ' ' || c > '~')) {
        chars += 32 + 128;
        others = 1;
    }*/

    text += '<li><b><u>Entropy: ' + (Math.round(Math.log2(Math.pow(chars, length.value)) * 100) / 100) + ' bits';
    document.getElementById("entropy-response").innerHTML = text;
}