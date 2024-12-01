import ytdl from "ytdl-core";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

export const videoDownload = async (req, res) => {
  try {
    const { link } = req.body;

    if (!ytdl.validateURL(link)) {
      return res.status(400).json({
        msg: "invalid link",
      });
    }

    const basicInfo = await ytdl.getBasicInfo(link);
    const title = basicInfo?.player_response?.videoDetails?.title;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const options = {
      quality: "highestvideo", // Select the highest quality
      filter: "videoandaudio", // We want video and audio
    };
    const videoPath = path.join(__dirname, "../videos", `${title}.mp4`);
    console.log(videoPath);
    const vidStream = fs.createWriteStream(videoPath);
    ytdl(link, options).pipe(res);

    // vidStream.on("finish", () => {
    //   res.sendFile(videoPath, (err) => {
    //     if (err) console.error("Error sending file:", err);
    //     fs.unlinkSync(videoPath);
    //   });
    // });
  } catch (error) {
    console.log(error);
    res.status(500).send("alo");
  }
};

export const audioDownload = async (req, res) => {};
