// Aula 11 e 12 – Condições
    console.log('\nAula 11')

    let num1 = 3
    // Estrutura
        if (num1 % 2 == 0){
            console.log(`${num1} é par!`)
        } else{
            console.log(`${num1} é ìmpar!`)
        }
    
    console.log('\nAula 12')

    
    let idade = 18
    let sexo = 'M'

    // Condições aninhadas
        if (idade < 18){
            console.log('Você é menor de idade!')
        } else{
            console.log('Você é maior de idade!')
            if (sexo == 'M'){
                console.log('Você é do sexo masculino!')
            }
            else if(sexo == 'F')[
                console.log('Você é do sexo Feminino')
            ] 
        }

        // Hora atual
            let agora = new Date()
            let horaAtual = agora.getHours()

            console.log(`São ${horaAtual} hora(s)`)
            if (horaAtual < 6){
                console.log('Boa madruga!')
            } else if(horaAtual < 12){
                console.log('Bom dia!')
            } else if(horaAtual < 18){
                console.log('Boa tarde!')
            } else{
                console.log('Boa noite!')
            }

            // Condição múltipla
            let temperatura = 73

            let converteParaCelsius = 'C'
                switch (converteParaCelsius){
                    case 'C':
                        temperatura = temperatura
                        console.log(`Temperatura em Celsius: ${temperatura.toFixed(2)} °C`)
                        break // O uso do break é obrigatório
                        
                    case 'F':
                        console.log(`Temperatura em Fahrenheit: ${temperatura.toFixed(2)}°F`)
                        temperatura = (temperatura - 32) / 1.8
                        console.log(`Conversão para Celsius: ${temperatura.toFixed(2)}°C`)
                        break
                    case 'K':
                        console.log(`Temperatura em Kelvin: ${temperatura.toFixed(2)}K`)
                        temperatura = temperatura - 273.15
                        console.log(`Conversão para Celsius: ${temperatura.toFixed(2)}°C`)
                        break
                    default:
                        console.log('Digite uma unidade de temperatura válida')
                        break // O uso do break só não é obrigatório aqui
                }