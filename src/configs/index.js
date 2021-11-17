const regularEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regularPassword = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;

const selectOptions = [
    {value: 'driver', label: 'Driver'},
    {value: 'administrator', label: 'Administrator'},
];

const userModel = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    type: selectOptions[0].value,
    password: '',
    repeatPassword: '',
}

// массив пользователей для теста
const users = [{
    "_id": "6192d1d0111a7de6124c4b19",
    "userName": "Vika",
    "firstName": "Vika",
    "lastName": "Hladka",
    "email": "vktr.gldk10.98@gmail.com",
    "type": "administrator",
    "createdAt": "2021-11-15T21:32:00.320Z",
    "updatedAt": "2021-11-15T21:32:00.320Z",
    "__v": 0
}, {
    "_id": "6192d2d4339dd0e07257daa5",
    "userName": "Viktoriiia",
    "firstName": "Vika",
    "lastName": "Hladka",
    "email": "vktr.gldk100.98@gmail.com",
    "type": "driver",
    "createdAt": "2021-11-15T21:36:20.376Z",
    "updatedAt": "2021-11-15T21:36:20.376Z",
    "__v": 0
}, {
    "_id": "6192d2dc339dd0e07257daa9",
    "userName": "Viktoriiiia",
    "firstName": "Vika",
    "lastName": "Hladka",
    "email": "vktr.gldk1000.98@gmail.com",
    "type": "driver",
    "createdAt": "2021-11-15T21:36:28.399Z",
    "updatedAt": "2021-11-15T21:36:28.399Z",
    "__v": 0
}, {
    "_id": "6192d2e2339dd0e07257daad",
    "userName": "Viktoriiiiia",
    "firstName": "Vika",
    "lastName": "Hladka",
    "email": "vktr.gldk10000.98@gmail.com",
    "type": "driver",
    "createdAt": "2021-11-15T21:36:34.237Z",
    "updatedAt": "2021-11-15T21:36:34.237Z",
    "__v": 0
}, {
    "_id": "6192d2ee339dd0e07257dab1",
    "userName": "Vova",
    "firstName": "Vika",
    "lastName": "Hladka",
    "email": "vova8@gmail.com",
    "type": "driver",
    "createdAt": "2021-11-15T21:36:46.911Z",
    "updatedAt": "2021-11-15T21:36:46.911Z",
    "__v": 0
}, {
    "_id": "6192d2f3339dd0e07257dab5",
    "userName": "Vovaa",
    "firstName": "Vika",
    "lastName": "Hladka",
    "email": "vovaa8@gmail.com",
    "type": "driver",
    "createdAt": "2021-11-15T21:36:51.866Z",
    "updatedAt": "2021-11-15T21:36:51.866Z",
    "__v": 0
}, {
    "_id": "6192d2f6339dd0e07257dab9",
    "userName": "Vovaaa",
    "firstName": "Vika",
    "lastName": "Hladka",
    "email": "vovaaa8@gmail.com",
    "type": "driver",
    "createdAt": "2021-11-15T21:36:54.818Z",
    "updatedAt": "2021-11-15T21:36:54.818Z",
    "__v": 0
}, {
    "_id": "6192d2fa339dd0e07257dabd",
    "userName": "Vovaaaa",
    "firstName": "Vika",
    "lastName": "Hladka",
    "email": "vovaaaa8@gmail.com",
    "type": "driver",
    "createdAt": "2021-11-15T21:36:58.220Z",
    "updatedAt": "2021-11-15T21:36:58.220Z",
    "__v": 0
}, {
    "_id": "6192d2fc339dd0e07257dac1",
    "userName": "Vovaaaaa",
    "firstName": "Vika",
    "lastName": "Hladka",
    "email": "vovaaaaa8@gmail.com",
    "type": "driver",
    "createdAt": "2021-11-15T21:37:00.726Z",
    "updatedAt": "2021-11-15T21:37:00.726Z",
    "__v": 0
}]

export {
    regularEmail,
    regularPassword,
    selectOptions,
    userModel,
    users
}