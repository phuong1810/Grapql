const resolvers = {
    Query: {
        books: () => [
            {
                id: 1,
                name: 'De men phieu luu ky',
                genre: 'Adventure'
            },
            {
                id: 2,
                name: 'Tat Den',
                genre: 'Education'
            }
        ],
        authors: () => [
            {
                id:1,
                name: 'Vu Trong Phung',
                age: 18
            },
            {
                id:2,
                name: 'Vu Trong Phung 2',
                age: 28
            }
        ],
        albumList:() => [
            {
                id: 1,
                name: 'Album 01',
                thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/3/5/a/d/35ad281a468d21a2d0ad5a8d96c62f23.jpg'
            },
            {
                id: 2,
                name: 'Album 02',
                thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/b/0/c/3/b0c3bc16ca25baed31d8e905ddaf8a1f.jpg'
            },
            {
                id: 3,
                name: 'Album 03',
                thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/9/1/3/4/913455bd592bc4b44d55ed165dbbf06f.jpg'
            },
            {
                id: 4,
                name: 'Album 04',
                thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/6/2/8/4/62846a767a65588f0324fa06069c97b0.jpg'
            },
            {
                id: 5,
                name: 'Album 05',
                thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/1/5/6/c/156c8abddc5952a112c02d8d5f2a82f6.jpg'
            }
        ]
    }
};

export {resolvers}