import { Request, Response } from "express";
import { ListOrderServiceDraft } from "../../services/order/ListOrderServiceDraft";

class ListOrderControllerDraft {
  async handle(req: Request, res: Response) {
    const listOrderService = new ListOrderServiceDraft();

    const orders = await listOrderService.execute();

    return res.json(orders);
  }
}
export { ListOrderControllerDraft };
