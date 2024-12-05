document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector('body');
  const imgs = document.querySelectorAll('main .content img');

  imgs.forEach(link => {
    link.addEventListener('click', () => {
      body.classList.toggle('toggle-scroll');

      let black_box = document.createElement('div');
      black_box.classList.add('black-box');

      let close_btn = document.createElement('div');
      close_btn.classList.add('close-btn');
      close_btn.innerHTML = 'X';

      let image_box = document.createElement('div');
      image_box.classList.add('image-box');

      let full_image = document.createElement('img');
      full_image.classList.add('full-image');
      full_image.setAttribute('src', link.getAttribute('src').replace('Mini', 'Original'));

      let caption_image = document.createElement('p');
      caption_image.classList.add('caption-image');
      caption_image.innerHTML = link.getAttribute('alt');

      image_box.appendChild(full_image);
      black_box.appendChild(close_btn);
      black_box.appendChild(image_box);
      black_box.appendChild(caption_image);
      document.body.appendChild(black_box);

      close_btn.addEventListener('click', () => {
        full_image.remove();
        image_box.remove();
        black_box.remove();
        close_btn.remove();
      });
    })
  });


  // const content = document.querySelectorAll('main .content');

  // console.log(imgs);
  // console.log(content);

  // imgs.forEach((link, index) => {
  //   console.log(link.naturalWidth, 'x', link.naturalHeight);
  //   if(link.naturalHeight > link.naturalWidth) {
  //     console.log(link);
  //     // link.style.cssText = 'grid-row: 2 / 4';
  //   }
  // });
});