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
  },
  async sortBySize(req, res) {
    try {
        const count = await Company.count({size: "10001+"})
        const totalCompanies = await Company.find()
        const orderedCompanies = totalCompanies.sort((a,b) => {
            const first = a.size
            const second = b.size
            return first.substring(0, first.indexOf('-')) - second.substring(0, second.indexOf('-'))
        })
        const bigCompanies = orderedCompanies.splice(0, count)
        const orderBySize = [...orderedCompanies, ...bigCompanies]
        res.status(200).send(orderBySize)
    } catch (error) {
        res.status(500).send("There was a problem sorting the companies by size")
    }
  },
};

module.exports = CompanyController;