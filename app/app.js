import TrimFilter from './filters/trim'
import StartWithFilter from './filters/starts-with'
import UpperCaseFirstFilter from './filters/upper-case-first'

let app = angular.module('idi-framework' ,[]);

app.filter('trim',  TrimFilter);
app.filter('startsWith',  StartWithFilter);
app.filter('titleize',  UpperCaseFirstFilter21);


