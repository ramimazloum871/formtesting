import React, { useState } from "react";

const FormComponent = () => {
  const data = {
    questions: [
      {
        title: "Wat zijn jouw gegevens?",
        fields: [
          { name: "first_name", label: "Voornaam", type: "text" },
          { name: "last_name", label: "Achternaam", type: "text" },
          { name: "email", label: "E-mail", type: "text" },
          { name: "phone_number", label: "Telefoonnummer", type: "text" },
        ],
      },
      {
        title: "Waar woon je?",
        fields: [
          { name: "street_address", label: "Straatnaam", type: "text" },
          { name: "housenumber", label: "Huisnummer", type: "number" },
          { name: "post_code", label: "Postcode", type: "text" },
          {
            name: "country",
            label: "Land",
            type: "dropdown",
            options: ["Nederland", "Belgie", "Duitsland", "UK"],
          },
        ],
      },
    ],
  };

  const initialFormData = Object({});

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    console.log(formData);
  };

  return (
    <header>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault(e);
            handleSubmit();
          }}
        >
          {Object.values(data).map((questions) =>
            Object.values(questions).map((question, i) => (
              <div key={i}>
                <h2 key={i}>{question.title}</h2>
                {Object.values(question).map((category) =>
                  Object.values(category).map((fields, index) => {
                    if (fields.type === "text" || fields.type === "number") {
                      return (
                        <div key={index}>
                          <h8>{fields.label}</h8>,
                          <input
                            onChange={handleChange}
                            type={fields.type}
                            name={fields.name}
                          ></input>
                        </div>
                      );
                    } else if (fields.type === "dropdown") {
                      return (
                        <div key={index}>
                          <h8>{fields.label}</h8>,
                          <select
                            onChange={handleChange}
                            name="country"
                            label="Land"
                            options={fields.options}
                          >
                            {/* ToDO   I cannot acces the value of option  */}
                            <option value="Nederland">{fields.options}</option>
                            <option value="Belgie">{fields.options}</option>
                            <option value="Duitsland">{fields.options}</option>
                            <option value="UK">{fields.options}</option>
                          </select>
                        </div>
                      );
                    }
                    return "";
                  })
                )}
              </div>
            ))
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </header>
  );
};

export default FormComponent;
