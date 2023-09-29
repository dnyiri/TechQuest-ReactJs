// App.js
import React from 'react';
import PropTypes from 'prop-types';

const languages = [
  'JavaScript',
  'Python',
  'Java',
  'Elm',
  'TypeScript',
  'C#',
  'F#'
];

// Stateless Functional Component as a one-liner
const Language = ({ language }) => <li>{language}</li>;

// Prop type validation for Language component
Language.propTypes = {
  language: PropTypes.string.isRequired,
};

// Stateless Functional Component for a list of languages
const LanguagesList = ({ languages }) => (
  <ul>
    {languages.map((language, index) => (
      <Language key={index} language={language} />
    ))}
  </ul>
);

// Prop type validation for LanguagesList component
LanguagesList.propTypes = {
  languages: PropTypes.array.isRequired,
};

// Stateless Functional Component for a language section
const LanguageSection = ({ header, languages }) => {
  // Example: You can perform data manipulations here
  const formattedLanguages = languages.map((language) => language.toUpperCase());

  return (
    <fieldset>
      <legend>{header}</legend>
      <LanguagesList languages={formattedLanguages} />
    </fieldset>
  );
};

// Prop type validation for LanguageSection component
LanguageSection.propTypes = {
  header: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
};

export default function App() {
  return (
    <div>
      <h1>Language List</h1>
      <LanguageSection header="Languages" languages={languages} />
    </div>
  );
}
