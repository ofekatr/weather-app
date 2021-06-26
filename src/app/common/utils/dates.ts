function extractShortDayNameFromDate(date: Date) {
    return date.toString().split(' ')[0];
}

export {
    extractShortDayNameFromDate,
}