const imgs = document.getElementById("img-container");
const img = document.querySelectorAll("#img-container img");

let idx=0;

function carrossel(){
	idx++;
	if(idx > img.length - 1){
		idx =0;
	}
	imgs.style.transform = `translateX(${-idx * 50}%)`;
}

setInterval(carrossel, 2500);