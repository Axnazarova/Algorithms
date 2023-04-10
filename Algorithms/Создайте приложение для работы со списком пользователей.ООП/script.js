
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    rename(newName) {
        this.name = newName;
    }
}


class UserList {
    constructor() {
        this.users = [];
        this.currentId = 0;
    }

    addUserName(name) {
        let user = new User(this.currentId, name);
        this.users.push(user);
        this.currentId++
    }

    renameUser(id, newName) {
        this.users.splice(id, 1, new User(this.currentId, newName));
    }

    removeUser(id) {
        this.users.splice(id, 1);
    }


    getAllUsersString(){
        let newArr = ''
        this.users.forEach((element)=>{
        newArr = newArr + element.name + ','})

    newArr = newArr.split(',').join(';')
    return newArr
    }
}


class Application {
    constructor() {
        this.userList = new UserList();
    }
    init() {
        let answer = prompt("Введите команду Пример команд: create Tom — создание пользователя;rename 0 Sam — изменить имя пользователя с id = 0 на имя Sam;remove 0 — удаление пользователя с id = 0");
        this.users = answer.split(" ");

        if(answer && this.users[0] === "create"){
            this.userList.addUserName(this.users[1]);

        } else if (answer && this.users[0] === "rename" ){
            this.userList.renameUser(this.users[1], this.users[2]);
        } else if(answer && this.users[0] === "remove"){
            this.userList.removeUser(this.users[1]);
        } else if(!answer) {
            console.log('Вы нажали отмену')
        }
        else {
            this.init()
        }
    }

}

// const user = new User('Sam')
// const userList = new UserList()
// userList.addUserName('Aysel');
// userList.addUserName('Jack');
// console.log(userList.getAllUsersString())

const application = new Application()
application.userList.addUserName('Alim')
application.userList.addUserName('Jack')


application.init()



console.log(application.userList.users)
console.log(application.userList.getAllUsersString());

