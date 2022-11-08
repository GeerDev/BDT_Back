module.exports = {
    paths: {
      "/companies/fillDatabase": {
        get: {
          tags: {
            Endpoint: " : Creation Company Database",
          },
          description: "Create the database with the data obtained from the JSON of all the companies",
          operationId: "fillDatabase",
          responses: {
            201: {
              description: "DB companies has been created",
            },
            500: {
                description: "There was a problem creating the company collection",
            }
          }
        }
      },   
      "/companies/sortBySize":{
        get: {
            tags: {
              Endpoint: " : Companies sorted by size",
            },
            description: "Companies are displayed sorted by size in ascending order",
            operationId: "sortBySize",
            responses: {
              200: {
                content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/companiesSchema",
                      }
                    }
                  }
              },
              500: {
                  description: "There was a problem sorting the companies by size",
              }
            }
          }
      },   
      "/companies/sortByDate":{
        get: {
            tags: {
              Endpoint: " : Companies sorted by date",
            },
            description: "Companies are displayed sorted by date of foundation",
            operationId: "sortByDate",
            responses: {
              200: {
                content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/companiesSchema",
                      }
                    }
                  }
              },
              500: {
                  description: "There was a problem sorting the companies by date",
              }
            }
          }
      },
      "/companies/numberOfCompanies":{
        get: {
            tags: {
              Endpoint: " : Get companies by type",
            },
            description: "Shows the number of companies in each industry, for each size and for each date of creation",
            operationId: "numberOfCompanies",
            responses: {
              200: {
                content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/numberOfCompaniesSchema",
                      }
                    }
                  }
              },
              500: {
                  description: "There was a problem finding the companies by type",
              }
            }
          }
      }
    }
  }