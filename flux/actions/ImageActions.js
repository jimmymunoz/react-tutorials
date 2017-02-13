/*
* npm install --save react reflux
* npm install --save jquery
* npm install --save browserify babelify
* npm install babel-preset-es2015 --save
* npm install babel-preset-react --save
* npm install react-dom --save
* npm run build
* open index.html
* Module dependencies
*/
import Reflux from 'reflux';

let ImageActions = Reflux.createActions([
  'fetchList'
]);

export default ImageActions;
