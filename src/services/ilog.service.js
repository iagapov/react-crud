import http from "../common/http-common";

class ILogDataService {
  getAll() {
    return http.get("/records");
  }

  get(id) {
    return http.get(`/records/${id}`);
  }

  create(data) {
    return http.post("/records", data);
  }

  update(id, data) {
    return http.put(`/records/${id}`, data);
  }

  delete(id) {
    return http.delete(`/records/${id}`);
  }

  deleteAll() {
    return http.delete(`/records`);
  }

  findByTitle(title) {
    return http.get(`/records?title=${title}`);
  }
}

export default new ILogDataService();