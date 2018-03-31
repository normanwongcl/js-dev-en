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

   const jsonStats = stats.toJson();

   if (jsonStats.hasErrors) {
      return jsonStats.erros.map(error => console.log(chalk.red(error)));
   }
   if (jsonStats.hasWarnings) {
      console.log(chalk.yellow('Webpack generated the following warnings: '));
      jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
   }

   console.log(`Webpack stats: ${stats}`);

   // if we got this far, the build is successful
   console.log(chalk.green('Your app has been built for production and written to /dist'));

   return 0; //signify success
});
