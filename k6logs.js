// GET - 1 RPS

running (0m30.0s), 000/100 VUs, 30 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  1 iters/s

     data_received..................: 19 kB  628 B/s
     data_sent......................: 2.8 kB 94 B/s
     http_req_blocked...............: avg=895.16µs min=221µs  med=288.5µs max=6.84ms  p(90)=1.86ms  p(95)=4.4ms
     http_req_connecting............: avg=788.99µs min=177µs  med=230µs   max=6.69ms  p(90)=1.76ms  p(95)=4.24ms
     http_req_duration..............: avg=10.32ms  min=3.74ms med=7.36ms  max=42.92ms p(90)=17.66ms p(95)=29.34ms
       { expected_response:true }...: avg=10.32ms  min=3.74ms med=7.36ms  max=42.92ms p(90)=17.66ms p(95)=29.34ms
     http_req_failed................: 0.00%  ✓ 0       ✗ 30
     http_req_receiving.............: avg=195.73µs min=58µs   med=155µs   max=1.22ms  p(90)=325.8µs p(95)=377.39µs
     http_req_sending...............: avg=125.23µs min=45µs   med=61.5µs  max=839µs   p(90)=194.2µs p(95)=460.64µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=10ms     min=3.59ms med=6.89ms  max=42.52ms p(90)=16.7ms  p(95)=29.02ms
     http_reqs......................: 30     0.99987/s
     iteration_duration.............: avg=11.58ms  min=4.36ms med=7.96ms  max=44.8ms  p(90)=20.93ms p(95)=36.37ms
     iterations.....................: 30     0.99987/s
     vus............................: 100    min=100   max=100
     vus_max........................: 100    min=100   max=100


// GET - 10 RPS

scenarios: (100.00%) 1 scenario, 300 max VUs, 1m0s max duration (incl. graceful stop):
* constant_request_rate: 10.00 iterations/s for 30s (maxVUs: 100-300, gracefulStop: 30s)

running (0m30.0s), 000/100 VUs, 300 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  10 iters/s

data_received..................: 191 kB 6.4 kB/s
data_sent......................: 28 kB  940 B/s
http_req_blocked...............: avg=402.65µs min=249µs  med=308.5µs max=2.76ms   p(90)=584.4µs p(95)=801.45µs
http_req_connecting............: avg=312.64µs min=168µs  med=239µs   max=2.61ms   p(90)=455.1µs p(95)=659.9µs
http_req_duration..............: avg=7.28ms   min=2.98ms med=5.79ms  max=132.43ms p(90)=9.75ms  p(95)=12.96ms
 { expected_response:true }...: avg=7.28ms   min=2.98ms med=5.79ms  max=132.43ms p(90)=9.75ms  p(95)=12.96ms
http_req_failed................: 0.00%  ✓ 0        ✗ 300
http_req_receiving.............: avg=116.31µs min=51µs   med=91µs    max=1.2ms    p(90)=167.3µs p(95)=266.35µs
http_req_sending...............: avg=106.66µs min=47µs   med=81.5µs  max=2.75ms   p(90)=152.2µs p(95)=190.25µs
http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s
http_req_waiting...............: avg=7.06ms   min=2.83ms med=5.55ms  max=131.89ms p(90)=9.54ms  p(95)=12.8ms
http_reqs......................: 300    9.998061/s
iteration_duration.............: avg=7.96ms   min=3.46ms med=6.5ms   max=133.61ms p(90)=10.51ms p(95)=13.59ms
iterations.....................: 300    9.998061/s
vus............................: 90     min=90     max=100
vus_max........................: 100    min=100    max=100

// GET - 100 RPS

scenarios: (100.00%) 1 scenario, 300 max VUs, 1m0s max duration (incl. graceful stop):
* constant_request_rate: 100.00 iterations/s for 30s (maxVUs: 100-300, gracefulStop: 30s)

running (0m30.0s), 000/100 VUs, 3001 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  100 iters/s

data_received..................: 1.9 MB 64 kB/s
data_sent......................: 282 kB 9.4 kB/s
http_req_blocked...............: avg=26µs     min=2µs    med=6µs    max=4.14ms   p(90)=12µs    p(95)=30µs
http_req_connecting............: avg=13.81µs  min=0s     med=0s     max=3.87ms   p(90)=0s      p(95)=0s
http_req_duration..............: avg=24.11ms  min=2.29ms med=6.26ms max=330.27ms p(90)=71.32ms p(95)=130.02ms
{ expected_response:true }...: avg=24.11ms  min=2.29ms med=6.26ms max=330.27ms p(90)=71.32ms p(95)=130.02ms
http_req_failed................: 0.00%  ✓ 0          ✗ 3001
http_req_receiving.............: avg=105.71µs min=18µs   med=83µs   max=1.29ms   p(90)=160µs   p(95)=235µs
http_req_sending...............: avg=38.94µs  min=9µs    med=27µs   max=1.04ms   p(90)=62µs    p(95)=93µs
http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s
http_req_waiting...............: avg=23.97ms  min=2.18ms med=6.12ms max=330.16ms p(90)=71.19ms p(95)=129.83ms
http_reqs......................: 3001   100.007048/s
iteration_duration.............: avg=24.37ms  min=2.43ms med=6.55ms max=330.61ms p(90)=71.81ms p(95)=130.46ms
iterations.....................: 3001   100.007048/s
vus............................: 100    min=100      max=100
vus_max........................: 100    min=100      max=100

// GET - 1000 RPS

running (0m30.8s), 000/300 VUs, 4438 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/300 VUs  30s  1000 iters/s

     data_received..................: 2.3 MB 74 kB/s
     data_sent......................: 365 kB 12 kB/s
     dropped_iterations.............: 25563  830.134745/s
     http_req_blocked...............: avg=2.01ms  min=0s       med=5µs   max=162.36ms p(90)=415µs p(95)=796.29µs
     http_req_connecting............: avg=1.98ms  min=0s       med=0s    max=159.78ms p(90)=316µs p(95)=590.74µs
     http_req_duration..............: avg=1.86s   min=0s       med=1.9s  max=3.76s    p(90)=2.85s p(95)=3.17s
       { expected_response:true }...: avg=2.21s   min=205.11ms med=2.15s max=3.76s    p(90)=3.01s p(95)=3.2s
     http_req_failed................: 19.24% ✓ 854        ✗ 3584
     http_req_receiving.............: avg=91.1µs  min=0s       med=73µs  max=2.63ms   p(90)=150µs p(95)=229.29µs
     http_req_sending...............: avg=64.49µs min=0s       med=25µs  max=14.94ms  p(90)=100µs p(95)=157.29µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s    max=0s       p(90)=0s    p(95)=0s
     http_req_waiting...............: avg=1.86s   min=0s       med=1.9s  max=3.76s    p(90)=2.84s p(95)=3.17s
     http_reqs......................: 4438   144.119939/s
     iteration_duration.............: avg=2s      min=532.17µs med=1.96s max=3.91s    p(90)=2.85s p(95)=3.17s
     iterations.....................: 4438   144.119939/s
     vus............................: 300    min=300      max=300
     vus_max........................: 300    min=300      max=300


// POST - 1 RPS

running (0m30.0s), 000/100 VUs, 31 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  1 iters/s

     data_received..................: 12 kB  408 B/s
     data_sent......................: 6.7 kB 222 B/s
     http_req_blocked...............: avg=681µs    min=286µs  med=516µs  max=2.9ms   p(90)=1ms     p(95)=1.22ms
     http_req_connecting............: avg=548.64µs min=237µs  med=415µs  max=2.79ms  p(90)=878µs   p(95)=914.5µs
     http_req_duration..............: avg=11.55ms  min=5.07ms med=7.75ms max=96.13ms p(90)=14.17ms p(95)=17.05ms
       { expected_response:true }...: avg=11.55ms  min=5.07ms med=7.75ms max=96.13ms p(90)=14.17ms p(95)=17.05ms
     http_req_failed................: 0.00%  ✓ 0        ✗ 31
     http_req_receiving.............: avg=157.29µs min=65µs   med=102µs  max=1.46ms  p(90)=198µs   p(95)=234µs
     http_req_sending...............: avg=227.29µs min=59µs   med=149µs  max=1.08ms  p(90)=515µs   p(95)=670µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=11.17ms  min=4.89ms med=7.25ms max=94.89ms p(90)=13.81ms p(95)=16.58ms
     http_reqs......................: 31     1.032795/s
     iteration_duration.............: avg=12.79ms  min=5.79ms med=9.21ms max=97.89ms p(90)=15.05ms p(95)=18.55ms
     iterations.....................: 31     1.032795/s
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100

// POST - 10 RPS

running (0m30.0s), 000/100 VUs, 301 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  10 iters/s

     data_received..................: 119 kB 4.0 kB/s
     data_sent......................: 65 kB  2.2 kB/s
     http_req_blocked...............: avg=473.48µs min=258µs  med=404µs  max=4.69ms  p(90)=676µs   p(95)=864µs
     http_req_connecting............: avg=367.28µs min=194µs  med=310µs  max=4.51ms  p(90)=555µs   p(95)=690µs
     http_req_duration..............: avg=7.6ms    min=3.4ms  med=5.75ms max=72.21ms p(90)=11.32ms p(95)=14.85ms
       { expected_response:true }...: avg=7.6ms    min=3.4ms  med=5.75ms max=72.21ms p(90)=11.32ms p(95)=14.85ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 301
     http_req_receiving.............: avg=116.27µs min=53µs   med=90µs   max=699µs   p(90)=172µs   p(95)=274µs
     http_req_sending...............: avg=127.73µs min=52µs   med=103µs  max=901µs   p(90)=185µs   p(95)=268µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=7.36ms   min=3.14ms med=5.54ms max=71.88ms p(90)=11.05ms p(95)=14.43ms
     http_reqs......................: 301    10.028297/s
     iteration_duration.............: avg=8.34ms   min=4.14ms med=6.44ms max=74.63ms p(90)=12.25ms p(95)=15.81ms
     iterations.....................: 301    10.028297/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100

// POST - 100 RPS

running (0m30.0s), 000/100 VUs, 3001 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  100 iters/s

     data_received..................: 1.2 MB 40 kB/s
     data_sent......................: 645 kB 22 kB/s
     http_req_blocked...............: avg=30.16µs min=3µs    med=6µs    max=4.78ms   p(90)=13µs     p(95)=32µs
     http_req_connecting............: avg=18.32µs min=0s     med=0s     max=4.35ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=57.64ms min=2.51ms med=6.76ms max=942.75ms p(90)=138.7ms  p(95)=302.68ms
       { expected_response:true }...: avg=57.64ms min=2.51ms med=6.76ms max=942.75ms p(90)=138.7ms  p(95)=302.68ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 3001
     http_req_receiving.............: avg=97.54µs min=18µs   med=77µs   max=2.41ms   p(90)=139µs    p(95)=202µs
     http_req_sending...............: avg=48.76µs min=12µs   med=35µs   max=5.25ms   p(90)=75µs     p(95)=103µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=57.49ms min=2.39ms med=6.61ms max=942.61ms p(90)=138.61ms p(95)=302.55ms
     http_reqs......................: 3001   100.002786/s
     iteration_duration.............: avg=57.94ms min=2.73ms med=7.09ms max=943.08ms p(90)=138.92ms p(95)=302.87ms
     iterations.....................: 3001   100.002786/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100


// POST - 1000 RPS

running (0m30.5s), 000/300 VUs, 5541 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/300 VUs  30s  1000 iters/s

     data_received..................: 2.2 MB 72 kB/s
     data_sent......................: 1.2 MB 39 kB/s
     dropped_iterations.............: 24460  802.148499/s
     http_req_blocked...............: avg=858.52µs min=1µs      med=5µs  max=127.47ms p(90)=15µs  p(95)=288µs
     http_req_connecting............: avg=823.23µs min=0s       med=0s   max=126.92ms p(90)=0s    p(95)=206µs
     http_req_duration..............: avg=1.61s    min=496.57ms med=1.5s max=3.84s    p(90)=2.18s p(95)=2.58s
       { expected_response:true }...: avg=1.61s    min=496.57ms med=1.5s max=3.84s    p(90)=2.18s p(95)=2.58s
     http_req_failed................: 0.00%  ✓ 0          ✗ 5541
     http_req_receiving.............: avg=110.4µs  min=13µs     med=77µs max=20.7ms   p(90)=156µs p(95)=249µs
     http_req_sending...............: avg=67.18µs  min=9µs      med=32µs max=45.93ms  p(90)=91µs  p(95)=166µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s   max=0s       p(90)=0s    p(95)=0s
     http_req_waiting...............: avg=1.61s    min=496.52ms med=1.5s max=3.84s    p(90)=2.18s p(95)=2.58s
     http_reqs......................: 5541   181.713198/s
     iteration_duration.............: avg=1.61s    min=496.67ms med=1.5s max=3.94s    p(90)=2.18s p(95)=2.58s
     iterations.....................: 5541   181.713198/s
     vus............................: 300    min=300      max=300
     vus_max........................: 300    min=300      max=300




