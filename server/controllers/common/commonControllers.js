


   const getHomePage = (req, res) => {
        res.json("Home Page new");
    }

    const getContactPage = (req, res) => {  
        res.json("Contact Page");
    }
    const getAboutPage = (req, res) => {  
        res.json("About Page");
    }   
    const getServicesPage = (req, res) => {  
        res.json("Services Page");
    }
    const getFAQPage = (req, res) => {  
        res.json("FAQ Page");
    }

module.exports = {
    getHomePage,
    getContactPage,
    getAboutPage,
    getServicesPage,
    getFAQPage  
};

