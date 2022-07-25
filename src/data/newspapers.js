const newspaperList = [
  {
    newsNumber: 120,
    newsDate: new Date('2019-07-01'),
    newsUrl: '/news/120main.JPG'
  },
  {
    newsNumber: 121,
    newsDate: new Date('2019-09-01'),
    newsUrl: '/news/121main.JPG'
  },
  {
    newsNumber: 122,
    newsDate: new Date('2019-11-01'),
    newsUrl: '/news/122main.jpg'
  },
  {
    newsNumber: 123,
    newsDate: new Date('2020-01-01'),
    newsUrl: '/news/123main.JPG'
  },
  {
    newsNumber: 124,
    newsDate: new Date('2020-03-01'),
    newsUrl: '/news/124main.JPG'
  },
  {
    newsNumber: 125,
    newsDate: new Date('2020-05-15'),
    newsUrl: '/news/125main.JPG'
  },
  {
    newsNumber: 126,
    newsDate: new Date('2020-07-15'),
    newsUrl: '/news/126main.JPG'
  },
  {
    newsNumber: 127,
    newsDate: new Date('2020-10-05'),
    newsUrl: '/news/127main.jpg'
  },
  {
    newsNumber: 128,
    newsDate: new Date('2021-01-01'),
    newsUrl: '/news/128main.jpg'
  },
  {
    newsNumber: 129,
    newsDate: new Date('2021-03-08'),
    newsUrl: '/news/129main.JPG'
  },
  {
    newsNumber: 130,
    newsDate: new Date('2021-05-25'),
    newsUrl: '/news/130main.jpg'
  },
  {
    newsNumber: 131,
    newsDate: new Date('2021-08-19'),
    newsUrl: '/news/131main.JPG'
  },
  {
    newsNumber: 132,
    newsDate: new Date('2021-10-25'),
    newsUrl: '/news/132main.jpg'
  },
  {
    newsNumber: 133,
    newsDate: new Date('2022-01-01'),
    newsUrl: '/news/133main.jpg'
  },
  {
    newsNumber: 134,
    newsDate: new Date('2022-03-30'),
    newsUrl: '/news/134main.JPG'
  },
  {
    newsNumber: 135,
    newsDate: new Date('2022-06-10'),
    newsUrl: '/news/135main.jpg'
  }
]

const sortedNewsList = newspaperList.sort((a, b) => b.newsDate.getTime() - a.newsDate.getTime())

export default sortedNewsList
