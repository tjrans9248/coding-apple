// 모튼버튼에 붙은 orange 클래스명 제거
// 버튼 0 누르면 버튼 0의 클래스명 오렌지 추가
// 모든 div에 붙은 show 클래스명 제거
// div 0에 show 클래스명 추가

// var car2 = { name: '소나타', price: [50000, 3000, 4000] };

// document.querySelector('.name').innerHTML = car2.name;
// document.querySelector('.price').innerHTML = car2.price[1];

// let products = [
//   { id: 0, price: 70000, title: 'Blossom Dress' },
//   { id: 1, price: 50000, title: 'Springfield Shirt' },
//   { id: 2, price: 60000, title: 'Black Monastery' },
// ];

// document.querySelector('.title0').innerHTML = products[0].title;
// document.querySelector('.title1').innerHTML = products[1].title;
// document.querySelector('.title2').innerHTML = products[2].title;
// document.querySelector('.price0').innerHTML = '가격 : ' + products[0].price;
// document.querySelector('.price1').innerHTML = '가격 : ' + products[1].price;
// document.querySelector('.price2').innerHTML = '가격 : ' + products[2].price;

for (let i = 0; i < $('.tab-button').length; i++) {
  $('.tab-button')
    .eq(i)
    .on('click', function () {
      // document.querySelectorAll('.tab-button').classList.remove('.orange');
      // document.querySelectorAll('.tab-button')[0].classList.add('orange');
      // document.querySelector('.tab-button').classList.remove('show');
      // document.querySelectorAll('.tab-content')[0].classList.add('show');
      $('.tab-button').removeClass('orange');
      $('.tab-button').eq(i).addClass('orange');
      $('.tab-content').removeClass('show');
      $('.tab-content').eq(i).addClass('show');
    });
}

// $('.tab-button')
//   .eq(1)
//   .on('click', function () {
//     // document.querySelectorAll('.tab-button')[1].classList.remove('orange');
//     // document.querySelectorAll('.tab-button')[1].classList.add('orange');
//     // document.querySelectorAll('.tab-content')[1].classList.add('show');
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
//   });

// $('.tab-button')
//   .eq(2)
//   .on('click', function () {
//     // document.querySelectorAll('.tab-button')[2].classList.remove('orange');
//     // document.querySelectorAll('.tab-button')[2].classList.add('orange');
//     // document.querySelectorAll('.tab-content')[2].classList.add('show');
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
//   });

document
  .querySelectorAll('.form-select')[0]
  .addEventListener('input', function (e) {
    var value = e.currentTarget.value;

    if (value === '셔츠') {
      document.querySelectorAll('.form-select')[1].classList.remove('hide');
    } else {
      document.querySelectorAll('.form-select')[1].classList.add('hide');
    }
  });

// $('.form-select')
//   .eq(0)
//   .on('input', function () {
//     var value = $('.form-select').eq(0).val();

//     if (value === '셔츠') {
//       $('.form-select').eq(1).removeClass('hide');
//     }
//   });
