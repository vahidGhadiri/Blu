export function convertGregorianToPersian(date: string) {
    const day = new Date(date).getDay()
    const persianDay = ['دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه', 'یکشنبه'][day - 1]
    const persianDate = new Date(date).toLocaleDateString('fa-IR')
    return `${persianDay} ${persianDate}`
}


export function convertEnglishNumberToPersian(value: number): string {
    let result = ""
    let persianNumber = {
        0: "۰", 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "", 9: ""
    }

    let temp = value.toString().split("")

    for (let i = 0; i < temp.length; i++) {
        // @ts-ignore
        temp[i] = persianNumber[temp[i]];
    }

    for (let i = 0; i < temp.length; i++) {
        result += temp[i]
    }

    return result
}


export function convertNumberToCashFormat(value: number) {
    return new Intl.NumberFormat('fa-IR').format(value)
}

