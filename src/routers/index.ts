import { Router, Request, Response } from "express";
import * as pageController from "../controllers/pageController";
import * as searchController from "../controllers/searchController";

const  mainRouters = Router();

mainRouters.get("/",pageController.home);
mainRouters.get("/dogs", pageController.dogs);
mainRouters.get("/cats", pageController.cats);
mainRouters.get("/fishes", pageController.fishes);

mainRouters.get("/search", searchController.search);


export default mainRouters;