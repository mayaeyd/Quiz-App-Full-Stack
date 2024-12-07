export const getQuizzes = async (req,res)=>{
    try{

        

    }catch(error){
        console.log(error.message);
        return res.status(500).send({
            message:"Server error"
        });
    }
}