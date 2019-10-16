  var i = 0; // Start point
  var image = [];
  var time = 1000;

  image[0] = 'images/inc_splotch.png';
  image[1] = 'images/inc-cover/inc2.jpg';
  image[2] = 'images/inc-cover/inc3.jpg';
  image[3] = 'images/inc-cover/inc4.jpg';
  image[4] = 'images/inc-cover/inc5.jpg';
  image[5] = 'images/inc-cover/inc6.jpg';
  image[6] = 'images/inc-cover/inc8.jpg';
  image[7] = 'images/inc-cover/inc9.jpg';
  image[8] = 'images/inc-cover/inc10.jpg';
  image[9] = 'images/inc-cover/inc11.jpg';
  image[10] = 'images/inc-cover/inc12.jpg';
  image[11] = 'images/inc-cover/inc13.jpg';
  image[12] = 'images/inc-cover/inc12.jpg';
  image[13] = 'images/inc-cover/inc15.jpg';
  image[14] = 'images/inc-cover/inc16.jpg';
  image[15] = 'images/inc-cover/inc17.jpg';
  image[16] = 'images/inc-cover/inc18.jpg';
  image[17] = 'images/inc-cover/inc19.jpg';
  image[18] = 'images/inc-cover/inc20.jpg';
  image[19] = 'images/inc-cover/inc21.jpg';
  image[20] = 'images/inc-cover/inc22.jpg';
  image[21] = 'images/inc-cover/inc23.jpg';
  image[22] = 'images/inc-cover/inc25.jpg';
  image[23] = 'images/inc-cover/inc26.jpg';
  image[24] = 'images/inc-cover/inc28.jpg';
  image[25] = 'images/inc-cover/inc29.jpg';
  image[26] = 'images/inc-cover/inc30.jpg';
  image[27] = 'images/inc-cover/inc31.jpg';
  image[28] = 'images/inc-cover/inc32.jpg';
  image[29] = 'images/inc-cover/inc33.jpg';
  image[30] = 'images/inc-cover/inc34.jpg';
  image[31] = 'images/inc-cover/inc35.jpg';
  image[32] = 'images/inc-cover/inc36.jpg';
  image[33] = 'images/inc-cover/inc38.jpg';
  image[34] = 'images/inc-cover/inc39.jpg';
  image[35] = 'images/inc-cover/inc40.jpg';
  image[36] = 'images/inc-cover/inc41.jpg';
  image[37] = 'images/inc-cover/inc42.jpg';
  image[38] = 'images/inc-cover/inc43.jpg';
  image[39] = 'images/inc-cover/inc44.jpg';
  image[40] = 'images/inc-cover/inc45.jpg';

  function changeImg(){
    document.slide.src = image[i];
    if(i < image.length - 1){
      i++;
    } else {
      i = 0;
    }
    setTimeout("changeImg()", time);
  }
  window.onload = changeImg;
