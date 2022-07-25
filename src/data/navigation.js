const centralSubmenu = [
  {
    name: '회장 인사',
    url: '/introduction/'
  },
  {
    name: '발자취',
    url: '/baljachwi/'
  },
  {
    name: '회칙',
    url: '/regulations/'
  },
  {
    name: '종기해설',
    url: '/emblem/'
  },
  {
    name: '장학회 / 장학금',
    url: '/scholarship/'
  }
]

const historySubmenu = [
  {
    name: '시조 고을나왕',
    url: '/father/'
  },
  {
    name: '중시조 고말로',
    url: '/midfather/'
  },
  {
    name: '개국설화',
    url: '/openingstory/'
  },
  {
    name: '유래',
    url: '/origin/'
  },
  {
    name: '9대 분파조',
    url: '/pajo/'
  },
  {
    name: '탐라국의 연원',
    url: '/yeonwon/'
  },
  {
    name: '삼성혈',
    url: '/samseonghyeol/'
  },
  {
    name: '왕워전',
    url: '/wangwijeon/'
  },
  {
    name: '성시표기',
    url: '/character/'
  },
  {
    name: '종훈',
    url: '/jonghun/'
  },
  {
    name: '대동항렬표',
    url: '/nameorder/'
  }
]

const memberSubmenu = [
  {
    name: '중앙종문회',
    url: '/centralmembers/'
  },
  {
    name: '중앙종문장학회',
    url: '/scholarshipmembers/'
  },
  {
    name: '지방종문회',
    url: '/provincemembers/'
  }
]

const gallerySubmenu = [
  {
    name: '총회 / 이사회',
    url: '/gathering/'
  },
  {
    name: '제향',
    url: '/jehyang/'
  },
  {
    name: '연수원',
    url: '/institute/'
  },
  {
    name: '기타',
    url: '/otherevents/'
  }
]

const navLinks = [
  {
    name: '중앙종문회',
    url: '/introduction/',
    submenu: centralSubmenu
  },
  {
    name: '고씨역사',
    url: '/father/',
    submenu: historySubmenu
  },
  {
    name: '임 원',
    url: '/centralmembers/',
    submenu: memberSubmenu
  },
  {
    name: '소식 / 자료실',
    url: '/gathering/',
    submenu: gallerySubmenu
  },
  {
    name: '종 보',
    url: '/newspaper/',
    submenu: []
  },
  {
    name: '공지사항',
    url: '/alert/',
    submenu: []
  },
  {
    name: '오시는 길',
    url: '/contact/',
    submenu: []
  }
]

export default navLinks
