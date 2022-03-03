


function makeHTML() {
  var codeFill = '<select class="custom-select">'
  codeFill += "<option selected>Vote</option>"
  for(var i = 1; i <= 10; i++) {
    newRow = "<option value=" + i + ">" + i + "</option>"
    codeFill += newRow
    console.log(i);
}
  codeFill+= "</select>"
  return codeFill
  console.log(codeFill)
  };

// document.getElementsByClassName("ddm")[1].innerHTML = makeHTML()

function writeToDoc() {
  var x = document;
  var y = x.getElementsByClassName("ddm");
  var i;
  for (i = 0; i < y.length; i++) {
    document.getElementsByClassName("ddm")[i].innerHTML = makeHTML()
}
}

writeToDoc()


// this is what the above code should print
// <select class="custom-select">
//   <option selected>Open this select menu</option>
//   <option value="1">One</option>
//   <option value="2">Two</option>
//   <option value="3">Three</option>
// </select>


//This is the search funtion
$('#search').keyup(function (){
    $('.card').removeClass('d-none');
    var filter = $(this).val(); // get the value of the input, which we filter on
    $('.card-deck').find('.card .card-body h4:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
})

//cats only button
$('#onlyCats').click(function (){
    $('.card').removeClass('d-none');
    var filter = $(this).val(); // get the value of the input, which we filter on
    $('.card-deck').find('.card .card-body h5:not(:contains("cat"))').parent().parent().addClass('d-none');
})

//dogs only button
$('#onlyDogs').click(function (){
    $('.card').removeClass('d-none');
    var filter = $(this).val(); // get the value of the input, which we filter on
    $('.card-deck').find('.card .card-body h5:not(:contains("dog"))').parent().parent().addClass('d-none');
})

// all pets
$('#allPets').click(function (){
    $('.card').removeClass('d-none');
    var filter = $(this).val(); // get the value of the input, which we filter on
    $('.card-deck').find('.card .card-body h5:(:contains())').parent().parent().addClass('d-none');
})

/* Script for zooming in and out of images */

// Get the modal
      var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById("myImg");
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
      var img = document.getElementsByClassName("modal-content")[0];

  // When the user clicks on <span> (x), close the modal
      img.onclick = function() {
        modal.style.display = "none";
      }

      // Get the modal
            var modal2 = document.getElementById("myModal2");

      // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img2 = document.getElementById("myImg2");
            var modalImg2 = document.getElementById("img01");
            var captionText = document.getElementById("caption");
            img2.onclick = function(){
              modal.style.display = "block";
              modalImg2.src = this.src;
              captionText.innerHTML = this.alt;
            }

 // Get the <span> element that closes the modal
    var img2 = document.getElementsByClassName("modal-content2")[0];

// When the user clicks on <span> (x), close the modal
    img2.onclick = function() {
      modal.style.display = "none";
    }

    // Get the modal
          var modal3 = document.getElementById("myModal3");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
          var img3 = document.getElementById("myImg3");
          var modalImg3 = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          img3.onclick = function(){
            modal.style.display = "block";
            modalImg3.src = this.src;
            captionText.innerHTML = this.alt;
          }

// Get the <span> element that closes the modal
  var img3 = document.getElementsByClassName("modal-content3")[0];

// When the user clicks on <span> (x), close the modal
  img3.onclick = function() {
    modal.style.display = "none";
  }

  // Get the modal
        var modal4 = document.getElementById("myModal4");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img4 = document.getElementById("myImg4");
        var modalImg4 = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img4.onclick = function(){
          modal.style.display = "block";
          modalImg4.src = this.src;
          captionText.innerHTML = this.alt;
        }

// Get the <span> element that closes the modal
var img4 = document.getElementsByClassName("modal-content4")[0];

// When the user clicks on <span> (x), close the modal
img4.onclick = function() {
  modal.style.display = "none";
}

  // Get the modal
        var modal5 = document.getElementById("myModal5");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img5 = document.getElementById("myImg5");
        var modalImg5 = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img5.onclick = function(){
          modal.style.display = "block";
          modalImg5.src = this.src;
          captionText.innerHTML = this.alt;
        }

// Get the <span> element that closes the modal
var img5 = document.getElementsByClassName("modal-content5")[0];

// When the user clicks on <span> (x), close the modal
img5.onclick = function() {
  modal.style.display = "none";
}

  // Get the modal
        var modal6 = document.getElementById("myModal6");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img6 = document.getElementById("myImg6");
        var modalImg6 = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img6.onclick = function(){
          modal.style.display = "block";
          modalImg6.src = this.src;
          captionText.innerHTML = this.alt;
        }

// Get the <span> element that closes the modal
var img6 = document.getElementsByClassName("modal-content6")[0];

// When the user clicks on <span> (x), close the modal
img6.onclick = function() {
  modal.style.display = "none";
}
