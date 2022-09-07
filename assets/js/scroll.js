document.querySelector("#scroll1").onclick = function(){
    scroll1.src='/assets/img/Polygon (full).png';
    scroll2.src='/assets/img/Polygon (Stroke).png';
    scroll3.src='/assets/img/Polygon (Stroke).png';
    const el = document.getElementById('header');
    el.scrollIntoView({behavior: "smooth"});
  }

document.querySelector("#scroll2").onclick = function(){
    scroll1.src='/assets/img/Polygon (Stroke).png';
    scroll2.src='/assets/img/Polygon (full).png';
    scroll3.src='/assets/img/Polygon (Stroke).png';
    const el = document.getElementById('products');
    el.scrollIntoView({behavior: "smooth"});
}

document.querySelector("#scroll3").onclick = function(){
    scroll1.src='/assets/img/Polygon (Stroke).png';
    scroll2.src='/assets/img/Polygon (Stroke).png';
    scroll3.src='/assets/img/Polygon (full).png';
    const el = document.getElementById('spotlight');
    el.scrollIntoView({behavior: "smooth"});
}

document.querySelector("#more").onclick = function(){
    scroll1.src='/assets/img/Polygon (Stroke).png';
    scroll2.src='/assets/img/Polygon (full).png';
    scroll3.src='/assets/img/Polygon (Stroke).png';
    const el = document.getElementById('products');
    el.scrollIntoView({behavior: "smooth"});
}