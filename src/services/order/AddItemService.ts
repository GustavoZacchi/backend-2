import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
  description: string;
}
class AddItemService {
  async execute({ order_id, product_id, amount, description }: ItemRequest) {
    const order = await prismaClient.item.create({
      data: {
        order_id: order_id,
        product_id: product_id,
        description: description,
        amount,
      },
    });
    return order;
  }
}
export { AddItemService };
