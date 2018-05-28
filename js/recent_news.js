if(window.innerWidth < 600){

var parents = document.getElementsByClassName('main-container-news-events');

for(var i=1;i<parents.length;i++){

    var src = parents[i].getElementsByTagName('img');

    var source = src[0].getAttribute('src');

    var sourcename = source.slice(0,source.indexOf('p')-1);

    console.log(source.indexOf('a'));

    sourcename += "_mobile.png";

    src[0].setAttribute('src',sourcename);

    console.log(sourcename)

}

}