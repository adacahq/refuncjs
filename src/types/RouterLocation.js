// @flow

export interface RouterLocation {
  pathname: string,
  type: string,
  payload: Object,
  prev: *,
  kind: string,
  routesMap: *
}
