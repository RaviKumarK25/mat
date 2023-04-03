export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    margin: "0px",
    padding: "0px",
    overflow: "auto",
    maxHeight: "60px",
  }),
  input: (provided, state) => ({
    ...provided,
    margin: "0px",
    padding: "0px",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    margin: "0px",
    padding: "0px 0px 0px 6px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  // indicatorsContainer: (provided, state) => ({
  //   ...provided,
  //   height: "38px",
  // }),
};

export const heightFromOptions = [
  { value: "4ft 6in", label: "4ft 6in" },
  { value: "4ft 7in", label: "4ft 7in" },
  { value: "4ft 8in", label: "4ft 8in" },
  { value: "4ft 9in", label: "4ft 9in" },
  { value: "4ft 10in", label: "4ft 10in" },
  { value: "4ft 11in", label: "4ft 11in" },
  { value: "5ft", label: "5ft" },
  { value: "5ft 1in", label: "5ft 1in" },
  { value: "5ft 2in", label: "5ft 2in" },
  { value: "5ft 3in", label: "5ft 3in" },
  { value: "5ft 4in", label: "5ft 4in" },
  { value: "5ft 5in", label: "5ft 5in" },
  { value: "5ft 6in", label: "5ft 6in" },
  { value: "5ft 7in", label: "5ft 7in" },
  { value: "5ft 8in", label: "5ft 8in" },
  { value: "5ft 9in", label: "5ft 9in" },
  { value: "5ft 10in", label: "5ft 10in" },
  { value: "5ft 11in", label: "5ft 11in" },
  { value: "6ft", label: "6ft" },
  { value: "6ft 1in", label: "6ft 1in" },
  { value: "6ft 2in", label: "6ft 2in" },
  { value: "6ft 3in", label: "6ft 3in" },
  { value: "6ft 4in", label: "6ft 4in" },
  { value: "6ft 5in", label: "6ft 5in" },
  { value: "6ft 6in", label: "6ft 6in" },
  { value: "6ft 7in", label: "6ft 7in" },
  { value: "6ft 8in", label: "6ft 8in" },
  { value: "6ft 9in", label: "6ft 9in" },
  { value: "6ft 10in", label: "6ft 10in" },
  { value: "6ft 11in", label: "6ft 11in" },
  { value: "7ft", label: "7ft" },
];

export const weightOptions = [];
obj = {};
for (var i = 35; i <= 150; i++) {
  var obj = {};
  obj["value"] = [i] + " kgs";
  obj["label"] = [i] + " kgs";
  weightOptions.push(obj);
}

export const religionOptions = [
  { value: "Hindu", label: "Hindu" },
  { value: "Muslim", label: "Muslim" },
  { value: "Christian", label: "Christian" },
  { value: "Sikh", label: "Sikh" },
  { value: "Jain", label: "Jain" },
  { value: "Parsi", label: "Parsi" },
  { value: "Buddhist", label: "Buddhist" },
  { value: "Jewish", label: "Jewish" },
  { value: "Inter Religion", label: "Inter Religion" },
];
