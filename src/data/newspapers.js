const newspaperList = [
  {
    newsNumber: 120,
    newsDate: new Date('2019-07-01')
  },
  {
    newsNumber: 121,
    newsDate: new Date('2019-09-01')
  },
  {
    newsNumber: 122,
    newsDate: new Date('2019-11-01')
  },
  {
    newsNumber: 123,
    newsDate: new Date('2020-01-01')
  },
  {
    newsNumber: 124,
    newsDate: new Date('2020-03-01')
  },
  {
    newsNumber: 125,
    newsDate: new Date('2020-05-15')
  },
  {
    newsNumber: 126,
    newsDate: new Date('2020-07-15')
  },
  {
    newsNumber: 127,
    newsDate: new Date('2020-10-05')
  },
  {
    newsNumber: 128,
    newsDate: new Date('2021-01-01')
  },
  {
    newsNumber: 129,
    newsDate: new Date('2021-03-08')
  },
  {
    newsNumber: 130,
    newsDate: new Date('2021-05-25')
  },
  {
    newsNumber: 131,
    newsDate: new Date('2021-08-19')
  },
  {
    newsNumber: 132,
    newsDate: new Date('2021-10-25')
  },
  {
    newsNumber: 133,
    newsDate: new Date('2022-01-01')
  },
  {
    newsNumber: 134,
    newsDate: new Date('2022-03-30')
  },
  {
    newsNumber: 135,
    newsDate: new Date('2022-06-10')
  }
]

const sortedNewsList = newspaperList.sort((a, b) => b.newsDate.getTime() - a.newsDate.getTime())

export default sortedNewsList
