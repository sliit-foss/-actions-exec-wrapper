const exec = require('@actions/exec');

const execute = (command) => {
  const args = command.split(' ')
  return new Promise((resolve, reject) => {
    let output = '';
    exec.exec(args.shift(), args, {
      listeners: {
        stdout: (data) => {
          output += data.toString();
        }
      }
    }).then(() => {
      return resolve(output);
    }).catch((error) => {
      return reject(error);
    })
  })
}

export default execute
