module.exports = {
    paths: {
      "/companies/fillDatabase": {
        get: {
          tags: {
            Functionality: " : Creation Company Database",
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
        
      },   
      "/companies/sortByDate":{

      },
      "/companies/numberOfCompanies":{

      }
    }
  }