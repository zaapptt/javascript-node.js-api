import db from "../config/prisma.js";

class orderService {
    async getAll() {
        return db.order.findMany();
    }

    async getById(id) {
        return db.order.findUnique({
            where: { id: parseInt(id) },
        });
    }

    async create(data) {
        return db.order.create({data,});
    }

    async update(id, data) {
        return db.order.update({
            where: { id: parseInt(id) },
            data,
        });
    }

    async delete(id) {
        return db.order.delete({
            where: { id: parseInt(id) },
        });
    }
}

export default orderService;