const main = document.querySelector('.main')
  drinks = document.querySelector('#drink')
  lavash = document.querySelector('#lavash')
  burger = document.querySelector('#burger')
  hotdog = document.querySelector('#hotdog')
  order = document.querySelector('#order')

  drink.addEventListener('click', ()=> {
    main.innerHTML = `
      <div class="drink">
        <img src="https://st.depositphotos.com/1000647/4993/i/450/depositphotos_49934737-stock-photo-can-of-pepsi-cola.jpg" alt="product" >
      </div>
    `
  })

  lavash.addEventListener('click', ()=> {
    main.innerHTML = `
      <div class="drink">
        <img src="https://daryo.uz/cache/2022/05/photo_2022-05-26_02-46-44-700x467.jpg" alt="product" >
      </div>
    `
  })
  burger.addEventListener('click', ()=> {
    main.innerHTML = `
      <div class="drink">
        <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="product" >
      </div>
    `
  })

  hotdog.addEventListener('click', ()=> {
    main.innerHTML = `
      <div class="drink">
        <img src="https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.webp?b=1&s=170667a&w=0&k=20&c=XjgFo-alCc10AvW2Iv0OvlFa33ILsmKkOinbSt77ZVs=" alt="product" >
      </div>
    `
  })
