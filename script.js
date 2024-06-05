/**
 * Função para calcular a média de números maiores que 10 em uma lista
 * @param {number[]} numbers - Array de números
 * @return {number} - Média dos números maiores que 10
 */
 function calcularMedia(numbers) {
    const filteredNumbers = numbers.filter(number => number > 10);
    if (filteredNumbers.length === 0) {
        return 0; 
    }
    const sum = filteredNumbers.reduce((acc, number) => acc + number, 0);
    return sum / filteredNumbers.length;
}

/**
 * Função para criar o gráfico de barras
 * @param {number[]} numbers - Array de números
 */
function criarGrafico(numbers) {
    const chart = document.getElementById('chart');
    chart.innerHTML = '';
    numbers.forEach(number => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${number * 5}px`;
        bar.title = number;
        chart.appendChild(bar);
    });
}

// Manipulação do DOM
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(Number);
    const media = calcularMedia(numbers);
    document.getElementById('result').textContent = `A média dos números maiores que 10 é: ${media}`;
    criarGrafico(numbers.filter(number => number > 10));
});
