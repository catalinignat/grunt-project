app.directive("topMenu", function () {
    return {
        templateUrl: "templates/components/top-menu.html",
        controller: function ($scope) {
            $scope.isSearchBoxVisible = "none";

        }
    }
});

app.directive("fullContent", function () {
    return {
        templateUrl: "templates/components/content.html",
        controller: function ($scope) {
            console.log("accordion!")
        }
    }
});
app.directive("contentAccordion", function () {
    return {
        templateUrl: "templates/components/accordion.html",
        controller: function ($scope) {
            console.log("accordion!")
        }
    }
});
app.directive("footerPage", function () {
    return {
        templateUrl: "templates/components/footer.html",
        controller: function ($scope) {

        }
    }
});
app.directive("progressBar", function () {
    return {
        templateUrl: "templates/components/progress.html",
        controller: function ($scope) {

            function readTextFile(file) {
                var rawFile = new XMLHttpRequest();
                rawFile.open("GET", file, false);
                rawFile.onreadystatechange = function () {
                    if (rawFile.readyState === 4) {
                        if (rawFile.status === 200 || rawFile.status == 0) {
                            var allText = rawFile.responseText;
                            $("#progress-bar-container").append(allText);
                        }
                    }
                }
                rawFile.send(null);
            }

            readTextFile("img/progress.svg");
        }
    }
});

app.directive("langSelection", function () {
    return {
        templateUrl: "templates/components/lang.html",
        controller: function ($scope) {
            $('.dropdown-menu a').on('click', function () {
                $('.dropdown-toggle').html($(this).html() + '<span class="caret"></span>');
            })
        }
    }
});

app.directive("contentCalendar", function () {
    return {
        templateUrl: "templates/components/content-calendar.html",
        controller: function ($scope) {
            $('#datetimepicker1').datetimepicker();
            
        }
    }
});
app.directive("panelHeading", function(){
   return{
       templateUrl: "templates/components/panel-heading.html"
   } 
});