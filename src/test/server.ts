import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export function createServer(handlerConfig: HandlerConfig[]) {
  const handlers = handlerConfig.map((config) => {
    return http[config.method](config.path, async (context) => {
      const { data, status } = await config.response(context as any);
      return HttpResponse.json(data, { status: status || 200 })
    })
  })

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}

type HandlerConfig = {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  path: string,
  // eslint-disable-next-line
  response: (context: any) => any;
}