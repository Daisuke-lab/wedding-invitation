export const convertDateToString = (datetime:Date) => {
      if (datetime === null || datetime === undefined) {
        return ""
      } else {
        const date = new Date(datetime)
        const months = addZeroToPrefix(`${date.getMonth() + 1}`)
        const days = addZeroToPrefix(`${date.getDate()}`)
        const hours = addZeroToPrefix(`${date.getHours()}`)
        const minutes = addZeroToPrefix(`${date.getMinutes()}`)
        const string_datetime = `${date.getFullYear()}/${months}/${days} ${hours}:${minutes}`
        return string_datetime
      }
      }

const addZeroToPrefix = (dateData:string) => {
    if (dateData.length == 1) {
        dateData = `0${dateData}`
    }
    return dateData
}