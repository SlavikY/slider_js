const images = [
  'img/a.jpg',
  'img/b.jpg',
  'img/c.jpg',
  'img/d.jpg',
  'img/e.jpg'
];

const firstImage = 0
const lastImage = images.length -1 ;
let currentImage = 0;


const nextBtn = document.getElementById('next');

nextBtn.addEventListener('click', ()=>{
  const imageTag = document.getElementById('image')
  currentImage++;
if(currentImage >= lastImage){
  currentImage = 4;
}
  imageTag.src= images [currentImage];
document.getElementById('info').innerHTML = (currentImage +1) + '/5'
})

//PrevButton

const prevBtn = document.getElementById('prev');

prevBtn.addEventListener('click', ()=>{
  const imageTag = document.getElementById('image')
  currentImage--;
if(currentImage <= firstImage){
  currentImage = 0;
}
  imageTag.src= images [currentImage];
document.getElementById('info').innerHTML = (currentImage +1) + '/5'
})