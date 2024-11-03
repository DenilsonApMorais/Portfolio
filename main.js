
function updateProfieInfo(profileData) {
    const photo = document.getElementById('photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('name')
    name.innerText = profileData.name

    const profession = document.getElementById('profession')
    profession.innerText = profileData.job

    const location = document.getElementById('location')
    location.innerText = profileData.location

    const phone = document.getElementById('phone')
    phone.innerText = profileData.phone

    const email = document.getElementById('email')
    email.innerText = profileData.email
}

function getSkills(profileData){
    const softSkills = document.getElementById('softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}
function getHardSkills(profileData){
    const hardSkills = document.getElementById('hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => 
        `<li>
            <img src="${skill.logo}" alt="react" title="${skill.name}">
        </li>`
    ).join('')
}

function getIdiomas(profileData){
    const languages = document.getElementById('languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function getPotfolio(profileData) {
    const portfolio = document.getElementById('portfolio')
    portfolio.innerHTML = profileData.portfolio.map(p => ` <li>
                        <span class="title git">${p.name}}</span>
                        <a href="${p.url}" target="_blank">Link para o projeto</a>
                    </li> `).join('')
}   

(async () => {
    const profileData = await fetchProfileData()
    updateProfieInfo(profileData)
    getSkills(profileData)
    getHardSkills(profileData)
    getIdiomas(profileData)
    getPotfolio(profileData)
})()