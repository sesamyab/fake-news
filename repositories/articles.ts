const articlesDb = require('../db/articles.json');

interface Pagination {
    offset?: number;
    limit?: number;
}

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 20;

export function findById(id: string): Article | null {
    return articlesDb.find((a: any) => a.slug === id || a.id === parseInt(id as string));
}

export function find(pagination?: Pagination): Article[] {
    const offset = pagination?.offset ?? DEFAULT_OFFSET;
    const limit = pagination?.limit ?? DEFAULT_LIMIT;

    // console.log(articlesDb.slice(offset, limit));

    return articlesDb.slice(offset, limit);
}
