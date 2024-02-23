const resultado = document.querySelector('.resultado')

// ax2 + bx + c = 0
// a != 0
function iniciar() {
    let valor_A = prompt("Digite o valor de A:")

    if (valor_A == 0) {
        alert("Digite um valor não nulo!")
        iniciar()
    } else {
        let valor_B = prompt("Certo, agora digite o valor de B:")
        let valor_C = prompt("Por último, digite o valor de C:")

        const delta = Math.pow(valor_B, 2) - (4 * valor_A * valor_C)

        if (delta < 0) {
            alert("A equação não pode ser resolvida! O delta é menor que 0")
        } else if (delta == 0) {
            const valor = (valor_B * -1) / (2 * valor_A)
            resultado.innerHTML = `Resultado: {${valor}}`

        } else {
            const valor_x1 = ((valor_B * -1) + Math.sqrt(delta)) / (2 * valor_A)
            const valor_x2 = ((valor_B * -1) - Math.sqrt(delta)) / (2 * valor_A)

            resultado.innerHTML = `Resultado: {${valor_x1}, ${valor_x2}}`
        }
    }
}
