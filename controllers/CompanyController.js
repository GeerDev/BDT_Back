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
  async sortByDate(req, res) {
    try {
        const totalCompanies = await Company.find()
        const filteredCompanies = totalCompanies.filter(element => element.founded !== null)
        const orderByDate = filteredCompanies.sort((a,b) => a.founded - b.founded)
        const companiesWithoutDate = totalCompanies.filter(element => element.founded === null)
        res.status(200).send({orderByDate, companiesWithoutDate})
    } catch (error) {
        res.status(500).send("There was a problem sorting the companies by date")
    }
  },
  async numberOfCompanies(req, res) {
    try {
        const totalCompanies = await Company.find()
        const numberOfTypes = async (parametro) => {
            const different = await Company.distinct(parametro)
            const typeCompany = different.map(element => {
                const type = totalCompanies.filter(ele => ele[parametro] === element)
                return {[element]:type.length}
            }).reduce((acumulator, current) => {
                return { ...acumulator, ...current }
            }, {})
            return typeCompany
        }
        const numberSize = await numberOfTypes("size")
        const numberIndustry = await numberOfTypes("industry")
        const numberFounded = await numberOfTypes("founded")
        
        res.status(200).send({numberSize, numberIndustry, numberFounded})
    } catch (error) {
        res.status(500).send("There was a problem finding the companies by type")
    }
  },
};

module.exports = CompanyController;