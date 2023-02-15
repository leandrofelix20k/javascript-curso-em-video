// Aula 5 - Variáveis e Tipos Primitivos 
    console.log('--Aula 05\n')

    var num = 7

    // Três formas de se declarar uma string
    var text1 = 'Primeira forma'
    var text2 = "Segunda"
    var text3 = `Terceira`

    // Identificadores:
    var $cifrao = '$'
    var _sublinhado = '_'

    var n1 = 9
    // Exibir o tipo da variável:
    console.log(typeof n1) // number

    /* 
    Em JavaScript, ao definir a variável, é reservado um espaço para 
    essa variável, é possível modificar tanto o valor como o seu tipo 
    primitivo
    */
    n1 = 'Leandro'
    console.log(typeof n1) //string

// Aula 6 - Tratamento de dados
    console.log('\n--Aula 06\n')

    var nome = 'Leandro'

    // Formatando Strings
    console.log('Meu nome é nome') // Não faz a interpolação
    console.log('Meu nome é ' + nome)
    console.log(`Meu nome é ${nome}`) // Utiliza-se a crase, pois ela usa o template string
    console.log(nome.length) // Conta o número de letras
    console.log(nome.toUpperCase()) // Deixa todas as letras maiúsculas
    console.log(nome.toLowerCase()) // Deixa todas as letras minúsculas

    // Formatando números
    var numero = 87.99
    console.log(numero.toFixed(1)) // Delimita a quantidade de casas decimais
    console.log(numero.toFixed(2).replace('.', ',')) // Modica os caracteres por outro especificado
    console.log(numero.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})) // Formata o salário para os padrões tupiniquins 
    console.log(numero.toLocaleString('en', {style: 'currency', currency: 'USD'})) // Formata o salário para os padrões estaduninenses 

// Aula 7 e 8 - Operadores
    console.log('\n--Aula 07\n')
    
    // Operadores Aritméticos
    var soma = 3 + 5
    var subtracao = 10 - 4
    var multiplicacao = 3 * 5
    var divisao = 18 / 3
    var restoDivisão = 8 % 5
    var exponenciacao = 5 ** 2

    // Operador de Incremento
    var x = 5
    x++  //x += 1
    console.log(x)  //x=6

    console.log('\n--Aula 08\n')

    // Operadores Relacionais
        console.log(6 > 2) // Maior
        console.log(6 < 2) // Menor
        console.log(6 >= 2) // Maior ou igual
        console.log(6 <= 2) // Menor ou igual
        console.log(6 == 2) // Igual
        console.log(6 != 2) // Diferente

        console.log(5 == '5') // True
        // *OBS: O sinal de igualdade do JavaScript não compara o valor 
        //  e a tipagem, ele compara apenas o valor.

    // Operador de identidade
        console.log(5 === '5') // False
        // *OBS: O comparador de identidade compara o valor e a tipagem
        

        // Compara apenas o valor
        console.log(5 != '5') // False
        // Compara o tipo e o valor
        console.log(5 !== '5') // True

    // Operadores Lógicos
        console.log('! - Not')
        console.log('&& - And')
        console.log('|| - Or')

    // Precedência
        // 1-Operadores Aritméticos
        // 2-Operadores Relacionais
        // 3-Operador Not - !
        // 4-Operador And - &&
        // 5-Operador Or - ||

    // Operadores Ternários
    
    console.log(5 < 3?'Sim':'Não') // teste?true:false

    var media = 6.7
    var resultado = media>7?'Aprovado':'Reprovado'

    console.log(resultado)