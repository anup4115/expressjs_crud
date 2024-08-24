import express from 'express'
import EmployeeController from '../controllers/employeeController.js'

const router=express.Router()
router.get('/',EmployeeController.getAllDoc)
router.post('/',EmployeeController.createDoc)
router.get('/edit/:id',EmployeeController.editDoc)
router.post('/update/:id',EmployeeController.updateDoc)
router.post('/delete/:id',EmployeeController.deleteDoc)

export default router