declare module 'cluster-client' {
  import Base from 'sdk-base';

  export class APIClientBase extends Base {
    _client;
    DataClient;
    clusterOptions;
  }
}
