const createExcerpt = (content: string, excerptLength: number) => {
    const excerpt = content.split(' ').slice(0, excerptLength).join(' ');
    return excerpt;
};

export default createExcerpt;
