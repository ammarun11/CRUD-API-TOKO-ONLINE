const manipulate = (data) => {
    let firstname, all

    firstname = data.firstname
    all = data

    let result = {
        firstname,
        all
    }

    return result
}

const merge = function(data, input) {
    return data.concat(input)
}

const insert = (data, input) => {
    data.push(input)
}

module.exports = {
    manipulate,
    merge: merge,
    add: insert
}