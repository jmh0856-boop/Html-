// 페이지가 로드되자마자 이름을 물어봅니다
const userName = prompt("당신의 이름은 무엇인가요?");

if (userName) {
    alert(`${userName}님, 환영합니다!`)}

    else {
        alert("익명님 환영합니다.")
}

// 필요한 요소들을 선택 (DOM)
const chatform = document.querySelector('.chat-form');
const messageInput = document.querySelector('.chat-from__msg');

// 전송 버튼(form)이 눌렀을 때 실행할 함수
chatform.addEventListener('submit', function(event) {
    // 새로고침 방지 (백엔드 전송 전 필수 단계!)
    event.preventDefault();

    // 입력창의 값(문자열)을 변수에 담기
    const message = messageInput.value;

    // 조건문: 비어있지 않을 때만 동작
    if (message !== undefined && message !=="") {
        // 콘솔 출력과 템플릿 리터럴 활용
        console.log(`[user의 메세지]: ${message}`);

        // 입력창 띄우기
        alert(`전송된 내용: ${message}`);

        //입력창 비우기
        messageInput.value = "";
    } else {
        alert("메세지를 입력해주세요!");
    }
});
