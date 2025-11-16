// Hiện "other" nếu chọn khác
document.getElementById('websiteGoal').addEventListener('change', function(){
    document.getElementById('goalOther').style.display = this.value==='other' ? 'block':'none';
});
// Set ngày hiện tại
document.getElementById('requestDate').value = new Date().toISOString().split('T')[0];
// Gửi form demo
document.getElementById('webRequestForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('✅ Yêu cầu đã gửi thành công!');
});
