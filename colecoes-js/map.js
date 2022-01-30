function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'User') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Breno', 'User');
usuarios.set('Lauren', 'Admin');
usuarios.set('Túlio', 'User');
usuarios.set('Julia', 'Admin');

console.log(getAdmins(usuarios));