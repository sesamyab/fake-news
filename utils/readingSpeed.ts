const readingSpeed = (text: string, wordsPerMinute?: number): number => {
    const words = text.split(" ");
    const minutes = words.length /(wordsPerMinute || 200);
    return minutes;
}

export default readingSpeed;