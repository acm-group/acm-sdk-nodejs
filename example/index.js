'use strict';

const ACMClient = require('acm-client').ACMClient;

const client = new ACMClient({
  endpoint: 'acm.aliyun.com',
  namespace: '81597370-5076-4216-9df5-538a2b55bac3',
  accessKey: '4c796a4dcd0d4f5895d4ba83a296b489',    // this accessKey just for testing and unstable，please put your key in application
  secretKey: 'UjLemP8inirhjMg1NZyY0faOk1E=',
  ssl: false
});

function sleep(time){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}

(async () => {
  await client.ready();

  const dataId = 'acm.test.1';
  const group = 'DEFAULT_GROUP';
  const str = `example_test_${Math.random()}_${Date.now()}`;
  await client.publishSingle(dataId, group, str);
  await sleep(1000);
  const content = await client.getConfig(dataId, group);
  console.log(content);
  client.close();
  process.exit(0);
})();
