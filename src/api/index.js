import request from '@/utils/request';

export default {
  getMine() {
    return request.get('/api/user/mine');
  },
}
