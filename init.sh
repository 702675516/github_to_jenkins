#/!bin/bash

# 设置nvm环境
source ~/.nvm/nvm.sh
nvm use

# 安装依赖
npm i

# 打包
npm run build

# 生成
npm run generate
