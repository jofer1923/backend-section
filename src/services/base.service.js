class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    const currenrEntity = await this.repository.get(id);
    if (!currenrEntity) {
      const error = new Error();
      error.status = 400;
      error.message = "entity does not found";
      throw error;
    }

    return currenrEntity;
  }
  async getAll(pageSize, PageNum) {
    return await this.repository.getAll(pageSize, PageNum);
  }

  async create(entity) {
    return await this.repository.create(entity);
  }
  async update(id, entity) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    return await this.repository.update(id, entity);
  }

  async delete(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }
    return await this.repository.delete(id);
  }
}

module.exports = BaseService;
