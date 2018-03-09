// @flow

export default (fieldName: string, error: string, fn: * => boolean, selector?: Function): Object =>
  Object.freeze({
    fieldName,
    error,
    fn,
    selector,
  });
