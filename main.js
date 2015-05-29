/**
 * User: nvucuong
 * Date: 5/29/2015
 * Time: 10:44 AM
 */
(function () {
  'use strict';

  angular.module('AboutMeApp', [
    'ngMaterial',
    'MainPageModule'
  ]);

  angular.module('MainPageModule', ['ngMaterial'])
    .config(function($mdIconProvider) {
      $mdIconProvider
        .icon('share-arrow', 'img/icons/share-arrow.svg', 24)
        .icon('upload', 'img/icons/upload.svg', 24)
        .icon('copy', 'img/icons/copy.svg', 24)
        .icon('print', 'img/icons/print.svg', 24)
        .icon('hangout', 'img/icons/hangout.svg', 24)
        .icon('mail', 'img/icons/mail.svg', 24)
        .icon('message', 'img/icons/message.svg', 24)
        .icon('copy2', 'img/icons/copy2.svg', 24)
        .icon('facebook', 'img/icons/facebook.svg', 24)
        .icon('twitter', 'img/icons/twitter.svg', 24);
    })
    .controller('MainCtrl', [function () {

    }])
    .controller('AppCtrl', ['$scope', '$mdBottomSheet', function ($scope, $mdBottomSheet) {
      $scope.showListBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
          templateUrl: 'template/bottom-sheet-list-template.html',
          controller: 'ListBottomSheetCtrl',
          targetEvent: $event
        }).then(function(clickedItem) {
          $scope.alert = clickedItem.name + ' clicked!';
        });
      };

      $scope.showGridBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
          templateUrl: 'template/bottom-sheet-grid-template.html',
          controller: 'GridBottomSheetCtrl',
          targetEvent: $event
        }).then(function(clickedItem) {
          $scope.alert = clickedItem.name + ' clicked!';
        });
      };
    }])
  ;
})();

