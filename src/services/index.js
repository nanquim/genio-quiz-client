const API = process.env.VUE_APP_API

export const GetQuiz = async () => {
    
    //const request = "http://localhost:3000/quiz"
    const request = API
    console.log(API)
    //console.log(request)
    const data = await fetch(`${request}`)
                           .then(res => res.json())
                           .catch(erro => console.error(erro))
        
   
    //console.log(data)
    return data;
}