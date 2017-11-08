angular.module('cmsapp.addSchoolCtrl', [])
.factory('RegionsList',function(){
       var region = [
        {RegionName:'Alaska'},
        {RegionName:'Blaska'},
        {RegionName:'Claska'},
        {RegionName:'Ana'},
        {RegionName:'Binna'},
        {RegionName:'Cinsds'}
        ];
  return region;
})
.controller('addSchoolCtrl', function($scope, $stateParams,RegionsList) {
     $scope.selected = '';
	   $scope.Regions = RegionsList;
     $scope.SelectedCountry = null;
 
  var Schools = [
        {SchoolName:'kjasdf'},
        {SchoolName:'asjhsdaf'},
        {SchoolName:'sdalkjdf'},
        {SchoolName:'sadlkj'},
        {SchoolName:'dsada'},
        {SchoolName:'dfsd'}
        ];
  var Divisions = [
        {DivisionName:'Divisions-A'},
        {DivisionName:'Divisions-B'},
        {DivisionName:'Divisions-c'},
        {DivisionName:'Divisions-d'},
        {DivisionName:'Divisions-e'},
        {DivisionName:'Divisions-F'}
        ];
  var Citys = [
        {CityName:'City-A'},
        {CityName:'City-B'},
        {CityName:'City-C'},
        {CityName:'City-D'},
        {CityName:'City-E'},
        {CityName:'City-F'}
        ];    
    $scope.Schools = Schools;
    $scope.Divisions = Divisions;
    $scope.Citys = Citys;
    //After select country event
    $scope.afterSelectedCountry = function (selected) {
        if (selected) {
            $scope.SelectedCountry = selected.originalObject;
        }
    }
  console.log($scope.School);
  console.log($scope.Divisions);
  console.log($scope.Citys);
  console.log($scope.Regions);
});