
function doneHandler() {
  document.setupForm.style.display = 'none';
  document.storyForm.style.display = 'block';

  let inputs= document.querySelectorAll('input')
  let missing = document.querySelectorAll( 'span')
  for(let i=0; i < inputs.length; i++ ){
    if (inputs[i].value === ''){
      missing[i].innerHTML =  '&lt missing text &gt';
    }
    else{
      missing[i].innerHTML = inputs[i].value;
    }

  }
}
function returnHandler() {
  document.setupForm.style.display = 'block';
  document.storyForm.style.display = 'none';
}
