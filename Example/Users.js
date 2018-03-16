exports.getUsers = function(){
    let userList = new Set();
    userList.add({'name':'sara', 'mark':50});
    userList.add({'name':'abc', 'mark':60});
    userList.add({'name':'def', 'mark':70});
    return userList;
}