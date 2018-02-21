export const html = `<div class="block">
    <input type="text" id="input">
    <div id="result"></div>
</div>`

export const js = `const $input = document.getElementById('input')
const $result = document.getElementById('result')

const input$ = Kefir.fromEvents($input, 'input')
    .map(event => event.target.value)

input$.observe(result => { $result.textContent = result })`
