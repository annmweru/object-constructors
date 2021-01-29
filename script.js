function course(first,last,middle,views){
    this.first=first;
    this.last=last;
    this.middle=middle;
    this.views=views;
    this.updateViews=function(){
        return++ this.views
    };
} 
var course01= new course("anna","mweru","nichola",4)

console.log(course01);
  