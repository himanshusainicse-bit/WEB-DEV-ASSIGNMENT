import { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const wasAdded = onAddStudent(name, score);

    if (!wasAdded) {
      setMessage("Please enter a valid student name and score.");
      return;
    }

    setName("");
    setScore("");
    setMessage("Student added successfully.");
  };

  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="panel-kicker">New Entry</p>
          <h2>Add Student</h2>
        </div>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>
        <label>
          Student Name
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Score
          <input
            type="number"
            min="0"
            max="100"
            placeholder="Enter score"
            value={score}
            onChange={(event) => setScore(event.target.value)}
          />
        </label>

        <button type="submit">Add Student</button>

        {message ? <p className="form-message">{message}</p> : null}
      </form>
    </section>
  );
}

export default AddStudentForm;
