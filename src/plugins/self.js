const path = require('path');

const selfPlugs = {
  getParentFileName: function () {
    return path.basename(path.resolve(__dirname, '..'));
  }
}

export default selfPlugs;
