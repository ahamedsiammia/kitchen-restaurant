export const feedback =[
    {   
        id : 1,
        message:"khabar khobe moja cilo"
    },
    {   
        id : 2,
        message:"waiter der bebohar aro balo kora lagbo"
    }
]

export async function GET(request){
    return Response.json({
        status:200,
        message:"Yahooo.ami api banaiya felci"
    })
}