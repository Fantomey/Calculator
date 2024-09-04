

function changeThemes() {
    const btnThemes = document.querySelector('.theme-change');

    btnThemes.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');

        if (isDark) {
            localStorage.setItem('darkMode', 'dark');
        } else {
            localStorage.setItem('darkMode', 'light');
        }
    });

    if (localStorage.getItem('darkMode') === 'dark') {
        btnThemes.classList.add("btn-change-themes--active");
        document.body.classList.add("dark");
    } else {
        btnThemes.classList.remove("btn-change-themes--active");
        document.body.classList.remove("dark");
    }
}


changeThemes();



document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input-line');
    const buttons = document.querySelectorAll('.btn-number');
    const del = document.querySelectorAll('.btn-del');
    const backspaceButton = document.querySelector('.delF');

    const plus = document.querySelector('.plus');
    const minus = document.querySelector('.minus');
    const multiply = document.querySelector('.multiply');
    const divide = document.querySelector('.divide');
    const result = document.querySelector('.result');
    const up2 = document.querySelector('.btn-up');
    const btnX = document.querySelector('.btn-1x');
    const sign = document.querySelector('.sign');
    const radical = document.querySelector('.radical');




    radical.addEventListener('click', () => {
        input.value = Math.sqrt(input.value)

    })

    sign.addEventListener('click', () => {
        input.value = input.value * -1;

    })

    btnX.addEventListener('click', () => {
        input.value = 1 / input.value;

    })

    up2.addEventListener('click', () => {
        input.value = input.value * input.value;

    })



    backspaceButton.addEventListener('click', () => {
        input.value = input.value.slice(0, -1);

    })

    result.addEventListener('click', () => {
        input.value = eval(input.value);
    })
    plus.addEventListener('click', () => {
        if (!/[\+\-\*\/]$/.test(input.value)) {
            input.value += '+';
        }
    })
    minus.addEventListener('click', () => {
        if (!/[\+\-\*\/]$/.test(input.value)) {
            input.value += '-';
        }
    })
    multiply.addEventListener('click', () => {
        if (!/[\+\-\*\/]$/.test(input.value)) {
            input.value += '*';
        }
    })
    divide.addEventListener('click', () => {
        if (!/[\+\-\*\/]$/.test(input.value)) {
            input.value += '/';
        }
    })

    del.forEach(button => {
        button.addEventListener('click', () => {
            input.value = '';
        });
    })

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            input.value += button.textContent;

        });


    });
});
