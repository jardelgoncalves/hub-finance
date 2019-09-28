import express from 'express'

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import IncomeController from './controllers/IncomeController'
import ExpenseController from './controllers/ExpenseController'

import AuthMiddleware from './middlewares/Auth'

const routes = express.Router()

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

routes.use(AuthMiddleware)

routes.get('/incomes', IncomeController.index)
routes.get('/incomes/:id', IncomeController.find)
routes.post('/incomes', IncomeController.store)
routes.put('/incomes/:id', IncomeController.update)
routes.delete('/incomes/:id', IncomeController.delete)

routes.get('/expenses', ExpenseController.index)
routes.get('/expenses/:id', ExpenseController.find)
routes.post('/expenses', ExpenseController.store)
routes.put('/expenses/:id', ExpenseController.update)
routes.delete('/expenses/:id', ExpenseController.delete)

export default routes