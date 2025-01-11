
var express = require('express');
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
app.use('')
//Middleware to parse JSON data  
const {v4: uuidv4} = require('uuid')//to generate id automatically in the backend
const cors=require('cors')

//Connecting mongodb database

mongoose.connect("mongodb+srv://vainavi:vainavi@cluster0.z7d3z.mongodb.net/").then(()=>{
    console.log("Connected to database")
})

//creation of schema design 
const expenseSchema = new mongoose.Schema({
    id:{type:String,required:true,unique:true}, 
    title:{type:String,required:true},//required true means this field is must
    amount:{type:Number,required:true},//title and amount is must needed fields
})

const Expenses = mongoose.model("Expenses",expenseSchema)


app.get("/api/expenses", async (req,res)=>{
    try{
    const expenses = await Expenses.find()
        res.status(200).json(expenses) 
    }catch(error){
        res.status(500).json({message:"Failed to fetch expenses"})
    }
})

app.get("/api/expenses/:id",async (req,res)=>{
    try{
    const {id} = req.params
    const expense = await Expenses.findOne({id})
    if(!expense){
        return res.status(404).json({message:"Expense not found"})
    }
    res.status(200).json(expense)
    }
    catch(error){
        res.status(500).json({message:"Error in fetching expenses"})
    }
})

app.post("/api/expenses",async (req,res)=>{
    //console.log(req.body)
    const {title,amount} = req.body//can be destructured like this
    //console.log(title)//can be destructured and displayed separately
    try{
    const newExpense = new Expenses({
        id:uuidv4(),
        //uuidv4 will be unique and no duplicate id will be generated
        title:title,//title alone can be provided if the key and value are same in the object by means name and case then the key alone can be given
        amount:amount//amount alone can be provided if the key and value are same in the object
    })
    //console.log(newExpense)//to check the uuid generated 
    const savedExpense = await newExpense.save()
    res.status(200).json(savedExpense)
} catch(err){
    res.status(500).json({message:"Error in creating expense"})
}
})

app.put("/api/expenses/:id",async(req,res)=>{
    try{
        const {id} = req.params
        const {title,amount} = req.body
        const updatedExpense = await Expenses.findOneAndUpdate({id},{title:title,amount:amount})
        if(!updatedExpense){
            return res.status(404).json({message:"Expense not found"})
        }
        res.status(200).json(updatedExpense)
    }
    catch(error){
        res.status(500).json({message:"Error in updating expense"})
    }         
})
app.delete("/api/expenses/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedExpense = await Expenses.findOneAndDelete({ id }); // Corrected to use _id instead of id
        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error in deleting expense" });
    }
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})