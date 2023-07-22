
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqs = [
    {
        question: "Discrete Structures",
        answer:
          "A study of propositional logic, set theory, functions, algorithms, divisibility, introductory number theory, elementary proof techniques, counting techniques, recursive definitions, mathematical induction, and graph theory.",
    },
    {
        question: "Stats for Experimentalists",
        answer:
          "An applied statistics course for those with calculus preparation. Descriptive statistics, probability theory, discrete and continuous random variables, and methods of inferential statistics including interval estimation, hypothesis testing, and regression.",
    },
    {
      question: "Calculus III",
      answer:
        "A treatment of multivariable calculus and the calculus of vector fields. Topics include: vectors and vector-valued functions, partial derivatives, multiple integration, curl and divergence, line integrals, Green’s theorem, Stokes’ theorem, and the Divergence theorem. ",
    },
    {
      question: "Calculus II",
      answer:
        "A continuation of Calc I. Topics covered are: techniques of integration, applications of the integral, improper integrals, sequences and infinite series with an introduction to convergence tests, parametric equations, and polar coordinates.",
    },
    {
      question: "Calculus I",
      answer:
        "An introduction to calculus for engineering, science and mathematics students, with an emphasis on conceptual understanding, problem solving, and modeling. Topics covered include: limits, continuity, derivatives of algebraic, trigonometric, and transcendental functions, applications of the derivative including optimization problems and linear approximations, antiderivatives, introduction to the definite integral, and the Fundamental Theorem of Calculus. ",
    },
  ];

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          faq={faq}
        />
      ))}
    </ul>
  );
};

export default Accordion;