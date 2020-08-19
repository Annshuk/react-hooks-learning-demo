import mockapi from '../mockData/mock'

const preparePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(mockapi), 1000);
  });
};

export const fetchMockApi = async () => {
  const response = await preparePromise();
  return response;
};
