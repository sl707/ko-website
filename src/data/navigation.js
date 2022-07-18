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
    name: '종훈',
    url: '/jonghun/'
  },
  {
    name: '장학회/장학금',
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
    name: '9대 파조',
    url: '/pajo/'
  },
  {
    name: '연원',
    url: 'link25'
  },
  {
    name: '삼성혈',
    url: 'link26'
  },
  {
    name: '왕워전',
    url: 'link26'
  },
  {
    name: '항렬표',
    url: 'link27'
  },
  {
    name: '종기 해설',
    url: 'link28'
  },
  {
    name: '성시표기',
    url: 'link15'
  }
]

const memberSubmenu = [
  {
    name: '중앙회',
    url: 'link31'
  },
  {
    name: '지방',
    url: 'link33'
  },
  {
    name: '장학회',
    url: 'link35'
  }
]

const gallerySubmenu = [
  {
    name: '종회/이사회',
    url: 'link41'
  },
  {
    name: '큰행사',
    url: 'link42'
  },
  {
    name: '연수원',
    url: 'link43'
  },
  {
    name: '기타',
    url: 'link45'
  }
]

const navLinks = [
  {
    name: '중앙종문회',
    url: '/introduction/',
    submenu: centralSubmenu
  },
  {
    name: '역사',
    url: '/father/',
    submenu: historySubmenu
  },
  {
    name: '임원',
    url: 'link3',
    submenu: memberSubmenu
  },
  {
    name: '소식/자료실',
    url: 'link4',
    submenu: gallerySubmenu
  },
  {
    name: '종보',
    url: 'link5',
    submenu: []
  },
  {
    name: '알림',
    url: 'link6',
    submenu: []
  },
  {
    name: '연락/오시는 길',
    url: 'link7',
    submenu: []
  }
]

export default navLinks
