#!/bin/sh

sudo apt install nodejs -y
sudo apt install npm -y
sudo npm cache clean --force
sudo npm install -g n
sudo n stable
sudo npm install -g npm
npm i express
npm i pug
npm i shelljs
npm i markdown-it
npm i markdown-it-plain-text
