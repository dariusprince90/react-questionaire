import { DatePicker } from "@mui/x-date-pickers";
import { useFormikContext } from "formik";
import { Answers } from "../utils/interfaces";
import dayjs from "dayjs";

interface Props {
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomDateField = (props: Props) => {
  const { values, setFieldValue } = useFormikContext<Answers>();

  return (
    <DatePicker
      sx={{ width: "100%" }}
      value={dayjs(values[props.name])}
      {...props}
      onChange={(value) =>
        setFieldValue(props.name, value?.format("YYYY-MM-DD"))
      }
    />
  );
};
