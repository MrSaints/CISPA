$(document).foundation();

function ActCtrl ($scope) {
    $scope.tasks = {};

    $scope.completed = function () {
        var count = 0;
        angular.forEach($scope.tasks, function(task) {
            count += task ? 1 : 0;
        });
        return (100/5) * count;
    };

    $scope.checkTask = function (task) {
        $scope.tasks[task] = $scope.tasks[task] ? 0 : 1;
    }
}

function TwitterCtrl ($scope, $http) {
    $scope.tweets = [];
    $http.jsonp('http://search.twitter.com/search.json?q=%23NoCISPA&callback=JSON_CALLBACK').success(function (data) {
        $scope.tweets = data.results;
    });
}

$(function () {
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 820) {
            $('section.page').each(function(i) {
                if ($(this).position().top <= windscroll) {
                    $('nav li.link.active').removeClass('active');
                    $('nav li.link').eq(i).addClass('active');
                }
            });
        } else {
            $('nav li.link.active').removeClass('active');
            $('nav li.link:first').addClass('active');
        }
    }).scroll();
});