function back() {
    window.location.href = "projects.html";
}

// 1. Ambil parameter id dari URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

// 2. Ambil semua project dari localStorage
let projects = JSON.parse(localStorage.getItem("projects")) || [];

// 3. Cari project dengan id yg sesuai
const project = projects.find(p => p.id == projectId);

if (project) {
    document.getElementById("detailContainer").innerHTML = `
        <div class="card">
        <h2>${project.name}</h2>
        <p>${project.description}</p>
        </div>
    `;
    } else {
    document.getElementById("detailContainer").innerHTML = "<p>Project tidak ditemukan</p>";
}
