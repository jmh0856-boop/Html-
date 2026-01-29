// 1. 회원가입 및 유효성 검사 기능
document.querySelector('.registration-form').addEventListener('submit', function(e) {
    e.preventDefault(); // 페이지 새로고침 방지

    const userId = document.getElementById('user-id').value;
    const userPw = document.getElementById('password').value;
    const userPwConfirm = document.getElementById('password-confirm').value;
    const userName = document.getElementById('user-name').value;
    // 성별 선택은 sex로 처리
    const userSex = document.querySelector('input[name="sex"]:checked').value;

    // [챌린지] 유효성 검사
    if (userId.length < 5) {
        alert("아이디는 5글자 이상이어야 합니다.");
        return;
    }

    if (userPw !== userPwConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    // [기본 요구 사항] 알림창 띄우기
    alert(`회원가입 완료!\n아이디: ${userId}\n이름: ${userName}\n성별: ${userSex}`);

    // [챌린지] 페이지 전환
    window.location.href = "welcome.html";
}); // 여기서 폼 제출 이벤트 끝

// 2. 다크모드 토글 기능 (폼 제출 이벤트 밖으로 분리)
const toggleBtn = document.getElementById('dark-mode-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});