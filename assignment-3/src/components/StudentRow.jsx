function StudentRow({ index, student, onScoreChange }) {
  const isPassed = student.score >= 40;

  return (
    <tr>
      <td>{index}</td>
      <td>{student.name}</td>
      <td>
        <input
          className="score-input"
          type="number"
          min="0"
          max="100"
          value={student.score}
          onChange={(event) => onScoreChange(student.id, event.target.value)}
        />
      </td>
      <td>
        <span className={isPassed ? "status-badge pass" : "status-badge fail"}>
          {isPassed ? "Pass" : "Fail"}
        </span>
      </td>
    </tr>
  );
}

export default StudentRow;
