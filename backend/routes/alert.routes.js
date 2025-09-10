import { Router } from "express";
import { checkWeatherAlert } from "../services/alert.services";

const alertRouter = Router();

alertRouter.get("/", async (req, res) => {
    const { location } = req.query;

    const getAlertDetails = await checkWeatherAlert(location);

     if (getAlertDetails.isAlert) {
        console.log("Alert found! Triggering SMS notification...");
        sendSmsAlert(getAlertDetails.alert);
    }

    res.json({ isAlert: getAlertDetails.isAlert, alertMessage: getAlertDetails.alert });
})

export default alertRouter;