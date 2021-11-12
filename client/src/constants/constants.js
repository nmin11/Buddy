// 비밀번호 정규식 (특수문자, 문자, 숫자 포함 형태 8~15자리 이내의 암호 정규식)
export const PASSWORD_REGEXP = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

// 이메일 정규식
export const EMAIL_REGEXP = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

// 휴대폰번호 정규식
export const MOBILE_REGEXP = /^\d{3}-\d{3,4}-\d{4}$/;

// axios 기본 헤더
export const AXIOS_DEFAULT_HEADER = {
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
};

// 팀원
export const TEAM_NAME = [
  { name: '황재성', src: 'https://github.com/shreder0804' },
  { name: '남궁민', src: 'https://github.com/nmin11' },
  { name: '남수연', src: 'https://github.com/namtndus' },
];

// 닉네임 데이터(FIRST)
export const FIRST_NICKNAME = [
  '가냘픈',
  '가는',
  '가엾은',
  '가파른',
  '같은',
  '거센',
  '거친',
  '검은',
  '게으른',
  '고달픈',
  '고른',
  '고마운',
  '고운',
  '고픈',
  '곧은',
  '괜찮은',
  '구석진',
  '굳은',
  '굵은',
  '귀여운',
  '그런',
  '그른',
  '그리운',
  '기다란',
  '기쁜',
  '긴',
  '깊은',
  '깨끗한',
  '나쁜',
  '나은',
  '낮은',
  '넓은',
  '네모난',
  '노란',
  '높은',
  '누런',
  '느린',
  '늦은',
  '다른',
  '더러운',
  '더운',
  '덜된',
  '동그란',
  '된',
  '둥그런',
  '둥근',
  '뒤늦은',
  '드문',
  '딱한',
  '때늦은',
  '뛰어난',
  '뜨거운',
  '막다른',
  '매운',
  '멋진',
  '못생긴',
  '무서운',
  '무딘',
  '미운',
  '반가운',
  '밝은',
  '보람찬',
  '붉은',
  '빠른',
  '뽀얀',
  '새로운',
  '서툰',
  '섣부른',
  '성가신',
  '수줍은',
  '슬픈',
  '쉬운',
  '쓰디쓴',
  '아픈',
  '아쉬운',
  '약은',
  '얇은',
  '얕은',
  '어두운',
  '엄청난',
  '예쁜',
  '올바른',
  '옳은',
  '외로운',
  '이른',
  '작은',
  '잘난',
  '젋은',
  '좁은',
  '좋은',
  '지나친',
  '짧은',
  '질긴',
  '큰',
  '턱없는',
  '푸른',
  '흐린',
  '희망찬',
  '흰',
  '힘겨운',
  '힘찬',
];

// 닉네임 데이터(FIRST)
export const LAST_NICKNAME = [
  '쥐',
  '소',
  '호랑이',
  '토끼',
  '뱀',
  '용',
  '말',
  '양',
  '원숭이',
  '닭',
  '개',
  '강아지',
  '돼지',
  '하마',
  '코뿔소',
  '코끼리',
  '자라',
  '거북이',
  '얼룩말',
  '하이에나',
  '래서팬더',
  '타조',
  '펭귄',
  '기린',
  '고추',
  '당근',
  '수박',
  '참외',
  '딸기',
  '망고',
  '복숭아',
  '자두',
  '앵두',
  '고구마',
  '감자',
  '칡',
  '순대',
  '안경',
  '책',
  '축구공',
  '농구공',
  '야구공',
  '진달래',
  '철쭉',
  '아카시아',
  '민들레',
  '할미꽃',
  '무궁화',
  '나팔꽃',
  '개나리',
  '은행',
  '수수',
  '옥수수',
  '메론',
  '살구',
  '연탄',
  '호박',
  '귤',
  '오렌지',
  '고둥',
  '소라',
  '참돔',
  '공책',
  '호미',
  '소주',
  '맥주',
  '양주',
  '보드카',
  '종이',
  '휴지',
  '휴대폰',
  '이어폰',
  '컴퓨터',
  '개발자',
  '판사',
  '볼펜',
  '샤프',
  '프린터',
  '마우스',
  '가습기',
  '제습기',
  '눈물',
  '키보드',
  '스피커',
  '입술',
  '창문',
  '쇼핑',
  '이미지',
  '지도',
  '천재',
  '둔재',
  '명탐정',
  '의사',
  '숟가락',
  '젓가락',
  '포크',
  '물티슈',
  '세정제',
  '고추장',
  '된장',
  '쌈장',
  '케찹',
];
