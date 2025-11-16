// THEME TOGGLE
const lightBtn = document.getElementById('lightMode');
const darkBtn = document.getElementById('darkMode');
const html = document.documentElement;

lightBtn.addEventListener('click', () => {
    html.removeAttribute('data-theme');
    lightBtn.classList.add('active');
    darkBtn.classList.remove('active');
    localStorage.setItem('theme', 'light');
});

darkBtn.addEventListener('click', () => {
    html.setAttribute('data-theme', 'dark');
    darkBtn.classList.add('active');
    lightBtn.classList.remove('active');
    localStorage.setItem('theme', 'dark');
});

if (localStorage.getItem('theme') === 'dark') {
    html.setAttribute('data-theme', 'dark');
    darkBtn.classList.add('active');
    lightBtn.classList.remove('active');
}

// AUTO SHOW/HIDE "OTHER" FIELDS
document.querySelectorAll('input[name="goal"]').forEach(cb => {
    cb.addEventListener('change', () => {
        const hasOther = Array.from(document.querySelectorAll('input[name="goal"]')).some(c => c.checked && c.value === 'other');
        document.getElementById('goalOther').style.display = hasOther ? 'block' : 'none';
    });
});

// FORM VALIDATION & SUBMIT
const form = document.getElementById('aiWebForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--danger)';
            valid = false;
        } else {
            field.style.borderColor = 'var(--gray-200)';
        }
    });

    if (valid) {
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Yêu cầu đã được gửi thành công! AI sẽ phân tích và tạo website theo yêu cầu.');
            submitBtn.innerHTML = 'Submit Gửi yêu cầu';
            submitBtn.disabled = false;
        }, 1500);
    } else {
        alert('Vui lòng điền đầy đủ các trường bắt buộc.');
    }
});

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.setAttribute('data-scroll', 'visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('[data-scroll]').forEach(el => observer.observe(el));

// AUTO SET CURRENT DATE
document.getElementById('requestDate').value = new Date().toISOString().split('T')[0];
