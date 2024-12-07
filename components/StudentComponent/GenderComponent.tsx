import { FormControlLabel, Checkbox } from "@mui/material";
import { useFormContext } from "react-hook-form";

const GenderField = () => {
  const { register, setValue, watch } = useFormContext();
  const selectedGenders = watch("personalInformation.gender") || [];

  const handleGenderChange = (value: string) => {
    const updatedGenders = selectedGenders.includes(value)
      ? selectedGenders.filter((gender: string) => gender !== value)
      : [value];
    setValue("personalInformation.gender", updatedGenders);
  };

  return (
    <div className="flex flex-col gap-[0.4375rem]">
      <label
        htmlFor="gender"
        className="text-sm text-[var(--primary-text-color)]"
      >
        Gender*
      </label>
      <div className="w-full flex items-center text-sm text-[var(--primary-text-color)]">
        {/* -------- Male -------- */}
        <FormControlLabel
          disableTypography
          control={
            <Checkbox
              className="text-[#D0D5DD]"
              value="Male"
              checked={selectedGenders.includes("Male")}
              onChange={() => handleGenderChange("Male")}
            />
          }
          label="Male"
        />
        {/* -------- Female -------- */}
        <FormControlLabel
          disableTypography
          control={
            <Checkbox
              className="text-[#D0D5DD]"
              value="Female"
              checked={selectedGenders.includes("Female")}
              onChange={() => handleGenderChange("Female")}
            />
          }
          label="Female"
        />
      </div>
    </div>
  );
};

export default GenderField;