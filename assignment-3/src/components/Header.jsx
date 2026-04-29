function Header({ totalStudents, passCount }) {
  return (
    <header className="hero">
      <div>
        <p className="eyebrow">Web Dev II Assignment 3</p>
        <h1>Student Scoreboard</h1>
        <p className="hero-copy">
          Track student marks, update scores instantly, and monitor pass or
          fail status with reusable React components.
        </p>
      </div>

      <div className="hero-stats">
        <article className="stat-card">
          <span>Total Students</span>
          <strong>{totalStudents}</strong>
        </article>
        <article className="stat-card">
          <span>Passed</span>
          <strong>{passCount}</strong>
        </article>
      </div>
    </header>
  );
}

export default Header;
