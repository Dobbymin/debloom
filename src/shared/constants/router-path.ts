export const ROUTE_PATHS = {
  ROOT: '/',
  MAIN: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  SETTING: '/setting',
  POMODORO: '/pomodoro',
  TODO: '/todo',
  TECH_INTERVIEW: '/tech-interview',
  TIL: '/TIL',
};

export const DYNAMIC_ROUTE_PATHS = {
  TECH_INTERVIEW_DETAIL: (id: string) => `/tech-interview/${id}`,
  TIL_DETAIL: (id: string) => `/TIL/${id}`,
};
