import { apiTrpc } from './trpc';

describe('apiTrpc', () => {
  it('should work', () => {
    expect(apiTrpc()).toEqual('api-trpc');
  });
});
