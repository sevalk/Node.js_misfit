exports.getIndexPage = (req, res) => {
    
    res.status(200).render('index', {
        page_name: "index"
    });
}
exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: "about"
    });
}
exports.getContactPage = (req, res) => {
    res.status(200).render('contact', {
        page_name: "contact"
    });
}
exports.getGalleryPage = (req, res) => {
    res.status(200).render('gallery', {
        page_name: "gallery"
    });
}
exports.getTrainerPage = (req, res) => {
    res.status(200).render('trainer', {
        page_name: "trainer"
    });
}
exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: "register"
    });
}
exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
        page_name: "login"
    });
}