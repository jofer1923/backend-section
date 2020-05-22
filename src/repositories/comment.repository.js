const BaseRepository = require("./base.repository");
let _comment = null;

class UserRepository extends BaseRepository {
  constructor({ Comment }) {
    super(Comment);
    _comment = Comment;
  }
}

module.exports = UserRepository;
