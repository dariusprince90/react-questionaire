import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useField } from "formik";

type Opt = { value: string | number; desc: string };

interface Props {
  options: Opt[];
  name: string;
  label: string;
  [x: string]: any;
}

export const CustomRadioGroup = ({ label, options, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <RadioGroup {...props}>
        {options.map((opt) => (
          <FormControlLabel
            {...field}
            key={opt.value}
            checked={opt.value === field.value}
            value={opt.value}
            control={<Radio />}
            label={opt.desc}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
