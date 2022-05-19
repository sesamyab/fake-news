const dateFormatter = (date:string) => {
    const formatted =  new Date(date).toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
        
    return formatted;
}

export default dateFormatter;