import StudentRow from "./StudentRow";

function StudentTable({ students, onScoreChange }) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="panel-kicker">Student Records</p>
          <h2>Score Table</h2>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <StudentRow
                key={student.id}
                index={index + 1}
                student={student}
                onScoreChange={onScoreChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StudentTable;
