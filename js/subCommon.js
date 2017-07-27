var oldidx;
window.onload=function(){
	oldidx="1";
}

function display(idx){
	var modals=document.getElementById(idx);
	modals.classList.toggle('hidden');
}

function tabChange(idx){
	console.log(`Tab will change to ${idx}`);
	var old=document.getElementById(`section${oldidx}`); var oldTab=document.getElementById(`tab${oldidx}`); 
	var now=document.getElementById(`section${idx}`); var nowTab=document.getElementById(`tab${idx}`);
	old.classList.toggle('hidden');oldTab.classList.toggle('selected');
	now.classList.toggle('hidden');nowTab.classList.toggle('selected');
	oldidx=idx;
}