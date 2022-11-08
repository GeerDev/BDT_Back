module.exports = {
    components:{
        schemas:{
            companiesSchema:{
                type:'array',
                items:{
                    type:'object',
                    properties:{
                        _id:{
                            type:'ObjectId',
                            description:"Unique identifier of the company stored in the database",
                            example:"6368371c5a4d70807ae8ddc6"
                        },
                        id:{
                            type:'String',
                            description:"Unique identifier of the company",
                            example:"akgbudapest"
                        },
                        website:{
                            type:"String",
                            description:"Company website",
                            example:"akg.hu"
                        },
                        name:{
                            type:'String',
                            description:"Name of the company",
                            example:"alternatív közgazdasági gimnázium"
                        },
                        founded:{
                            type:'Number',
                            description:"Year the company was created",
                            example: 1988
                        },
                        size:{
                            type:"String",
                            description:"Company size",
                            example: "51-200"
                        },
                        locality:{
                            type:"String",
                            description:"Company location",
                            example:"budapest"
                        },
                        region:{
                            type:"String",
                            description:"Company region",
                            example:"budapest"
                        },
                        country:{
                            type:"String",
                            description:"Country of company",
                            example:"hungary"
                        },
                        industry:{
                            type:"String",
                            description:"Company type",
                            example:"education management"
                        },
                        linkedin_url:{
                            type:"String",
                            description:"Company linkedin link",
                            example:"linkedin.com/company/akgbudapest"
                        },
                        createdAt:{
                            type:"String",
                            description:"Creation date",
                            example:"2022-11-06T22:37:16.571Z"
                        },
                        updatedAt:{
                            type:"String",
                            description:"Update date",
                            example:"2022-11-06T22:37:16.571Z"
                        },
                        __v:{
                            type:"String",
                            description:"Set property of the document when it is first created",
                            example: 0
                        }
                    }
                }           
            },
            numberOfCompaniesSchema:{
                type:'object',
                properties:{
                        numberSize:{
                            type:'object',
                            description:"Number of companies by size",
                            example:"1-10: 305,10001+: 3,1001-5000: 14,11-50: 160, ..."
                        },
                        numberIndustry:{
                            type:'object',
                            description:"Number of companies by type of industry",
                            example:"null: 31,accounting: 11,airlines/aviation: 3,animation: 1, ..."
                        },
                        numberFounded:{
                            type:"object",
                            description:"Number of companies by year of creation",
                            example:"1792: 1,1887: 1,1903: 1,1911: 1,1918: 1, ..."
                        }
                }           
            }
        }
    }
}