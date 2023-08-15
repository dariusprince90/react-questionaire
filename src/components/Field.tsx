import { Typography } from "@mui/material";
import { Question } from "../utils/interfaces";
import { CustomDateField } from "./CustomDateField";
import { CustomRadioGroup } from "./CustomRadioGroup";
import { CustomTextInput } from "./CustomTextInput";

interface Props {
  question: Question;
}

export const CustomField = ({ question }: Props) => {
  if (question.ControlType === "Label" && question.answers.length)
    return (
      <CustomRadioGroup
        name={String(question.Id)}
        label={question.Text}
        options={question.answers.map((answer) => {
          return {
            value: answer.text,
            desc: answer.text,
          };
        })}
      />
    );
  else if (question.ControlType === "DatePicker")
    return <CustomDateField label={question.Text} name={String(question.Id)} />;
  else if (question.ControlType === "TextBox")
    return <CustomTextInput label={question.Text} name={String(question.Id)} />;
  else
    return (
      <Typography variant="h5" align="center">
        {question.Text}
      </Typography>
    );
};
