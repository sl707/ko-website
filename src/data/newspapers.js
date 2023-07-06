const newspaperList = [
  {
    newsNumber: 112,
    newsDate: new Date('2018-03-01'),
    newsImageType: 'jpeg',
    newsImage: '/news/112-1.jpeg'
  },
  {
    newsNumber: 113,
    newsDate: new Date('2018-05-01'),
    newsImageType: 'jpeg',
    newsImage: '/news/113-1.jpeg'
  },
  {
    newsNumber: 114,
    newsDate: new Date('2018-07-01'),
    newsImageType: 'jpeg',
    newsImage: '/news/114-1.jpeg'
  },
  {
    newsNumber: 115,
    newsDate: new Date('2018-09-01'),
    newsImageType: 'jpeg',
    newsImage: '/news/115-1.jpeg'
  },
  {
    newsNumber: 116,
    newsDate: new Date('2018-11-01'),
    newsImageType: 'jpeg',
    newsImage: '/news/116-1.jpeg'
  },
  {
    newsNumber: 117,
    newsDate: new Date('2019-01-01'),
    newsImageType: 'jpeg',
    newsImage: '/news/117-1.jpeg'
  },
  {
    newsNumber: 118,
    newsDate: new Date('2019-03-01'),
    newsImageType: 'jpeg',
    newsImage: '/news/118-1.jpeg'
  },
  {
    newsNumber: 119,
    newsDate: new Date('2019-05-01'),
    newsImageType: 'jpeg',
    newsImage: '/news/119-1.jpeg'
  },
  {
    newsNumber: 120,
    newsDate: new Date('2019-07-01'),
    newsImage: '/news/120main.JPG'
  },
  {
    newsNumber: 121,
    newsDate: new Date('2019-09-01'),
    newsImage: '/news/121main.JPG'
  },
  {
    newsNumber: 122,
    newsDate: new Date('2019-11-01'),
    newsImage: '/news/122main.jpg'
  },
  {
    newsNumber: 123,
    newsDate: new Date('2020-01-01'),
    newsImage: '/news/123main.JPG'
  },
  {
    newsNumber: 124,
    newsDate: new Date('2020-03-01'),
    newsImage: '/news/124main.JPG'
  },
  {
    newsNumber: 125,
    newsDate: new Date('2020-05-15'),
    newsImage: '/news/125main.JPG'
  },
  {
    newsNumber: 126,
    newsDate: new Date('2020-07-15'),
    newsImage: '/news/126main.JPG'
  },
  {
    newsNumber: 127,
    newsDate: new Date('2020-10-05'),
    newsImage: '/news/127main.jpg'
  },
  {
    newsNumber: 128,
    newsDate: new Date('2021-01-01'),
    newsImage: '/news/128main.jpg'
  },
  {
    newsNumber: 129,
    newsDate: new Date('2021-03-08'),
    newsImage: '/news/129main.JPG'
  },
  {
    newsNumber: 130,
    newsDate: new Date('2021-05-25'),
    newsImage: '/news/130main.jpg'
  },
  {
    newsNumber: 131,
    newsDate: new Date('2021-08-19'),
    newsImage: '/news/131main.JPG'
  },
  {
    newsNumber: 132,
    newsDate: new Date('2021-10-25'),
    newsImage: '/news/132main.jpg'
  },
  {
    newsNumber: 133,
    newsDate: new Date('2022-01-01'),
    newsImage: '/news/133main.jpg'
  },
  {
    newsNumber: 134,
    newsDate: new Date('2022-03-30'),
    newsImage: '/news/134main.JPG'
  },
  {
    newsNumber: 135,
    newsDate: new Date('2022-06-10'),
    newsImage: '/news/135main.jpg'
  },
  {
    newsNumber: 136,
    newsDate: new Date('2022-09-01'),
    newsImage: '/news/136-1.jpg'
  },
  {
    newsNumber: 137,
    newsDate: new Date('2022-11-01'),
    newsImage: '/news/137-1.jpg'
  },
  {
    newsNumber: 138,
    newsDate: new Date('2023-01-01'),
    newsImage: '/news/138-1.jpg'
  },
  {
    newsNumber: 139,
    newsDate: new Date('2023-04-19'),
    newsImage: '/news/139-1.jpg'
  },
  {
    newsNumber: 140,
    newsDate: new Date('2023-07-10'),
    newsImage: '/news/140-1.jpg'
  }
]

const sortedNewsList = newspaperList.sort((a, b) => b.newsDate.getTime() - a.newsDate.getTime())

export default sortedNewsList
