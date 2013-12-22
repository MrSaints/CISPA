$(document).foundation();

function ActCtrl ($scope) {
    $scope.tasks = [];

    $scope.completed = function () {
        var count = 0;
        angular.forEach($scope.tasks, function(task) {
            count += task ? 1 : 0;
        });
        return (100/5) * count;
    };
}

function TwitterCtrl ($scope, $http) {
    $scope.tweets = [];
    $http.get('//twitcher.steer.me/search?q=%23NoCISPA&key=kc2tcvkc').success(function (data) {
        $scope.tweets = data;
    });
}

$(function () {
    $('a').smoothScroll();

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 820) {
            $('section.page').each(function(i) {
                if ($(this).position().top - 45 <= windscroll) {
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