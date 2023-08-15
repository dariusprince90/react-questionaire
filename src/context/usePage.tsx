import { createContext, useContext, useState } from "react";
import { Question, SupportedLanguage } from "../utils/interfaces";

interface IPageContext {
  page: number;
  totalPage: number;
  questions: Question[];
  supportedLanguages: SupportedLanguage[];
  setPage: (page: number) => void;
  setQuestions: (questions: Question[]) => void;
  setSupportedLanguages: (supportedLanguages: SupportedLanguage[]) => void;
}
const PageContext = createContext<IPageContext>({
  page: 0,
  totalPage: 0,
  questions: [],
  supportedLanguages: [],
  setPage: console.log,
  setQuestions: console.log,
  setSupportedLanguages: console.log,
});

interface PageProviderProps {
  children: JSX.Element | JSX.Element[];
}

function PageProvider({ children }: PageProviderProps) {
  const [page, setPage] = useState(0);
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [supportedLanguages, setSupportedLanguages] = useState<
    SupportedLanguage[]
  >([]);
  const [totalPage, setTotalPage] = useState(0);

  const setQuestions = (qustions: Question[]) => {
    setQuestionList(qustions);
    setTotalPage(Math.max(...qustions.map((question) => question.PageNumber)));
  };

  const pageContextValue = {
    page,
    totalPage,
    questions: questionList,
    supportedLanguages,
    setPage,
    setQuestions,
    setSupportedLanguages,
  };

  return (
    <PageContext.Provider value={pageContextValue}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  return useContext(PageContext);
}

export default PageProvider;
