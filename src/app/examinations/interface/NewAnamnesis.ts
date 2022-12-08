import { NewPrescription } from "./NewPrescription";

export interface NewAnamnesis {
    appointmentId: number;
    description: string;
    prescriptions: NewPrescription[];
    symptoms: number[];
}