import { leerTeclado } from './util/entradaTeclado'

let main = async () => {
    let edad: number
    const valor = await leerTeclado('¿Qué edad tienes?')
    edad = parseInt(valor)
    if (edad >= 18) {
        console.log(`Tienes ${edad} años, eres mayor de edad`)
    }
    else
        console.log(`Tienes ${edad} años, no eres mayor de edad`)
}

main();