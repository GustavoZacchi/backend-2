import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import DetailUserController from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { ListOrderControllerDraft } from "./controllers/order/ListOrderControllerDraft";
const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//Rotas User
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/userinfo", isAuthenticated, new DetailUserController().handle);

//Rotas Category
router.post("/categ", isAuthenticated, new CreateCategoryController().handle);
router.get("/catlist", isAuthenticated, new ListCategoryController().handle);

//Rotas Product
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.get(
  "/list/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

//Rotas order
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
router.post("/order/add", isAuthenticated, new AddItemController().handle);
router.delete(
  "/order/delete",
  isAuthenticated,
  new RemoveItemController().handle
);

router.put("/order/update", isAuthenticated, new SendOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrderController().handle);
router.get(
  "/orders/draft",
  isAuthenticated,
  new ListOrderControllerDraft().handle
);
router.get(
  "/order/detail",
  isAuthenticated,
  new DetailOrderController().handle
);
router.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);
export { router };
