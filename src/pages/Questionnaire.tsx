import { usePage } from "../context/usePage";
import { Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { Pages } from "./Pages";
import { CircularProgress, Container, Typography } from "@mui/material";
import { Answers } from "../utils/interfaces";

export const Questionnaire = () => {
  const { questions, setQuestions, setSupportedLanguages } = usePage();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((res) => {
        setQuestions(res.questions);
        setSupportedLanguages(res.SupportedLanguages);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const initialValues = useMemo(() => {
    const result = questions.reduce<Answers>((acc, question) => {
      acc[String(question.Id)] = "";
      return acc;
    }, {});
    return result;
  }, [questions]);

  if (error)
    return (
      <Typography>
        {"You got an error when fetching data from server"}
      </Typography>
    );

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" sx={{ my: 2 }}>
        React Questionnaire
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Formik
          validateOnChange={false}
          initialValues={initialValues}
          onSubmit={(values) => console.log("onSubmit :->", values)}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Pages />
            </form>
          )}
        </Formik>
      )}
    </Container>
  );
};
