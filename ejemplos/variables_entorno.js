let saludo = process.env.NOMBRE || 'Sin nombre';
let ciudad = process.env.CIUDAD || 'Sin ciudad';
console.log(`Hola mi nombre es ${saludo}, soy de ${ciudad}`);