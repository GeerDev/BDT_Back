module.exports = {
    components:{
        schemas:{
            companySchema:{
                type:'object',
                properties:{
                    _id:{
                        type:'ObjectId',
                        description:"Número identificación del post",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    id:{
                        type:'String',
                        description:"Título del post",
                        example:"Titulo post"
                    },
                    website:{
                        type:"String",
                        description:"Descripción del post",
                        example:"Descripción post"
                    },
                    name:{
                        type:'String',
                        description:"Imagen del post",
                        example:"Path de la imagen del post"
                    },
                    founded:{
                        type:'Number',
                        description:"Usuario que ha hecho el post",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    size:{
                        type:"String",
                        description:"Comentarios dentro del post, es un array de objetos",
                        example:"userId, comment, image, likes"
                    },
                    locality:{
                        type:"String",
                        description:"Likes que tiene tu post",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    region:{
                        type:"String",
                        description:"Comentarios dentro del post, es un array de objetos",
                        example:"userId, comment, image, likes"
                    },
                    country:{
                        type:"String",
                        description:"Comentarios dentro del post, es un array de objetos",
                        example:"userId, comment, image, likes"
                    },
                    industry:{
                        type:"String",
                        description:"Comentarios dentro del post, es un array de objetos",
                        example:"userId, comment, image, likes"
                    },
                    linkedin_url:{
                        type:"String",
                        description:"Comentarios dentro del post, es un array de objetos",
                        example:"userId, comment, image, likes"
                    }
                }
            }
        }
    }
}