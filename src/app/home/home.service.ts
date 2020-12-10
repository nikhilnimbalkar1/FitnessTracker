import { Injectable } from "@angular/core";

@Injectable()
export class HomeService{

    trainerApplications:{}[] = [];

    addTrainerApplication(application:{}){
        this.trainerApplications.push(application);
    }

    getTrainerApplications(){
        return this.trainerApplications;
    }

}