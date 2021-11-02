image_array = [
  'robo (1).jpg',
  'robo (2).jpg',
  'robo (3).jpg',
  'robo (4).jpg',
  'robo (5).jpg',
  'robo (6).jpg',
  'robo (7).jpg'
]

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./${selected_image}`
}
