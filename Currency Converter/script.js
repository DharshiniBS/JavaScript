let select = document.querySelectorAll('select')
let btn = document.getElementById('btn')
let input = document.getElementById('input')
fetch('https://api.frankfurter.app/currencies')//returns a promise
    .then(res => res.json())//convert to json
    .then(res => displayDropDown(res))//receives the res in json form and sent to displayDropDown

function displayDropDown(res) {
    let currency = Object.entries(res)//converts to array
    for (let i = 0; i < currency.length; i++) {
        let option = `<option value="${currency[i][0]}">${currency[i][0]}</option>`
        select[0].innerHTML += option
        select[1].innerHTML += option
    }
}
//Add event listener for convert button
btn.addEventListener('click', () => {
    let currency1 = select[0].value
    let currency2 = select[1].value
    let inputvalue = input.value
    if (currency1 === currency2)
        alert("Choose different currencies for conversion")
    else
        convert(currency1, currency2, inputvalue)
})

function convert(curr1, curr2, inputVal) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
        .then(resp => resp.json())
        .then((data) => {
            document.getElementById('result').value = Object.values(data.rates)[0]
        });
}