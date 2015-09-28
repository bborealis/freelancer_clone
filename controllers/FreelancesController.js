freelance.controller('FreelancesCtrl', function FreelancesCtrl($scope, FreelancesCtrl) {
  $scope.freelances = FreelancesFactory.freelances;
  $scope.FreelancesFactory = FreelancesFactory;
});
