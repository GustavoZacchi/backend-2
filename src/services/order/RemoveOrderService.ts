import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

interface OrderRequest {
  order_id: string;
}

class RemoveOrderService {
  async execute({ order_id }: OrderRequest) {
    const existingOrder = await prismaClient.order.findUnique({
      where: { id: order_id },
    });

    if (!existingOrder) {
      throw new Error("Order not found");
    }
    const order = await prismaClient.order.delete({
      where: { id: order_id },
    });

    return order;
  }
}

export { RemoveOrderService };
