import express from "express"
import { addVideo, addView,getVideo, getByTag, random, search, sub, trend, updateVideo, deleteVideo } from "../../controller/video.js";
import { verifyToken } from "../../middleware/verifyToken.js";


const router = express.Router()

router.post("/",verifyToken,addVideo)
router.put("/:id",verifyToken,updateVideo)
router.delete("/:id",verifyToken,deleteVideo)
router.get("/find/:id",getVideo)
router.get("/view/:id",addView)
router.get("/trend",trend)
router.get("/random",random)
router.get("/sub",verifyToken,sub)
router.get("/tags",getByTag)
router.get("/search",search)

export default router;