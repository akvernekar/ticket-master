const express= require('express')
const router=express.Router()
const customerscontroller=require('../app/controllers/customerscontroller')
const departmentscontroller=require('../app/controllers/departmentscontroller')
const ticketscontroller=require('../app/controllers/ticketscontroller')
const employeescontroller=require('../app/controllers/employeescontroller')
const usercontroller=require('../app/controllers/usercontroller')
const {authenticateUser}=require('../app/middlewares/authentication')

router.get('/customers',authenticateUser,customerscontroller.list)
router.post('/customers',authenticateUser,customerscontroller.create)
router.get('/customers/:id',authenticateUser,customerscontroller.show)
router.put('/customers/:id',authenticateUser,customerscontroller.update)
router.delete('/customers/:id',authenticateUser,customerscontroller.remove)

router.get('/departments',authenticateUser,departmentscontroller.list )
router.post('/departments',authenticateUser,departmentscontroller.create)
router.get('/departments/:id',authenticateUser,departmentscontroller.show)
router.put('/departments/:id',authenticateUser,departmentscontroller.update)
router.delete('/departments/:id',authenticateUser,departmentscontroller.remove)

router.get('/tickets',authenticateUser,ticketscontroller.list)
router.post('/tickets',authenticateUser,ticketscontroller.create)
router.get('/tickets/:id',authenticateUser,ticketscontroller.show)
router.put('/tickets/:id',authenticateUser,ticketscontroller.update)
router.delete('/tickets/:id',authenticateUser,ticketscontroller.remove)

router.get('/employees',authenticateUser,employeescontroller.list)
router.post('/employees',authenticateUser,employeescontroller.create)
router.get('/employees/:id',authenticateUser,employeescontroller.show)
router.put('/employees/:id',authenticateUser,employeescontroller.update)
router.delete('/employees/:id',authenticateUser,employeescontroller.remove)

router.post('/users/register',usercontroller.create)
router.post('/users/login',usercontroller.login)
router.get('/users/account',authenticateUser,usercontroller.show)
router.delete('/users/logout',authenticateUser,usercontroller.remove)




module.exports=router