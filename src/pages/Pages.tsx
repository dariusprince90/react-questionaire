import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { usePage } from "../context/usePage";
import { useFormikContext } from "formik";
import { Answers } from "../utils/interfaces";
import { CustomField } from "../components/Field";

export const Pages = () => {
  const { page, totalPage, setPage, questions } = usePage();

  const { values } = useFormikContext<Answers>();

  console.log(values);

  return (
    <>
      <Stepper alternativeLabel activeStep={page} sx={{ marginBottom: 5 }}>
        {Array(totalPage)
          .fill(totalPage)
          .map((_, index) => (
            <Step
              key={index}
              completed={page > index}
              onClick={() => setPage(index)}
            >
              <StepLabel />
            </Step>
          ))}
      </Stepper>

      {questions
        .filter((question) => question.PageNumber === page + 1)
        .map((question) => (
          <Box key={question.Id} sx={{ my: 2 }}>
            <CustomField question={question} />
          </Box>
        ))}
      {page + 1 === totalPage && (
        <Button type="submit" variant="contained">
          Submit
        </Button>
      )}
    </>
  );
};
