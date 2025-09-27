import OrderService from "../services/orderService.js";
class OrderController {
    constructor() {
        this.orderService = new OrderService();

        //Auto-bind methods so they work directly in routes
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req, res) {
        try {
            const orders = await this.orderService.getAll();
            res.json(orders);
        }catch (error) {
            res.status(500).json({ message: "Failed to fetch orders"});
        }
    }

    async getById(req, res) {
        try {
            const order = await this.orderService.getById(req.params.id);
            if (order) res.json(order);
            else res.status(404).json({ message: "Order not found"});
        }
        catch (error) {
            res.status(500).json({ message: "Error retrieving order"});
        }
    }

    async create(req, res) {
        try {
            const { customerName, productName, quantity } = req.body;
            const neworder = await this.orderService.create({ 
                customerName, 
                productName, 
                quantity 
            });
            res.status(201).json(neworder);
        } catch (error) {
            res.status(500).json({ message: "Failed to create order"});
        }
    }

    async update(req, res) {
        try {
            const updated = await this.orderService.update(req.params.id, req.body);
            res.json(updated);
        } catch (error) {
            res.status(404).json({ message: "Order not found"});
        }
    }
    
    async delete(req, res) {
        try {
            await this.orderService.delete(req.params.id);
            res.json({ message: "Order deleted"});
        } catch (error) {
            res.status(404).json({ message: "Order not found"});
        }
    }
}
export default OrderController;