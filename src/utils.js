export const dateFormat = (date) => {
    const formatter = new Intl.DateTimeFormat('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    })

    return formatter.format(date).replace(',', '')
}

export const randomColor = () => {
    return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
}

export const randomNumber = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
}

export const saveToLocalStorage = (key, data) => {
    const oldData = getFromLocalStorage(key)

    if (oldData) {
        const newData = [...oldData, data]
        localStorage.setItem(key, JSON.stringify(newData))
    } else {
        localStorage.setItem(key, JSON.stringify([data]))
    }
}

export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
}
