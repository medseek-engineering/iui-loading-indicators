(function() {
  'use strict';
  var healthInformation = {
    settings: {
      dataKeyProperty: 'Key',
      metric: {
        recordsProperty: 'Records',
        dateProperty: 'date'
      }
    },
    displayFields: [
      {
        key: 'bloodGlucose',
        metricProperties: ['glucose'],
        type: 'trend'
      },
      {
        key: 'medications',
        type: 'event'
      },
      {
        key: 'weights',
        metricProperties: ['weight'],
        type: 'trend'
      },
      {
        key: 'cholesterol',
        metricProperties: ['level'],
        type: 'trend'
      },
      {
        key: 'immunizations',
        type: 'event'
      },
      {
        key: 'bloodPressures',
        metricProperties: ['systolic', 'diastolic'],
        type: 'trend'
      },
      {
        key: 'encounter',
        type: 'event'
      },
      {
        key: 'tasks',
        type: 'event'
      },
      {
        key: 'procedures',
        type: 'event'
      }
    ],
    data: []
  };
  
  angular
    .module('LoadingIndicatorDemoApp', ['ui.bootstrap', 'ngAnimate', 'iui.loadingIndicator', 'iui.charts'])
    .constant('_', window._)
    .controller('LoadingIndicatorController', LoadingIndicatorController)
    .value('healthInformation', healthInformation);
  
  LoadingIndicatorController.$inject = ['$http','healthInformation'];
  
  var healthInformationData = [
    {
      Key: 'bloodGlucose',
      Records: [
        {
          "id": "825",
          "active": "true",
          "exported": "false",
          "date": "2015-10-06T15:54:09",
          "glucose": 120,
          "markAsPrivate": false,
          "markedBy": "",
          "isExternal": false
        },
        {
          "id": "826",
          "active": "true",
          "exported": "false",
          "date": "2015-11-06T15:54:09",
          "glucose": 100,
          "markAsPrivate": false,
          "markedBy": "",
          "isExternal": false
        },
        {
          "id": "827",
          "active": "true",
          "exported": "false",
          "date": "2015-12-06T15:54:09",
          "glucose": 105,
          "markAsPrivate": false,
          "markedBy": "",
          "isExternal": false
        }
      ]
    },
    {
      Key: 'immunizations',
      Records: [
        {
          "id": "1561",
          "active": "true",
          "name": "cholera",
          "date": "2016-03-09T00:00:00"
        },
        {
          "id": "1633",
          "active": "true",
          "name": "vaccinia (smallpox)",
          "date": "2016-03-15T01:00:00"
        }
      ]
    },
    {
      Key: 'bloodPressures',
      Records: [
        {
          'id': '791',
          'date': '2016-01-06T18:10:39',
          'pulse': '120',
          'systolic': 130,
          'diastolic': 110
        },
        {
          'id': '828',
          'date': '2016-01-07T15:56:15',
          'pulse': '120',
          'systolic': 125,
          'diastolic': 110
        },
        {
          'id': '1195',
          'date': '2016-01-08T13:50:50',
          'pulse': '88',
          'systolic': 117,
          'diastolic': 76
        },
        {
          'id': '198',
          'systolic': 120,
          'diastolic': 70,
          'pulse': '72',
          'date': '2016-01-09T09:53:00'
        },
        {
          'id': '198',
          'systolic': 104,
          'diastolic': 70,
          'pulse': '72',
          'date': '2016-01-10T09:53:00'
        },
        {
          'id': '198',
          'systolic': 140,
          'diastolic': 90,
          'pulse': '72',
          'date': '2016-01-11T09:53:00'
        },
        {
          'id': '198',
          'systolic': 170,
          'diastolic': 120,
          'pulse': '72',
          'date': '2016-01-12T09:53:00'
        },
        {
          'id': '198',
          'systolic': 195,
          'diastolic': 140,
          'pulse': '72',
          'date': '2016-01-13T09:53:00'
        }
      ]
    },
    {
      Key: 'medications',
      Records: [
        {
          'date': '2016-01-05T19:55:17'
        },
        {
          'date': '2016-01-07T05:55:17'
        },
        {
          'date': '2016-01-08T20:55:17'
        },
        {
          'date': '2016-01-10T04:55:17'
        },
        {
          'date': '2016-01-11T09:55:17'
        },
        {
          'date': '2016-01-12T18:55:17'
        }
      ]
    },
    {
      Key: 'weights',
      Records: [
        {
          'date': '2015-12-31T15:55:17',
          'bmi': 22.24,
          'weight': 120
        },
        {
          'date': '2016-01-06T15:55:17',
          'bmi': 22.24,
          'weight': 155
        },
        {
          'date': '2016-01-07T15:55:17',
          'bmi': 22.24,
          'weight': 200
        },
        {
          'date': '2016-01-09T15:55:17',
          'bmi': 22.24,
          'weight': 200
        },
        {
          'date': '2016-01-11T15:55:17',
          'bmi': 22.24,
          'weight': 195
        }
      ]
    },
    {
      Key: 'encounter',
      Records: [
        {
          'date': '2016-01-05T15:55:17'
        },
        {
          'date': '2016-01-07T15:55:17'
        },
        {
          'date': '2016-01-08T15:55:17'
        },
        {
          'date': '2016-01-10T15:55:17'
        },
        {
          'date': '2016-01-11T15:55:17'
        },
        {
          'date': '2016-01-12T15:55:17'
        }
      ]
    },
    {
      Key: 'cholesterol',
      Records:[
        {
          "id": "826",
          "active": "true",
          "exported": "false",
          "date": "2015-10-06T15:54:37",
          "hdl": "120",
          "ldl": "25",
          "tryglicerides": "25",
          "level": 150
        },
        {
          "id": "1193",
          "active": "true",
          "exported": "false",
          "date": "2015-10-16T13:37:56",
          "hdl": "150",
          "ldl": "150",
          "tryglicerides": "150",
          "level": 330
        }
      ]
    },
    {
      Key: 'tasks',
      Records: [
        {
          'date': '2016-01-09T09:55:17'
        },
        {
          'date': '2016-01-08T19:55:17'
        },
        {
          'date': '2016-01-12T15:55:17'
        }
      ]
    },
    {
      Key: 'procedures',
      Records: [
        {
          "id": "829",
          "name": "Photo tests",
          "date": "2015-10-06T00:00:00"
        },
        {
          "id": "1634",
          "name": "MRI study",
          "date": "2016-03-15T01:00:00",
          "comments": "TEST"
        }
      ]
    }
  ];
  
  function LoadingIndicatorController($http, healthInformation) {
    var vm = this;
    
    vm.delay = 0;
    vm.minDuration = 0;
    vm.message = 'Loading';
    vm.backdrop = true;
    vm.cgPromise = null;
    vm.loadingPromise = false;
    vm.world = "World";
    console.log('Promise is ' + vm.iuiPromise + ' inside script.js');
    
    vm.demo = function(){
      vm.cgPromise = $http.get('http://httpbin.org/delay/3');
      vm.loadingPromise = true;
      
      $http.get('http://httpbin.org/delay/3').then(
      function successCallback(response) {
        vm.loadingPromise = false;
      }, function errorCallback(response) {
        vm.loadingPromise = false;
      });
      console.log('Promise is ' + vm.iuiPromise + ' inside script.js');
    };
    
    var fromDate          = '2016-01-01';
    var toDate            = '2016-01-15';
    vm.healthInformation  = healthInformation;
    vm.resetData          = resetData;
    vm.changeDateForm     = changeDateForm;
    vm.changeDate         = changeDate;
    vm.changeData         = changeData;
    vm.showAll            = showAll;
    
    resetData();

    vm.dateRangeForm = {
      from : fromDate,
      to   : toDate
    };

    vm.dateRange = {
      from : new Date(fromDate),
      to   : new Date(toDate)
    };

    function resetData() {
      healthInformation.data = angular.copy(healthInformationData);
    }

    function changeDateForm(dateRangeForm) {
      vm.dateRange.from =  (dateRangeForm && dateRangeForm.from) ? new Date(dateRangeForm.from) : '';
      vm.dateRange.to =    (dateRangeForm && dateRangeForm.to)   ? new Date(dateRangeForm.to)   : '';
    }

    function changeDate(amount, unit) {
      var today = moment();
      var newFromDate = moment(today).subtract(amount, unit);
      vm.dateRange = {
        from : newFromDate.format(),
        to   : today.format()
      };
      vm.dateRangeForm = {
        from : newFromDate.format('Y-MM-DD'),
        to   : today.format('Y-MM-DD')
      };
    }

    function showAll() {
      vm.dateRange = {
        from : '',
        to   : ''
      };
      vm.dateRangeForm = {
        from : '',
        to   : ''
      };
    }

    function changeData() {
      if (!healthInformation.data) {
        return;
      }

      healthInformation.data.forEach(function(datum) {

        var displayData = _.findWhere(healthInformation.displayFields, {key: datum.Key });
        datum.Records.forEach(function(record) {

          var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

          record.date = moment(record.date).add(_.random(0, 10) * plusOrMinus, 'days')

          if (displayData.metricProperties) {
            displayData.metricProperties.forEach(function(metricProperty) {

              var plusOrMinus2 = Math.random() < 0.5 ? -1 : 1;
              record[metricProperty] = record[metricProperty] + (_.random(0, 10) * plusOrMinus2);
            })
          }

        });

      });

    }
    
  }

})();