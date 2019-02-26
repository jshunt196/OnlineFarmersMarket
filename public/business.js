

angular.module('business', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.businesses = [];
            window.businessesBank = [];
            window.buisnesstoadd={name:"mname",adress:"adr",phoneNum:"pn",website:"ws",discription:"discip"};
            window.buisnesstoadd.name="billy";
            $scope.setname=function(name){
                window.buisnesstoadd.name="name";
            }
            window.add=function(){
                window.businessesBank.push({name:"bobbbbbs",adress:"adr",phoneNum:"pn",website:"ws",discription:"discip"});
            }
            $scope.addbusiness=function(mname,adr,pn,ws,discip){
                window.businessesBank.push($scope.makebusiness(mname,adr,pn,ws,discip));
            }
            $scope.makebusiness= function(mname,adr,pn,ws,discip){
                return{name:mname,adress:adr,phoneNum:pn,website:ws,discription:discip};
            }
            window.businessesBank.push($scope.makebusiness("richard dryer","719 east first st orum","605-350-9072","lessstuff.com","copper brass sink cheese"));
            window.businessesBank.push($scope.makebusiness("roys donut shoppe","799 west second ave provo","655-950-4672","coolstuff.com","foot tall icecream cones and cheese"));
            window.businessesBank.push($scope.makebusiness("bobs bakery","719 west first ave provo","605-350-9672","lessstuff.com","wheat bread gluenten free gluten free bread stuff"));
            window.businessesBank.push($scope.makebusiness("jacks bakery","3243,univeristy Ave, provo","801-473-4545","www.stuff.com","whole grain bread gluten free taco shells wheat bread"));
            window.businessesBank.push($scope.makebusiness("carl's farm","132, 2324st provo","801-343-4343","www.morestuff.com","fresh milk plain cheese ebola"));
            window.businessesBank.push(window.buisnesstoadd);
            $scope.searchBusinesses = function(product) {
                $scope.businesses=[]
                var search = $scope.searchWord;
                for (var i = 0; i < window.businessesBank.length; i++) {
                    if(window.businessesBank[i].discription.includes(search)) {
                      $scope.businesses.push(window.businessesBank[i]);
                    }
                }
                //console.log("size: " + $scope.businesses.length);
            };
        }
    ]);

    