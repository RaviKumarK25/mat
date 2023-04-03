const any = [{ value: "Any", label: "Any" }];
const bachelorsEngineering = [
  { value: "Aeronautical Engineering", label: "Aeronautical Engineering" },
  { value: "B.Arch", label: "B.Arch" },
  { value: "BCA", label: "BCA" },
  { value: "BE", label: "BE" },
  { value: "B.Plan", label: "B.Plan" },
  { value: "B.Sc IT/ Computer Science", label: "B.Sc IT/ Computer Science" },
  { value: "B.Tech", label: "B.Tech" },
  {
    value: "Other Bachelor Degree in Engineering / Computers",
    label: "Other Bachelor Degree in Engineering / Computers",
  },
  { value: "B.S.(Engineering)", label: "B.S.(Engineering)" },
];

const mastersEngineering = [
  { value: "M.Arch", label: "M.Arch" },
  { value: "MCA", label: "MCA" },
  { value: "ME", label: "ME" },
  {
    value: "M.Sc. IT / Computer Science",
    label: "M.Sc. IT / Computer Science",
  },
  { value: "M.S.(Engg.)", label: "M.S.(Engg.)" },
  { value: "M.Tech", label: "M.Tech" },
  { value: "PGDCA", label: "PGDCA" },
  {
    value: "Other Masters Degree in Engineering / Computers",
    label: "Other Masters Degree in Engineering / Computers",
  },
];

const bachelorsArts = [
  { value: "Aviation Degree", label: "Aviation Degree" },
  { value: "B.A", label: "B.A" },
  { value: "B.Com", label: "B.Com" },
  { value: "B.Ed", label: "B.Ed" },
  { value: "BFA", label: "BFA" },
  { value: "BFT", label: "BFT" },
  { value: "BLIS", label: "BLIS" },
  { value: "B.M.M", label: "B.M.M" },
  { value: "B.Sc", label: "B.Sc" },
  { value: "B.S.W", label: "B.S.W" },
  { value: "B.Phil", label: "B.Phil" },
  {
    value: "Other Bachelor Degree in Arts / Science / Commerce",
    label: "Other Bachelor Degree in Arts / Science / Commerce",
  },
];

const mastersArts = [
  { value: "M.A", label: "M.A" },
  { value: "MCom", label: "MCom" },
  { value: "M.Ed", label: "M.Ed" },
  { value: "MFA", label: "MFA" },
  { value: "MLIS", label: "MLIS" },
  { value: "M.Sc", label: "M.Sc" },
  { value: "MSW", label: "MSW" },
  { value: "M.Phil", label: "M.Phil" },
  {
    value: "Other Master Degree in Arts / Science / Commerce",
    label: "Other Master Degree in Arts / Science / Commerce",
  },
];
const bachelorsManagement = [
  { value: "BBA", label: "BBA" },
  { value: "BFM", label: "BFM" },
  { value: "BHM", label: "BHM" },
  {
    value: "Other Bachelor Degree in Management",
    label: "Other Bachelor Degree in Management",
  },
  {
    value: "BHA / BHM (Hospital Administration)",
    label: "BHA / BHM (Hospital Administration)",
  },
];
const mastersManagement = [
  { value: "MBA", label: "MBA" },
  { value: "MFM (Financial Management)", label: "MFM (Financial Management)" },
  { value: "MHM  (Hotel Management)", label: "MHM  (Hotel Management)" },
  {
    value: "MHRM (Human Resource Management)",
    label: "MHRM (Human Resource Management)",
  },
  { value: "PGDM", label: "PGDM" },
  {
    value: "Other Master Degree in Management",
    label: "Other Master Degree in Management",
  },
  {
    value: "MHA / MHM (Hospital Administration)",
    label: "MHA / MHM (Hospital Administration)",
  },
];
const bachelorsMedicine = [
  { value: "B.A.M.S", label: "B.A.M.S" },
  { value: "BDS", label: "BDS" },
  { value: "BHMS", label: "BHMS" },
  { value: "BSMS", label: "BSMS" },
  { value: "BUMS", label: "BUMS" },
  { value: "BVSc", label: "BVSc" },
  { value: "MBBS", label: "MBBS" },
];
const mastersMedicine = [
  { value: "MDS", label: "MDS" },
  { value: "MD / MS (Medical)", label: "MD / MS (Medical)" },
  { value: "MVSc", label: "MVSc" },
  { value: "MCh", label: "MCh" },
  { value: "DNB", label: "DNB" },
];
const bachelorsMedicineOthers = [
  { value: "BPharm", label: "BPharm" },
  { value: "BPT", label: "BPT" },
  { value: "B.Sc. Nursing", label: "B.Sc. Nursing" },
  {
    value: "Other Bachelor Degree in Medicine",
    label: "Other Bachelor Degree in Medicine",
  },
];
const mastersMedicineOthers = [
  { value: "M.Pharm", label: "M.Pharm" },
  { value: "MPT", label: "MPT" },
  {
    value: "Other Master Degree in Medicine",
    label: "Other Master Degree in Medicine",
  },
];
const bachelorsLegal = [
  { value: "BGL", label: "BGL" },
  { value: "B.L", label: "B.L" },
  { value: "LLB", label: "LLB" },
  {
    value: "Other Bachelor Degree in Legal",
    label: "Other Bachelor Degree in Legal",
  },
];
const mastersLegal = [
  { value: "LLM", label: "LLM" },
  { value: "M.L", label: "M.L" },
  {
    value: "Other Master Degree in  Legal",
    label: "Other Master Degree in  Legal",
  },
];
const financeCa = [
  { value: "CA", label: "CA" },
  {
    value: "CFA (Chartered Financial Analyst)",
    label: "CFA (Chartered Financial Analyst)",
  },
  { value: "CS", label: "CS" },
  { value: "ICWA", label: "ICWA" },
  { value: "Other Degree in Finance", label: "Other Degree in Finance" },
];
const serviceIas = [
  { value: "IAS", label: "IAS" },
  { value: "IES", label: "IES" },
  { value: "IFS", label: "IFS" },
  { value: "IRS", label: "IRS" },
  { value: "IPS", label: "IPS" },
  { value: "Other Degree in Service", label: "Other Degree in Service" },
];
const doctorates = [
  { value: "Ph.D", label: "Ph.D" },
  { value: "DM", label: "DM" },
  { value: "Postdoctoral fellow", label: "Postdoctoral fellow" },
  {
    value: "Fellow of National Board (FNB)",
    label: "Fellow of National Board (FNB)",
  },
];
const diploma = [
  { value: "Diploma", label: "Diploma" },
  { value: "Polytechnic", label: "Polytechnic" },
  { value: "Trade School", label: "Trade School" },
  { value: "Others", label: "Others" },
];
const higherSecondary = [
  {
    value: "Higher Secondary School / High School",
    label: "Higher Secondary School / High School",
  },
];

export const groupedOptions = [
  {
    label: "Bachelors - Engineering / Computers / Others",
    options: bachelorsEngineering,
  },
  {
    label: "Masters - Engineering / Computers / Others",
    options: mastersEngineering,
  },
  {
    label: "Bachelors - Arts / Science / Commerce / Others",
    options: bachelorsArts,
  },
  {
    label: "Masters - Arts / Science / Commerce / Others",
    options: mastersArts,
  },
  {
    label: "Bachelors - Management / Others",
    options: bachelorsManagement,
  },
  {
    label: "Masters - Management / Others",
    options: mastersManagement,
  },
  {
    label: "Bachelors - Medicine - General / Dental / Surgeon",
    options: bachelorsMedicine,
  },
  {
    label: "Masters - Medicine - General / Dental / Surgeon",
    options: mastersMedicine,
  },
  {
    label: "Bachelors - Medicine - Others",
    options: bachelorsMedicineOthers,
  },
  {
    label: "Masters - Medicine - Others",
    options: mastersMedicineOthers,
  },
  {
    label: "Bachelors - Legal / Others",
    options: bachelorsLegal,
  },
  {
    label: "Masters - Legal / Others",
    options: mastersLegal,
  },
  {
    label: "Finance - ICWAI / CA / CS/ CFA / Others",
    options: financeCa,
  },
  {
    label: "Service - IAS / IPS / IRS / IES / IFS / Others",
    options: serviceIas,
  },
  {
    label: "Doctorates",
    options: doctorates,
  },
  {
    label: "Diploma / Others",
    options: diploma,
  },
  {
    label: "Higher Secondary / Secondary",
    options: higherSecondary,
  },
  {
    label: "Any",
    options: any,
  },
];
