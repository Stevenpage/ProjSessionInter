var memorizerInfinie = angular.module('memorizerInfinie', ['loginController', 'tripsController', 'daysController']);

memorizerInfinie.run(['$rootScope', function ($rootScope) {

    $rootScope.templates = [{ name: 'TemplateVoyage', url: 'templates/Voyage.html' }, { name: 'TemplateJour', url: 'templates/Jour.html' }];
    $rootScope.voyageTemplateUrl = $rootScope.templates[0].url;
    $rootScope.voyageJourUrl = $rootScope.templates[1].url;
}])
