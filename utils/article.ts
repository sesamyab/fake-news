// Hardcoded articles in different states to test the different scenarios

export const hasPublicContent = (id: number) => id > 15;
export const hasPass = (id: number) => !hasPublicContent(id) && id % 2 === 0;
export const hasServerSideContent = (id: number) => !hasPublicContent(id) && id % 3 === 0;
export const showExcerpt = (id: number) => id % 4 === 0;
