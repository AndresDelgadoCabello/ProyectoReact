const simuladorFetch = (dataBase, time) => {
    return new Promise((resolve, rejact) => {
        setTimeout(() => {
            resolve(dataBase);
            rejact(new Error("sucedio un problema"))
        }, time)
    })
}

export default simuladorFetch;