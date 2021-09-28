import { leerTeclado } from './util/entradaTeclado'

let main = async () => {
    //let edad: number
    const valor = await leerTeclado('¿Qué edad tienes?')
    //edad = parseInt(valor)
    if (parseInt(valor) >= 18) {
        console.log(`Tienes ${parseInt(valor)} años, eres mayor de edad`)
    }
    else
        console.log(`Tienes ${parseInt(valor)} años, no eres mayor de edad`)
}

main();