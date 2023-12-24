let getfirstval, password, trigger1, trigger2 = ''
let wrongpass = []
let settingBackground = ''
let clearpage = false
let restart_off = false
alert('To power on phone, press the power button for three seconds and then release')
function datetime() {
    let current_time = new Date()
    let hours = current_time.getHours().toString().padStart(2, 0)
    let minute = current_time.getMinutes().toString().padStart(2, 0)
    let month = current_time.getMonth() + 1
    let day = current_time.getDay() + 1
    let date = current_time.getDate().toString().padStart(2, 0)
    let year = current_time.getFullYear()
    let formattedTime = hours + ":" + minute
    clock.innerHTML = `<h1>${formattedTime}</h1>`
    time.innerHTML = formattedTime
    day == '7' ? day = 'Sat' : ''; day == '6' ? day = 'Fri' : ''; day == '5' ? day = 'Thur' : ''; day == '4' ? day = 'Wed' : ''; day == '3' ? day = 'Tue' : ''; day == '2' ? day = 'Mon' : ''; day == '1' ? day = 'Sun' : '';

    month == '1' ? month = 'January' : ''; month == '2' ? month = 'Fabuary' : ''; month == '3' ? month = 'March' : ''; month == '4' ? month = 'April' : ''; month == '5' ? month = 'May' : ''; month == '6' ? month = 'June' : ''; month == '7' ? month = 'July' : ''; month == '8' ? month = 'August' : ''; month == '9' ? month = 'September' : ''; month == '10' ? month = 'October' : ''; month == '11' ? month = 'November' : ''; month == '12' ? month = 'December' : '';
    formattedDate = day + ',' + month + ' ' + date + ',' + year
    calenda.innerHTML = `${formattedDate}`
    calend.innerHTML = `${formattedDate}`
}
if (loadpage.style.display == 'none') {
    homebar.style.display = 'none'
    alert()
}
setInterval(datetime, 1000);
function triggeron() {
    let first = new Date()
    trigger1 = first.getSeconds()
}
function triggeroff() {
    let first = new Date()
    trigger2 = first.getSeconds()
    if (trigger2 - trigger1 >= 2) {
        loadpage.style.display = 'flex'
        let timer = () => {
            loadpage.style.display = 'flex' ? loadpage.style.display = 'none' : loadpage.style.display = 'flex'
            cover.style.display = 'block'
            restart_off = true
        }
        setTimeout(timer, 11000);        
        if (cover.style.display == 'block'||home.style.display == 'block'||clearpage) {
            loadpage.style.display = 'flex'
            cover.style.display = 'none'
            passwordpage.style.display = 'none'
            home.style.display = 'none'
            settingsloading.style.display = 'none'
            settings.style.display = 'none'
            systempage.style.display = 'none'
            aboutphone.style.display = 'none'
            setpassword.style.display = 'none'
            securitypage.style.display = 'none'
            music.style.display = 'none'
            themepage.style.display='none'
            wallpaperpage.style.display = 'none'
            fontspage.style.display = 'none'
        }
        
    }
}
function navigatetopasswordpage() {
    cover.style.display = 'none'
    passwordpage.style.display = 'block'
    restart_off = true
    if (!getfirstval) {
        passwordpage.style.display = 'none'
        home.style.display = 'block'
        clearpage = true
    }
}
function backtocoverpage() {
    cover.style.display = 'block'
    passwordpage.style.display = 'none'
}
function passwordnumber(message) {
    inputpassword.value += message
}
function deletecharecter() {
    inputpassword.value = inputpassword.value.slice(0, -1)
}
function submit() {
    if (inputpassword.value == getfirstval) {
        passwordpage.style.display = 'none'
        home.style.display = 'block'
        inputpassword.value = ''
    } else {
        wrong.innerHTML = `<p>Wrong Password</p>`
        inputpassword.value = ''
    }
    wrongpass.push(wrong.innerHTML)
    wrongpass.forEach((element, i) => {
        if (i == 4) {
            let index = 14
            let timer = () => { countdown.innerHTML = `${index--}` }
            let clearpassowrd = () => inputpassword.value = ''
            let disablenumber = setInterval(clearpassowrd, 1)
            let passwordcount = setInterval(timer, 1000);
            wrong.innerHTML = `Try again in <span id="countdown">15</span> seconds`
            setTimeout(() => {
                clearInterval(passwordcount)
                clearInterval(disablenumber)
                wrong.innerHTML = ''
            }, 15000);
        }
    });

}
function navigatetosettingspage() {
    home.style.display = 'none'
    settingsloading.style.display = 'block'
    clearpage = true
    let timer = () => {
        settingsloading.style.display = 'none'
        settings.style.display = 'block'
        clearpage = true
    }
    setTimeout(timer, 2000);
}
function toggledata(){
    if (rb.style.backgroundColor == 'white') {
        datatoggle.style.animationFillMode = 'forwards'
        datatoggle.style.animationPlayState = 'running'
        rb.style.backgroundColor = 'rgb(246, 240, 240)'
    }else{
        datatoggle.style.animationFillMode = 'backwards'
        rb.style.backgroundColor = 'white'
    }
}
function backtohomepage() {
    settings.style.display = 'none'
    music.style.display = 'none'
    home.style.display = 'block'
    themepage.style.display = 'none'
}
function navigatetosecuritypage() {
    settings.style.display = 'none'
    securitypage.style.display = 'block'
    clearpage=true 
}
function backtosettingspage() {
    securitypage.style.display = 'none'
    settings.style.display = 'block'
    systempage.style.display = 'none'
}
function addpassword() {
    securitypage.style.display = 'none'
    setpassword.style.display = 'block'
    clearpage = true
}
function setpasswordnumber(message) {
    inputnewpassword.value += message
    retypenewpassword.value += message
}
function setpasswordsubmit() {
    let checklength = inputnewpassword.value
    if (checklength.length < 4) {
        error.innerHTML = 'Should be at least 4 digits'
        inputnewpassword.value = ''
    }
    if (checklength.length >= 4) {
        error.innerHTML = ''
        inputnewpassword.style.display = 'none'
        retypenewpassword.style.display = 'block'
        retypenewpassword.style.marginTop = '150px'
        saveinputpassword.style.display = 'block'
        getfirstval = inputnewpassword.value
        mark.style.display = 'none'
        inputnewpassword.value = ''
    }
    retypenewpassword.value = ''
}
function setdeletecharecter() {
    inputnewpassword.value = inputnewpassword.value.slice(0, -1)
    retypenewpassword.value = retypenewpassword.value.slice(0, -1)
}
function savepassword() {
    if (retypenewpassword.value == getfirstval) {
        password = getfirstval
        setpassword.style.display = 'none'
        securitypage.style.display = 'block'
        retypenewpassword.value = ''
    } else {
        error.innerHTML = 'PINs Don′t match '
        retypenewpassword.style.display = 'none'
        inputnewpassword.style.display = 'block'
        retypenewpassword.value = ''
        inputnewpassword.value = ''
        getfirstval = ''
        saveinputpassword.style.display = 'none'
        mark.style.display = 'flex'
    }
}
function removepassword() {
    if (getfirstval) {
        nopassword.style.display = 'block'
        none.style.color = 'white'
    } else {
        none.style.color = 'rgb(173, 171, 171)'
    }
}
function remove(message) {
    if (message == 'yes') {
        getfirstval = ''
        nopassword.style.display = 'none'
    } else {
        nopassword.style.display = 'none'
    }
}
function backtosecuritypage() {
    setpassword.style.display = 'none'
    securitypage.style.display = 'block'
}
function navigatetoaboutpage(){
    aboutphone.style.display = 'block'
    systempage.style.display = 'none'
    clearpage = true
}
function backtosystempage() {
    aboutphone.style.display = 'none'
    systempage.style.display = 'block'
}
function navigatetosystempage() {
    let tim = new Date()
    settings.style.display = 'none'
    systempage.style.display = 'block'
    systemdate_time.innerHTML = `${tim}`
}
function navigatetomusicpage() {
    music.style.display = 'block'
    home.style.display = 'none'
    clearpage = true
}
function audio(message) {
    if (message.paused) {
        player.style.display = 'block'
        lastaudio.style.marginBottom = '50px'
        player.src = message.src
        player.play();
    } else {
        player.pause();
        player.style.display = 'none'
        lastaudio.style.marginBottom = '0px'
    }
}
function navigatetothemepage(){
    themepage.style.display = 'block'
    home.style.display = 'none'
    clearpage = true
}
function navigatetowallpaperpage(){
    themepage.style.display = 'none'
    wallpaperpage.style.display = 'grid'
    clearpage = true
}
function backtothemepage() {
    themepage.style.display = 'block'
    wallpaperpage.style.display = 'none'
    fontspage.style.display = 'none'
}
function wallpaperpicture(message) {
    let getimage= message.getAttribute('src')
    settingBackground = `url(${getimage})`
    wallpaperquestion.style.display = 'grid'
}
function lockscreen() {
    cover.style.backgroundImage = `${settingBackground}`
    wallpaperquestion.style.display = 'none'
    passwordpage.style.backgroundImage = `${settingBackground}`
}
function homescreen() {
    home.style.backgroundImage = `${settingBackground}`
    wallpaperquestion.style.display = 'none'
}
function font(message) {
    let fonts = message.style.fontFamily
    dom.style.fontFamily = fonts
}
function navigatetofontspage() {
    fontspage.style.display = 'block'
    themepage.style.display = 'none'
    clearpage = true
}
function tohome() {
    if (clearpage) {
        home.style.display = 'none'
        settingsloading.style.display = 'none'
        settings.style.display = 'none'
        systempage.style.display = 'none'
        aboutphone.style.display = 'none'
        setpassword.style.display = 'none'
        securitypage.style.display = 'none'
        music.style.display = 'none'
        themepage.style.display='none'
        wallpaperpage.style.display = 'none'
        fontspage.style.display = 'none'
        clearpage=false
    }
    if (!clearpage) {
        home.style.display = 'block'
    }
}