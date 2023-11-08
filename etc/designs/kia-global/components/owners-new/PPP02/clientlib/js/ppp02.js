'use strict';

//#Component : PPP02
window.addEventListener("DOMContentLoaded", popupContentHandler);

function popupContentHandler()  {
  const checkAll = document.querySelector('.select-all');
  const checkboxes = document.getElementsByClassName('product-list');
  const deleteBtn = document.querySelector('.cmpnt-ppp02__button-delete');
  const removeBtns = document.querySelectorAll('.cmpnt-ppp02__button-close');
  const countElem = document.querySelectorAll('.cmpnt-ppp02__count');

  // 체크박스 상태 업데이트
  function updateCheckboxes() {
    let checkedCnt = document.querySelectorAll('.product-list:checked').length;
    let totalCnt = checkboxes.length;
    checkAll.checked = checkedCnt === totalCnt;
    console.log('totalCnt', totalCnt);
    console.log('checkedCnt', checkedCnt);
    toggleDeleteBtn();
  }
  
  // 전체 선택
  checkAll.addEventListener('click', function() {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = checkAll.checked;
    }
    updateCheckboxes();
  });

  
  //개별 체크박스 선택시 상태 업데이트
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', updateCheckboxes);
  }


  // Delete 버튼 클릭시 체크된 요소 삭제 및 업데이트
  deleteBtn.addEventListener('click', function() {
    let checkedCheckboxes = document.querySelectorAll('.product-list:checked');
    checkedCheckboxes.forEach(function(checkbox) {
      checkbox.closest('.cmpnt-ppp02__item').remove();
      updateCheckboxes(); // 삭제 후 체크박스 상태 업데이트
      toggleDeleteBtn();
    });
  });
  

  // Remove(x) 버튼 클릭시 체크된 요소 삭제 및 업데이트
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', function() {
      let listItem = removeBtns[i].closest('.cmpnt-ppp02__item');
      const checkbox = listItem.querySelector('.product-list');
      if (checkbox.checked) {
        listItem.remove();
        updateCheckboxes();
      }
    });
  }


  // 삭제 후 체크박스 개수가 0이면 deleteBtn 비활성화
  function toggleDeleteBtn() {
    let checkedCnt = document.querySelectorAll('.product-list:checked').length;
    deleteBtn.classList.toggle('is-active', checkedCnt > 0);

    // 모든 아이템 삭제시 버튼 비활성화
    if (checkboxes.length === 0) {
      checkAll.checked = false;
    }
  }


  // 리스트 개수 카운트
  for (let i = 0; i < countElem.length; i++) {
    countElem[i].addEventListener('click', handleCountButtonClick);
  }

  function handleCountButtonClick(e) {
    let countInput = e.target.closest('.cmpnt-ppp02__count').querySelector('.cmpnt-ppp02__count-input');
    let valueNum = parseInt(countInput.value);

    if (e.target.classList.contains('count-btn--minus')) {
      //0 이하값 방지 
      if (valueNum <= 1) {
        valueNum = 1;
      } else {
        valueNum -= 1;
      }
    } else if (e.target.classList.contains('count-btn--plus')) {
      valueNum += 1;
    }

    countInput.setAttribute('value', valueNum);
  }
};