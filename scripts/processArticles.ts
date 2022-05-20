import slugify from 'slugify';
import fs from 'fs';
import path from 'path';

const defaultPrice = 20;
const defaultCurrency = 'SEK';
(() => {
    const articles = require('../pages/db/scrappedArticles.json');
    const prices = require('../pages/db/prices.json');
    const allArticles = articles.map((a: any, i: number) => {
        const id = i + 1; // Adding an auto-incremental id enough for this demo
        a.id = id;
        const price = prices.find((price: any) => price.articleId === id);
        if (price !== undefined) {
            a.price = price.amount;
            a.currency = price.currency;
        } else {
            a.price = defaultPrice;
            a.currency = defaultCurrency;
        }
        a.slug = slugify(a.title);
        return a;
    });
    fs.writeFileSync(
        path.resolve(__dirname, '../pages/db/articles.json'),
        JSON.stringify(allArticles)
    );
})();
console.log('done');
