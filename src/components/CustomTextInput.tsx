import { TextField } from "@mui/material";
import { useField } from "formik";

interface Props {
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomTextInput = (props: Props) => {
  const [field] = useField(props);

  return <TextField {...field} {...props} fullWidth />;
};
