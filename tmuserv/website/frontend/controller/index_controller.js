/**
 * @file index_controller the file
 */
'use strict';
angular.module(window.ProjectName).controller('index_controller',
    function ($rootScope, $scope, $state, $log, $stateParams, $timeout, CONFIG, fetchService) {
        var api = CONFIG.api[$state.current.name];

        $('.btn-setting').click(function (e) {
            e.preventDefault();
            $('#myModal').modal('show');
        });
        $scope.sortableConf = {
            config: [
             //   {dom: 'this', items: '.panel', handle: '.panel-heading', connectWith: ''},
                {dom: '.sortable-row', items: '.panel', handle: '.panel-heading', connectWith: '.sortable-row'}
            ]
        };
    });
