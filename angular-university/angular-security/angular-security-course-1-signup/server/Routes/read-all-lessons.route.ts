import {db} from "../Controller/database";

export function readAllLessons(req, res) {
    return res.status(200).json(db.readAllLessons());
}