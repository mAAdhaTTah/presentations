export const html = `<div class="calculator">
    <input type="text" id="first" class="number">

    <select name="operation" id="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>

    <input type="text" id="second" class="number">

    <div id="result"></div>
</div>`


export const js = `const first$ = Kefir.fromEvents(document.getElementById('first'), 'input')
    .map(event => parseInt(event.target.value, 10))

    const second$ = Kefir.fromEvents(document.getElementById('second'), 'input')
    .map(event => parseInt(event.target.value, 10))

    const operation$ = Kefir.fromEvents(document.getElementById('operation'), 'change')
    .map(event => event.target.value)
    .merge(Kefir.constant('+'))

    const result$ = Kefir.combine({ f: first$, s: second$, op: operation$ }, ({ f, s, op }) => {
    if (Number.isNaN(f) || Number.isNaN(s)) {
        return 'ERR'
    }

    switch (op) {
        case '+':
            return f + s
        case '-':
            return f - s
        case '*':
            return f * s
        case '/':
            return f / s
        default:
            return 'ERR'
    }
})

result$.observe(result => { document.getElementById('result').textContent = result })`
