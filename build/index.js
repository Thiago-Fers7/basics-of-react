"use strict";

var _user$address;

var user = {}; // Optinal chaining

console.log(user === null || user === void 0 ? void 0 : (_user$address = user.address) === null || _user$address === void 0 ? void 0 : _user$address.street); // Caso os valores sejam seja inválidos, o que geraria um erro. A "?" valida isso automaticamento. Nesse caso, a primeira "?" verifica se existe "user.address", caso exista ele buscará o próximo valor ("user.address.street") e assim por diante.