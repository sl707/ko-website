const unsortedPostList = [
  {
    title: '제47회 군산시 정기총회',
    text: ('고재갑 중앙종문회장 · 고재유 전 광주광역시장 · 고재규 전사관(중앙종문회 부회장) · 고문구 초헌관(중안종문회 이사) · 고달석 아헌관(중앙조운회 이사) · 종헌관 고삼식(중앙종문회 이사) · 숭모사 고영곤 총무이사 · 고형곤 재무이사 · 고병채 수석부회장 · 고영근 감사 · 고하영 감사 · 고동영 이사 · 군상종문회 고선풍 회장 · 고봉희 재무 · 고찬영 임피회장 · 고창종문회 고황규 회장(중앙종문회 부회장) · 고광헌 도산사 대종회 전직회장 · 고양규 화수회장 · 고용진 재무 · 음성종문회 고제해 회장 · 고재철 감사 · 광산종문회 고봉석 수석부회장(중앙종문회 이사) · 고병선 출렬공 총무 · 광주·전남종문회 고윤근 수석부회장 · 고창옥 부회장 · 고행석 재무 · 울산종문회 고성용 전회장(중앙종문회 이사) · 고태진 사무국장 · 고태일 훈정공회장 · 고영택 천정공회장 · 익산종문회 고금만 회장 · 고용만 총무 고홍곤 사무국장 · 부산종문회 고영철 회장(중앙종문회 이사) · 고재경 사무처장 · 고환규 전주회장 · 중앙종문회 고재훈 총무국장, 고영기 업무국장'),
    date: new Date('2020-05-08'),
    image: '/총회47.jpg',
    type: '총회/이사회',
    postId: 1
  },
  {
    title: '제48회 광주광역시 정기총회',
    text: '◆외빈 : 김병내 광주남구청장 · 임미란 광주시의원 · 윤영덕 국회의원(이준연 수석부위원장) · 김화중 전 보건복지부장관\n' +

    '◆중앙종문회 : 고재갑 회장 · 고재유 전 광주광역시장 · 고현석 전 곡성군수 · 고길호 전 신 안군수 · 고황규 중앙부회장 · 고영철·고재청·고봉석·고일갑 중앙이사\n' +

    '◆광주전남종문회 : 고달석 회장 · 고정주 전 회장 · 고윤근 수석부회장 · 고춘석 삼영산업 회 장 · 고재수 도유사 · 고재춘 춘추회장 · 고광종 탐라회장 · 고운석 전회장 · 고재형 탐라회 총무 · 고영붕 청장년회장 · 고만주 부호히장 · 고영우 총무 · 고행석 재무 · 고명균 점 탐라 회장 · 고형석 광산재무 · 고광수 목포회장 · 고광준 담양회장 · 고구주 곡성회장 · 고규동 총무 · 고재무 화순회장 · 고연호 총무 · 고연두 장흥부회장 · 고영천 전회장 · 고현익 영암 회장 · 고인철 총무 · 고영길 무안함평회장 · 고병주 장성회장 · 고재진 총무 · 고영휘 신안 총무 · 고창옥 지도위원 · 고해주 전 시청회장 · 고영창 의열공도유사 · 고영민 해사공도유사 · 고행주 청량두방도유사 · 고병선 충렬공 총무 · 고현종 전 사무총장 · 고영창 전 총무 · 고 규형 탐라회 재무 · 고영윤 감사 · 고동석 감사 · 고장석 충렬공도유사 · 고병돈 광복회장 · 고윤석 전 탐라회장 · 고광헌 전 도산사회장 · 고용진 고창 재무···',
    date: new Date('2021-03-23'),
    image: '/총회48.jpg',
    type: '총회/이사회',
    postId: 2
  },
  {
    title: '제49회 문경시 정기총회',
    text: '◆중앙종문회장 : 고재갑 회장 · 고재규 부회장(양양한상종문회장) · 고성근 부회장 · 고문구 부회장(울산종문회장) · 고달석 부회장(광주전남종문회장) · 이사 고연규(대전회장) · 이사 고 재청 · 이사 고삼식(음성총무) · 이사 고성용(전 울산회장) · 이사 고준길 · 이사 고만진 ·\n' +

    '이사 고영철 · 고영기 국장\n' +

    '울산종문회 : 부회장 고태일 · 부회장 고영택 · 이사 고두승\n' +

    '부산종문회 : 회장 고영우 · 이사 고일환 · 사무처장 고재경\n' +

    '광주전남종문회 : 총무 고영우 · 재무 고행석 · 임원 고해주\n' +

    '대전종문회 : 총무 고성운 · 임원 고학선\n' +

    '대구종문회 : 회장 고덕환 · 총무 고성일\n' +

    '양양한상종문회 : 총무 고재환 ·이사 고현승\n' +

    '◆문경종친회 : 회장 고규환(중앙장학회 명예이사장) , 명예회장 고진태 ,\n' +

    '고문 : 고운환 · 고시탁 · 고병환 · 고영조 , 수석부회장 고정환 ,\n' +

    '부회장 : 고성기 · 고유환 · 고일진 · 고재복 , 감사 : 고봉환 · 고성주 , 사무국장 : 고국환 ,\n' +

    '문경시장 고윤환 · 경상북도의회의장 고우현 · 이사 고재석 · 고재운 · 고육환 · 고병천 · 고 재선 · 고명원 · 고 환 · 고명환 · 고학림 · 고시수 · 고준식 · 고두환 · 고종현 · 청년회장 고재형 · 총무 고경완 · 임원 고상범 ·고현환 · 고란회장 고순애 · 총무 고경남 · 사현회장 고 세창 총무 고복환 · 임원 고재흠 · 영란회장 한계남 · 총무 김명숙 · 고재동 농협지부장 · 고 성환 문경관광재단 사무국장 · 박춘남 문경시의원\n',
    date: new Date('2022-03-23'),
    image: '/총회49.jpg',
    type: '총회/이사회',
    postId: 3
  },
  {
    title: '중앙연수원 부지 기증식',
    text: '고씨중앙종문회 중안연수원 부지 기증식이 2021년 8월30일(월) 11:00 전남 장흥군 장흥읍 평화리 89번지 무계 고영완(제2대 및 5대 국회의원) 국회의원 고택에서 거행하였다.\n' +

    '장흥고씨무계종중 고병선 대표는 고씨중앙종문회 고재갑 회장에게 토지기증서를 전달하였다.(기증서)\n' +

    '장흥읍 평화리 12-1 일원 1300여평의 토지에 「고씨중앙연수원」을 건립하게 된다.\n' +

    '이 토지는 약 10억원대로 평가되며 중안종문회에서는 특별위원회를 조직하여 연수원 건립 업무를 담당하게 할 계획이다.\n' +

    '이날 기증식에는 코로나19 관계로 고재갑 중앙종문회장과 고재유 전 광역시장, 고달석 광주전남종문회등과 무계종중 고병선 대표, 고홍천 고씨장흥종문회장, 고영천 장흥문화원장 등 최소 인원만 참석하였다.\n' +

    '기증식을 마치고 고병돈 광복유족회장 초청으로 장흥읍 진송관광호텔2층 「유희의 반상」에서 점심을 함께하며 중앙연수원 건립 추진 방향 등에 관하여 진지하게 토론을 하였다.',
    date: new Date('2021-08-30'),
    image: '/장흥연수원기증.jpg',
    type: '연수원',
    postId: 4
  },
  {
    title: '장흥 연수원 토지 기증서',
    text: '',
    date: new Date('2021-08-30'),
    image: '/장흥연수원기증서.jpg',
    type: '연수원',
    postId: 5
  },
  {
    title: '중앙연수원 토지 일부 등기완료',
    text: '장흥고씨무계종중회(대표 고병선)에서는 고씨중앙종문회 중앙연수원 건립을 위하여 전남 장흥군 장흥읍 평화리 12-1 일원의 토지를 약 1300여평을 기증하기로 하고 기증서를 2021년 8월30일 전달하엿으며, 이에 따라 중앙종문회에서는 후속 조치를 진행하고 있다.\n' +

    '그일환으로 우선 지목이 대지로 되어 있어 소유권 이전이 가능한 장흥군 장흥읍 평화리 36-6 500㎡를 2021년 12월17일 고씨중앙종문회로 소유권을 이전하고 등기 완료 하였다. (등기필정보 및 등기완료 통지서 참조)\n' +

    '나머지 토지는 설계절차와 지목 변경 등 행정절차를 마치면 즉시 소유권을 이전할 계획이다.',
    date: new Date('2021-12-17'),
    image: '/장흥연수원통지서.jpg',
    type: '연수원',
    postId: 6
  },
  {
    title: '제18회 탐라국 종묘대제 봉향',
    text: '◇종묘 대제 후 이사장, 헌관, 도의원 기념촬영\n' +

    '고씨종문회총본부 및 재단법인 탐라 종묘문화재단(이사장 고석근)에서는 지난 4월9일 탐라원 종묘에서 탐라국 45대 왕위와 열성주에 태한 탐라기원 4359주년 탐라국종묘대제를 코로나19로 인한 사회적 거리두기를 감안하여 일반도민 등의 참여를 자제하였음에도 도내 종친 200여명 참석, 검소하면서도 성황리에 개최 되었음.\n' +

    '특히 6.1 지방선거를 즈음하여 고용호(총본부 이사) 도의원을 비롯한 고댁도의원 전원과 고기철 제주특별자치도 경찰청장과 고재권 수사과장을 비롯한 종친 및 임원 등이 참례한 가운데 왕위전 초헌관 고충홍(총본부 부회장, 전 제주특별자치도의회 의장), 아헌관 고대익(총본부 부회장), 종헌관 고정화(총본주 이사)와 성주전 초헌관 고동희(총본부 부회장), 아헌관 고봉규(총본부 부회장, 전 제주틀별자치도 건축사회 회장), 종헌과 고윤권(총본부 상임이사), 전사관 고성칠(총본부 상임부회장), 집례 고경화(총본부 부회장)로 하여금 엄숙히 봉행하였음.',
    date: new Date('2022-04-09'),
    image: '/제18회탐라국.jpg',
    type: '제향',
    postId: 7
  },
  {
    title: '제47차 군산시 숭모사 대제전',
    text: '◇제47차 숭모사 대제를 마치고(2022.5.5.)가념 촬영한 고씨 지도자들.\n' +

    '고씨숭모사 유지회(회장 고재갑 중앙종문회장, 총무이사 고영곤, 재무이사 고형곤, 감사 고하영·고영근)에서는 2022년 5월 5일 11:00 제47차 숭모사 대제전을 성대하고 경건하게 거행하였다.\n' +

    '고영곤 숭모사 유지회 재무이사의 집례와 고하영 감사의 찬인으로 제1부와 제2부로 나누어 식순에 따라 진행하였다.\n' +

    '고씨군산종문회장 고선풍 박사의 종훈낭독, 고재갑 중앙종문회장의 인사말씀에 이어서 고영환 고창경찰서장과 고종용 울산광역시 향교 전교가 축사를 하였다.\n' +

    '이어서 고재갑 회장이 재관을 소개하였다.\n' +

    '전사관 고문구, 초헌관 고달석, 아헌관 고성근, 종헌관 고영우 박사를 차례로 소개하고 헌관들의 간단한 인사 말씀을 들었다.\n' +

    '제2부 제례를 마친 다음 기념촬영을 하였으며 이어서 숭모사 마당의 잔디밭에서 참석자 전원이 함께 식사를 하며 친목과 단합으로 행사를 마무리 하였다.\n' +

    '참석자 전원에게 고재갑 회장과 고문구 전사관이 기념타올로, 고달석 광주전남종문회장이 「제봉의 사상과 구국정신」 각1권을 기증하였다.',
    date: new Date('2022-05-05'),
    image: '/제47차군산숭모사.jpg',
    type: '제향',
    postId: 8
  },
  {
    title: '장흥백 파조 대제',
    text: '◇고씨장흥백파 파조 양헌공 대제\n' +

    '고씨양주장흥종문회(회장 고두석)에서는 장흥백파조(양현공) 대제를 2021년11월14일 경기도 양주시 장흥면 삼상리 선영에서 코로나19 관계로 30여명의종문들이 참석하여 간소하게 거행하였다.\n' +

    '초헌관 고광석, 아헌관 고명수, 종헌관 고춘남.',
    date: new Date('2021-11-14'),
    image: '/장흥백파조.jpg',
    type: '제향',
    postId: 9
  },
  {
    title: '문경공 고조기 묘 성묘례',
    text: '◇문경공 고조기 묘 성묘례 모습\n' +

    '(재)탐라종묘문화재단(이사장 고석근)에서는 지난 9월 5일 탐라국 시조 고을나대왕을 비롯한역대 탐라국왕 45신위전과 역대 탐라성주 17신위전에 분향례를 겸하여 문경공 고조기 묘( 文敬公 髙兆基 墓) 성묘례 행사를 거행하였다.\n' +

    '이날 행사에는 코로나로 인하여 후손 15여명이 참여한 가운데 성묘를 하고 분향, 차례순서로 진행되었는데 문경공(文敬公)은 고려초 문신으로 중서시랑평장사(中書侍郞平章事)의 높은 벼슬(지금의 국무총리 격)을 지내신 재상으로 제주특별자치도 지정 문화재 기념물 제38호로 지정되어 보존관리되고 있다.',
    date: new Date('2021-09-05'),
    image: '/문경공.jpg',
    type: '제향',
    postId: 10
  },
  {
    title: '고씨장흥백파대종회 이사회',
    text: '고씨장흥백파대종회(회장 고황규) 이사회에 참석한 고씨 지도자들\n' +

    '(2022년 6월 28일 전남 장성군 도산사)\n' +

    '고재갑 중앙종문회장. 고황규 대종회장. 고태영 장흥백파제주회장. 고정주 전 광주전남회장. 고준길 장흥백파대구회장. 고재흠 전 전주종문회장. 고환규 전주종문회장. 고창옥 광주전남부회장',
    date: new Date('2022-06-28'),
    image: '/도산사이사회.jpeg',
    type: '기타',
    postId: 11
  },
  {
    title: '제봉 고경명 선생 학술대회',
    text: '고씨광주전남종문회(회장 고달석)에서는 2022년 8월 15일 광주시 남구 광주정 음식점에서 제봉 고경명 선생 학술대회(2022년 10월 18일) 준비 임원회의를 개최하였다\n' +

    '고재갑 중앙종문회장, 고재유 전 광주시장, 고달석 회장, 고춘석 삼영산업 회장, 고윤근 수석 부회장, 고광종 탐라회장, 고봉석 이사, 고해주 전 광주시청 회장, 고영창 전 광주 총무, 고재윤 전 광주 총무, 고길호 청장년 회장, 고병선 제봉종중 총무, 고영우 총무, 고행석 재무 등이 참석 하였다',
    date: new Date('2022-08-15'),
    image: '/제봉고경명선생학술대회.jpeg',
    type: '기타',
    postId: 12
  },
  {
    postTitleList: ['고창종문회 제42차 총회', '고황규 회장 취임식'],
    title: '고창종문회 제42차 총회 겸 고황규 회장 취임식',
    text: '고씨고창종문회(회장 고황규)에서는 제45차 정기총회 겸 제22대 고황규 회장 취임식을 2023년 1윌 31(화)11시 고창읍 목화웨딩홀에서 50여명이 참석한 가운데 성대하게 개최 하였다 \n' +
    '이날 총회에서는 고황규 고창종문회장이 인사말씀을 하였고, 고재갑 중앙종문회장이 격려사를 하였으며, 고영완 고창경찰서장과 고달석 광주전남종문회장 등이 축사를 하였다',
    date: new Date('2023-01-31'),
    image: '/고창종문회42.jpeg',
    type: '총회/이사회',
    postId: 13
  },
  {
    postTitleList: ['광주전남종문회 총회', '신년하례회', '회장 이취임식'],
    title: '2023년도 광주전남종문회 정기총회 / 신년하례회 / 회장 이취임식',
    text: '고씨광주전남종문회에서는 2023년도 정기총회와 신년하례회 겸 회장 이․취임식을 2023년 2월 16일(목) 11:00 광주광역시 김대중센터 델리하우스에서 100여명이 참석한 가운데 성대하게 개최하였다. \n' +
    '이날 제33대~제34대 고달석 회장이 이임하고, 제35대 고윤근 회장이 취임하였다. \n' +
    '고재갑 고씨중앙종문회장은 고병일 광주은행장에게 취임 축하패를 전달하였다. \n' +
    '(사진 - 고재갑 중앙종문회장, 고재유 전 광주광역시장, 고병일 광주은행장, 고길호 전 신안군수, 임미란 광주광역시의회 행정자치 위원장, 고창옥 박사, 천정배 6선 국회의원, 고달석 회장, 고윤근 신임회장, 고황규 장흥백파회장, 고홍천 장흥회장)', 
    date: new Date('2023-02-16'),
    image: '/광주종문회.jpg',
    type: '총회/이사회',
    postId: 14
  },
  {
    title: '고씨대구종문회 정기총회',
    text: '고성일 총무 사회로 종문 30여명이 참석한 가운데 총회 개최 \n' +
    '고덕환 회장님 인사와 고준길 고문님 격려사 말씀 \n' +
    '지난 3월23일 대전뿌리공원에서 개최한 중앙종문회. 군산종묘 참석 경과 보고에 이어 대구종문회장 고덕환 중앙종문 이사 추대 보고등 진지하면서 화기애애한 분위기에서 총회를 개최하였음.',
    date: new Date('2023-05-20'),
    image: '/고씨대구종문회.jpeg',
    type: '총회/이사회',
    postId: 15
  },
  {
    title: '중국고씨종문회 총회',
    text: '길림성 연길시 해란강민속궁-중국 고씨종문회 총회 \n' +
    '고씨중국종문회(회장 고성학 연길고대성병원 이사장)는 2023년 총회를 2023년 6월 17일 고재갑 중앙종문회장 방문에 맞추어 개최하였다. \n' +
    '고석 중국 길림성변호사협회 부회장(고씨연변종문 회장)의 사회로 고승룡 박사의 종훈 낭독에 이어서 고성화 회장의 환영사와 고재갑 중앙종문회장이 격려사를 하였다. \n' +
    '중국종문회에서는 고재갑 중앙종문회장의 중국 방문을 환영하는 현수막을 걸고 대대적으로 환영하였으며, 중국 고씨 일가를 대표하여 연변종문회 고영란 회계가 고재갑 중앙종문회장에게 「환영 꽃다발」을 전달하였다. \n' +
    '고재갑 회장은 길림성변호사협회 부회장으로 당선된 고석 변호사에게 「당선 축하패」 를 전달하였다. \n' +
    '코로나 관계로 4년 만에 대면 회의에 참석한 종문들은 친목 단합을 다짐하여 축제같은 분위기로 회의를 마무리하였다. \n' +
    '\n' +
    '주요 참석자들은 다음과 같다. \n' +
    '고재갑   중앙종문회장 \n' +
    '고성화   중국종문회장 \n' +
    '고재학   전 중국회장 \n' +
    '고영도   전 화룡시장 \n' +
    '고원철 연변축구협회장, 고백룡 고문, 고경웅 고문, 고경수 전 연변대 교수, 고복순 훈춘종문회장, 고승룡 박사 (연변대 교수) \n' +
    '고병문   박사 (연변대 교수) \n' +
    '고   석   변호사 (길림성 변호사회 부회장) \n' +
    '고광훈   변호사 \n' +
    '고명국   의사 \n' +
    '고미화   연변대 의대 교수 \n' +
    '고충렬   부회장 \n' +
    '고진우   연변방송국 주임 \n' +
    '고순희   사장 \n' +
    '고영란 회계, 고청화 재무, 고명운 종문, 고승국 종문, 고창석 종문 (무순)',
    date: new Date('2023-06-17'),
    image: '/중국종문회.jpeg',
    type: '총회/이사회',
    postId: 16
  },
  {
    postTitleList: ['군산종문회', '숭모사', '염의서원 대표자 회의'],
    title: '군산종문회 . 숭모사 . 염의서원 대표자 회의',
    text: '2023년 11월 9일(목) 11:00 군산시 어시장 음식점에서 중앙종문회와 군산종문회 및 숭모사유지회, 염의서원 대표자들이 긴급 모임을 갖고 숭모사유지회의 발전을 위하여 전국적인 규모로 조직을 확대 개편하고 2024년 제49차「숭모사 대제전」을 성대하게 개최하기 위하여 기획 단계에서부터 철저한 준비에 만전을 기하기로 의견을 모았다. \n\n' +
    '이날 참석자는 다음과 같다. \n' +
    '고 재 갑   중앙종문회장  \n' +
    '고 영 곤   숭모사유지회 총무이사 겸 중앙종문회 부회장 \n' +
    '고 선 풍   군산종문회 회장 겸 중앙종문회 부회장 \n' +
    '고 봉 희   염의서원 원장 ․ 중앙종문회 이사 \n' +
    '고 하 영   숭모사유지회 감사 ․ 중앙종문회 이사 \n' +
    '고 형 권   숭모사유지회 재무이사 ․ 중앙종문회 이사',
    date: new Date('2023-11-09'),
    image: '/군산종문회.jpeg',
    type: '기타',
    postId: 17
  },
  {
    title: '제주고씨 문충공파 휘 상렴종중 시제 및 총회',
    text: '◈ 2023년 11월 18일 문충공파 상렴종중 시제 - 충남 금산군 부리면 창평리 101 영모제 \n\n' +
    '충남 금산군 고씨문충공파 휘 상렴종중(회장 고광찬)은 2023년 11월 18일(토) 11:00 충남 금산군 부리면 창평리 101번지 영모제에서 전국 여러 지역에서 50여명의 종문들이 참석한 가운데 상렴종중 시제를 봉행 하였다. \n'+
    '제1부 총회는 고재중 전회장의 개회사 겸 종훈낭독, 고광찬 상렴종중회장 인사, 고권기 금산종문회장 인사, 고광우 고문 인사에 이어서 고재중 전 회장이 고재갑 중앙종문회장을 소개하고 계속해서 고재갑 중앙종문회장이 격려사를 하였다. \n' +
    '이어서 참석자 전원이 영모제 입구에서 기념촬영을 하였으며 사업 및 예산, 결산 등 회무 처리를 하였다. \n' +
    '참석자들은 영모제 제실에서 오찬을 함께 하였으며 그 명단은 다음과 같다. \n' +
    '고재갑 중앙종문회장. 고삼식 고씨상당군파중앙종문회장. 고재중 중앙종문부회장. 고광찬 상렴종중회장. 고광우 고문. 고권기 금산종문회장. 고영완 총무. 고광국 종문. 고현승. 고현철. 고영철. 고기용. 고현기. 고재철. 고재남. 고광수. 고재건. 고광복. 고현웅. 고봉현. 고보현. 고계현 고명현 고영. 고영관. 고영각. 고영훈 종문 등이다.',
    date: new Date('2023-11-18'),
    image: '/문충공파.jpeg',
    type: '기타',
    postId: 18
  },
  {
    title: '제25대 회장 고재갑 박사 추대',
    text: '고씨중앙종문회와 재단법인 고씨중앙종문장학회(이사장 고재갑)는 2024년 1월 3일(수) 11:00 고씨중앙종문회관 에서 제204회 이사회를 열고 제25대 중앙종문회장으로 현재 회장인 고재갑 박사를 만장일치로 추대하였다. \n' +
    '제25대 회장추대위원회 고재규 위원장은 고재갑 회장이 제24대 회장으로 취임한 후 코로나19 팬데믹 등 여러가지 어려운 환경에서도 고씨 가문의 화합과 발전은 물론 해외 종문회 조직까지 확대 하는 등 성과를 거두고 있어 2023년 9월부터 임원 90% 이상이 고재갑 회장의 유임을 원하는 추천서를 제출하였다는 설명을 하였고, 참석자 전원이 만장일치로 고재갑 회장을 제25대 회장으로 추대하였다. \n' +
    '이날 이사회는 고재청 이사의 사회로 개최하여 고삼식 부회장이 종훈낭독을 하였다. \n' +
    '이어서 참석자 소개와 고재갑 회장 인사, 고재규 회장추대위원장 인사, 안건토의 등의 순서로 진행하였다. \n\n' +
    '◈ 회칙 제9조 3항 개정 \n' +
    '제204회 이사회 에서는 회칙 제9조 임원의 정수를 이사 50명 내외에서 이사 90명 내외로 크게 늘렸으며 이사 중 7명 내외의 상임이사를 두기로 하는 등 회칙 제9조 3항을 개정하였다. \n' +
    '제51회 정기총회는 매년 3월 하순에 개최하였는데 2024년에는 4월 10일이 국회의원 총선거일임으로 2월 하순에 우리나라 교통의 중심지역이고 제50회 정기총회를 개최하여 많은 호응을 얻었던 대전 뿌리공원에서 신년하례회를 겸하여 간소하게 개최하기로 하였다. \n' +
    '회의를 마치고 참석자 전원이 하기애애한 분위기에서 점심을 함께하고 이사회를 마무리 하였다.',
    date: new Date('2024-01-03'),
    image: '/회장추임.jpeg',
    type: '총회/이사회',
    postId: 19
  },
  {
    title: '고씨중앙종문회 제51회 정기총회',
    text: `고씨중앙종문회와 재단법인 고씨중앙종문장학회(회장 고재갑 박사)는 2024년 2월 28일(수) 11:00 대전광역시 뿌리공원에서 제51회 정기총회와 2024년 신년하례회를 전국 50여 지역에서 200여명의 고씨 지도자들이 참석하여 개최하였다.\n
고재청 이사의 사회로 고갑수 부회장의 개회선언, 고재중 부회장의 종훈낭독에 이어서 고선풍 부회장이 내빈을 소개하였다.\n
고재갑 중앙종문회장의 인사, 고성근 대회준비위원장의 환영사, 고재유 전 광주광역시장이 격려사를 하였다.\n
축사는 고정언 제주 총본부회장과 고진국 화전군파중앙회장, 고태일 울산종문회장이 종파 대표와 지방종문회 대표로 하였으며, 고재규 부회장이 「제25대 회장추대위원장」 으로서 제25대 회장 추대 결과를 보고하였다.\n
고삼식 부회장의 폐회선언으로 회의를 마무리 하였다.`,
    date: new Date('2024-02-28'),
    image: '/정기총회51.jpeg',
    type: '총회/이사회',
    postId: 20
  },
  {
    title: '제20회 탐라국 종묘대제 봉향',
    text: `2024년 4월 9일(화) 11:00 제20회 탐라국 종묘대제를 500여명의 후손들이 참석하여 봉향 하였다.\n
식전 행사로 고재갑 중앙종문회장과 고정언 제주 총본부 회장이 헌화와 타북을 하였고 고정언 회장이 고사, 고재갑 회장이 봉축사를 하였다.\n
이어서 고동희 전사관과 왕위전과 성주전의 3헌관이 홀기에 따라 모든 순서를 진행 하였다.`,
    date: new Date('2024-04-09'),
    image: '/탐라국20.jpeg',
    type: '제향',
    postId: 21
  },
  {
    title: '중국 고씨 도문시종문회 정기총회',
    text: `2024년 4월 21일 11:00 중국 길림성 연변조선족자치주 도문시 생태원에서 고씨도문시종문회(회장 고미화) 2024년 정기총회를 개최 하였다.\n
고재갑 고씨중앙종문회장과 중국 고씨종문회 고성학 회장, 연변대 교수 고승범 박사 등이 참석 하였다.`,
    date: new Date('2024-04-21'),
    image: '/중국2024.jpeg',
    type: '총회/이사회',
    postId: 22
  },
  {
    title: '제49차 군산시 숭모사 대제전',
    text: `숭모사유지회(회장 고재갑 고씨중앙종문회장)는 2024년도 제49차 숭모사 대제전을 2024년 5월 5일 11:00 숭모사에서 전국 여러 지역에서 100여명의 지도자들이 참석하여 성대하고 경건하게 거행하였다.\n
헌관 명단은 다음과 같다.\n
전사관 고선풍, 초헌관 고삼식, 아헌관 고정석, 종헌관 고준길\n
(집예 고형곤, 찬인 고하영)`,
    date: new Date('2024-05-05'),
    image: '/숭모사49-1.jpeg',
    imageTwo: '/숭모사49-2.jpeg',
    type: '제향',
    postId: 23
  },
  {
    title: '고재갑 중앙종문회장 영암종문회 예방',
    text: `고재갑 고씨중앙종문회장은 2024년 5월 20일 11시 전남 영암종문회(회장 고현익)를 예방 하였다.\n
고화자 영암군의회 부의장실에서 고천수 군의원, 고현익 영암종문회장, 고재청 중앙이사, 고병돈 중앙이사 등과 함께 간담회를 열었다.\n
이날 고현익 영암회장을 중앙종문이사로 추대하였고 고화자 부의장과 고천수 의원을 지도위원으로 추대하였다.`,
    date: new Date('2024-05-20'),
    image: '/영암종문회.jpeg',
    imageCaption: `*2024년 5월 20일(월) 11:00 전남 영암군의회 고화자 부의장실`,
    type: '기타',
    postId: 24
  },
  {
    title: '고경명 의병장 추모 연극',
    text: '',
    date: new Date('2024-09-01'),
    image: '/고경명.jpeg',
    type: '기타',
    postId: 25,
  },
  {
    title: '고씨중앙종문회 제205회 이사회 개최',
    text: `고씨중앙종문회(회장 고재갑)는 제205회 이사회를 2025년 1월 3일 11:00 고씨중앙종문회관 회의실에서 개최하였다.\n
이 날 이사회 에서는 제25회 중앙종문회 정기총회를 2025년 3월 27일 11:00 경상북도 문경시 문경관광호텔에서 개최하기로 결정하였다.\n
(사진: 좌로부터 고재청 이사, 고희정 박사, 고원성 이사, 고광석 이사, 고일룡 이사, 고하영 이사, 고갑수 부회장, 고정석 부회장, 고선풍 박사, 고재권 감사, 고재갑 회장, 고금출 목사, 고재규 부회장, 고삼식 부회장, 고도연 박사, 고봉희 이사)`,
    date: new Date('2025-01-03'),
    image: '/이사회205.jpeg',
    imageCaption: '*고씨중앙종문회 제205회 이사회 개최 (2025년 1월 3일(금) 11:00 고씨중앙종문회관)',
    type: '총회/이사회',
    postId: 26,
  },
  {
    title: '제50회 고씨군산종문회 정기총회',
    text: `고씨군산종문회(회장 고봉희)는 제50회 정기총회를 2025년 3월 19일(수) 11:00 군산 리츠프라자 호텔에서 50여명이 참석한 가운데 개최하였다.\n
고찬영 총무국장의 사회로 고봉희 회장이 고선풍 직전 회장에게 공로패를 전달하였다.\n
고봉희 군산종문회장의 인사와 고재갑 중앙종문회장이 격려사를 하였다.\n
고석륭 재무국장의 경과보고, 고병술 감사의 감사보고에 이어서 참석자 전원 기념촬영으로 총회를 마쳤다.`,
    date: new Date('2025-03-19'),
    image: '/군산50.jpeg',
    imageCaption: '◇ 제50회 고씨군산종문회 정기총회 (2025년 3월 19일(수) 11:00 군산 리츠프라자 호텔)',
    type: '총회/이사회',
    postId: 27,
  }
]

export const postList = unsortedPostList.sort((a, b) => b.date.getTime() - a.date.getTime())
export const gatheringPostList = postList.filter(post => post.type === '총회/이사회')
export const jehyangPostList = postList.filter(post => post.type === '제향')
export const institutePostList = postList.filter(post => post.type === '연수원')
export const otherEventsPostList = postList.filter(post => post.type === '기타')
