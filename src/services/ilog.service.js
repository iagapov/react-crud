import http from "../common/http-common";

class ILogDataService {
  getAll() {
    return http.get("/ilog");
  }

  get(id) {
    return http.get(`/ilog/${id}`);
  }

  create(data) {
    return http.post("/ilog", data);
  }

  update(id, data) {
    return http.put(`/ilog/${id}`, data);
  }

  delete(id) {
    return http.delete(`/ilog/${id}`);
  }

  deleteAll() {
    return http.delete(`/ilog`);
  }

  findByTitle(title) {
    return http.get(`/ilog?title=${title}`);
  }
}

export default new ILogDataService();