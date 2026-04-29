import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

const initialStudents = [
  { id: 1, name: "Aarav Sharma", score: 82 },
  { id: 2, name: "Diya Verma", score: 67 },
  { id: 3, name: "Kabir Singh", score: 39 },
  { id: 4, name: "Meera Joshi", score: 91 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const updateStudentScore = (id, value) => {
    const parsedScore = Number(value);
    const nextScore = Number.isNaN(parsedScore)
      ? 0
      : Math.min(100, Math.max(0, parsedScore));

    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id ? { ...student, score: nextScore } : student
      )
    );
  };

  const addStudent = (name, score) => {
    const trimmedName = name.trim();
    const parsedScore = Number(score);

    if (!trimmedName || Number.isNaN(parsedScore)) {
      return false;
    }

    const nextStudent = {
      id: Date.now(),
      name: trimmedName,
      score: Math.min(100, Math.max(0, parsedScore)),
    };

    setStudents((currentStudents) => [...currentStudents, nextStudent]);
    return true;
  };

  const passCount = students.filter((student) => student.score >= 40).length;

  return (
    <div className="app-shell">
      <div className="app-bg app-bg-one" />
      <div className="app-bg app-bg-two" />

      <main className="app-card">
        <Header totalStudents={students.length} passCount={passCount} />

        <section className="content-grid">
          <StudentTable
            students={students}
            onScoreChange={updateStudentScore}
          />
          <AddStudentForm onAddStudent={addStudent} />
        </section>
      </main>
    </div>
  );
}

export default App;
