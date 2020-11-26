const form = document.querySelector('#calculator');

form.addEventListener('submit', (calculate) => {

        let feet = document.querySelector('#feet');
        let inches = document.querySelector('#inches');
        let results = document.querySelector('#results');

        calculate.preventDefault();

        feet = parseInt(feet.value);
        inches = parseInt(inches.value);

        if (isNaN(feet) || isNaN(inches)) {
        results.textContent = "Please enter a number."
        } else {
        let total = (feet * 30.48) + (inches * 2.54);
        results.textContent = total + ' cm';
        feet.value = '';
        inches.value = '';
        }
});
