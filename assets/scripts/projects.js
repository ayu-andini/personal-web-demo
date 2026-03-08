function back() {
    window.location.href = "index.html";
}

// ---- DATA DUMMY -----
// const projects = [
//     {
//         id: 1,
//         name: 'Dumbways Mobile App',
//         description: 'App for dumbways student...',
//         // image: 'images/project1.jpg'
//     },
//     {
//         id: 2,
//         name: 'Dumbways Web App',
//         description: 'Web app for dumbways...',
//         // image: 'images/project2.jpg'
//     }
// ];

// ---- 1. LOAD DATA DARI LOCAL STORAGE -----
let projects = JSON.parse(localStorage.getItem('projects')) || [];

// MENGHITUNG ID TERAKHIR
let projectId = projects.length > 0 ? 
    projects[projects.length - 1].id + 1 : 1;

// ---- 2. UTK MENYIMPAN DATA BARU KE LOCAL STORAGE -----
function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

// ---- DYNAMIC RENDERING - PROJECTS -----
function renderProjects() {
    const container = document.getElementById('projectList')

    let projectsHTML = '';

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        
        projectsHTML += `
        <div class="card">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="card-actions">
                <button>Edit</button>
                <button>Delete</button>
                <a href="project-detail.html?id=${project.id}">Detail</a>
            </div>
        </div>`
    }
    container.innerHTML = projectsHTML
}
renderProjects();

// ---- MENANGANI FORM SUBMIT -----
const form = document.getElementById('projectForm')

form.addEventListener('submit', function(event){
    event.preventDefault(); // hentikan reload halaman

    const name = document.getElementById('projectName').value;
    const description = document.getElementById('description').value;

    const newProject = {
        id: projectId,
        name: name,
        description: description,
        };
    
    projects.push(newProject);
    saveProjects();
    renderProjects();   // re-render list

    form.reset()
})