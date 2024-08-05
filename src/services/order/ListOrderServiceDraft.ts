import prismaClient from "../../prisma";

class ListOrderServiceDraft {
  async execute() {
    const orders = await prismaClient.order.findMany({
      where: {
        draft: true,
        status: false,
      },
      orderBy: {
        create_at: "desc",
      },
    });
    return orders;
  }
}
export { ListOrderServiceDraft };
