import './about.scss';
import angular from 'angular';
import config from '../../core/initConfig.js';

angular.module(config.name)
.directive('about', function() {
  return {
    template: htmlTempate
  };
});