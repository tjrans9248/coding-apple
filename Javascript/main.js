// // // 모튼버튼에 붙은 orange 클래스명 제거
// // // 버튼 0 누르면 버튼 0의 클래스명 오렌지 추가
// // // 모든 div에 붙은 show 클래스명 제거
// // // div 0에 show 클래스명 추가

// // // var car2 = { name: '소나타', price: [50000, 3000, 4000] };

// // // document.querySelector('.name').innerHTML = car2.name;
// // // document.querySelector('.price').innerHTML = car2.price[1];
let products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

// var arr = [1, 2, 3];
// var newArr = JSON.stringify(arr);
// localStorage.setItem('num', newArr);
// var out = localStorage.getItem('num');
// console.log(JSON.parse(out));
// var a = JSON.parse(out).push(4);

products.forEach((a, i) => {
  let card = `
  <div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5 class="title">${a.title}</h5>
  <p>가격 : ${a.price}</p>
  <button class="buy">구매</button>
  </div>
  `;
  document.querySelector('.row').insertAdjacentHTML('beforeend', card);
});

$('.buy').click(function (e) {
  var title = $(e.target).siblings('h5').text();

  if (localStorage.getItem('cart') !== null) {
    var out = JSON.parse(localStorage.cart);
    out.push(title);
    localStorage.setItem('cart', JSON.stringify(out));
  } else {
    localStorage.setItem('cart', JSON.stringify([title]));
  }
});

document.getElementById('under').addEventListener('click', function () {
  let filter = products.filter(item => {
    return item.price > 50000;
  });
  console.log(filter);

  document.querySelector('.row').innerHTML = '';

  filter.forEach(a => {
    let card = `
    <div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5>${a.title}</h5>
    <p>가격 : ${a.price}</p>
    </div>
    `;
    document.querySelector('.row').insertAdjacentHTML('beforeend', card);
  });
});

document.getElementById('price').addEventListener('click', function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });

  document.querySelector('.row').innerHTML = '';

  products.forEach(a => {
    let card = `
    <div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5>${a.title}</h5>
    <p>가격 : ${a.price}</p>
    </div>
    `;
    document.querySelector('.row').insertAdjacentHTML('beforeend', card);
  });
});

function repeat(data) {
  data.forEach(a => {
    let add = `
      <div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100" />
      <h5>${a.title}</h5>
      <p>가격 : ${a.price}</p>
      </div>`;

    document.querySelector('.row').insertAdjacentHTML('beforeend', add);
  });
}

let count = 1;

document.getElementById('more').addEventListener('click', function (i) {
  if (count === 1) {
    $.get(`https://codingapple1.github.io/js/more1.json`).done(data => {
      console.log(data);

      repeat(data);
    });
    count += 1;
  } else if (count === 2) {
    $.get(`https://codingapple1.github.io/js/more2.json`).done(data => {
      console.log(data);
      repeat(data);
    });
    count += 1;
  }
});

// //     // 자바스크립트로 html 생성법 1
// //     // let p = document.createElement('p');
// //     // p.innerHTML = '안녕';
// //     // document.querySelector('#test').appendChild(p);

// // // // 자바스크립트로 html 생성법 2
// // // let add = '<p>헬로우</p>';
// // // document.querySelector('#test').insertAdjacentHTML('beforeend', add);
// // // $('#test').append(add);

// // // document.querySelector('.title0').innerHTML = products[0].title;
// // // document.querySelector('.title1').innerHTML = products[1].title;
// // // document.querySelector('.title2').innerHTML = products[2].title;
// // // document.querySelector('.price0').innerHTML = '가격 : ' + products[0].price;
// // // document.querySelector('.price1').innerHTML = '가격 : ' + products[1].price;
// // // document.querySelector('.price2').innerHTML = '가격 : ' + products[2].price;

// // for (let i = 0; i < $('.tab-button').length; i++) {
// //   $('.tab-button')
// //     .eq(i)
// //     .on('click', function () {
// //       // document.querySelectorAll('.tab-button').classList.remove('.orange');
// //       // document.querySelectorAll('.tab-button')[0].classList.add('orange');
// //       // document.querySelector('.tab-button').classList.remove('show');
// //       // document.querySelectorAll('.tab-content')[0].classList.add('show');
// //       $('.tab-button').removeClass('orange');
// //       $('.tab-button').eq(i).addClass('orange');
// //       $('.tab-content').removeClass('show');
// //       $('.tab-content').eq(i).addClass('show');
// //     });
// // }

// // // $('.tab-button')
// // //   .eq(1)
// // //   .on('click', function () {
// // //     // document.querySelectorAll('.tab-button')[1].classList.remove('orange');
// // //     // document.querySelectorAll('.tab-button')[1].classList.add('orange');
// // //     // document.querySelectorAll('.tab-content')[1].classList.add('show');
// // //     $('.tab-button').removeClass('orange');
// // //     $('.tab-button').eq(1).addClass('orange');
// // //     $('.tab-content').removeClass('show');
// // //     $('.tab-content').eq(1).addClass('show');
// // //   });

// // // $('.tab-button')
// // //   .eq(2)
// // //   .on('click', function () {
// // //     // document.querySelectorAll('.tab-button')[2].classList.remove('orange');
// // //     // document.querySelectorAll('.tab-button')[2].classList.add('orange');
// // //     // document.querySelectorAll('.tab-content')[2].classList.add('show');
// // //     $('.tab-button').removeClass('orange');
// // //     $('.tab-button').eq(2).addClass('orange');
// // //     $('.tab-content').removeClass('show');
// // //     $('.tab-content').eq(2).addClass('show');
// // //   });

// // var pants = [28, 30, 32];
// // var shirts = [90, 95, 100, 105];

// // var obj = { name: 'yang', age: 30 };

// // for (var key in obj) {
// //   console.log(obj[key]);
// // }

// // document
// //   .querySelectorAll('.form-select')[0]
// //   .addEventListener('input', function (e) {
// //     var value = e.currentTarget.value;

// //     if (value === '셔츠') {
// //       document.querySelectorAll('.form-select')[1].innerHTML = '';
// //       // var option = `<option>90</option>
// //       // <option>95</option>`;
// //       // document
// //       //   .querySelectorAll('.form-select')[1]
// //       //   .insertAdjacentHTML('beforeend', option);
// //       document.querySelectorAll('.form-select')[1].classList.remove('hide');
// //       shirts.forEach(x => {
// //         $('.form-select').eq(1).append(`<option>${x}</option>`);
// //       });
// //     } else {
// //       document.querySelectorAll('.form-select')[1].classList.add('hide');
// //     }

// //     if (value === '바지') {
// //       // var option = document.createElement('option');
// //       // option.innerHTML = '28';
// //       $('.form-select').eq(1).html('');
// //       // document.querySelectorAll('.form-select')[1].appendChild(option);
// //       document.querySelectorAll('.form-select')[1].classList.remove('hide');

// //       pants.forEach(function (item) {
// //         $('.form-select').eq(1).append(`<option>${item}</option>`);
// //       });
// //     }
// //   });

// // // $('.form-select')
// // //   .eq(0)
// // //   .on('input', function () {
// // //     var value = $('.form-select').eq(0).val();

// // //     if (value === '셔츠') {
// // //       $('.form-select').eq(1).removeClass('hide');
// // //     }
// // //   });
