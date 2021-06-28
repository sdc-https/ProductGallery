import axios from 'axios';

const sampleRecord = {
  images: ['test url', 'test url']
}

const sampleUpdate = {
  images: ['test url', 'hey fren']
}

let sampleProductId;

describe('POST route', () => {
  it ('should create a new record', () => {
    return axios.post('http://localhost:3003/images', sampleRecord)
      .then((res) => {
        sampleProductId = res.data.productId;
        console.log('POST res data:', res.data);
        expect(res.status).toBe(201);
      })
  })
})

describe('GET route', () => {
  it ('should retrieve an existing record', () => {
    return axios.get(`http://localhost:3003/images/${sampleProductId}`)
      .then((res) => {
        expect(res.status).toBe(200);
      })
  })
})

describe('PUT route', () => {
  it ('should update an existing record', () => {
    return axios.put(`http://localhost:3003/images/${sampleProductId}`, sampleUpdate)
      .then((res) => {
        expect(res.status).toBe(201);
        console.log('res data:', res.data);
        expect(res.data.images[1]).toBe('hey fren');
      })
  })
})

describe('DELETE route', () => {
  it ('should delete an existing record', () => {
    return axios.delete(`http://localhost:3003/images/${sampleProductId}`)
      .then((res) => {
        expect(res.status).toBe(200);
      })
  })
})



