const numberFormatter = (number: number, decimals: number = 2): string => {
    const formatter = new Intl.NumberFormat('sv-SE', {
        maximumFractionDigits: decimals
    });
    return formatter.format(number);
}

export default numberFormatter;