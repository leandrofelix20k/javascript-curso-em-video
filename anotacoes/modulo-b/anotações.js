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

// Aula 6 – Tratamento de dados
    console.log('\n--Aula 06\n')
    var nome = 'Leandro'

    //Formatando Strings
    console.log('Meu nome é nome') // Não faz a interpolação
    console.log('Meu nome é ' + nome)
    console.log(`Meu nome é ${nome}`) // Utiliza-se a crase, pois ela usa o template string
    console.log(nome.length) // Conta o número de letras
    console.log(nome.toUpperCase()) // Deixa todas as letras maiúsculas
    console.log(nome.toLowerCase()) // Deixa todas as letras minúsculas

    //Formatando números
    var numero = 87.99
    console.log(numero.toFixed(1)) // Delimita a quantidade de casas decimais
    console.log(numero.toFixed(2).replace('.', ',')) // Modica os caracteres por outro especificado
    console.log(numero.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})) // Formata o salário para os padrões tupiniquins 
    console.log(numero.toLocaleString('en', {style: 'currency', currency: 'USD'})) // Formata o salário para os padrões estaduninenses 