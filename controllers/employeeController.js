import empModel from "../models/Employee.js"

class EmployeeController{
    static getAllDoc=async (req,res)=>{
        try{
            const result=await empModel.find()
            // console.log(result)
            res.render("index",{result})
        }catch(err){
            console.log(err)
        }
    }
    static createDoc = async (req, res) => {
        try{
            const {name,address,salary}=req.body
            const doc=new empModel({
                name:name,
                address:address,
                salary:salary
            })
            const result=await doc.save()
            res.redirect('/');
        }catch(err){
            console.log(err)
        }
    }    
    static editDoc=async (req,res)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result=await empModel.findById(req.params.id)
            res.render('edit',{result:result})
        }catch(err){
            console.log(err)
        }
    }
    static updateDoc=async (req,res)=>{
        try{
            // console.log(req.params.id)
            // console.log(req.body)
            const result=await empModel.findByIdAndUpdate(req.params.id,req.body)
        }catch(err){
            console.log(err)
        }
        res.redirect('/')
    }
    static deleteDoc=async (req,res)=>{
        try{
            const result=await empModel.findByIdAndDelete(req.params.id)
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    }
}
export default EmployeeController