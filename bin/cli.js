#!usr/bin/env node
const { execSync } = require('child_process');
const runCommand = (command) => {
  try {
    execSync(`${command}, {stdio: 'inherit'}`)
  } catch (error) {
    console.warn(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
}


const projectName = process.argv[2];

const gitCheckoutCommand = `git clone --depths 1 https://github.com/devluckybabu/expo-app-with-navigation.git ${projectName}`;
const installDepsCommand = `cd ${projectName} && yarn install`;
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);
const installed = runCommand(installDepsCommand);
if (!installed) process.exit(-1);

console.log(`Congratualtions! Your project is ready. Follow the following command to start`);

console.log(`Start Project: cd ${projectName} && yarn start`);
console.log(`Start on Web: cd ${projectName} && yarn web`);
console.log(`Start on ios: cd ${projectName} && yarn ios`);
console.log(`Start on android: cd ${projectName} && yarn android`);
console.log(`Start on globally: cd ${projectName} && yarn start --tunnel`);
