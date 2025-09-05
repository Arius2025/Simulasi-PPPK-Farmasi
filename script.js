let current = 0;
let score = 0;
let explanations = [];
let answered = []; // Variabel baru untuk menyimpan jawaban yang dipilih

// Bobot nilai per kategori sesuai ketentuan PPPK Farmasi
const categoryWeights = {
    "SKT": 10,
    "Manajerial": 7.2,
    "Sosio-Kultural": 7.2,
    "Wawancara": 4
};

function showQuestion() {
    if (!questions || !questions[current]) {
        document.getElementById("question-text").textContent = "Soal tidak tersedia.";
        return;
    }

    const q = questions[current];
    document.getElementById("question-number").textContent = `Soal ${current + 1}`;
    document.getElementById("question-text").textContent = q.question;

    // Logika untuk mengubah warna nomor soal
    const questionNumberEl = document.getElementById("question-number");
    if (answered[current] !== undefined && answered[current] !== null) {
        questionNumberEl.classList.remove('text-danger');
        questionNumberEl.classList.add('text-success');
    } else {
        questionNumberEl.classList.remove('text-success');
        questionNumberEl.classList.add('text-danger');
    }

    const form = document.getElementById("options-form");
    form.innerHTML = "";
    q.options.forEach((opt, i) => {
        const inputId = `option${i}`;
        const label = document.createElement("label");
        label.className = "form-check-label text-dark";
        label.innerHTML = `<input type="radio" name="option" id="${inputId}" value="${i}" class="form-check-input"> ${String.fromCharCode(65 + i)}. ${opt}`;
        const div = document.createElement("div");
        div.className = "form-check mb-2";
        div.appendChild(label);
        form.appendChild(div);
    });

    // Memuat jawaban yang sudah ada
    if (answered[current] !== undefined) {
        const selectedOption = document.querySelector(`input[name="option"][value="${answered[current]}"]`);
        if (selectedOption) {
            selectedOption.checked = true;
        }
    }

    // Mengelola tombol "Soal Sebelumnya"
    const prevButton = document.querySelector('button.btn-secondary');
    prevButton.style.display = current > 0 ? 'inline-block' : 'none';

    // Mengelola tombol "Soal Selanjutnya"
    const nextButton = document.querySelector('button.btn-primary');
    if (current === questions.length - 1) {
        nextButton.innerText = "Selesai";
    } else {
        nextButton.innerText = "Soal Selanjutnya";
    }

    updateNavigationStyles();
}

function nextQuestion() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        answered[current] = parseInt(selected.value);
    } else {
        // Jika tidak ada jawaban, tetap simpan null
        answered[current] = null;
    }
    
    // Pindah ke soal berikutnya
    if (current < questions.length - 1) {
        current++;
        showQuestion();
    } else {
        // Jika sudah di soal terakhir, hitung skor dan selesai
        submitQuiz();
    }
}

function previousQuestion() {
    // Simpan jawaban sebelum pindah
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        answered[current] = parseInt(selected.value);
    } else {
        answered[current] = null;
    }

    if (current > 0) {
        current--;
        showQuestion();
    }
}

function jumpToQuestion(index) {
    // Simpan jawaban sebelum pindah
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        answered[current] = parseInt(selected.value);
    } else {
        answered[current] = null;
    }

    current = index;
    showQuestion();
}

function submitQuiz() {
    // Menghitung total skor dan penjelasan dari array 'answered'
    questions.forEach((q, index) => {
        const answer = answered[index];
        const weight = categoryWeights[q.category] || 0;
        const point = (answer === q.correct) ? weight : 0;
        score += point;

        explanations.push({
            category: q.category,
            question: q.question,
            correct: `${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}`,
            explanation: q.explanation,
            score: point
        });
    });

    localStorage.setItem("score", Math.round(score));
    localStorage.setItem("explanations", JSON.stringify(explanations));
    window.location.href = "hasil.html";
}

function updateTimer() {
    const start = parseInt(localStorage.getItem("startTime"));
    const now = Date.now();
    const elapsed = Math.floor((now - start) / 1000);
    const min = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const sec = String(elapsed % 60).padStart(2, '0');
    document.getElementById("timer").textContent = `${min}:${sec}`;
}

function createQuestionNavigation() {
    const navContainer = document.getElementById("question-nav");
    navContainer.innerHTML = '';
    for (let i = 0; i < questions.length; i++) {
        const item = document.createElement("div");
        item.classList.add("question-nav-item");
        item.innerText = i + 1;
        item.onclick = () => jumpToQuestion(i);
        navContainer.appendChild(item);
    }
}

function updateNavigationStyles() {
    const navItems = document.querySelectorAll('.question-nav-item');
    navItems.forEach((item, index) => {
        item.classList.remove('active', 'answered');
        if (answered[index] !== undefined && answered[index] !== null) {
            item.classList.add('answered');
        }
        if (index === current) {
            item.classList.add('active');
        }
    });
}

window.onload = function () {
    const storedName = localStorage.getItem("namaPeserta");
    if (storedName) {
        document.getElementById("namaPeserta").textContent = storedName;
        showQuestion();
        setInterval(updateTimer, 1000);
        createQuestionNavigation();
    } else {
        // Redirect jika nama tidak ada
        window.location.href = "login.html";
    }
};