const routeBt = document.querySelector('.route__button');

routeBt.addEventListener('click', onOff);

function onOff(){
    const routeContent = document.querySelector('.route__content__1').classList;
    if(routeContent.contains("active")==true){
        routeContent.remove("active");
        routeContent.add("inactive");
    }else{
        routeContent.remove("inactive");
        routeContent.add("active");
    }
}

