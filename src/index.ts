import { leerTeclado } from './util/entradaTeclado'
console.log("Hola mundo")

let main = async () => {
        const valor = await leerTeclado('Dime algo')
        let edad: number = parseInt(valor)
        if (edad >= 18) {
                console.log(`Tienes ${edad} años, eres mayor de edad`)
        }
        else
                console.log("No eres mayor de edad")
}

main();