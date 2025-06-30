export const Routes = {
  contact: '/contact',
} as const;

export type RouteKey = keyof typeof Routes;
