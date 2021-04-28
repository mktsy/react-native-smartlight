const getConsumeAPI = async (path) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var requestOptions = {
        method: 'get',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("http://192.168.0.102:4000/api/" + path, requestOptions)
        .then(response => response.json())
        .then(result => { return result })
        .catch(error => console.log('error', error));
}
const postConsumeAPI = async (path, data) => {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify(data)

    var requestOptions = {
        method: 'post',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("http://192.168.0.102:4000/api/" + path, requestOptions)
        .then(response => response.json())
        .then(result => { return result })
        .catch(error => console.log('error', error))
}
const patchConsumeAPI = (path, data) => {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify(data)

    var requestOptions = {
        method: 'patch',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    return fetch("http://192.168.0.102:4000/api/" + path , requestOptions)
        .then(response => response.json())
        .then(result => { return result })
        .catch(error => console.log('error', error))
}

module.exports = { get: getConsumeAPI, post: postConsumeAPI, patch: patchConsumeAPI }