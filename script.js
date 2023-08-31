let container = document.getElementById("container1")

container.addEventListener("mouseover" , function(){
  console.log("Masum Bhau Munghate")
    let width_x = window.innerWidth - container.offsetWidth;
  let height_y = window.innerHeight - container.offsetHeight;
  
  let x_axis = Math.floor(Math.random() * width_x);
  let y_axix = Math.floor(Math.random() * height_y);
  
  container.style.left = x_axis + "px"
  container.style.top =  y_axix + "px"
  
})

