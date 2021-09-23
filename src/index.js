const user = {};

// Optinal chaining
console.log(user?.address?.street); // Caso os valores sejam seja inválidos, o que geraria um erro. A "?" valida isso automaticamento. Nesse caso, a primeira "?" verifica se existe "user.address", caso exista ele buscará o próximo valor ("user.address.street") e assim por diante.