export interface InputProps {
  type: "text" | "radio-group" | "select" | "checkbox" | "date-picker";
  name: string;
  value: string | number | boolean;
  placeholder?: string;
  typeValue?: "string" | "boolean";
  label?: string;
  options?: Opt[];
}

export interface Opt {
  value: string | number;
  desc: string;
}

export type Question = {
  Id: number;
  ControlType: "Label" | "TextBox" | "DatePicker";
  Text: string;
  PageNumber: number;
  answers: { id: number; text: string; answerType: string }[];
};

export type SupportedLanguage = {
  languageCode: string;
  languageDescription: string;
  defaultLanguage: boolean;
};

export type Answers = {
  [key: string]: string | number;
};
