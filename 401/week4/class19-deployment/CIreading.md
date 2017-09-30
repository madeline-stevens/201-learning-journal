- Instead of updating your deployed website when you reach big milestones as a team, travis CI listens for pull requests from each member to your staging and master branches and integrates them as each team member completes their work.

- Travis CI requires tests! And runs those tests each time you make a pull request. Ensuring that you haven't broken your code.

- Travis CI creates a complete build (runs the npm packages, starts a mongodb server) on their site. Kind of like a test run.  


How to set Travis up to work with your repository:
1. Host your project on github
2. Sign in to TravisCI
3. Find your github repository and flip the switch
4. Add a .travis.yml file to your code base. A .travis.yml file must be present for Travis to listen for pull requests.

5. That .travis.yml should include the following:
language: node_js
node_js:
  - 'stable'
services:
  - mongodb
addons:
  apt:
    sources:
      - ubuntu-toolchain-r-test
    packages:
      - gcc-5
      - g++-5
env:
  - CXX=g++-5
sudo: required
# safelist
branches:
  only:
  - master
  - staging
  - test_branch
before_script: npm i
script:
  - npm run lint:test





https://www.youtube.com/watch?v=BUmBQ2JiNqI
