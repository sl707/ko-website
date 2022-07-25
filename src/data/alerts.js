const alertList = [

]

const sortedAlertList = alertList.sort((a, b) => b.date.getTime() - a.date.getTime())

export default sortedAlertList
