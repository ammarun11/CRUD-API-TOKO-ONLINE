const ascending_sort = (data) => {
    return data.sort()
}

const descending_sort = (data) => {
    let sorting = ascending_sort(data)

    return sorting.reverse()
}

module.exports = {
    ascending_sort,
    descending_sort
}