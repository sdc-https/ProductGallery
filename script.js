import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};

// GET
export default function () {
  let productId = Math.floor( Math.random() * (10000000 - 9000000 + 1) + 9000000 );
  http.get(`http://localhost:3003/images/${productId}`, {
    tags: { name: 'GetItemURL' },
  });
}

// // POST
// export default function() {
//   let productId = Math.floor( Math.random() * (10000000 - 9000000 + 1) + 9000000 );
//   let imageId = Math.floor( Math.random() * (1000 - 900 + 1) + 900 );
//   http.post(`http://localhost:3003/images/${productId}`, JSON.stringify({
//     url: `https://sdc-http-images.s3.amazonaws.com/sdc-image-${imageId}.jpg`
//   }),
//   {
//     tags: { name: 'PostItemURL' },
//     headers: { 'Content-Type': 'application/json' }
//   });
// }
