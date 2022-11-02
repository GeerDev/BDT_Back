const Company = require("../models/Company.js");
const axios = require("axios");

const CompanyController = {
  async dbCompanies(req, res) {
    try {
        await Company.deleteMany()
        const response = await axios.get("https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json")
        const { data } = response
        data.forEach(async company => {
            await Company.create(company)
        });
        res.status(201).send("DB companies has been created")
    } catch (error) {
        res.status(500).send("There was a problem creating the company collection")
    }
  }
};

module.exports = CompanyController;