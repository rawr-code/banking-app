export const formatDate = (date) => {
    if (Date.parse(date)) {
        const mainDate = new Date(date)

        const formatDate = `${mainDate.getDate()}.${mainDate.getMonth()}.${mainDate.getFullYear()} ${mainDate.getHours()}:${mainDate.getMinutes()}`

        return formatDate
    }

    return date
}
