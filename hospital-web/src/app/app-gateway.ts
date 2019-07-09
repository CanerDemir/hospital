
export const AppGateway = {
    api: "http://localhost:8090/"
};

export const PatientApi = {
    getPatient: AppGateway.api + "patient/getPatient/",
    getPatientList: AppGateway.api + "patient/getPatientList",
    savePatient: AppGateway.api + "patient/savePatient"
};

export const DrugApi = {
    getDrug: AppGateway.api + "drug/getDrug/",
    getDrugList: AppGateway.api + "drug/getDrugList",
    saveDrug: AppGateway.api + "drug/saveDrug"
};

export const DiseaseApi = {
    getDisease: AppGateway.api + "disease/getDisease/",
    getDiseaseList: AppGateway.api + "disease/getDiseaseList",
    saveDisease: AppGateway.api + "disease/saveDisease"
};

export const DoctorApi = {
    getDoctor: AppGateway.api + "doctor/getDoctor/",
    getDoctorList: AppGateway.api + "doctor/getDoctors",
    saveDoctor: AppGateway.api + "doctor/saveDoctor"
};