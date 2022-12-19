// 모튼버튼에 붙은 orange 클래스명 제거
// 버튼 0 누르면 버튼 0의 클래스명 오렌지 추가
// 모든 div에 붙은 show 클래스명 제거
// div 0에 show 클래스명 추가

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
