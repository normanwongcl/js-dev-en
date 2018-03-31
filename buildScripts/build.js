/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

 //babel and other configuration files look at this to determine how it is build
process.env.NODE_ENV = 'production';

webpack(webpackConfig).run((err, stats) => {
   if (err) { //a fatal error occured. Stop here.
      console.log(chalk.red(err));
      return 1;
   }
   return 0; //signify success
})
