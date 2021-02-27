export const urls = {
    FilmsFeed: '/',
    FilmCard: {
        url: '/film/:id',
        create: (id: number) => `/film/${id}`,
    }
};
