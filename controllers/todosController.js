const { Todo, User, Notes } = require('../models')
const sendEmail = require('../helpers/nodemailer')

class TodosController {
    static async addTodo (req, res, next) {
        try {
            const { title, content, tag } = req.body
            const payload = req.user // to get User Login

            const todos = await Todo.create(
                { 
                    title,
                    tag,
                    content,
                    UserId: req.user.id
                })
            sendEmail(payload, todos.content, `[ TODOIN - ${todos.tag} #${todos.id}] ${title}`)
            res.status(201).json(todos)
        } catch (error) {
            next(error)
        }
    }

    static async fetchTodo(req, res, next) {
        try {
            const todos = await Todo.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['id', 'name', 'email']
                    }
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                order: [
                    ['updatedAt', 'DESC']
                ]
            })
            res.status(200).json(todos)
        } catch (error) {
            next(error)
        }
    }

    static async editStatus(req, res, next) {
        try {
            const { status } = req.body
            const { id } = req.params
            const payload = req.user // to get User Login 
            
            const todo = await Todo.findByPk(id, { include: { model: User } })

            if (todo) {
                // console.log(todo.User, `Status just updated by ${payload.name}`, `[ TODOIN - ${todo.tag} #${todo.id}] ${todo.title}`)
                const newTodos = await Todo.update(
                    { 
                        status
                    },
                    {
                        where: { id }
                    }
                )
                sendEmail(todo.User, `Status just updated to ${status} by ${todo.User.name}`, `[ TODOIN - ${todo.tag} #${todo.id}] ${todo.title}`)
                res.status(200).json({ message: `Success edit status`})
            } else {
                throw ({ name: `Todo Not Found`})
            }
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params
            const payload = req.user // to get User Login

            const todos = await Todo.findByPk(id, { include: { model: User } })
            sendEmail(todos.User, `Success delete Todo #${todos.id} by ${payload.name}`, `[ TODOIN - ${todos.tag} #${todos.id}] ${todos.title}`)
            
            const todo = await Todo.destroy({
                where: { id }
            })
            
            res.status(200).json({ message : `Todo success to delete`})
        } catch (error) {
            next(error)
        }
    }

    // NOTES
    static async addNotes (req, res, next) {
        try {
            const { content, title } = req.body
            const payload = req.user // to get User Login

            const todos = await Todo.create(
                {   
                    title,
                    content,
                    UserId: req.user.id
                })
            sendEmail(payload, todos.content, `[ TODOIN - NOTES #${todos.id}] ${todos.title}`)
            res.status(201).json(todos)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TodosController