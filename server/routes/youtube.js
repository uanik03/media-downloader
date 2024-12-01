import { Router } from "express";
import { audioDownload, videoDownload } from "../controllers/youtube.js";

const router = Router()

router.route("/download/video").post(videoDownload)
router.route("/download/audio").post(audioDownload)


export default router