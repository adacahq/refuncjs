// @flow

import 'whatwg-fetch';
import { Either } from 'monet';
import merge from 'lodash/fp/merge';
import { CONFIG } from 'constants';

const DEFAULT_HEADER: Object = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export default class HTTP {
  static BASE_URL: string = `${CONFIG.API_URL}/${CONFIG.API_VERSION}`;

  static METHODS: Object = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT',
  };

  static request(
    url: string,
    method: HTTPMethod,
    options: Object,
  ): Promise<Either> {
    return fetch(
      url,
      merge(
        {
          method,
          headers: DEFAULT_HEADER,
        },
        options,
      ),
    )
      .then((resp: Response): Either<string, any> => Either.Right(resp)
        .flatMap(async (data: Object): Either<string, any> => {
          const body: JSON = await data.json();
          return data.status >= 400 ? Either.Left(body.message) : Either.Right(body);
        })).catch(Either.left);
  }

  static get(
    url: string,
    options: Object = {},
  ): Promise<Either> {
    return HTTP.request(HTTP.BASE_URL + url, HTTP.METHODS.GET, options);
  }

  static post(
    url: string,
    options: Object = {},
  ): Promise<Either> {
    return HTTP.request(HTTP.BASE_URL + url, HTTP.METHODS.POST, options);
  }

  static put(
    url: string,
    options: Object = {},
  ): Promise<Either> {
    return HTTP.request(HTTP.BASE_URL + url, HTTP.METHODS.PUT, options);
  }

  static delete(
    url: string,
    options: Object = {},
  ): Promise<Either> {
    return HTTP.request(HTTP.BASE_URL + url, HTTP.METHODS.DELETE, options);
  }
}
