// CASO 01: 

let expr = prompt("La informacion de que animal desea saber");

switch (expr) {
    
    case 'ballena':
    case 'caballo':
    case 'chimpance':
    case 'delfin':
    case 'elefante':
    case 'gato':
    case 'gorila':
    case 'girafa':
    case 'leon':
    case 'murcielago':
    case 'nutria':
    case 'perro':
      console.log("Es un animal mamifero  ( " + expr+ " ) ")
      document.write('Es un animal mamifero ( ' + expr + " ) ");
    break;

    case 'cocodrilo':
    case 'pinguino':
    case 'gallina':
    case 'condor':
    case 'avestruz':
    case 'pato':
    case 'rana':
    case 'abeja':
    case 'loro':
    case 'aguila':
    case 'cigueña':
    case 'ganso':
      console.log("Es un animal oviparo  ( " + expr+ " ) ")
      document.write('Es un animal oviparo ( ' + expr + " ) ");
    break;

    default:
      console.log('Lo lamentamos, por el momento no disponemos de la informacion ')
      document.write('Lo lamentamos, por el momento no disponemos de la informacion ');
  }
// ***********************************

// console.log("Hoy es jueves \n de pavita ");
// document.write("Mañana es viernes <br> de Arroz con pollo")

