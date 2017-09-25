// @flow

import 'whatwg-fetch';
import CONFIG from '../constants';

interface HTTPResponse {
  error: string,
  data: {},
}

function HTTPResponseFactory(response: HTTPResponse): HTTPResponse {
  return {
    data: response.data,
    error: response.error,
  };
}

export default class HTTP {
  static BASE_URL: string = CONFIG.API_URL;

  static METHODS: {
    GET: string,
    POST: string,
    DELETE: string,
    PUT: string,
  } = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT',
  };

  static request(url: string,
    method: string,
    token: string,
    options: ?{}): Promise<HTTPResponse> {
    return fetch(url, Object.assign({
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    }, options))
      .then((data: Response) => data.json())
      .then(HTTPResponseFactory)
      .catch(HTTPResponseFactory);
  }

  static get(url: string, token: string): Promise<HTTPResponse> {
    return HTTP.request(HTTP.BASE_URL + url, HTTP.METHODS.GET, token);
  }

  static post(url: string, body: {}, token: string): Promise<HTTPResponse> {
    return HTTP.request(HTTP.BASE_URL + url, HTTP.METHODS.POST, token, {
      body: JSON.stringify(body),
    });
  }

  static put(url: string, body: {}, token: string): Promise<HTTPResponse> {
    return HTTP.request(HTTP.BASE_URL + url, HTTP.METHODS.PUT, token, {
      body: JSON.stringify(body),
    });
  }

  static delete(url: string, token: string): Promise<HTTPResponse> {
    return HTTP.request(HTTP.BASE_URL + url, HTTP.METHODS.DELETE, token);
  }
}
