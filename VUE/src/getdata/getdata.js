import axios from "axios";

var $http = axios.create({
    baseURL: 'https://www.vue-js.com/api/v1',
    timeout: 50000,
    headers: { 'X-Custom-Header': 'foobar' }
});

function getTopics(options) {
    var newOptions = Object.assign({
        tab: 'ask',
        limit: 10,
        page: 1
    }, options)
    return $http({
        url: '/topics',
        params: newOptions
    })
}

function getTopic(id) {
    return $http.get('/topic/' + id);
}

function getUser(loginname) {
    return $http.get('/user/' + loginname)
}

export { getTopics, getTopic, getUser }